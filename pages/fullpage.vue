<template>
  <div>
    <div class="page1" id="page1"></div>
    <div class="page2" id="page2"></div>
    <div class="page3" id="page3"></div>
    <div class="page4" id="page4"></div>
  </div>
</template>

<script>
// https://codepen.io/igstudio/pen/pbYOab/?html-preprocessor=pug
//https://blog.logrocket.com/how-to-use-refs-to-access-your-application-dom-in-vue-js/
// var VueScrollTo = require('vue-scrollto');

var options = {
    container: '#container',
    easing: 'ease-in',
    offset: -60,
    force: true,
    cancelable: true,
    onStart: function(element) {
      // scrolling started
    },
    onDone: function(element) {
      // scrolling is done
    },
    onCancel: function() {
      // scrolling has been interrupted
    },
    x: false,
    y: true
}

export default {
  data () {
    return {
      lastScrollTop: 0,
      verticalHeight: 0,
      currentPageNumber: 0
    }
  },
  mounted () {
    VueScrollTo.scrollTo(page2)
    console.log(window.innerWidth)
    console.log(window.innerHeight)
    this.verticalHeight = window.innerHeight
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll);
  },  
  methods: {
    handleScroll () {

      //current location of scroll      
      var st = window.scrollY
      //console.log("Current scroll location " + st)

      //What page is the cursor currently in?
      this.currentPageNumber = Math.ceil(st/this.verticalHeight)
      //console.log("this page number " + this.currentPageNumber )

      // Is the cursor moving up or down?
      if(st > this.lastScrollTop) {
        //handle functions on down scroll trigger
        console.log("downscroll")
        VueScrollTo.scrollTo(page + ``)
      } else {
        //handle functions on up scroll trigger
        console.log("upscroll")
      }
      this.lastScrollTop = st
    }, 
  }
}
</script>

<style lang="scss" scoped>
.page1, .page2, .page3, .page4 {
  height: 100vh;
}
.page1 {
  background: red;
}
.page2 {
  background: blue;
}
.page3 {
  background: yellow;
}
.page4 {
  background: green;
}
</style>