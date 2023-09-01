<style lang="scss" scoped>

    .top-sales
    {
        // background-color: rebeccapurple;
        
        // background-color: #ffffff;
        position: relative;

        // background-color: #ffff00;
        height: 800px;




        display:grid;
        overflow: auto;

        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(2, 1fr);

        grid-column-gap: 15px;
        grid-row-gap: 15px;
        
        // height: 30%;
        
        // grid-column-gap: 1%;
        // grid-row-gap: 1%;
    }

    .st
    {
        background-color:blue;
        width:20px;
    }

    .test
    {
        background-color:#ffffff;
    }

    .top-text
    {
        font-size: var(--fontsize-big-default);
        margin-bottom: 3%;
        display: flex;
        align-items: center
    }

    .go-look
    {
        display: flex;
        align-items: center;
        // margin-right: auto;
        margin-left: auto;
    }

    // .container
    // {
    //     // background-color:blue;
    // }
</style>

<script setup>
    import Product from '@/components/Product.vue';
</script>

<template>

<div class="container">
    <div class="top-text">Топ продаж <NuxtLink class="go-look" to="/">Смотреть все <img class="icon-in-text" src="img/icon/arrow-2.svg"></NuxtLink> </div>
    <div class="top-sales">

        <product image="img/headphones_PNG7638.png" classification="Наушники" 
                    count-revievs=25 rating=4 name="HayuHnKM HyperX Cloud Core (KHX-HSCC-BK)"
                    price=2000 valuta="р"
                    statusIcon="img/headphones_PNG7638.png"/>
        <product image="img/headphones_PNG7638.png" classification="Наушники" 
                    count-revievs=25 rating=4 name="HayuHnKM HyperX Cloud Core (KHX-HSCC-BK)" price=2000 valuta="р"/>
        <product image="img/headphones_PNG7638.png" classification="Наушники" 
                    count-revievs=25 rating=4 name="HayuHnKM HyperX Cloud Core (KHX-HSCC-BK)" price=2000 valuta="р"/>
        <product image="img/headphones_PNG7638.png" classification="Наушники" 
                    count-revievs=25 rating=4 name="HayuHnKM HyperX Cloud Core (KHX-HSCC-BK)" price=2000 valuta="р"/>
        <product image="img/headphones_PNG7638.png" classification="Наушники" 
                    count-revievs=25 rating=4 name="HayuHnKM HyperX Cloud Core (KHX-HSCC-BK)" price=2000 valuta="р"/>

        <product image="img/intelE3.jpg" classification="Материнская плата" count-revievs=15 rating=4 name="intelE3" price=1000 valuta="р"/>
        <product image="img/asus.png" classification="Материнская плата" count-revievs=15 rating=4 name="Материнская плата Asus B65M-G (51150/B85/4xDDR3)" price=1000 valuta="р"/>
        <product image="img/tabl.png"/>
        <product image="img/test-long.png"/>
        <product image="img/totw_promo.png"/>

    </div>
</div>


</template>

