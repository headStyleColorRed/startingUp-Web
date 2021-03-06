import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login/Login.vue'
import Register from '../views/Login/Register.vue'
import Profile from '../views/Login/Profile.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
	component: Home,
	meta: {
		requiresAuth: true
	}
  },
  {
    path: '/register',
    name: 'Register',
	component: Register,
  },
  {
	path: '/profile',
    name: 'Profile',
	component: Profile,
  },
  {
    path: '/login',
    name: 'Login',
	component: Login,
  },
  {
    path: '*',
	redirect: "/",
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
