import { defineNuxtPlugin } from '#app'
import * as ElementPlus from 'element-plus/lib'
import 'element-plus/dist/index.css'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(ElementPlus)
})
