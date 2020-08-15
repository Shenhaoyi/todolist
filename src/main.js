import Vue from 'vue'
import App from './App.vue'

//创建vue实例，
new Vue({
  //挂载app组件
  el: '#app',
  components: { //组件名：组件对象
    App //App:App简写成App
  },
  template: '<App/>'
})
