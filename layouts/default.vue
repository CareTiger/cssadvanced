<template>
    <div>

    <nav>
      <ul class="navigation">
        <li><nuxt-link to="/">HOME</nuxt-link></li>
        <li><nuxt-link to="/natours">NATOURS</nuxt-link></li>
      </ul>
      <ul class="button">
        <li><nuxt-link to="/signup" class="btn-main">Sign Up</nuxt-link></li>        
      </ul>
    </nav>

        <nuxt></nuxt>

    </div>
</template>


<style lang="scss" scoped>
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 5px solid yellow;

  a {
    text-decoration: none;
    text-transform: uppercase;
    margin-right: 10px;
    border: 1px solid red;
  }

  li {
    list-style-type: none;
    display: inline-block;
  }

  .navigation {
    display: inline-block;
    border: 1px solid green;
  }

  .button {
    display: inline-block;
    border: 1px solid green;
  }

}



</style>