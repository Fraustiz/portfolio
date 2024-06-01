import './App.css'

import Nav from "./components/Header/Nav/Nav"
import Main from './components/Body/Main/Main'
import About from './components/Body/About/About'
import Interest from './components/Body/Interest/Interest'
import Studies from './components/Body/Studies/Studies'

function App() {
  return (
    <>
      <Nav/>
      <Main/>
      <About/>
      <Interest/>
      <Studies/>
    </>
  )
}

export default App
