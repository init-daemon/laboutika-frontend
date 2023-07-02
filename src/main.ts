import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/scss/app.scss'
import '@fortawesome/fontawesome-free/css/all.css';

import { createApp } from 'vue'
import App from './App.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
    // theme: {
    //     defaultTheme: 'dark'
    // }
    // https://vuetifyjs.com/en/features/theme/
})


import router from '@/routes/router';

const app = createApp(App);

app.use(vuetify);
app.use(router);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');