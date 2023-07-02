<template>
    <v-app></v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { KyCrud } from "@/plugins/ky/KyCrud";

export default defineComponent({
    components: {

    },
    setup() {
        const api = new KyCrud();
        return {
            api
        }
    },
    methods: {

    }
})

</script>
<style lang="scss"></style>