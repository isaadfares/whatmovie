'use strict';

import '../scss/app.scss';

import api from './api.js';
import http from './http.js';

import Vue from 'vue';
import Loading from './components/Loading.js';
import Result from './components/Result.js';

new Vue({
  el: '#app',
  components: {
    'loading': Loading,
    'result': Result
  },
  data: {
    animate: false,
    ready: false
  }
});
