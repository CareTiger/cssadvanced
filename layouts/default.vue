<template>
    <div>

    <nav>
      <ul class="navigation">
        <li><nuxt-link to="/">HOME</nuxt-link></li>
        <li><nuxt-link to="/udemy">UDEMY</nuxt-link></li>
        <li><nuxt-link to="/tachyons">tachyons</nuxt-link></li>
        <li><nuxt-link to="/jen">Jen</nuxt-link></li>
      </ul>
      <ul class="button">
        <li><nuxt-link to="/signup" class="btn-main">Sign Up</nuxt-link></li>        
      </ul>
    </nav>

        <nuxt></nuxt>

    </div>
</template>


<style lang="scss" scoped>
// https://codepen.io/berky93/pen/vKmkWG

nav {
  padding: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;

  a {
    text-transform: uppercase;
    margin-right: 10px;
  }

  li {
    list-style-type: none;
    display: inline-block;
  }

  .navigation {
    display: inline-block;
  }

  .button {
    display: inline-block;
  }

}

</style>