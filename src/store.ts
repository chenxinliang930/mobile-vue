import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const store = {
  state: {
    // 收藏的东西
    collectThing:[]
  },
  mutations: {
    saveCollect(state:any,collectList:any){
      let flag = false
      state.collectThing.some((item:any) => {
        if (item.id === collectList.id) {
          flag = true
          return true
        }
      })
      // 如果最终，循环完毕，得到的 flag 还是 false，则把商品数据直接 push 到 购物车中
      if (!flag) {
        state.collectThing.push(collectList)
      }
      console.log(state.collectThing)
    }
  },
  actions: {}
}

export default new Vuex.Store(store as any)
