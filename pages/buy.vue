<script setup>
    import Cart from '@/components/ShoppingСartMini.vue';
    import DataBuy from '@/components/DataBuy.vue';

</script>

<template>
    <div class="flex background-default space-between">
        <div class="content marg-right-big">
            <DataBuy/>
        </div>

        <div class="shopping-cart">
            <Cart/>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.content
{
    // background-color: rgb(249, 246, 255);
    // background-color: var(--background);
    width: 60%;
    position: relative;
    // height: 1000px;
}

.shopping-cart  
{
    // background-color: aqua;
    width: 40%;
    min-width: 400px;
    // height: 1000px;
}

</style>