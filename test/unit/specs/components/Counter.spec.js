import { shallow, createLocalVue } from 'vue-test-utils';
import Vuex from 'vuex';
import Counter from '@/components/Counter';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Counter.vue', () => {
  let actions;
  let getters;
  let store;

  beforeEach(() => {
    actions = {
      increment: jest.fn(),
      decrement: jest.fn(),
      incrementIfOdd: jest.fn(),
      incrementAsync: jest.fn(),
    };
    getters = {
      count: () => 0,
      recentHistory: () => 'increment, increment',
    };
    store = new Vuex.Store({
      modules: {
        counter: { namespaced: true, actions, getters },
      },
    });
  });

  it('should render "getters.count"', () => {
    const wrapper = shallow(Counter, { store, localVue });
    expect(wrapper.find('div > p').text()).toBe('Value: 0');
  });

  it('should render "getters.recentHistory"', () => {
    const wrapper = shallow(Counter, { store, localVue });
    expect(wrapper.find('div > div > p').text())
      .toBe('Recent History (last 5 entries): increment, increment');
  });

  it('should trigger "increment"', () => {
    const wrapper = shallow(Counter, { store, localVue });
    wrapper.findAll('button').at(0).trigger('click');
    expect(actions.increment).toHaveBeenCalled();
  });

  it('should trigger "decrement"', () => {
    const wrapper = shallow(Counter, { store, localVue });
    wrapper.findAll('button').at(1).trigger('click');
    expect(actions.decrement).toHaveBeenCalled();
  });

  it('should trigger "incrementIfOdd"', () => {
    const wrapper = shallow(Counter, { store, localVue });
    wrapper.findAll('button').at(2).trigger('click');
    expect(actions.incrementIfOdd).toHaveBeenCalled();
  });

  it('should trigger "incrementAsync"', () => {
    const wrapper = shallow(Counter, { store, localVue });
    wrapper.findAll('button').at(3).trigger('click');
    expect(actions.incrementAsync).toHaveBeenCalled();
  });
});
