import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import os from 'os'
import App from './App'
import router from './router'
// import store from './store'
import storage from 'electron-json-storage'
import ConnectionManager  from './../service/ConnectionManager'
import FixturesManager  from './../service/FixturesManager'

// ConnectionManager
const connectionManager = new ConnectionManager()

// fixtures
// let fixturesManager = new FixturesManager(connectionManager)
// fixturesManager.loadFixtures()

Vue.use(Vuex)

// storage.setDataPath()
// console.log(storage.getDataPath())
// console.log(process.env.PORTABLE_EXECUTABLE_DIR)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

// test array
// import TryArray from '../try/array'

// let tryArray = new TryArray()
// tryArray.test1()

// VUEX
const store = new Vuex.Store({
  state:
  {
    count: 0,
    connectionManager: connectionManager,
    image: {
        "1": require('@/assets/castle.png'),
    },
  },
  mutations:
  {
    increment (state) {
      state.count++
    }
  }
})

// VUE
new Vue({
    components: { App },
    router,
	store,
    template: '<App/>'
}).$mount('#app')


