<template>
  <div class="transition">
    

    <transition appear enter-active-class="animated slideInLeft">
      <div class="test"></div>
    </transition> 

  </div>
</template>

<script>
//https://css-tricks.com/native-like-animations-for-page-transitions-on-the-web/

//https://markus.oberlehner.net/blog/building-a-parallax-scrolling-effect-component-with-vue/
//https://markus.oberlehner.net/blog/vue-router-page-transitions/
//https://snipcart.com/blog/vuejs-transitions-animations
//https://medium.com/vue-mastery/how-to-create-vue-js-transitions-6487dffd0baa

export default {
  data () {
    return {
      changed: false
    }
  }
}
</script>

<style lang="scss" scoped>

.transition {
  width: 100%;
  border: 4px solid blue;
}

.test {
  height: 400px;
  width: 500px;
  background: red;
  margin: auto;
}
</style>