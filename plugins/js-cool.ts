import { defineNuxtPlugin } from '#app'
import { delay as Delay, addEvent, removeEvent } from 'js-cool'

export default defineNuxtPlugin(nuxtApp => {
    // @ts-ignore
    nuxtApp.vueApp.config.globalProperties.$delay = new Delay()
    nuxtApp.vueApp.config.globalProperties.$addEvent = addEvent
    nuxtApp.vueApp.config.globalProperties.$removeEvent = removeEvent
})
