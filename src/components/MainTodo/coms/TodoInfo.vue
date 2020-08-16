<template>
  <div class="todo-info">
    <span class="total">{{total}} item{{total>0?'s':''}} left</span>
    <div class="tabs">
      <a v-for="(item, index) in states"
         :key="index"
         @click="toggleState(item)"
         :class="[currentState === item? 'toggled':'']"
      >{{ item }}</a>
    </div>
    <button class="clear" @click="clearCompleted">Clear Completed</button>
  </div>
</template>

<script>
  export default {
    name: 'TodoInfo',
    props: {total: Number},
    data() {
      return {
        states: ['All', 'Todo', 'Completed'],
        currentState: 'All'
      }
    },
    methods: {
      toggleState(state) {
        this.currentState = state
        this.$emit('toggleState',state)
      },
      clearCompleted(){
        this.$emit('clearCompleted')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../assets/styles/theme.scss';

  .todo-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    font-weight: 400;
    line-height: 30px;
    border: 1px solid rgba(0, 0, 0, 0.1);

    .total {
      color: $red;
    }

    .tabs {
      display: flex;
      justify-content: space-between;
      width: 200px;

      a {
        appearance: none;
        outline: none;
        border: 1px solid $lightred;
        border-radius: 5px;
        padding: 0 5px;
        cursor: pointer;


        &.toggled {
          background: $lightred;
          color: white;
        }
      }
    }

    .clear {
      padding: 5px 10px;
      background: $green;
      border-radius: 5px;
      color: white;
      appearance: none;
      border: none;
      outline: none;
      cursor: pointer;
    }
  }
</style>