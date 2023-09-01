<!-- 
<script setup>
defineProps({
  stars: Number,
  colorActive: 
  {
    String,
    default: '#ffff00' 
  } 
})

</script>

<template>
    <div class="stars-container">
        <div v-for="i in 5" :class="{ active: i <= stars }">★</div>
    </div>
</template>

<style lang="scss" scoped>
    
    .active 
    {
        // color:var(color-active, #ffa200);
        color: #00ffea;
    }

    .stars-container
    {
        display: flex;
        flex-direction: row;
    }
</style> -->



<script setup>
defineProps({
  stars: String,
  colorActive: 
  {
    String,
    default:'#00ffc3'
  } 
})

</script>

<template>
    <div class="stars-container">
        <div v-for="i in 5" :style="{color: colorActive}">
            <div :class="{ noactive: i > stars}">★</div>
        </div>
    </div>
</template>

<!-- :style="{backgroundColor: colorActive}" -->

<style lang="scss" scoped>
    
    .noactive
    {
        // all: initial;
        color: var(--light-color-text)
    }
    .stars-container
    {
        display: flex;
        flex-direction: row;
    }
</style>
