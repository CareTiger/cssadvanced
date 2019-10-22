import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5d845428 = () => interopDefault(import('../pages/csseffects.vue' /* webpackChunkName: "pages/csseffects" */))
const _f052fe6a = () => interopDefault(import('../pages/natours.vue' /* webpackChunkName: "pages/natours" */))
const _7ef6d324 = () => interopDefault(import('../pages/parallax.vue' /* webpackChunkName: "pages/parallax" */))
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
    path: "/csseffects",
    component: _5d845428,
    name: "csseffects"
  }, {
    path: "/natours",
    component: _f052fe6a,
    name: "natours"
  }, {
    path: "/parallax",
    component: _7ef6d324,
    name: "parallax"
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
