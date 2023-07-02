<template>
  <main-app></main-app>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import MainApp from '@/components/app/MainApp.vue';

@Options({
  components: {
    MainApp,
  },
  data() {
    return {
    }
  },
  computed: {
  },
})
export default class App extends Vue {
}
</script>

<style lang="scss"></style>
