import Vue from 'nativescript-vue';

import ListPage from './components/ListPage.vue';

import './styles.scss';

// Uncommment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;

new Vue({

  render: h => h(ListPage),

  methods: {
    test: function(){
      alert("its works fine");
    }
  }

}).$start();
