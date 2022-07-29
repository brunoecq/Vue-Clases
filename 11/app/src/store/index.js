import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    msg: "Variable de State declarada en Store",
  },
  mutations: {
    cambiarMensaje: (state, payload) => {
      if (payload) state.msg = payload;
      else state.msg = "Variable de State cambiada en Mutations";
    },
  },
  actions: {
    cambiarMensajeDesdeTimeOut: ({ commit }, payload) => {
      setTimeout(() => {
        commit("cambiarMensaje", payload);
      }, 3000);
    },
    cambiarMensajeDesdeApi: ({ commit }, payload) => {//payload must be 3
      /* eslint-disable */
      fetch(`https://reqres.in/api/products/${payload}`)
        .then((res) => res.json())
        .then((data) => {
          let res = data.data
          commit("cambiarMensaje", res.name);
        })
        .catch(err=> { alert(err) });
    },
  },
  modules: {},
});
