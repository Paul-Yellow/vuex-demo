import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	count: 1
}

const getters = {
	count(state){
		console.log(state.count, 'getters')
		return state.count
	},
	getOdd(state){
    return state.count % 2 === 0 ? '偶数' : '奇数'
	} 
}

const mutations = { 
	increment(state) {
		state.count++
		console.log(state.count)
	},
	decrement(state) {
		state.count--
	}
}

const actions = {
	increment: ({commit})=>{
		commit('increment')
	},
	decrement: ({commit})=>{
		commit('decrement')	
	},
	clickOdd: ({commit, state})=>{
		if(state.count % 2 === 0){
			commit('increment')
		} 
	},
	clickAsync: ({commit})=>{
		new Promise((resove)=>{
			setTimeout(()=>{
				commit('increment')
				resonve()
			},1500)
		})
	}

}





export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})
