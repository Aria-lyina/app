<script setup>
    import Product from '@/components/Product.vue';
    import HeaderProducts from '@/components/HeaderProducts.vue';

    defineProps({
    title: String,
    products: Array,
    key: Number,
    link:
    {
        type: String,
        default: '/'
    },
    heightGrid:
    {
        type: String,
        default: '400px'
    }
    })
</script>


<template>
    
    <div class="container">
        <header-products :title="title"/>
        <div class="product-carts" :style="{height: heightGrid}">
                
             <!-- <product v-for="i in products.length" :item="products[i]"/> -->
             <!-- <product v-for="i in 10" :item="products[i]"/> -->

             <!-- <product v-for="(item, index) in products" :key="index" :item="item"/> -->

             <div v-for="(item, index) in products" class="product">
                <product :key="index" :item="item"/>
            </div>
            <!-- 
             <product :item="products[1]"/> 
             <product :item="products[1]"/>  -->

        </div>
    </div>
</template>


<style lang="scss" scoped>

    .test
    {
        background-color:aquamarine;
    }

    .product
    {
        // width: 20%;
        min-width: 250px;
        // background-color:aqua;
        display: flex;
        // margin-right: 15px;
    }

    // .container
    // {

    // }
    .product-carts
    {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-column-gap: 15px;
        grid-row-gap: 15px;
        overflow: auto;
        // height: 400px;
        // background-color:blue;
    }
</style>
