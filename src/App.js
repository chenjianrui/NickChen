import React, { useState, useEffect } from 'react';
import { useViewportScroll } from 'framer-motion'

import Header from './components/Header/Header'
import About from './components/About/About'
import Resume from './components/Resume/Resume'
import Project from './components/Project/Project'

function App() {
  const [resumeData, setResumeData] = useState(null)
  const [show, setShow] = useState(true)
  const [isTop, setIsTop] = useState(true)
  const [navigation, setNavigation] = useState('home')
  const { scrollY } = useViewportScroll()

  const handleScroll = () => {
    const home = document.querySelector('#home').getBoundingClientRect().top
    const about = document.querySelector('#about').getBoundingClientRect().top
    const resume = document.querySelector('#resume').getBoundingClientRect().top
    const project = document.querySelector('#project').getBoundingClientRect().top
    
    return () => {
      const headerHeight = document.querySelector('#home').clientHeight
      if(scrollY.current <= (home + 50)){
        setNavigation('home')
      }
      if(scrollY.current >= about){
        setNavigation('about')
      }
      if(scrollY.current >= resume){
        setNavigation('resume')
      }
      if(scrollY.current >= (project )){
        setNavigation('project')
      }
      if((scrollY.current > headerHeight * .2) && (scrollY.current < headerHeight)){
        setShow(false)
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
  }
  
  useEffect(() => {
    const fetchResumeData = async () => {
      const response = await fetch('/resumeData.json');
      const resumeData = await response.json();
      console.log(resumeData)
      setResumeData(resumeData)
      window.addEventListener('scroll', handleScroll())
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
          <Project resumeData={resumeData}/>
        </>
      }
    </>
  );
}

export default App;
