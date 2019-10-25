<template>
    <div>

        <img src="/img/jen/brooklyn/84186.jpg" alt="">
    </div>
</template>

<style lang="scss" scoped>
.parent {
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: 200px repeat(6, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.div1 { grid-area: 1 / 1 / 4 / 4; }
.div2 { grid-area: 2 / 3 / 7 / 6; }
.div3 { grid-area: 5 / 2 / 8 / 5; } 

</style>