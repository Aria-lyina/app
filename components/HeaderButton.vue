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

  <script>
  export default {
    name: 'button-header', // новое имя компонента

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

  