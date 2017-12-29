import { ActionTree, MutationTree, GetterTree } from 'vuex';

class State {
  count: number = 0;
  history: string[] = [];
}

const mutations: MutationTree<State> = {
  INCREMENT: (state: State) => {
    state.count += 1;
    state.history.push('increment');
  },
  DECREMENT: (state: State) => {
    state.count -= 1;
    state.history.push('decrement');
  },
};

const actions: ActionTree<State, any> = {
  increment: ({ commit }) => {
    commit('INCREMENT');
  },
  decrement: ({ commit }) => {
    commit('DECREMENT');
  },
  incrementIfOdd: ({ commit, state }) => {
    if ((state.count + 1) % 2 === 0) {
      commit('INCREMENT');
    }
  },
  incrementAsync: async ({ commit }) => {
    /* eslint-disable no-new */
    await new Promise(resolve => setTimeout(() => {
      commit('INCREMENT');
      resolve();
    }, 1000));
  },
};

const limit = 5;

const getters: GetterTree<State, any> = {
  count: state => state.count,
  recentHistory: (state) => {
    const end = state.history.length;
    const begin = end - limit < 0 ? 0 : end - limit;
    return state.history
      .slice(begin, end)
      .toString()
      .replace(/,/g, ', ');
  },
};

export default {
  namespaced: true,
  state: new State(),
  actions,
  mutations,
  getters,
};
