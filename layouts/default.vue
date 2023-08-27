<template>
 
    <AppHeader/>
    <div class="default">
      <slot />
    </div>
  </template>

  
  <script>
  import AppHeader from '@/components/AppHeader.vue';
  
  export default {
    components: {
        AppHeader // новое имя компонента
    },
    methods: {
      submitForm() {
        // ...
      }
    }
  }
  </script>