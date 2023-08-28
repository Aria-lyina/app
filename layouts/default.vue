<script setup>
import AppHeader from '@/components/AppHeader.vue';

//   export default {
//     components: {
//         AppHeader // новое имя компонента
//     },
//     methods: {
//       submitForm() {
//         // ...
//       }
//     }
//   }
</script>

<template>
 
    <AppHeader/>
    <div class="default">
      <slot />
    </div>
  </template>

  
