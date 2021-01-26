import React, { Component } from 'react'

import Header from './components/Header'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import OurAims from './components/OurAims'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Services/>
        <WhyUs/>
        <OurAims/>
        <ContactForm/>
        <Footer/>
      </div>
    )
  }
}
