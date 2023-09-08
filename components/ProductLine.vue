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
    },
    sizeImage:
    {
        type: String,
        default: "160px"
    },
    })
</script>


<template>
    
    <div class="container">
        <header-products :title="title"/>
        <div class="product-carts" :style="{height: heightGrid}">
             <div v-for="(item, index) in products" class="product">
                <product :key="index" :item="item" :size-image="sizeImage"/>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

    .product
    {
        min-width: 250px;
        // background-color:rgb(119, 0, 255);
        background-color:var(--background-product);
        display: flex;
    }

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
