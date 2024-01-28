import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { GlobalStyle } from './components/styled/GlobalCss.js'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <App />
   
    </ThemeProvider>
  </React.StrictMode>,
)
