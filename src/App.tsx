import './App.css'

import Nav from "./components/Header/Nav/Nav"
import Main from './components/Body/Main/Main'
import About from './components/Body/About/About'
import Interest from './components/Body/Interest/Interest'
import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {

  return (
    <>
      <Nav/>
      <Main/>
      <About/>
      <Interest/>
      <SpeedInsights />
    </>
  )
}

export default App
