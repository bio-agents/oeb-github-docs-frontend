import Vue from 'vue';
import App from '@/App';
import axios from '@/plugins/axios';
import router from '@/plugins/router';
import vuetify from '@/plugins/vuetify';
import store from '@/plugins/vuex';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.$baseUrl = process.env.VUE_APP_URL;
Vue.prototype.$repolist = process.env.VUE_APP_REPOLIST;
Vue.prototype.$gh = process.env.VUE_APP_GH;
Vue.prototype.$projects = process.env.VUE_APP_PROJECTS;

new Vue({
	router,
	vuetify,
	store,
	render: h => h(App)
}).$mount('#app');
