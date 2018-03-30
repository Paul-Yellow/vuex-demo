<template>
  <div id="app">
    <h3>vuex-demo</h3>
    <div class="screen"><span class="number">{{count}}</span>  =>  {{getOdd}}</div>
    <div class="handle">
      <input type="button" value="增加" @click="increment">
      <input type="button" value="减少" @click="decrement">
      <input type="button" value="偶数增加" @click="clickOdd">
      <input type="button" value="异步增加" @click="clickAsync">
      
    </div>
    
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'
export default {
  data() {
    return{
      // count: 2,
      // getOdd: '偶数'
    }
  },

  // 我们一般都是computed中来获取状态， 以下是不同获取状态的方式

  // 方式1 
  computed: {
    count(){
      return this.$store.getters.count
    },
    getOdd(){
      return this.$store.getters.getOdd
    }
  },
   // 方式2 
  // computed:mapGetters({
  //   count: 'count',
  //   getOdd: 'getOdd'
  // }),


  //  我们一般在methods中来设置或者是改变state中的状态 ，  以下是改变state状态的方式

  // methods: {
  //   //  方式1： 直接提交mutation
  //   // increment(){
  //   //   this.$store.commit('INCREMENT')
  //   // }

  //   //方式2 分发action
  //   increment(){
  //     this.$store.dispatch('incremnet')
  //   }
  // }

// 方式3
  methods:mapActions([
    'increment',
    'decrement',
    'clickOdd',
    'clickAsync'

  ])





  

    
  

}
  

  
</script>

<style>
#app h3{
  text-align: center;
  font-size: 24px
}
#app .screen{
  text-align: center;
}
#app .screen .number{
  font-size: 40px;
  color: red
}
.handle{
  text-align: center
}
</style>
