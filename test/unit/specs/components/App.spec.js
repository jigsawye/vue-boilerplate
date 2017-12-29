import { shallow } from 'vue-test-utils';
import App from '@/components/App';

describe('App.vue', () => {
  it('should render "Hello Vue!"', () => {
    const wrapper = shallow(App);
    expect(wrapper.find('div > h1').text()).toBe('Hello Vue!');
  });
});
