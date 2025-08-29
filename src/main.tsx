import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@radix-ui/themes/styles.css";
import { Theme } from '@radix-ui/themes'
import { GlobalStyles } from './main.styles.ts'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme>
      <GlobalStyles />
      <App />
    </Theme>
  </StrictMode>,
)
