import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _11e8d3e4 = () => interopDefault(import('../pages/animate.vue' /* webpackChunkName: "pages/animate" */))
const _5d845428 = () => interopDefault(import('../pages/csseffects.vue' /* webpackChunkName: "pages/csseffects" */))
const _482420aa = () => interopDefault(import('../pages/fullpage.vue' /* webpackChunkName: "pages/fullpage" */))
const _e4184e34 = () => interopDefault(import('../pages/illustrations.vue' /* webpackChunkName: "pages/illustrations" */))
const _f052fe6a = () => interopDefault(import('../pages/natours.vue' /* webpackChunkName: "pages/natours" */))
const _2694e729 = () => interopDefault(import('../pages/outlinedtype.vue' /* webpackChunkName: "pages/outlinedtype" */))
const _7ef6d324 = () => interopDefault(import('../pages/parallax.vue' /* webpackChunkName: "pages/parallax" */))
const _70358382 = () => interopDefault(import('../pages/shapes.vue' /* webpackChunkName: "pages/shapes" */))
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
    path: "/animate",
    component: _11e8d3e4,
    name: "animate"
  }, {
    path: "/csseffects",
    component: _5d845428,
    name: "csseffects"
  }, {
    path: "/fullpage",
    component: _482420aa,
    name: "fullpage"
  }, {
    path: "/illustrations",
    component: _e4184e34,
    name: "illustrations"
  }, {
    path: "/natours",
    component: _f052fe6a,
    name: "natours"
  }, {
    path: "/outlinedtype",
    component: _2694e729,
    name: "outlinedtype"
  }, {
    path: "/parallax",
    component: _7ef6d324,
    name: "parallax"
  }, {
    path: "/shapes",
    component: _70358382,
    name: "shapes"
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
