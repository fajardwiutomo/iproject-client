import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'
import router from '../router/index'
// import Swal from 'sweetalert2'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    news: []
  },
  getters: {
  },
  mutations: {
    GET_NEWS (state, payload){
      state.news = payload
    }
  },
  actions: {
    async doLogin(context, payload){
      try {
        const response = await axios({
          method: 'POST',
          url: "http://localhost:3000/login",
          data: payload
        })
        localStorage.setItem("access_token", response.data.access_token)
        Swal.fire("LOGIN!! Lest Go")
      } catch (error) {
        console.log(error)
      }
    },

    async doRegister(context, payload) {
      try{
         await axios({
          method: 'POST',
          url: "http://localhost:3000/register",
          data: payload
        })
        Swal.fire("Success Register")
      } catch(error) {
        console.log(error)
      }
    },

    logout(context) {
      localStorage.clear()
      context.commit('setIsLoggedIn', false)
      router.push('/login')
    }
  },

  async getNews(context){
    try {
      const response = await axios.get("http://localhost:3000/news")
      const news = response.data
      context.commit("GET_NEWS", news)
    } catch (error) {
      console.log(error)
    }
  },
  modules: {
  }
})
