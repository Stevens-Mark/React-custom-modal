import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'
import { ModeProvider } from '../utils/context'

// test setup

const renderApp = () => {
  render(
    <ModeProvider>
        <App />
    </ModeProvider>)
}

// tests

describe('App', () => {

  it('Should render without crashing', async () => {
    renderApp()
  })

  it('should render a title', async () => {
    renderApp()
    expect(
      screen.getByRole('heading', {
        level: 1,
        text: 'Example',
      })
    ).toBeTruthy()
  })

  it('Should change theme', async () => {
    renderApp()
    const nightModeButton = screen.getByText(/Change Mode/i)
    expect(nightModeButton.textContent).toBe('Change Mode : ☀️')
    fireEvent.click(nightModeButton)
    expect(nightModeButton.textContent).toBe('Change Mode : 🌙')
  })

})



