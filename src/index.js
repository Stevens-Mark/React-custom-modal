import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ModeProvider } from './utils/context'
import GlobalStyle from './GlobalStyle'

ReactDOM.render(
  <React.StrictMode>
    <ModeProvider>
      <GlobalStyle />
        <App />
    </ModeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
