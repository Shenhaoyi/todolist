<template>
  <div>
    <MainHeader>

    </MainHeader>
    <main-todo></main-todo>
  </div>
</template>

<script>
  import './assets/styles/global.scss'
  import MainHeader from './components/MainHeader.vue'
  import MainTodo from './components/MainTodo/MainTodo.vue'

  export default {
    name: 'App',
    components: {MainTodo, MainHeader},
    // components: {MainHeader},
  }
</script>

<style lang="scss" scoped>

</style>