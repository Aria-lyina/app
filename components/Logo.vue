<template>
    <NuxtLink to="/" class="button-header center">
        <div class="content-button ">
                <img src="img/rozetka-logo_1.png" class="ic" :style="{ height: height }">
        </div>
    </NuxtLink>
</template>

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

