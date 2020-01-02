<template>
  <div class='todo'>
    <v-card
      class="mx-auto"
      max-width="400"
      tile
    >
      <v-list-item v-for='(item,i) in todoList' :key='i'>
        <v-list-item-content>
          <v-list-item-title>{{item.text}}</v-list-item-title>
          <v-list-item-subtitle>
            {{item.detail}}
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon>
            <v-icon color="black lighten-1" @click="updateTodo(i)">mdi-eraser</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon color="red lighten-1" @click="removeTodo(i)">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <v-text-field dense label="text" v-model="inputText"></v-text-field>
          </v-list-item-title>
          <v-list-item-subtitle>
            <v-text-field dense label="detail" v-model="inputDetail"></v-text-field>
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon>
            <v-icon color="black lighten-1" @click="addTodoList">mdi-folder-plus</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>

      <h2>{{props_message}}</h2>
      <h2>{{vuex_message}}</h2>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'todo',
  components: {},
  props: {
    props_message: {
      type: String,
      default: () => '我是那個 props 預設值啦',
    },
  },
  data: () => ({
    todoList: [
      { text: 'work1', detail: 'haha' },
      { text: 'work2', detail: 'dada' },
      { text: 'work3', detail: 'baba' },
      { text: 'play1', detail: 'MH' },
    ],
    inputText: '',
    inputDetail: '',
    indexForUpdate: null,
  }),
  computed: {
    vuex_message() {
      return this.$store.getters.vuex_message;
    },
  },
  methods: {
    addTodoList() {
      if (this.indexForUpdate) {
        this.todoList[this.indexForUpdate].text = this.inputText;
        this.todoList[this.indexForUpdate].detail = this.inputDetail;
        this.indexForUpdate = null;
      } else {
        this.todoList = [...this.todoList, {
          text: this.inputText,
          detail: this.inputDetail,
        }];
      }
      this.inputText = '';
      this.inputDetail = '';
    },
    removeTodo(index) {
      this.indexForUpdate = null;
      this.todoList = this.todoList.filter((item, arrayIndex) => arrayIndex !== index);
    },
    updateTodo(index) {
      this.indexForUpdate = index;
      this.inputText = this.todoList[index].text;
      this.inputDetail = this.todoList[index].detail;
    },
  },
};
</script>
