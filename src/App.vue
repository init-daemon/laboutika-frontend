<template>
  <app-component></app-component>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import AppComponent from '@/components/app/AppComponent.vue';

@Options({
  components: {
    AppComponent,
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
