<template>
    <div>

    <nav>
      <ul class="navigation">
        <li><a href="">Home</a></li>
        <li><a href="">About us</a></li>
        <li><a href="">Contact us</a></li>
      </ul>
      <div class="button">
        <a href="btn-main">Sign Up</a>
        <a href="btn-hot">Get a Quote</a>
      </div>
    </nav>

        <nuxt></nuxt>

    </div>
</template>


<style lang="scss" scoped>
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;

  a {
    text-decoration: none;
    text-transform: uppercase;
    margin-right: 10px;
  }

  .navigation {
    display: inline-block;

    li {
      list-style-type: none;
      display: inline-block;
    }

  }

  .button {

  }

}



</style>