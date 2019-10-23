<template>
    <div class="divlines">

        <div ref="div1" id="div1" style="width: 100px; height: 100px; top:0; left:0; background:#e53935 ; position:absolute;"></div>
        <div ref="div2" id="div2" style="width: 100px; height: 100px; top:0; left:300px; background:#4527a0 ; position:absolute;"></div>

    </div>
</template>

<style lang="scss" scoped>

.divlines {
    position: relative;
}

</style>

<script>
export default {
    data() {
        return{}
    },
    methods: {
        myClick() {
            console.log(this.$refs)
        }
    }
    
}
</script>