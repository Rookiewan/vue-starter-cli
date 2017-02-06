import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import router from './router'
import store from './store'
if (process.env.NODE_ENV !== 'production') {
  require('eruda').init()
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
