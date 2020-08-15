<template>
  <div class="todo-item">
    <label>
      <input type="checkbox">
      todo1
    </label>
    <button></button>
  </div>
</template>

<script>
  export default {
    name: 'TodoItem'
  }
</script>

<style lang="scss" scoped>
  @import '../../../assets/styles/theme.scss';
  .todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 10px;
    font-size: 24px;

    &:hover{
      button:after{
        content:'x';
        font-size: 24px;
        color:$lightred;
      }
    }


    label{
      display: flex;
      justify-content: center;
      align-items: center;
      /*text-decoration: line-through;*/
      /*transition:color 0.4s;*/



      input{
        width: 50px;
        height: 30px;
        appearance: none;
        outline:none;
        border:none;
        text-align: center;
        cursor:pointer;
        &.completed{
          label{
            color: #d9d9d9;
            text-decoration: line-through;
          }
        }


        &:after {
          content: url("../../../assets/images/yuan.svg");
        }

        &:checked:after {
          content: url("../../../assets/images/check.svg");
        }
      }
    }
    button{
      width:40px;
      background: transparent;
      appearance: none;
      border: none;
      outline: none;
      cursor:pointer;
    }
  }
</style>