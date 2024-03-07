<script setup>
    import Product from '@/components/Product.vue';

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
    <div>
        <div class="product-carts scroll-default">
             <div v-for="(item, index) in products" class="product">
                <product :key="index" :item="item"/>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

    // .container 
    // {
    //     // background-color:aquamarine;
    //     // border-bottom: 1px solid;
    // }
    .test
    {
        background-color:aquamarine;
    }

    .product
    {
        // width: 23.5%;
        height: 400px;
        width: 255px;
        // min-width: 230px;
        background-color:var(--background-product);
        display: flex;

        margin-bottom: 15px;
        margin-right: 15px;

        // margin-right: 15px;
    }

    .product-carts
    {
        // display: grid;
        // grid-template-columns: repeat(5, 1fr);
        // grid-column-gap: 15px;
        // grid-row-gap: 15px;
        // overflow: auto;
        // padding-bottom: 40px;

        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        margin-right:-15px;


        
        // height: 400px;
        // border-bottom: 0.5px solid;

        // background-color:blue;
    }
</style>
