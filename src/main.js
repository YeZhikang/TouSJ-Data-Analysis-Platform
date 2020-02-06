// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
import store from "./store";
import './static/index.css'

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(axios);
axios.defaults.baseURL = 'http://127.0.0.1:5000/';
Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts;
Vue.filter("numCap",function (val) {
  val = val.toString()
  let newNum = ""
  for(let i = val.length-1;i>=0;i--){
    if((val.length - i -1 )%3 === 0 && i+1 !== val.length){
      newNum = ","+newNum
    }
    newNum = val[i] + newNum
  }
  let dashedSplit = newNum.split(',')
  let dashedCount = dashedSplit.length-1;
  if(dashedCount >= 1){
    return dashedSplit.slice(0,-1).join("")+"K"
  }
  return newNum
})

// router.beforeEach((to,from,next)=>{
//   if(!store.state.userInfo.userName && to.name !== "register" && to.name !== "index"){
//     axios.get('/checkLogin').then(res => {
//       console.log(res.data)
//       if(!res.data.userName){
//         router.push({name:'login'})
//       }
//     })
//   }
//   next()
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store:store,
  router,
  components: { App },
  template: '<App/>'
})
