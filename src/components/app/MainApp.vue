<template>
    <v-layout class="rounded rounded-md">
        <sidebar-app></sidebar-app>
        <header-app></header-app>
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SidebarApp from "@/components/app/layouts/SidebarApp.vue"
import HeaderApp from "@/components/app/layouts/HeaderApp.vue"
import { KyCrud } from "@/plugins/ky/KyCrud";

export default defineComponent({
    components: {
        SidebarApp,
        HeaderApp
    },
    data() {
        return {
        }
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