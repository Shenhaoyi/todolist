<template>
  <div class="main-todo">
    <label>
      <input type="text" class="add-todo" placeholder="what to do?" autofocus>
    </label>
    <todo-item></todo-item>
  </div>
</template>

<script>
  import TodoItem from './coms/TodoItem.vue'
  export default {
    name: 'MainTodo',
    components: {TodoItem},
  }
</script>

<style lang="scss" scoped>
  .main-todo {
    border:1px solid red;
    width: 600px;
    margin: 0 auto;
    background: #ffffff;
    box-shadow: 0 0 5px #666;

    .add-todo {
      width:100%;
      padding:16px 16px 16px 32px;
      font-size: 24px;
      font-weight: inherit;
      font-family: inherit;
      color: inherit;
      border: none;
      outline: none;
    }
  }
</style>