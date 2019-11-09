import Vue from 'vue'
import Vuex from 'vuex'
import { ADD } from "../store/mutation-type"

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        count: 3
    },
    actions: {
        [ADD](context, playload) {
            console.log(context, playload);
            setTimeout(() => {
                context.commit(ADD, playload)
            }, 1500)
        }
    },
    mutations: {
        [ADD](state, playload) {
            console.log(playload);
            state.count += playload

        },
        /*  [ADD](state, playload) {
             state.count += playload
         },
         sub(state, playload) {
             state.count -= playload
         }, */
    }
})
export default store