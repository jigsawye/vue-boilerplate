/* eslint global-require: 0 */
import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    counter,
  },
});

if (module.hot) {
  module.hot.accept([
    './modules/counter',
  ], () => {
    store.hotUpdate({
      modules: {
        counter: require('./modules/counter').default,
      },
    });
  });
}

export default store;
