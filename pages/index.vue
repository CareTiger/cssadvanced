<template>
  <div class="natours">
    
    <div class="logo-box">
      <img src="/img/natours/logo-white.png" alt="logo" class="logo">
    </div>

    <div class="text-box">
      <h1 class="heading-primary">
        <span class="heading-primary-main">Outdoors</span>
        <span class="heading-primary-sub">is where life happens</span>
      </h1>
      <a href="#" class="btn btn-white">Discover our tours</a>
    </div>

  </div>
</template>

<style lang="scss" scoped>

.natours {
  margin: 25px;
  height: 75vh;
  background-image: linear-gradient(to right bottom, 
    hsla(113, 29%, 76%, 0.742), 
    #54b192), url(~static/img/natours/hero.jpg);
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
  position: relative;

  .logo-box {
    position: absolute;
    top: 60px;
    left: 60px;

    .logo {
      height: 40px;
    }
  }

  .text-box {
    
  }


}

</style>