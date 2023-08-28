<script>
export default {
  name: 'header-button', // новое имя компонента

  props: {
      icon: {
          type: String
      },
      margin: {
          type: String,
          default: "5px",
          },
  },

  methods: {
      onClick() {
      this.$emit('click');
      }
  }

}
</script>

<style lang="scss" scoped>

    .button-header
    {
        color: var(--primary-color-text-header);
        background-color:white;
        border:0px;
        padding-left: 0px;
        cursor: pointer;
        margin-right: 20px;
    }

    .content-button
    {
        display: flex;
    }

    .text-head
    {
        margin-top: auto;
        margin-bottom: auto;
        margin-left: 5px;
        /* background-color:aqua; */
        font-size: 13px;
    }

    .header-right-buttons
    {
        margin-left: auto;
    }

</style>

<template>
    <button class="button-header">
        <div class="content-button">
                <img v-if="icon" :src ="icon" class="ic">
                <div class="text-head" :style="{ marginLeft: margin }">
                    <slot/>
                </div> 
        </div>
    </button>
  </template>

