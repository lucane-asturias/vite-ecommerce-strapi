import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
// import { createPinia } from 'pinia'

import './styles/styles.scss' // global styles
import 'semantic-ui-css/semantic.min.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
})

createApp(App)
  // .use(createPinia())
  .use(vuetify)
  .use(router)
  .mount('#app')