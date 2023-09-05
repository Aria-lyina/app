<script>
export default {
  name: 'LinkLogo', // новое имя компонента

  props: {
      height: {
          type: String,
          default: "35px",
          },
  },

  methods: {
      onClick() {
      this.$emit('click');
      }
  }
}
</script>


<template>
    <NuxtLink to="/">
        <img src="/img/rozetka-logo_1.png" :style="{ height: height }">
    </NuxtLink>
</template>



