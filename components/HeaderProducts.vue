<script setup>
 defineProps({
  title: String
})
</script>


<template>
     <div class="top-text">{{ title }} <NuxtLink class="go-look" to="/">Смотреть все <img class="icon-in-text" src="img/icon/arrow-2.svg"></NuxtLink> </div>
</template>

<style lang="scss" scoped>
    .go-look
    {
        display: flex;
        align-items: center;
        margin-left: auto;
    }

    .top-text
    {
        font-size: var(--fontsize-big-default);
        margin-bottom: 2%;
        display: flex;
        align-items: center
    }

</style>