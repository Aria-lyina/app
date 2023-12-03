<script setup>
defineProps({
  color: 
  {
    String,
    default:"var(--light-color-text)"
  },
  height:
  {
    String,
    default: "10px"
  }
})
</script>


<template>
    <svg xmlns="http://www.w3.org/2000/svg"  :style="{height: height}" :fill='color' viewBox="0 0 50 50">
        <polygon class="st0" points="49.48,4.05 45.95,0.52 25,21.46 4.05,0.52 0.52,4.05 21.46,25 0.52,45.95 4.05,49.48 25,28.54 
	45.95,49.48 49.48,45.95 28.54,25 "/>
    </svg>
</template>