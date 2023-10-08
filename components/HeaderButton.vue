<script setup>
//    @TODO если спользуешь composition api в других, тогда используй его везде
defineProps ({
      icon: {
          type: String
      },
      margin: {
          type: String,
          default: "5px",
          },
  })
</script>

<style lang="scss" scoped>

    .button-header
    {
        color: var(--primary-color-text);
        padding-left: 0px;
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
        font-size: var(--fontsize-small-default);
        // font-family: Roboto,Arial,sans-serif;
    }

    .header-right-buttons
    {
        margin-left: auto;
    }

</style>

<template>
    <button class="button-header">
        <div class="content-button">
                <img v-if="icon" :src ="icon" class="icon-btn">
                <div class="text-head" :style="{ marginLeft: margin }">
                    <slot/>
                </div>
        </div>
    </button>
  </template>

