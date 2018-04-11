import Vue from 'nativescript-vue';

import EmployeeList from './components/EmployeeList.vue';

import './styles.scss';

// Uncommment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;

new Vue({

  render: h => h(EmployeeList),

  methods: {
    test: function(){
      alert("its works fine");
    }
  }

}).$start();
