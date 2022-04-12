import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import liff from '@line/liff'

// CSS
import './css/sanitize.css'

// liff.init後にcreatAppを実行
async function init() {
  const LIFF_ID = import.meta.env.VITE_APP_LIFF_ID as string

  await liff.init({ liffId: LIFF_ID })

  // if (!liff.isLoggedIn()) {
  //   liff.login()
  // }

  // Vueアプリを作成
  const app = createApp(App)

  // Vue Router
  app.use(router)

  app.mount('#app')
}

init()
