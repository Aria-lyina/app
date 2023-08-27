// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@use "app.scss" as *;'
  //       }
  //     }
  //   }
  // }
  //}
  css: [
    '@/assets/app.scss'
  ]
})

// import { defineCustomElement } from 'vue'
// import CurrentTime from './components/HeaderButton.vue'

// const CurrentTimeElement = defineCustomElement(CurrentTime)
// customElements.define('current-time', CurrentTimeElement)