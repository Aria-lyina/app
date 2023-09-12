<script setup>
const props = defineProps({
    params:{
     type: Object,
      default: function() {
        return {
                diametr: "70px",
                radius: "35px",
                color1: "white",
                color2: "green"
            }    
      }
    }
})

onMounted(()=>
{        
    // const mouseTarget = document.getElementById("cont");
    // const cir = document.getElementById("cir");
    // const tr = document.getElementById("tr");

    // mouseTarget.addEventListener("mouseenter", (e) => 
    // {
    //     // mouseTarget.style.border = "5px dotted orange";
    //     cir.style.fill = "var(--color2-btn-play)";
    //     // tr.style.fill = "var(--color1-btn-play)";
    //     tr.style.color = "var(--color1-btn-play)";

    //     // addListItem("This is mouseenter event " + enterEventCount + ".");
    // });

    // mouseTarget.addEventListener("mouseleave", (e) => {
    //     cir.style.fill = "var(--color1-btn-play)";
    //     // tr.style.fill = "var(--color2-btn-play)";
    //     tr.style.color = "var(--color2-btn-play)";
    // });


})


</script>

<template>
    <!-- <div class="container" :style="{height: params.diametr, width:params.diametr}"> -->
        <div class="container" style="{height: 100%; width:100%}" id="cont">
        <div class="tr" id="tr">►</div>
        <!-- <circle class="circl" id="tr" :cx="params.radius" :cy="params.radius" :r="params.radius" style="{height: 100%; width:100%}"/> -->


        <svg :width="params.diametr" :height="params.diametr" id="sv">
            <circle class="circl" id="cir" :cx="params.radius" :cy="params.radius" :r="params.radius"/>


            <polygon points="45,60 45,40 60,50" :fill="params.color2" />
           <!-- {{ d2 }} -->
            <!-- <polygon :points="path" style="fill:parapms.color2" /> -->
            
        </svg>
    </div>

        
</template>

<style lang="scss" scoped>
.container
{
    // background-color:aquamarine;  
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
}
.container :hover .tr 
{ color:red
}

svg :hover .circl
{
    fill: blue;
}

.tr
{
    position: absolute;
    // height: 100%; 
    // width:100%;

    // text-align: center; 

    // display: flex;
    // align-items: center;
    // justify-content: center;


    // padding-top: auto;


    // vertical-align: middle;
    // align-content: center

    font-size: 70px;
    // top: 50%;

    // transform: translateY(-50%);
    // display: block;

    color: var(--color2-btn-play);
    // left: 40%;


    // background-color:rgb(0, 157, 31);

    // &:hover
    // {
    //     // color: var(--color2-btn-play);
    //     color: red;
    // }



    // right: 40%; 
}

.circl
{
    // fill: var(--color1-btn-play);
    fill: violet;
    // background-color:aqua;
    // &:hover
    // {
    //     // background-color: var(--color2-btn-play);
    //     // color: red;
    //     fill: red;
    // }
}

</style>