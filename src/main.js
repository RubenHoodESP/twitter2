import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import { createStore } from 'vuex';

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import "bootstrap";

import Home from './components/pages/Home.vue'
import Post from "./components/pages/Post.vue";
import Login from "./components/pages/Login.vue";
import Register from "./components/pages/Register.vue";

// Create a new store instance.
const store = createStore({
  state: {
    user: [
      {
        username: "admin",
        password: "1234"
      }
    ],
    post: [
      {
        title: "Elon Musk destroys Twitter again",
        content: "From out latest news, we heard that Elon Musk fired 1000 employes."
      }
    ]
  },
  getters: {},
  mutations: {},
  actions: {}
 })

// Routes
const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', name: 'Login', component: Login },
    { path: '/login?', redirect: '/login' },
    { path: '/register', name: 'Register', component: Register },
    { path: '/home', name: 'Home', component: Home },
    { path: '/post', name: 'Post', component: Post},
];

// Router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Create and mount root instance
const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app')
