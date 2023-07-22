import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

const clickOutside = {
    beforeMount: (el, binding) => {
      el.clickOutsideEvent = event => {
        if (!(el == event.target || el.contains(event.target))) {
          binding.value();
        }
      };
      document.addEventListener("click", el.clickOutsideEvent);
    },
    unmounted: el => {
      document.removeEventListener("click", el.clickOutsideEvent);
    }
};

const app = createApp(App);
app.directive("clickOutside", clickOutside)
app.use(store);
app.use(router);
app.mount('#app');
