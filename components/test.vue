<template>
    <div>
      <button @click="if (showComponent) showComponent = false; else showComponent = true">Показать компоненту</button>
      <div>
        <img src="img" v-if="showComponent"/>
      </div>
    </div>
  </template>
  
  <script>

  export default 
  {
    data() {
      return {
        showComponent: false
      }
    }
  }
  </script>
  
  