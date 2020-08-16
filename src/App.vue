<template>
  <div>
    <MainHeader>

    </MainHeader>
    <main-todo></main-todo>
    <main-footer></main-footer>
  </div>
</template>

<script>
  import './assets/styles/global.scss'
  import MainHeader from './components/MainHeader.vue'
  import MainTodo from './components/MainTodo/MainTodo.vue'
  import MainFooter from './components/MainFooter.vue'

  export default {
    data(){
      return {
        todoData:[{
          id:0,
          content:'test',
          completed:false
        }]
      }
    },
    name: 'App',
    components: {MainFooter, MainTodo, MainHeader},
    // components: {MainHeader},
  }
</script>

<style lang="scss" scoped>

</style>