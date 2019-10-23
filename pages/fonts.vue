<template>
    <div class="fonts">
        <h1>Header 1</h1>
        <h2>Header 2</h2>
        <h3>Header 3</h3>
        <h4>Header 4</h4>
        <h5>Header 5</h5>
        <h6>Header 6</h6>
    </div>
</template>

<style lang="scss">
@import "~/assets/main.scss";
.fonts {
    margin-left: 4rem;
}

h1, h2, h3, h4, h5, h6 {
}

h1 {
    font-weight: lighter;
    font-size: 96px;
    margin-bottom: 3rem;
}

h2 {
    font-weight: normal;
    font-size: 60px;
    margin-bottom: 2rem;
}

h3 {
    font-weight: bold;
    font-size: 48px;
    margin-bottom: 1.5rem;
}

h4 {
    font-weight: bold;
    font-size: 34px;
    margin-bottom: 1rem;
}

h5 {
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 1rem;
}

h6 {

}
</style>