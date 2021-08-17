import Vue from "vue";
import App from "./App.vue";
import Monitor from "../../monitor/sdk";
Vue.config.productionTip = false;
import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:3031";
Vue.prototype.$ajax = axios;

new Monitor({
	consoleError:true,
	app_id:"abcdabcd",
});

new Vue({
	render: function(h) {
		return h(App);
	},
}).$mount("#app");


new Promise((resolve, reject) => {
  setTimeout(() => reject('woops'), 500);
})
test3



