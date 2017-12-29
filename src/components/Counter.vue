<template>
  <div>
    <p>Value: {{ count }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
    <div>
      <p>Recent History (last 5 entries): {{ recentHistory }}</p>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import { createNamespcaedHelper } from '@/utils/vuex-decorators';

  const { Getter, Action } = createNamespcaedHelper('counter');

  @Component
  export default class Counter extends Vue {
    @Getter('count') count: number
    @Getter('recentHistory') recentHistory: string

    @Action('increment') increment: void
    @Action('decrement') decrement: void
    @Action('incrementIfOdd') incrementIfOdd: void
    @Action('incrementAsync') incrementAsync: void
  }
</script>
