import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'

import HeaderBackground from '../../images/header-background.jpg'

import { HeaderContainer, Banner, BannerText, Social, ScrollDown, NavWrap, MobileBtn, NavWrapUl } from './style'
const Header = ({ resumeData }) => {
  const [show, setShow] = useState(true)
  const [isTop, setIsTop] = useState(true)
  const { name, social } = resumeData.data

  const handleScroll = e => {
    const headerHeight = document.querySelector('#home').clientHeight
    const scrollTop = document.documentElement.scrollTop + document.body.scrollTop
    if((scrollTop > headerHeight * .2) && (scrollTop < headerHeight)){
      setShow(false)
      setIsTop(true)
    } else {
      if(scrollTop < headerHeight * .2){
        setShow(true)
      } else {
        setShow(true)
        setIsTop(false)
      }
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const networks = social.map(({name, url, className}) => (
    <li key={name}>
      <a href={url} target="_blank">
        <FontAwesomeIcon icon={fab[className]} />
      </a>
    </li>
  ))
  return (
    <HeaderContainer id="home" style={{ backgroundImage: `url(${HeaderBackground})` }}>
      <NavWrap
        id="nav-wrap" 
        show={show} 
        isTop={isTop}
        animate={{ opacity: show ? 1 : 0 }}
        transition={{ ease: "easeOut", duration: .5 }}
        >
        <MobileBtn className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</MobileBtn>
        <MobileBtn className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</MobileBtn>
        <NavWrapUl id="nav" className="nav">
          <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
          <li><a className="smoothscroll" href="#about">About</a></li>
          <li><a className="smoothscroll" href="#resume">Resume</a></li>
          <li><a className="smoothscroll" href="#portfolio">Works</a></li>
          <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
          <li><a className="smoothscroll" href="#contact">Contact</a></li>
        </NavWrapUl>
      </NavWrap>
      <Banner className="row banner">
        <BannerText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .5, duration: 1.5 }}
        >
          <h1 className="responsive-headline">I'm {name}.</h1>
          <hr />
            <Social className="social">
              {networks}
            </Social>
        </BannerText>
      </Banner>
      <ScrollDown className="scrolldown">
        <a className="smoothscroll" href="#about"><FontAwesomeIcon icon={fas.faAngleDown}/></a>
      </ScrollDown>
    </HeaderContainer>
  )
}

export default Header