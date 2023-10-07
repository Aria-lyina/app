<template>
    <div>
      <button @click="showComponent = !showComponent">Показать компоненту</button>
      <div>
<!--        <img src="img" v-if="showComponent"/>-->
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

