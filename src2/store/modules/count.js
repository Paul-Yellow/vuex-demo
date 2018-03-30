const state = {
  count:10
}
const getters= {
  count(state){
    return state.count
  },
  getOdd(state){
    return state.count % 2 === 0 ? '偶数' : '奇数'
  }
}
const mutations = {
  INCREMENT:(state) =>{
    state.count++
  },
  DECREMENT:(state) =>{
    state.count--
  }
}

const actions = {
  incremnet({commit}){
    commit('INCREMENT')
  },
  decremnet({commit}){
    commit('DECREMENT')
  },
  clickOdd({commit,state}){
    if(state.count % 2 === 0){
      commit('INCREMENT')
    }
    
  },
  clickAsync({commit}){
    new Promise((resove)=>{
			setTimeout(()=>{
				commit('INCREMENT')
				resove()
			},1500)
		})
  }
}


export default {
  state,
  getters,
  actions,
  mutations
}
