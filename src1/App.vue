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
  import {mapGetters, mapActions} from 'vuex'

  export default{
    computed:mapGetters([
      'count',
      'getOdd'
    ]),
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
