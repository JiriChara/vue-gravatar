/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import 'babel-polyfill';
import Vue from 'vue';
import Gravatar from 'vue-gravatar';
/* eslint-enable */
import App from './App.vue';

Vue.component('v-gravatar', Gravatar);

export default new Vue({
  el: '#app',
  render: h => h(App)
});
