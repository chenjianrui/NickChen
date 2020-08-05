import React, { useState, useEffect } from 'react';
import { useViewportScroll } from 'framer-motion'

import Header from './components/Header/Header'
import About from './components/About/About'
import Resume from './components/Resume/Resume'

function App() {
  const [resumeData, setResumeData] = useState(null)
  const [show, setShow] = useState(true)
  const [isTop, setIsTop] = useState(true)
  const [navigation, setNavigation] = useState('home')
  const { scrollY } = useViewportScroll()

  const handleScroll = e => {
    const headerHeight = document.querySelector('#home').clientHeight
    const aboutHeight = document.querySelector('#about').clientHeight
    const resumeHeight = document.querySelector('#resume').clientHeight
    if(scrollY.current < aboutHeight){
      setNavigation('home')
    }
    if(scrollY.current >= headerHeight && scrollY.current < resumeHeight){
      setNavigation('about')
    }
    if(scrollY.current > resumeHeight){
      setNavigation('resume')
    }
    if((scrollY.current > headerHeight * .2) && (scrollY.current < headerHeight)){
      setShow(true)
      setIsTop(true)
    } else {
      if(scrollY.current < headerHeight * .2){
        setShow(true)
      } else {
        setShow(true)
        setIsTop(false)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    const fetchResumeData = async () => {
      const response = await fetch('/resumeData.json');
      const resumeData = await response.json();
      console.log(resumeData)
      setResumeData(resumeData)
    }
    fetchResumeData();
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {
        resumeData && 
        <>
          <Header 
            resumeData={resumeData} 
            show={show} 
            isTop={isTop} 
            navigation={navigation}
            setNavigation={setNavigation}
          />
          <About resumeData={resumeData}/>
          <Resume resumeData={resumeData}/>
        </>
      }
    </>
  );
}

export default App;
