import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1957f9e4 = () => interopDefault(import('../pages/natours/index.vue' /* webpackChunkName: "pages/natours/index" */))
const _7cc78765 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _27642815 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/natours",
    component: _1957f9e4,
    name: "natours"
  }, {
    path: "/signup",
    component: _7cc78765,
    name: "signup"
  }, {
    path: "/",
    component: _27642815,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
