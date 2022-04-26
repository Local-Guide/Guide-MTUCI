import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

// Styles
import './index.css'

// Screens
import Root from './screens/Root'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <Root />
  </StrictMode>
)
