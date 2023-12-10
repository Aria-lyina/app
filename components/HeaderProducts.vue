<script setup>

import LinkGo from '@/components/SupComp/LinkGo.vue';


 defineProps({
  title: String,
  link:
  {
        type: String,
        default: '/'
  },
  nameLink:
  {
    type: String,
    default: "Смотреть все"
  }
})
</script>


<template>
     <div class="top-text">{{ title }} 
        <!-- <NuxtLink class="go-look" :to="link">{{ nameLink }}<img class="icon-in-text" src="/img/icon/arrow-2.svg"></NuxtLink> -->
        <LinkGo class="go-look" :nameLink="nameLink"/>
     </div>
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
