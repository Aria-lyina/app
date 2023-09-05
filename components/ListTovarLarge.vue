<script setup>
    import Product from '@/components/ProductLarge.vue';
    import HeaderProducts from '@/components/HeaderProducts.vue';

    // @TODO rename ListTovarLarge -> ListProductLarge

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
    widthItem:
    {
        type: String,
        default: '300px'
    },
    fontSizeLarge:
    {
        type: String,
        default: "45px"
    },
    fontSizeLight:
    {
        type: String,
        default: "15px"
    },
    sizeImage:
    {
        type: String,
        default: "250px"
    }

    })

</script>

<template>

    <div class="container">
        <header-products :title="title"/>
        <div class="product-carts" :style="{height: heightGrid}">

             <!-- <product v-for="i in products.length" :item="products[i]"/>
            , gridTemplateColumns: repeat(auto-fit, minmax(widthItem, 1fr))
            -->
             <!-- <product v-for="i in 10" :item="products[i]" :style="{minWidth:widthItem, marginLeft:'30px'}"/> -->

             <div v-for="(item, index) in products" :style="{minWidth:widthItem, display: flex, height: '100%'}">
                <product :key="index" :font-size-large="fontSizeLarge" :font-size-light="fontSizeLight" :size-image="sizeImage"
                :item="item" :style="{height: heightGrid}"/>
            </div>

             <!-- <product v-for="(item, index) in products" :key="index" :item="item" class="product"/> -->

            <!--
             <product :item="products[1]"/>
             <product :item="products[1]"/>  -->

        </div>
    </div>
</template>


<style lang="scss" scoped>

    // .product
    // {
    //     // width: 20%;
    //     // min-width: 250px;
    //     // background-color:aqua;
    //     // display: flex;
    //     // margin-right: 15px;
    //     // height: 500px;
    // }
    .test
    {
        background-color:aquamarine;
    }

    // .container
    // {
    //     overflow: hidden;
    //     display: flex;
    //     flex-direction: column;
    // }

    .product-carts
    {
        display: grid;

        grid-column-gap: 15px;
        grid-row-gap: 15px;
        overflow: auto;
        overflow-y: hidden;

        grid-auto-flow: column;

        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;

        &::-webkit-scrollbar {
                height: 5px;
                width: 5px;
                background-color: #cbcbcb;
                scrollbar-color: #cbcbcb #007268;
            }
            &::-webkit-scrollbar-thumb {
                background-color: #007268;
            }

    }



</style>
