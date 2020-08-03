import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import HeaderBackground from '../../images/header-background.jpg'

import { HeaderContainer, Banner, BannerText, Social, ScrollDown, NavWrap, MobileBtn, NavWrapUl } from './style'
const Header = ({ resumeData }) => {
  console.log(resumeData)
  const { name, social } = resumeData.data

  const networks = social.map(({name, url, className}) => (
    <li key={name}>
      <a href={url} target="_blank">
        <FontAwesomeIcon icon={fab[className]} />
      </a>
    </li>
  ))
  return (
    <HeaderContainer id="home" style={{ backgroundImage: `url(${HeaderBackground})` }}>
      <NavWrap id="nav-wrap">
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
        <BannerText className="banner-text">
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