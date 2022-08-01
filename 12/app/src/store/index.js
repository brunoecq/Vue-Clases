import Vuex from "vuex";
import Vue from "vue";
import { createStore } from "vuex-extensions";

import sucursales from "./modules/sucursales.js";
//import axios from 'axios'
Vue.use(Vuex);

/* eslint-disable */
export default createStore(Vuex.Store, {
  state: {
    msg: "Variable de State declarada en Store.",
    nombreDelCurso: "Vue y Vuex!",
    profesion: "Coder",
    ubicacion: "house",
    productos: [],
    count: 0
  },
  getters: {
    getMsg: (state) => {
      return state.msg;
    },
    getNombreDelCurso: (state) => {
      return state.nombreDelCurso;
    },
    getConcatStates: (state) => {
      return `${state.profesion} ${state.ubicacion}`;
    },
  },
  mutations: {
    cambiarMsg: (state, payload) => {
      state.msg = payload;
    },
    cambiarNombreDelCurso: (state, payload) => {
      state.nombreDelCurso = payload;
    },
    CONFIGURAR_PRODUCTOS: (state, productos) => {
      state.productos = productos;
    },
    mutate: (state, payload) => {
      state[payload.property] = payload.width;
    },
  },
  actions: {
    cambiarMsgAsync: (context, payload) => {
      context.commit("cambiarMsg", payload);
    },
    cambiarNombreDelCursoAsync: (context, payload) => {
      context.commit("cambiarNombreDelCurso", payload);
    },
  },
  modules: {
    sucursales,
  },
  mixins: {
    mutations: {
        changeState: function (state, changed) {
            Object.entries(changed)
              .forEach(([name, value]) => {
                state[name] = value
              })
          }
     
    },
  },
});
