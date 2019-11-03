<template>
    <div class="fonts ml4">

        <h1>Header 1</h1>
        <h1 class="lh-title">Designers create hierarchy and contrast by playing with the scale of letterforms.</h1>

        <h2>Header 2</h2>
        <h2 class="lh-title">Designers create hierarchy and contrast by playing with the scale of letterforms.</h2>

        <h3>Header 3</h3>
        <h3 class="lh-title">Designers create hierarchy and contrast by playing with the scale of letterforms.</h3>

        <h4>Header 4</h4>
        <h4 class="lh-title">Designers create hierarchy and contrast by playing with the scale of letterforms.</h4>

        <h5>Header 5</h5>
        <h5 class="lh-title">Designers create hierarchy and contrast by playing with the scale of letterforms.</h5>

        <h6>Header 6</h6>
        <h6 class="lh-title">Designers create hierarchy and contrast by playing with the scale of letterforms.</h6>

    </div>
</template>

<style lang="scss">
// fonts like Roslindale from Jen Simmons
// https://github.com/jensimmons/labs.jensimmons.com/tree/gh-pages/fonts

//variable fotns
// https://css-tricks.com/snippets/css/fluid-typography/

//calculator
// https://websemantics.uk/tools/responsive-font-calculator/

// https://betterwebtype.com/articles/2019/05/14/the-state-of-fluid-web-typography/


@import "~/assets/main.scss";

// THIS WORKED
/* @font-face {
     font-family: "Jost";
     src: url(~assets/fonts/Jost/JostVariableFont.woff2) format("Woff2");
     font-weight: medium;
     font-style: normal;
} */


// DIDNT WORK
/* @font-face {
    font-family: "Roslindale Variable Display";
    src: url(~assets/fonts/Roslindale/RoslindaleVariableDisplay-VF.woff2) format("woff2");
    font-weight: medium;
    font-style: normal;
} 
 */

// DIDNT WORK
/* @font-face {
     font-family: "Agrandir Variable";
     src: url(~assets/fonts/AgrandirVariable/AgrandirVariable.woff2) format("Woff2");
}
 */
 
// DIDNT WORK
/* @font-face {
    font-family: "Roslindale";
    src: url(~assets/fonts/Roslindale/RoslindaleVariableDisplay-VF.woff) format("woff");
} 
 */

// DIDNT WORK
/*  @font-face {
    font-family: "Mistral";
    src: url(~assets/fonts/Mistral/Mistral.woff) format("woff");
} */

// DIDNT WORK
/*  @font-face {
    font-family: "Avenir Next";
    src: url(~assets/fonts/AvenirNext/AvenirNext_Variable.ttf) format("ttf");
} */

// DIDNT WORK
 @font-face {
    font-family: "Avenir Next";
    src: url(~assets/fonts/EuclidFlex/EuclidFlex-Regular-WebXL.woff2) format("woff2");
}  
</style>