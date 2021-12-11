import { createApp as createAppCompat } from '@vue/composition-api'
import Vue from 'vue'

export function createApp(rootComponent: any) {
  const app = createAppCompat(rootComponent) as any
  app.config.globalProperties = Vue.prototype
  return app
}
