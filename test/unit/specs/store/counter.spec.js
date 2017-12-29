import counter from '@/store/modules/counter';

const { mutations, actions, getters } = counter;
const { INCREMENT, DECREMENT } = mutations;
const { increment, decrement, incrementIfOdd, incrementAsync } = actions;
const { count, recentHistory } = getters;

describe('mutations', () => {
  it('INCREMENT', () => {
    const state = { count: 0, history: [] };
    INCREMENT(state);
    expect(state.count).toBe(1);
    expect(state.history).toEqual(['increment']);
  });

  it('DECREMENT', () => {
    const state = { count: 1, history: [] };
    DECREMENT(state);
    expect(state.count).toBe(0);
    expect(state.history).toEqual(['decrement']);
  });
});

describe('actions', () => {
  it('increment', () => {
    const commit = jest.fn();
    increment({ commit });
    expect(commit).toHaveBeenCalledWith('INCREMENT');
  });

  it('decrement', () => {
    const commit = jest.fn();
    decrement({ commit });
    expect(commit).toHaveBeenCalledWith('DECREMENT');
  });

  it('incrementIfOdd', () => {
    const commit = jest.fn();
    const state = { count: 0 };
    incrementIfOdd({ commit, state });
    expect(commit).not.toHaveBeenCalled();
    
    state.count = 1;
    incrementIfOdd({ commit, state });
    expect(commit).toHaveBeenCalledWith('INCREMENT');
  });

  it('incrementAsync', async () => {
    const commit = jest.fn();
    await incrementAsync({ commit });
    expect(commit).toHaveBeenCalledWith('INCREMENT');
  });
});

describe('getters', () => {
  it('count', () => {
    const state = { count: 0 };
    expect(count(state)).toBe(0);
  });

  it('recentHistory', () => {
    let state = { history: ['increment', 'decrement'] };
    expect(recentHistory(state)).toBe('increment, decrement');

    state = { history: [
      'decrement',
      'decrement',
      'decrement',
      'decrement',
      'decrement',
      'decrement',
      'increment',
    ] };

    expect(recentHistory(state))
      .toBe('decrement, decrement, decrement, decrement, increment');
  });
});
