<script setup>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

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
    
    <AppFooter/>
  </template>

  
