<template>
    <div class="w-100">

      <nav class="ba b--blue bw3">
        <ul class="navigation mw7 center">
          <li><nuxt-link to="/">HOME</nuxt-link></li>
          <li><nuxt-link to="/experiments">Experiments</nuxt-link></li>
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