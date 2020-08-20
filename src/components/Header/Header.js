import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import HeaderBackground from '../../images/header-background.jpg'

import { HeaderContainer, Banner, BannerText, Social, ScrollDown, NavWrap, MobileBtn, NavWrapUl } from './style'
const Header = ({ resumeData, show, isTop, navigation, setNavigation }) => {
  const { name, social } = resumeData.data

  const handleClickToElement = element => {
    setNavigation(element)
    const el = document.querySelector(`#${element}`)
    window.scrollTo({ 'behavior': 'smooth', 'top': el.offsetTop })
  }

  const networks = social.map(({name, url, className}) => (
    <li key={name}>
      <a href={url} target="_blank">
        <FontAwesomeIcon icon={fab[className]} />
      </a>
    </li>
  ))
  return (
    <HeaderContainer 
      id="home" 
      style={{ backgroundImage: `url(${HeaderBackground})` }}

    >
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
          <li className={navigation === 'home' ? 'current' : ''}>
            <a onClick={() => handleClickToElement('home')}>
              Home
            </a>
          </li>
          <li className={navigation === 'about' ? 'current' : ''}>
            <a onClick={() => handleClickToElement('about')}>
              About
            </a>
          </li>
          <li className={navigation === 'resume' ? 'current' : ''}>
            <a onClick={() => handleClickToElement('resume')}>
              Resume
            </a>
          </li>
          <li className={navigation === 'project' ? 'current' : ''}>
            <a onClick={() => handleClickToElement('project')}>
              Project
            </a>
          </li>
          {/* <li>
            <a onClick={() => handleClickToElement('works')}>
              Works
            </a>
          </li> */}
          {/* <li><a onClick={() => handleClickToElement('home')}>Testimonials</a></li>
          <li><a onClick={() => handleClickToElement('home')}>Contact</a></li> */}
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
      <ScrollDown>
        <a 
          onClick={() => handleClickToElement('about')}
        >
        <FontAwesomeIcon icon={fas.faAngleDown}/>
        </a>
      </ScrollDown>
    </HeaderContainer>
  )
}

export default Header