<script setup>
    import ArrLeft from '@/components/icons/miniArrLeft.vue';

    defineProps({
    color: 
    {
        String,
        default:"var(--primary-color-text)"
        // default:"black"
    },
    link:
    {
        type: String,
        default: '/'
    },
    nameLink:
    {
        type: String,
        default: "Вернутся"
    }
    })

</script>

<template>
    <NuxtLink class="back" :style="{color:color}" :to="link"><ArrLeft :color="color" class="back-arr"/>{{ nameLink }}</NuxtLink>
</template>

<style lang="scss" scoped>

.back
{
    &-arr 
    {
        margin-right: 8px;
    }
}

</style>