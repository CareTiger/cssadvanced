<template>
    <div>

        <h4>
            source : <a href="https://css-tricks.com/creating-non-rectangular-headers/">css tricks</a>
        </h4>




<header>
  <div class="header_bg"></div>
  <h1>Header Content</h1>
</header>

<section class="section_bg">
  <h1>Section Content</h1>
  <p>this is a text block</p>
</section>



        
    </div>
</template>

<style lang="scss" scoped>


header {
  position: relative;
  height: 300px;
  overflow: hidden;
}

.header_bg {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(#ff9d2f, #ff6126);
  transform: skewY(-6deg);
  transform-origin: top left;
}

h1 {
  margin: 0;
  padding: 100px 0;
  font: 44px "Arial";
  text-align: center;
}

header h1 {
  position: relative;
  color: white;
}

section {
    border: 1px solid red;
    position: relative;
    height: 300px;
    overflow: hidden;
}

.section_bg {
    position: absolute;
  background-image: linear-gradient(#ff9d2f, #ff6126);
  transform: skewY(-6deg);
  transform-origin: top left;
  width: 100%;
  height: 100%;;
}

section h1 {
  position: relative;
  color: grey;
  transform: skewY(0deg);
}
</style>