<template>
    <div class="jen">
        <h2>Jen's lab</h2>
        <b></b>
        <ul>
            <li><nuxt-link to="jen/clip">clip path - with complex polygons and shadow</nuxt-link></li>
            <li><nuxt-link to="jen/clip2">  clip path -  Vertical - Jen's original design</nuxt-link></li>
            <li><nuxt-link to="jen/clip3">  clip path -  non-rectangular divs - using clip path</nuxt-link></li>
            <li><nuxt-link to="jen/clip4">  clip path -  non-rectangular divs - using transform skew (Stripe)</nuxt-link></li>
            <li><nuxt-link to="jen/overlap">Overlap</nuxt-link></li>
            <li><nuxt-link to="jen/multicolumn">multi-column card layout</nuxt-link></li>
            <li><nuxt-link to="jen/mondrian">mondrian</nuxt-link></li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.jen {
    margin: 1rem;
}
b {
    height: .3em;
    width: 200px;
    background: black;
    display: inline-block;
    
}
</style>