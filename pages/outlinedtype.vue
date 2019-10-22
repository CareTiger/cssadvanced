<template>
    <div>
        <h3>Outlined type</h3>
    </div>
</template>

<style lang="scss" scoped>
// https://css-tricks.com/adding-stroke-to-web-text/
// https://wpshout.com/quick-guides/create-text-outline-css/

h3 {
    font-size: 96px;
    color: white;
    text-shadow:
    -1px -1px 0 #000,  
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000;    
}

</style>