import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// 1.state在vuex中用于存储数据
let state = {
  count: 1,
  list:[]
};
//2.mutation里面放的是方法，方法主要用于改变state里的数据
let mutations = {
  incCount() {
    state.count++;
  },
  addList(state,data){
    state.list=data;
  }
};

//3.有点类似与计算属性，改变state里面的count数据时候会触发getter里面的方法，获取新的值(基本用不到)
let getters = {
  computedCount: (state) => {
    return state.count * 2
  }
};
//action （基本没用）
let actions = { //通过context.commit提交一个mutation
  incMutationsCount(context) { //执行mutation里的i ncCount方法，改变state中的数据
    context.commit('incCount');
  }
};


//vuex 实例化Vuex.store
const store = new Vuex.Store({
  state,
  mutations: mutations,
  getters,
  actions
});

//另一种写法
/*const store = new Vuex.Store({
  state:{
    count:1
  },
  mutations:{
    increment(state){
      state.count++;
    }
  }
});*/

export default store;
