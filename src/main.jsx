import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import Hero from './hero.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero   condition={true}    name={"fabiha"} fathername={"sohail"} class={12} skill={"web"} />
    <Hero      condition={false}  name={"Hamna"} fathername={"sohail"} class={7} skill={"ai"}/>

  </StrictMode>,
)
