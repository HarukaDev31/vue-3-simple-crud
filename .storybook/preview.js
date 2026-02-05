import { setup } from '@storybook/vue3'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import '../src/style.css'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light'
  }
})

setup((app) => {
  app.use(vuetify)
})

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<v-app><v-main><v-container><story /></v-container></v-main></v-app>'
    })
  ]
}

export default preview
