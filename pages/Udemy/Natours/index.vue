<template>
  <div class="natours">
    
    <div class="hero">
      <div class="logo-box">
        <img src="/img/natours/logo-white.png" alt="logo" class="logo">
      </div>
      <div class="text-box">
        <h1 class="heading-primary">
          <span class="heading-primary-main">Outdoors</span>
          <span class="heading-primary-sub">is where life happens</span>
        </h1>
        <div class="animated heartBeat">
          <a href="#" class="btn btn-white">Discover our tours</a>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
@import "~assets/main.scss";

.hero {

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
    position:absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    .heading-primary {
      color: white;
      text-transform: uppercase;
      margin-bottom: 50px;
      backface-visibility: hidden;

      span:nth-child(1) {
        display: block;
        margin-bottom: 25px;
        font-size: 60px;
      }

      span:nth-child(2) {
        font-size: 28px;
      }

    }

    a {
      text-decoration: none;
      text-transform: uppercase;
    }

    .btn-white {
      padding: 0;
      margin: 0;
      border: 1px solid white;
      background-color: white;
      color: black;
      padding: 10px 20px;
      border-radius: 100px;

      &:hover {
        border: 1px solid black;
        background: black;
        color: white;
      }

      &:hover::after {
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0;
      }
    }

  }


}

</style>