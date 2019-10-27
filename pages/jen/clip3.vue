<template>
    <div>

        <h4>
            source : <a href="https://css-tricks.com/creating-non-rectangular-headers/">css tricks</a>
        </h4>


        <section id="header">
            <h1>Header Content</h1>
        </section>

        <section id="section">
            <h1>Section Content</h1>
        </section>


        
    </div>
</template>

<style lang="scss" scoped>
h1 {
    color: white;
}

section {
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
}

#header {
    position: relative;
    background-image: linear-gradient(#ff9d2f, #ff6126);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw))
}

#section {
    margin-top: -5vw;
    border: 1px solid green;
    background-image: linear-gradient(135deg, #777, #111);    
}

</style>