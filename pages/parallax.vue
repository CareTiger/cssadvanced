<template>
  <div>

    <div class="img-1"></div>

    <div class="content-1">
      <p>
        Scroll Up and Down this page to see the parallax scrolling effect.
        This div is just here to enable scrolling.
        Tip: Try to remove the background-attachment property to remove the scrolling effect.
      </p>
    </div>

    <div class="img-2"></div>

    <div class="content-1">
      <p>
        This is some more content. Please read this content as it is meant to be. 
        very defensible, operating under that theory and read whats on the table.
      </p>
    </div>

  </div>
</template>

<script>
// https://medium.com/@dailyfire/pure-css-parallax-simple-tricks-da102d0ffdb9
// https://keithclark.co.uk/articles/pure-css-parallax-websites/

export default {
  
}
</script>

<style lang="scss" scoped>

.img-1 {
  height:60vh; 
  background-image: url(~static/img/natours/hero.jpg);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.content-1 {
  height: 50vh;
  border: 10px solid red;
}

.img-2 {
  height:60vh; 
  background-image: url(~static/img/natours/nat-5.jpg);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>