import { expect, waitFor } from 'storybook/test'
import preview from '../.storybook/preview'
import App from './App'

const meta = preview.meta({
  component: App,
  decorators: (Story) => (
    <div id="root">
      <Story />
    </div>
  ),
})

export const Default = meta.story()

Default.test('should be increment count', async ({ canvas, userEvent }) => {
  const button = await canvas.findByRole('button')

  await waitFor(() => expect(button).toHaveTextContent('count is 0'))
  await userEvent.click(button)
  await waitFor(() => expect(button).toHaveTextContent('count is 1'))
})

export const InteractionTest = Default.extend({
  play: async ({ canvas, userEvent }) => {
    const button = await canvas.findByRole('button')

    await waitFor(() => expect(button).toHaveTextContent('count is 0'))
    await userEvent.click(button)
    await waitFor(() => expect(button).toHaveTextContent('count is 1'))
  },
})
