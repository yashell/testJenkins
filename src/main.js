import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import draggable from 'vuedraggable'
import 'ant-design-vue/dist/antd.css';
Vue.use(draggable);
Vue.use(Antd);
Vue.config.productionTip = false

import XEUtils from 'xe-utils'
import 'vxe-table/lib/index.css'
Vue.prototype.$XEUtils = XEUtils

import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'

Vue.use(VXETable)

import VXETablePluginExportXLSX from 'vxe-table-plugin-export-xlsx'
VXETable.use(VXETablePluginExportXLSX)


let aMapScript = document.createElement('style')
aMapScript.setAttribute('type', 'https://webapi.amap.com/maps?v=1.4.14&key=f93f00a27151d556a1140c574910e5eb')
document.head.appendChild(aMapScript)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
