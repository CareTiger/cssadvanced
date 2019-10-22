<template>
    <div>

    <nav>
      <ul class="navigation">
        <li><nuxt-link to="/">HOME</nuxt-link></li>
        <li><nuxt-link to="/natours">NATOURS</nuxt-link></li>
        <li><nuxt-link to="/parallax">PARALLAX</nuxt-link></li>
        <li><nuxt-link to="/csseffects">CSS EFFECTS</nuxt-link></li>
        <li><nuxt-link to="/outlinedtype">Outlined Type</nuxt-link></li>
        <li><nuxt-link to="/shapes">Css shapes</nuxt-link></li>
        <li><nuxt-link to="/fullpage">Full Page</nuxt-link></li>
        <li><nuxt-link to="/fonts">Fonts</nuxt-link></li>
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
  padding: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;

  a {
    text-decoration: none;
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