import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import Router from 'vue-router'
import Vuex from 'vuex'
import '@/style/main.scss'
import { components, formatDuration } from '@/shared/components'
import App from '@/app/App.vue'
import { setupRouter } from '@/shared/router'
import { setupStore } from '@/shared/store'
import { API } from '@/shared/api'
import { AuthService } from '@/auth/service'
import { setupAudio } from './player/store'
import { createApp } from '@/compat'

declare module 'vue/types/vue' {
  interface Vue {
    $auth: AuthService
    $api: API
  }
}

Vue.use(VueCompositionAPI)
Vue.use(Router)
Vue.use(Vuex)
Vue.config.productionTip = false

const authService = new AuthService()
const api = new API(authService)
const router = setupRouter(authService)
const store = setupStore(authService, api)
setupAudio(store, api)

const app = createApp({ render: (h: any) => h(App), router, store })

app.config.globalProperties.$auth = authService
app.config.globalProperties.$api = api
app.config.globalProperties.$formatDuration = formatDuration

app.config.errorHandler = (err: any) => {
  // eslint-disable-next-line
  console.error(err)
  store.commit('setError', err)
}

Object.entries(components).forEach(([key, value]) => {
  app.component(key, value)
})

app.use(router)

app.mount('#app')
