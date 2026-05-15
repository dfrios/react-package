import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Hr } from './components/Hr';

import './styles.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='mt-10'>
      <Hr/>
    </div>
  </StrictMode>,
)
