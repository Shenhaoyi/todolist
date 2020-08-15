<template>
  <header class="main-header">
    <h1>TodoList</h1>
  </header>
</template>

<script>
  export default {
    name: 'MainHeader'
  }
</script>

<style lang="scss" scoped>
  @import '../assets/styles/theme.scss';

  .main-header {
    border: 1px solid;
    text-align: center; //文字直接居中了
    h1 {
      margin: 20px;
      font-size: 100px;
      font-weight: 100;
      color: $lightred;
      text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
    }
  }
</style>