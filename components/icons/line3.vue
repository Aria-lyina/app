<script setup>
defineProps({
  color: 
  {
    String,
    default:"var(--btn-color2)"
  },
  height:
  {
    String,
    default: "15px"
  }
})
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" :style="{height: height}" :fill='color' viewBox="0 0 50 50">
      <rect y="21" class="st0" width="50" height="8"/>
      <rect y="3" class="st0" width="50" height="8"/>
      <rect y="39" class="st0" width="50" height="8"/>
    </svg>
</template>