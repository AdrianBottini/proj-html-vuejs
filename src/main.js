import Vue from 'vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import {
  faUserSecret,
  faPhone,
  faPhoneFlip,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';

import {
  faFacebook,
  faFacebookF,
  faFacebookSquare,
  faInstagram,
  faInstagramSquare,
  faTwitter,
  faTwitterSquare,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import App from './App.vue';
/* add icons to the library */
library.add(
  faFacebookF,
  faUserSecret,
  faPhone,
  faTwitter,
  faTwitterSquare,
  faFacebookSquare,
  faInstagramSquare,
  faFacebook,
  faInstagram,
  faYoutube,
  faPhoneFlip,
  faPaperPlane,
);

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
