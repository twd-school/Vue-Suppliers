import Vue from 'vue'
import VueRouter from "vue-router";
import VueX from 'vuex';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Datetime } from 'vue-datetime';
import 'vue-datetime/dist/vue-datetime.css'
import { Settings } from 'luxon';

import App from './App.vue'
import router from './router';
import storeObj from './data/store';
import { FR_TIMEAGO } from '@/data/translations';

Settings.defaultLocale = 'fr'

Vue.component('datetime', Datetime);
Vue.use(VueRouter);
Vue.use(VueX);

const store = new VueX.Store(storeObj)

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')

import { register } from 'timeago.js';

register('fr-FR', FR_TIMEAGO);
