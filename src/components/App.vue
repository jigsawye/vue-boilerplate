<template>
  <div>
    <h1>{{ text }}</h1>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  text: string = 'Hello Vue!'
}
</script>
