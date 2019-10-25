<template>
    <div class="outlined">
        <section>
            <h1>Outlined type</h1>
            <img src="" alt="">
        </section>
    </div>
</template>

<style lang="scss" scoped>
// https://css-tricks.com/adding-stroke-to-web-text/
// https://wpshout.com/quick-guides/create-text-outline-css/
.outlined {
    padding: 3rem;
}

section {
    height: 90vh;
    background-image: url(~static/img/natours/hero.jpg);
    background-position: cover;
    background-repeat: no-repeat;
    position: relative;    

    h1 {
        border: 1px solid red;
        text-align: center;
        display: inline-block;
        width: 100%;
        font-size: 48px;
        font-weight: 800;
        color: white;
        text-shadow:
        -1px -1px 0 #000,  
            1px -1px 0 #000,
            -1px 1px 0 #000,
            1px 1px 0 #000;

        position: absolute;
        top: 50%;
        left:50%;
        transform: translate(-50%, -50%);
    }

}



</style>