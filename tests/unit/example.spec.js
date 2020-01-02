import { shallowMount } from '@vue/test-utils';
import Vuetify from "vuetify"
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {

  let vuetify = new Vuetify()

  it('renders props.msg when passed', () => {
    const msg = 'Welcome to Vuetify';
    const wrapper = shallowMount(HelloWorld, {
      vuetify,
      propsData: { msg },
    });
    expect(wrapper.find('.display-2').text()).toMatch(msg);
  });
});
