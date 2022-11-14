import { BIconEmojiExpressionlessFill } from 'bootstrap-vue'
import Vue from 'vue'
import Vuex from 'vuex'
import VuexPercistence from 'vuex-persist'

Vue.use(Vuex)

const storage = new Vuex.Store({
  state: {
    usuario: '',
    idusr: 0,
    nombre: '',
    tipo: 0
  },
  mutations: {
    setUsuario(state, value) {
      state.usuario = value
    },
    setIdusr(state, value) {
      state.idusr = value
    },
    setnombre(state, value) {
      state.nombre = value
    },
    setTipo(state, value) {
      state.tipo = value
    }
  },
  plugins: [
    new VuexPercistence( {
      storage: window.localStorage
    }).plugin
  ]
})

export default storage;