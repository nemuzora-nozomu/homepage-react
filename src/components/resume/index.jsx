import React from 'react'
import Header from '../header'
import Intro from '../intro'
import Skills from '../skills'
import Experiences from '../experiences'
import Education from '../education'
import Languages from '../languages'
import Footer from '../footer'
import './resume.css'



const Resume = () => {
  return (
    <div className="resume">
      <Header />
      <div className="horizontal-line"></div>
      <Intro />
      <div className="horizontal-line"></div>
      <Skills />
      <div className="horizontal-line"></div>
      <div className="info">
        <div className="info__left">
          <Experiences />
        </div>
        <div className="info__right">
          <Education />
          <Languages />
        </div>
      </div>
      <div className="horizontal-line"></div>
      <Footer />
    </div>
  )
}

export default Resume