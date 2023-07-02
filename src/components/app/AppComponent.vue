<template>
    <v-layout class="rounded rounded-md">
        <sidebar-component></sidebar-component>
        <header-component></header-component>
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SidebarComponent from "@/components/app/layouts/SidebarComponent.vue"
import HeaderComponent from "@/components/app/layouts/HeaderComponent.vue"
import { KyCrud } from "@/plugins/ky/KyCrud";

export default defineComponent({
    components: {
        SidebarComponent,
        HeaderComponent
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