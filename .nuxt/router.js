import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _11e8d3e4 = () => interopDefault(import('../pages/animate.vue' /* webpackChunkName: "pages/animate" */))
const _066ed772 = () => interopDefault(import('../pages/fonts.vue' /* webpackChunkName: "pages/fonts" */))
const _482420aa = () => interopDefault(import('../pages/fullpage.vue' /* webpackChunkName: "pages/fullpage" */))
const _e4184e34 = () => interopDefault(import('../pages/illustrations.vue' /* webpackChunkName: "pages/illustrations" */))
const _72dade19 = () => interopDefault(import('../pages/jen/index.vue' /* webpackChunkName: "pages/jen/index" */))
const _24f9207c = () => interopDefault(import('../pages/lines.vue' /* webpackChunkName: "pages/lines" */))
const _2694e729 = () => interopDefault(import('../pages/outlinedtype.vue' /* webpackChunkName: "pages/outlinedtype" */))
const _95c47b6c = () => interopDefault(import('../pages/overlap.vue' /* webpackChunkName: "pages/overlap" */))
const _7ef6d324 = () => interopDefault(import('../pages/parallax.vue' /* webpackChunkName: "pages/parallax" */))
const _36b40a2f = () => interopDefault(import('../pages/raise.vue' /* webpackChunkName: "pages/raise" */))
const _70358382 = () => interopDefault(import('../pages/shapes.vue' /* webpackChunkName: "pages/shapes" */))
const _7cc78765 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _448f177d = () => interopDefault(import('../pages/tachyons/index.vue' /* webpackChunkName: "pages/tachyons/index" */))
const _597c41c8 = () => interopDefault(import('../pages/Udemy/index.vue' /* webpackChunkName: "pages/Udemy/index" */))
const _0481f164 = () => interopDefault(import('../pages/jen/overlap.vue' /* webpackChunkName: "pages/jen/overlap" */))
const _6721258e = () => interopDefault(import('../pages/tachyons/cards.vue' /* webpackChunkName: "pages/tachyons/cards" */))
const _2155aa9e = () => interopDefault(import('../pages/tachyons/flex.vue' /* webpackChunkName: "pages/tachyons/flex" */))
const _3ccaf74c = () => interopDefault(import('../pages/tachyons/forms.vue' /* webpackChunkName: "pages/tachyons/forms" */))
const _253d4bc3 = () => interopDefault(import('../pages/tachyons/glossary.vue' /* webpackChunkName: "pages/tachyons/glossary" */))
const _08c0d419 = () => interopDefault(import('../pages/Udemy/csseffects.vue' /* webpackChunkName: "pages/Udemy/csseffects" */))
const _5a3e0cbe = () => interopDefault(import('../pages/Udemy/Natours/index.vue' /* webpackChunkName: "pages/Udemy/Natours/index" */))
const _e3c59606 = () => interopDefault(import('../pages/Udemy/Nexter/index.vue' /* webpackChunkName: "pages/Udemy/Nexter/index" */))
const _2ec33681 = () => interopDefault(import('../pages/Udemy/Trillo/index.vue' /* webpackChunkName: "pages/Udemy/Trillo/index" */))
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
    path: "/fonts",
    component: _066ed772,
    name: "fonts"
  }, {
    path: "/fullpage",
    component: _482420aa,
    name: "fullpage"
  }, {
    path: "/illustrations",
    component: _e4184e34,
    name: "illustrations"
  }, {
    path: "/jen",
    component: _72dade19,
    name: "jen"
  }, {
    path: "/lines",
    component: _24f9207c,
    name: "lines"
  }, {
    path: "/outlinedtype",
    component: _2694e729,
    name: "outlinedtype"
  }, {
    path: "/overlap",
    component: _95c47b6c,
    name: "overlap"
  }, {
    path: "/parallax",
    component: _7ef6d324,
    name: "parallax"
  }, {
    path: "/raise",
    component: _36b40a2f,
    name: "raise"
  }, {
    path: "/shapes",
    component: _70358382,
    name: "shapes"
  }, {
    path: "/signup",
    component: _7cc78765,
    name: "signup"
  }, {
    path: "/tachyons",
    component: _448f177d,
    name: "tachyons"
  }, {
    path: "/Udemy",
    component: _597c41c8,
    name: "Udemy"
  }, {
    path: "/jen/overlap",
    component: _0481f164,
    name: "jen-overlap"
  }, {
    path: "/tachyons/cards",
    component: _6721258e,
    name: "tachyons-cards"
  }, {
    path: "/tachyons/flex",
    component: _2155aa9e,
    name: "tachyons-flex"
  }, {
    path: "/tachyons/forms",
    component: _3ccaf74c,
    name: "tachyons-forms"
  }, {
    path: "/tachyons/glossary",
    component: _253d4bc3,
    name: "tachyons-glossary"
  }, {
    path: "/Udemy/csseffects",
    component: _08c0d419,
    name: "Udemy-csseffects"
  }, {
    path: "/Udemy/Natours",
    component: _5a3e0cbe,
    name: "Udemy-Natours"
  }, {
    path: "/Udemy/Nexter",
    component: _e3c59606,
    name: "Udemy-Nexter"
  }, {
    path: "/Udemy/Trillo",
    component: _2ec33681,
    name: "Udemy-Trillo"
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
