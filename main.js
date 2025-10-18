import Vue from 'vue'
import App from './App'
import cuCustom from 'colorui/components/cu-custom.vue'
import cuCustomTab from 'colorui/components/cu-custom-tab.vue'
Vue.component('cu-custom', cuCustom);
Vue.component('cu-custom-tab', cuCustomTab);


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
