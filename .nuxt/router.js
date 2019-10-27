import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _72dade19 = () => interopDefault(import('../pages/jen/index.vue' /* webpackChunkName: "pages/jen/index" */))
const _448f177d = () => interopDefault(import('../pages/tachyons/index.vue' /* webpackChunkName: "pages/tachyons/index" */))
const _8ede3d1a = () => interopDefault(import('../pages/tactical/index.vue' /* webpackChunkName: "pages/tactical/index" */))
const _597c41c8 = () => interopDefault(import('../pages/Udemy/index.vue' /* webpackChunkName: "pages/Udemy/index" */))
const _4427c059 = () => interopDefault(import('../pages/jen/clip.vue' /* webpackChunkName: "pages/jen/clip" */))
const _40e7f429 = () => interopDefault(import('../pages/jen/clip2.vue' /* webpackChunkName: "pages/jen/clip2" */))
const _40f60baa = () => interopDefault(import('../pages/jen/clip3.vue' /* webpackChunkName: "pages/jen/clip3" */))
const _4104232b = () => interopDefault(import('../pages/jen/clip4.vue' /* webpackChunkName: "pages/jen/clip4" */))
const _2e776d54 = () => interopDefault(import('../pages/jen/multicolumn.vue' /* webpackChunkName: "pages/jen/multicolumn" */))
const _0481f164 = () => interopDefault(import('../pages/jen/overlap.vue' /* webpackChunkName: "pages/jen/overlap" */))
const _6721258e = () => interopDefault(import('../pages/tachyons/cards.vue' /* webpackChunkName: "pages/tachyons/cards" */))
const _2155aa9e = () => interopDefault(import('../pages/tachyons/flex.vue' /* webpackChunkName: "pages/tachyons/flex" */))
const _3ccaf74c = () => interopDefault(import('../pages/tachyons/forms.vue' /* webpackChunkName: "pages/tachyons/forms" */))
const _253d4bc3 = () => interopDefault(import('../pages/tachyons/glossary.vue' /* webpackChunkName: "pages/tachyons/glossary" */))
const _0accadc2 = () => interopDefault(import('../pages/tactical/animate.vue' /* webpackChunkName: "pages/tactical/animate" */))
const _e41564b6 = () => interopDefault(import('../pages/tactical/fonts.vue' /* webpackChunkName: "pages/tactical/fonts" */))
const _00f55ce6 = () => interopDefault(import('../pages/tactical/fullpage.vue' /* webpackChunkName: "pages/tactical/fullpage" */))
const _18785444 = () => interopDefault(import('../pages/tactical/illustrations.vue' /* webpackChunkName: "pages/tactical/illustrations" */))
const _7eb02920 = () => interopDefault(import('../pages/tactical/lines.vue' /* webpackChunkName: "pages/tactical/lines" */))
const _0a04880b = () => interopDefault(import('../pages/tactical/outlinedtype.vue' /* webpackChunkName: "pages/tactical/outlinedtype" */))
const _bae395f4 = () => interopDefault(import('../pages/tactical/parallax.vue' /* webpackChunkName: "pages/tactical/parallax" */))
const _703e78e6 = () => interopDefault(import('../pages/tactical/raise.vue' /* webpackChunkName: "pages/tactical/raise" */))
const _5c4fb0a1 = () => interopDefault(import('../pages/tactical/shapes.vue' /* webpackChunkName: "pages/tactical/shapes" */))
const _1131f9c7 = () => interopDefault(import('../pages/tactical/signup.vue' /* webpackChunkName: "pages/tactical/signup" */))
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
    path: "/jen",
    component: _72dade19,
    name: "jen"
  }, {
    path: "/tachyons",
    component: _448f177d,
    name: "tachyons"
  }, {
    path: "/tactical",
    component: _8ede3d1a,
    name: "tactical"
  }, {
    path: "/Udemy",
    component: _597c41c8,
    name: "Udemy"
  }, {
    path: "/jen/clip",
    component: _4427c059,
    name: "jen-clip"
  }, {
    path: "/jen/clip2",
    component: _40e7f429,
    name: "jen-clip2"
  }, {
    path: "/jen/clip3",
    component: _40f60baa,
    name: "jen-clip3"
  }, {
    path: "/jen/clip4",
    component: _4104232b,
    name: "jen-clip4"
  }, {
    path: "/jen/multicolumn",
    component: _2e776d54,
    name: "jen-multicolumn"
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
    path: "/tactical/animate",
    component: _0accadc2,
    name: "tactical-animate"
  }, {
    path: "/tactical/fonts",
    component: _e41564b6,
    name: "tactical-fonts"
  }, {
    path: "/tactical/fullpage",
    component: _00f55ce6,
    name: "tactical-fullpage"
  }, {
    path: "/tactical/illustrations",
    component: _18785444,
    name: "tactical-illustrations"
  }, {
    path: "/tactical/lines",
    component: _7eb02920,
    name: "tactical-lines"
  }, {
    path: "/tactical/outlinedtype",
    component: _0a04880b,
    name: "tactical-outlinedtype"
  }, {
    path: "/tactical/parallax",
    component: _bae395f4,
    name: "tactical-parallax"
  }, {
    path: "/tactical/raise",
    component: _703e78e6,
    name: "tactical-raise"
  }, {
    path: "/tactical/shapes",
    component: _5c4fb0a1,
    name: "tactical-shapes"
  }, {
    path: "/tactical/signup",
    component: _1131f9c7,
    name: "tactical-signup"
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
