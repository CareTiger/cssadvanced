<template>
    <div class="divlines">

        <div ref="div1" id="div1"></div>        
        <div ref="div2" id="div2"></div>
        <div ref="div3" id="div3"></div>

        <hr>
        <div>

        </div>
        <button type="button">hello</button>
    </div>
</template>

<style lang="scss" scoped>

.divlines {

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
        console.log(this.$refs.div1.offsetLeft)
        console.log(this.$refs.div1.offsetTop)
        console.log(this.$refs.div1.offsetWidth)
        console.log(this.$refs.div1.offsetHeight)
    },
    methods: {
        myClick() {
            console.log(this.$refs.div1)
        }
    }
    
}
</script>