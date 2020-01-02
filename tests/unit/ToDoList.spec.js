import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex'
import Vuetify from "vuetify"
import ToDo from '@/views/ToDoList.vue';

const localVue = createLocalVue()
localVue.use(Vuex)

describe('HelloWorld.vue', () => {

  let vuetify = new Vuetify();
  let getters; 
  let store;
  beforeEach(() => {
    getters = {
      vuex_message: () => '我是那個 test 模擬出來的 vuex 回傳啦',
    };
    store = new Vuex.Store({getters});
  })


  it('render todo list success', () => {
    const wrapper = shallowMount(
      ToDo, {
        store, localVue, vuetify
    });
  });

  it('test method addTodoList', () => {
    const wrapper = shallowMount(
      ToDo, {
        store, localVue, vuetify
    });

    wrapper.setData({
      inputText: 'test text',
      inputDetail: 'test detail',
    });
    wrapper.vm.addTodoList();
    expect(wrapper.vm.todoList).toStrictEqual([
      { text: 'work1', detail: 'haha' },
      { text: 'work2', detail: 'dada' },
      { text: 'work3', detail: 'baba' },
      { text: 'play1', detail: 'MH' },
      { text: 'test text', detail: 'test detail'},
    ]);
    expect(wrapper.findAll('v-list-item-title-stub').at(4).text()).toBe('test text');
    expect(wrapper.findAll('v-list-item-subtitle-stub').at(4).text()).toBe('test detail');
  });

  it('test method removeTodo', () => {
    const wrapper = shallowMount(
      ToDo, {
        store, localVue, vuetify
    });

    expect(wrapper.vm.todoList).toStrictEqual([
      { text: 'work1', detail: 'haha' },
      { text: 'work2', detail: 'dada' },
      { text: 'work3', detail: 'baba' },
      { text: 'play1', detail: 'MH' },
    ]);

    wrapper.vm.removeTodo(1);

    expect(wrapper.vm.todoList).toStrictEqual([
      { text: 'work1', detail: 'haha' },
      { text: 'work3', detail: 'baba' },
      { text: 'play1', detail: 'MH' },
    ]);

    expect(wrapper.findAll('v-list-item-title-stub').at(1).text()).toBe('work3');
    expect(wrapper.findAll('v-list-item-subtitle-stub').at(1).text()).toBe('baba');
  });

  it('test method updateTodo', () => {
    const wrapper = shallowMount(
      ToDo, {
        store, localVue, vuetify
    });

    expect(wrapper.vm.indexForUpdate).toBe(null);
    expect(wrapper.vm.inputText).toBe('');
    expect(wrapper.vm.inputDetail).toBe('');

    wrapper.vm.updateTodo(1);

    expect(wrapper.vm.indexForUpdate).toBe(1);
    expect(wrapper.vm.inputText).toBe('work2');
    expect(wrapper.vm.inputDetail).toBe('dada');

  });

  it('test updateTodo process normally execute', () => {
    const wrapper = shallowMount(
      ToDo, {
        store, localVue, vuetify
      });

    expect(wrapper.vm.todoList).toStrictEqual([
      { text: 'work1', detail: 'haha' },
      { text: 'work2', detail: 'dada' },
      { text: 'work3', detail: 'baba' },
      { text: 'play1', detail: 'MH' },
    ]);

    wrapper.vm.updateTodo(2);

    expect(wrapper.vm.indexForUpdate).toBe(2);
    expect(wrapper.vm.inputText).toBe('work3');
    expect(wrapper.vm.inputDetail).toBe('baba');

    wrapper.setData({
      inputText: 'new text',
      inputDetail: 'new detail',
    });

    wrapper.vm.addTodoList();

    expect(wrapper.vm.indexForUpdate).toBe(null);
    expect(wrapper.vm.inputText).toBe('');
    expect(wrapper.vm.inputDetail).toBe('');
    expect(wrapper.vm.todoList).toStrictEqual([
      { text: 'work1', detail: 'haha' },
      { text: 'work2', detail: 'dada' },
      { text: 'new text', detail: 'new detail' },
      { text: 'play1', detail: 'MH' },
    ]);
  });

  it('test props', () => {
    const wrapper = shallowMount(
      ToDo, {
        store, localVue, vuetify
    });

    expect(wrapper.vm.props_message).toBe('我是那個 props 預設值啦');

    wrapper.setProps({
      props_message: '456',
    });

    expect(wrapper.vm.props_message).toBe('456');
  });

  it('test computed with vuex', () => {
    const wrapper = shallowMount(
      ToDo, {
        store, localVue, vuetify
    });

    expect(wrapper.vm.vuex_message).toBe('我是那個 test 模擬出來的 vuex 回傳啦')
  });

  // it('test click event', () => {
    //  vuetify trigger click 暫時做不出來
    // const addTodoList = jest.fn();
    // const removeTodo = jest.fn();
    // const updateTodo = jest.fn();
    // const wrapper = mount(
    //   ToDo, {
    //     store, localVue, vuetify,
    //     methods: {
    //       addTodoList,
    //       removeTodo,
    //       updateTodo
    //     },
    // });
    // wrapper.findAll('button').at(1).trigger('click');
    // expect(updateTodo).toHaveBeenCalledTimes(1);
    // wrapper.find('button:nth-child(2)').trigger('click');
    // expect(removeTodo).toHaveBeenCalledTimes(1);
  // })
});
