<script setup>

import ArrRight from '@/components/icons/miniArrRight.vue';

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
        default: "Перейти"
    }
    })
</script>

<template>
    <NuxtLink class="go" :style="{color:color}" :to="link">{{ nameLink }}<ArrRight :color="color" class="go-arr"/></NuxtLink>
</template>

<style lang="scss" scoped>
.go 
{
    &-arr
    {
        margin-left: 8px;
    }
}
</style>