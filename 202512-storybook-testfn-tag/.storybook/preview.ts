import { definePreview } from '@storybook/react-vite'

import '../src/index.css'

export default definePreview({
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  addons: [],
})
