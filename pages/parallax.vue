<template>
  <div>

    <h4>parrallax</h4>

    <div class="parallax"></div>

    <div style="height:1000px;background-color:red;font-size:36px">
    Scroll Up and Down this page to see the parallax scrolling effect.
    This div is just here to enable scrolling.
    Tip: Try to remove the background-attachment property to remove the scrolling effect.
    </div>

    <div class="parallax"></div>

  </div>
</template>

<script>
// https://medium.com/@dailyfire/pure-css-parallax-simple-tricks-da102d0ffdb9
// https://keithclark.co.uk/articles/pure-css-parallax-websites/

export default {
  
}
</script>

<style lang="scss" scoped>
.parallax {
  /* The image used */
  //background-image: url('~static/products/1.jpg');

  /* Full height */
  height: 100%; 

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>