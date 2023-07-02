<template>
    <v-navigation-drawer expand-on-hover rail color="secondary-darken-1">
        <v-list>
            <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" title="LABOUTIKA"></v-list-item>
        </v-list>

        <v-divider></v-divider>
        <v-list v-model:opened="open">
            <template v-for="(nav, i) in navs" :key="i">
                <v-list-group :value="nav.label" v-if="nav.children">
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" :prepend-icon="nav.icon" :title="nav.label"></v-list-item>
                    </template>
                    <v-list-item v-for="(childNav, j) in nav.children" :key="j" :title="childNav.label"
                        :prepend-icon="childNav.icon" :value="childNav.label" :active="$route.path === childNav.path"
                        density="comfortable" v-bind:link="true" :to="childNav.path"></v-list-item>
                </v-list-group>
                <v-list-item v-else :title="nav.label" :prepend-icon="nav.icon" :value="nav.label"
                    :active="$route.path === nav.path" density="comfortable" v-bind:link="true" :to="nav.path">
                </v-list-item>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import routes from '@/routes/routes';
import { appNavs } from "@/config/constants";

export default defineComponent({
    data() {
        return {
            open: [],
        }
    },
    methods: {
    },
    computed: {
        routes() {
            return routes;
        },
        navs() {
            return appNavs;
        }
    },
});
</script>