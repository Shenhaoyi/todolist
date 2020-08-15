<template>
  <div>
    <h1>TodoList</h1>
    <label>
      <input type="text" placeholder="输入…" v-model="content">
    </label>
    <button @click="addTodo">添加</button>
    <ul>
      <li v-for="(data,index) of todoData" :key="index">{{data}}</li>
    </ul>
  </div>
</template>

<script>
  import './assets/styles/reset.css'

  export default {
    name: 'App',
    // created() {
    //   console.log(img)
    // }
    data() {
      return {
        todoData: ['todo1', 'todo2', 'todo3'],
        content: ''
      }
    },
    methods: {
      addTodo() {
        if (this.content !== ''){
          this.todoData.push(this.content)
          this.content = ''
        }
      }
    }
  }
</script>

<style scoped>
li{
  color:blue;
}
</style>