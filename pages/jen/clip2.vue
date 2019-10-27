<template>
    <div>

        <section class="pixel">
            <h1 class="">Pixel the Kitten</h1>
            <h2>Like playing with grid</h2>
            <figure>
                <img src="/img/jen/people/19635836264_927fbee8b5_b.jpg" alt="">
                <img src="/img/jen/people/20070461390_e350b158e3_b.jpg" alt="">
                <img src="/img/jen/people/20258466845_9d192564f0_b.jpg" alt="">
            </figure>
        </section>
        
    </div>
</template>

<style lang="scss" scoped>
.pixel {
    display: grid;
    background: lightgray;
    height: 60vh;
}

figure {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-gap: 20px;
}
img {
    grid-column: span 4;
    vertical-align: bottom;
    max-height: 350px;
	clip-path: polygon(0 0, 75% 0, 100% 100%, 25% 100%);
	width: 100%;
	object-fit: cover;
}
img:nth-child(1) {
	grid-column: 1 / 5;
	grid-row: 1 / 2;
}
img:nth-child(2) {
	grid-column: 4 / 8;
	grid-row: 1 / 2;
}
img:nth-child(3) {
	grid-column: 7 / 11;
	grid-row: 1 / 2;
}
</style>