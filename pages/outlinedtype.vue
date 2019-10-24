<template>
    <div class="outlined">
        <h1>Outlined type</h1>
    </div>
</template>

<style lang="scss" scoped>
// https://css-tricks.com/adding-stroke-to-web-text/
// https://wpshout.com/quick-guides/create-text-outline-css/
.outlined {
    padding: 3rem;
}

h1 {
    font-size: 96px;
    font-weight: 800;    
    color: white;
    text-shadow:
    -1px -1px 0 #000,  
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000;    
}

</style>