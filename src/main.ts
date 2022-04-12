import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import liff from '@line/liff'

async function main() {
  const LIFF_ID = import.meta.env.VITE_APP_LIFF_ID as string

  await liff.init({ liffId: LIFF_ID })
  // if (!liff.isLoggedIn()) {
  //   liff.login()
  // }

  createApp(App).use(router).mount('#app')
}

main()
