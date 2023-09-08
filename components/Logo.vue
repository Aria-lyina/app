<script setup>
//    @TODO use composition api, и убери height props
defineProps({
    link:
    {
      type:String,
      default: '/'
    },
    height: 
    {
            type: String,
            default: "35px",
    },
  })
</script>


<template>
    <NuxtLink :to="link">
        <img src="/img/rozetka-logo_1.png" :style="{height: height}">
    </NuxtLink>
</template>





