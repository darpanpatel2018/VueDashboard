// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

import Vuetify from 'vuetify'
// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.use(Vuetify)

Vue.config.productionTip = false

let app;
let config = {
  apiKey: "AIzaSyAZDA9THc-BEPqP6HeiogeCxjx9LjK70hc",
  authDomain: "demo2-dd004.firebaseapp.com",
  databaseURL: "https://demo2-dd004.firebaseio.com",
  projectId: "demo2-dd004",
  storageBucket: "demo2-dd004.appspot.com",
  messagingSenderId: "643033387233"
};
firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
    })
  }
});
