## vuex-demo 说明

```
demo 中共有三个目录分别是src、 src1、 src2分别对应了vuex的不同用法。

切换目录方法： 改变webpack.config.js 的入口文件  entry: './src/main.js',可以将src分别更换为src1或者src2。
切记： 每次更换路径 都要重新启动  npm run dev

```





## vuex 理解
  ```
  Vuex 使用 单一状态树——是的，用一个对象就包含了全部的应用层级状态.
  （很好学不用发愁   ^_^!）

  ```
## vuex 核心概念
  ### State   (mapState)
  ```
  state 它是一个对象  我们使用vuex所有数据初始化的时候都会state里定义

  ```
  ### getters （mapGetters）
```
有时候我们需要从 store 中的 state 中派生出一些状态。比如对数据的处理（可以看demo）。getters相当于vuex计算属性（computed），当state中的值变化了，就会触发getters相应的数据的计算。


mapGetters是辅助函数，方便我们在组件中取值。具体查看demo

```


 ### Mutation (mapMutations)  

 ```
1、更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
2、Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数。
3、Mutation 必须是同步函数


这样做的好处：我们在调试的时候可以找到状态都是怎么改变的。 因为Mutation给我们记录下来了

mapMutations为辅助函数  具体用法看demo

 ```

 ### actions (mapActions )

 ```
 actons的作用就是解决了mutation中必须是同步函数的弊端。因为实际开发中我们有很多操作可能会出现在异步函数中来改变状态，这样mutations就不符合了。

 action的特点： 1、Action 提交的是 mutation，而不是直接变更状态
               2、 Action 可以包含任意异步操作

mapActions辅助函数 具体用法看demo
 ```

## Module

```
当状态比较多的时候，store就会特别的臃肿了，为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter。

具体用法请看demo

```

