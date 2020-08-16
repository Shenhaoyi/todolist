<template>
  <div class="main-todo">
    <label>
      <input type="text"
             class="input-todo"
             placeholder="What to do?"
             autofocus
             @keyup.enter="addTodo"
             v-model="content"
      >
      <button class="add-todo" @click="addTodo">Add</button>
    </label>
    <todo-item v-for="(data,index) in filterData" :key="index" :todo="data" @del="handleDeleteItem"></todo-item>
    <todo-info :total="total" @toggleState="handleToggleState" @clearCompleted="handleClear"></todo-info>
  </div>
</template>

<script>
  import TodoItem from './coms/TodoItem.vue'
  import TodoInfo from './coms/TodoInfo.vue'

  export default {
    name: 'MainTodo',
    data() {
      return {
        todoData: [],
        content: '',
        filter: 'All'
      }
    },
    components: {TodoInfo, TodoItem},
    computed: {
      total() {
        return this.todoData.filter(item => item.completed === false).length
      },
      filterData() {
        switch (this.filter) {
          case 'Todo':
            return this.todoData.filter(item => item.completed === false)
          case 'Completed':
            return this.todoData.filter(item => item.completed === true)
          default:
            return this.todoData
        }
      }

    },
    created: function () {
      this.todoData = JSON.parse(window.localStorage.getItem('todoList') || [])
    },
    watch: {
      deep: true,
      todoData: function () {
        window.localStorage.setItem('todoList', JSON.stringify(this ? this.todoData : []))
      }
    },
    methods: {
      addTodo() {
        if (this.content.length > 0) {
          this.todoData.unshift({
            id: this.todoData.length,
            content: this.content,
            completed: false
          })
          // console.log(this.todoData)
          this.content = ''
        }
      },
      handleDeleteItem(id) {
        this.todoData.forEach((item, index) => {
          if (item.id === id) {
            this.todoData.splice(index, 1)
          }
        })
      },
      handleToggleState(state) {
        this.filter = state  //子组件选择的filter，对父组件进行更新
      },
      handleClear() {
        this.todoData = this.todoData.filter(item => item.completed === false)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/theme.scss';

  .main-todo {
    width: 600px;
    margin: 0 auto;
    background: #ffffff;
    box-shadow: 0 0 5px #666;
    border-radius: 20px;

    label {
      display: flex;
      justify-content: space-between;
      padding-left: 20px;

      .input-todo {
        flex: 1;
        padding: 16px 16px 16px 32px;
        font-size: 24px;
        font-weight: inherit;
        font-family: inherit;
        color: inherit;
        border: none;
        outline: none;
        text-align: center;

      }

      .add-todo {
        min-width: 100px;
        background: $yellow;
        margin: 5px 10px;
        border-radius: 10px;
        appearance: none;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 24px;
        font-weight: inherit;
        font-family: inherit;
        color: white;
      }
    }

  }
</style>