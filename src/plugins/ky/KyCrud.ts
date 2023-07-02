import ky, { Options } from 'ky'
import { Input } from 'ky/distribution/types/options';
import { ref } from 'vue';

const prefixUrl = 'http://localhost:8000/api/';


const kyBase = ky.extend({
    prefixUrl,
    headers: {
        Accept: 'application/json'
    }
});

export class KyCrud {
    path: string = '';
    loading = ref(false);
    errors: any = ref(null);
    data: any = ref(null);
    api = this.kyInstance();

    constructor(path: string = "") {
        if (path)
            this.path = path[path.length - 1] == "/" ? path : path + "/";
    }


    kyInstance() {

        return kyBase.extend({
            hooks: {
                beforeRequest: [
                    (request, options) => {
                        this.loading.value = true;
                        this.errors.value = null;
                        this.data.value = null;
                    }
                ],
                beforeRetry: [

                ],
                afterResponse: [
                    (request, options, response) => {
                        this.loading.value = false;
                    },
                ],
            },
            onDownloadProgress: (progress, chunk) => {
                // console.log(`${progress.percent * 100}% - ${progress.transferredBytes} of ${progress.totalBytes} bytes`);
            },
        });
    }

    async post(endpoint: Input = '', options?: Options | undefined) {
        this.path += endpoint + "/";
        try {
            this.data.value = await this.api.post(this.path, options).json();
            return this.data;
        } catch (e) {
            this.loading.value = false;
            if ((e as any).response) {
                const errorMessage = await (e as any).response.json();
                this.errors.value = errorMessage;
            }
        }
    }

    async get(endpoint: Input = '', options?: Options | undefined) {
        this.path += endpoint + "/";
        try {
            this.data.value = await this.api(this.path, options).json();
            return this.data;
        } catch (e) {
            this.loading.value = false;
            if ((e as any).response) {
                const errorMessage = await (e as any).response.json();
                this.errors.value = errorMessage;
            }
        }
    }
}
