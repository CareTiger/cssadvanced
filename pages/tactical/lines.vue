<template>
    <div class="divlines">

        <div ref="div1" id="div1"></div>        
        <div ref="div2" id="div2"></div>
        <div ref="div3" id="div3"></div>

        <hr>

        <div>
            <svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">

            <path d="M 10 10 C 20 20, 40 20, 50 10" stroke="brown" fill="transparent"/>
            <path d="M 70 10 C 70 20, 120 20, 120 10" stroke="black" fill="transparent"/>
            <path d="M 130 10 C 120 20, 180 20, 170 10" stroke="black" fill="transparent"/>
            <path d="M 10 60 C 20 80, 40 80, 50 60" stroke="black" fill="transparent"/>
            <path d="M 70 60 C 70 80, 110 80, 110 60" stroke="black" fill="transparent"/>
            <path d="M 130 60 C 120 80, 180 80, 170 60" stroke="black" fill="transparent"/>
            <path d="M 10 110 C 20 140, 40 140, 50 110" stroke="black" fill="transparent"/>
            <path d="M 70 110 C 70 140, 110 140, 110 110" stroke="black" fill="transparent"/>
            <path d="M 130 110 C 120 140, 180 140, 170 110" stroke="black" fill="transparent"/>

            </svg>
        </div>
        <button type="button">hello</button>
    </div>
</template>

<style lang="scss" scoped>

.divlines {
    border: 1px solid red;
    position: relative;
    top: 250px;
    left:  150px;

    #div1 {
        height: 100px;
        width: 100px;
        background: green;
        margin-left: 4rem;
        margin-bottom: 4rem;
    }

    #div2 {
        height: 100px;
        width: 100px;
        background: blue;
    }

    #div3 {
        height: 100px;
        width: 100px;
        background: yellow;
    }

}

button {
    border: 5px solid red;
}

</style>

<script>
export default {
    data() {
        return{}
    },
    mounted() {
        console.log(this.$refs.div1.getBoundingClientRect())
        console.log(this.$refs.div2.getBoundingClientRect())
        console.log(this.$refs.div3.getBoundingClientRect())

/*         console.log(this.$refs.div1.offsetLeft)
        console.log(this.$refs.div1.offsetTop)
        console.log(this.$refs.div1.offsetWidth)
        console.log(this.$refs.div1.offsetHeight) */
    },
    methods: {
        myClick() {
            console.log(this.$refs.div1)
        }
    }
    
}
</script>