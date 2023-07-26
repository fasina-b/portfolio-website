// Import the createApp function from 'vue' instead of using 'new Vue'
import { createApp } from 'vue';
import App from './App.vue';

// Remove the 'Vue' instance and use 'createApp' to create the app instance
const app = createApp(App);

// If you're using Vue Router and Vuex store, make sure to import them and use them accordingly.
// For example:
import router from './router'; // Make sure your router file path is correct
import store from './store';   // Make sure your store file path is correct

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap JavaScript
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Use the router and store with the app instance
app.use(router);
app.use(store);

// Mount the app to the DOM element with ID 'app'
app.mount('#app');