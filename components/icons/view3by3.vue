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
      <circle class="st0" cx="25" cy="25" r="5.5"/>
      <circle class="st0" cx="25" cy="40" r="5.5"/>
      <circle class="st0" cx="25" cy="10" r="5.5"/>
      <circle class="st0" cx="10" cy="25" r="5.5"/>
      <circle class="st0" cx="10" cy="40" r="5.5"/>
      <circle class="st0" cx="10" cy="10" r="5.5"/>
      <circle class="st0" cx="40" cy="25" r="5.5"/>
      <circle class="st0" cx="40" cy="40" r="5.5"/>
      <circle class="st0" cx="40" cy="10" r="5.5"/>
    </svg>
</template>