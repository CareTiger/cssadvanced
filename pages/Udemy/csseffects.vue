<template>
  <div class="effects">
    
    <div class="buttonOverlay">
      <a href="#">HOVER ME</a>
    </div>

<h1>MAINTAIN</h1>


  </div>
</template>

<script>
// https://github.com/emilkowalski/css-effects-snippets
export default {
  
}
</script>

<style lang="scss" scoped>
.effects {
  width: 500px;
  padding: 2rem;
}

.buttonOverlay {
    padding: 10px 25px;
    position: relative;
    color: #fff;

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: #fff;
  }

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    top: 5px;
    right: 5px;
    background-color: #5778F3;
    z-index: -1;
    transition: transform .2s ease-in-out;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border: 1px solid #474E51;    
  }

  &:hover::before {
    transform: translate(6px, -4px);
  }
}

</style>