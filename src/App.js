import React from 'react'
import './App.css'
import {Header , Footer , Container, Hero, MostPopular ,LibraryGame} from './components/index'

function App() {
  return (
    <>
    <Header />
    <Container >
      <Hero/>
      <MostPopular/>
      <LibraryGame />
    </Container>
    <Footer />
    </>
  )
}

export default App
