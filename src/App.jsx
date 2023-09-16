import { useState } from 'react'
import './App.css'
import { Container } from 'react-bootstrap'
import {MyNavbar, Hero, Stats, Business, Billing, Footer} from './Components/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Link as ScrollLink, Element } from 'react-scroll';


function App() {

  return (
    <Container className='container'>
      <MyNavbar/>
      <Element name="home">
  <Hero />
</Element>
<Element name="about">
  <Stats />
</Element>
<Element name="features">
  <Business />
</Element>
<Element name="billing">
  <Billing />
</Element>

      <Footer/>
    </Container>
  )
}

export default App
