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
    default: "17px"
  }
})
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" :style="{height: height}" :fill='color' viewBox="0 0 50 50">
        <circle class="st0" cx="10" cy="10" r="3.5"/>
        <circle class="st0" cx="20" cy="10" r="3.5"/>
        <circle class="st0" cx="30.01" cy="10" r="3.5"/>
        <circle class="st0" cx="40.01" cy="10" r="3.5"/>
        <circle class="st0" cx="10" cy="20" r="3.5"/>
        <circle class="st0" cx="20" cy="20" r="3.5"/>
        <circle class="st0" cx="30" cy="20" r="3.5"/>
        <circle class="st0" cx="40" cy="20" r="3.5"/>
        <circle class="st0" cx="9.99" cy="30" r="3.5"/>
        <circle class="st0" cx="19.99" cy="30" r="3.5"/>
        <circle class="st0" cx="30" cy="30" r="3.5"/>
        <circle class="st0" cx="40" cy="30" r="3.5"/>
        <circle class="st0" cx="9.99" cy="40" r="3.5"/>
        <circle class="st0" cx="19.99" cy="40" r="3.5"/>
        <circle class="st0" cx="29.99" cy="40" r="3.5"/>
        <circle class="st0" cx="40" cy="40" r="3.5"/>
    </svg>
</template>