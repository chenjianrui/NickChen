import styled from 'styled-components'
import { motion } from 'framer-motion'

export const HeaderContainer = styled.header`
  position: relative;
  height: 100vh;
  min-height: 500px;
  width: 100%;
  background: #161415 no-repeat top center;
  background-size: cover !important;
  -webkit-background-size: cover !important;
  text-align: center;
  overflow: hidden;

  :before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }
`

export const Banner = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin: 0 auto;
  width: 85%;
  padding-bottom: 30px;
  text-align: center;
`

export const BannerText = styled(motion.div)`
  width: 100%;

  h1 {
    font: 90px/1.1em "Noto Serif";
    color: #fff;
    letter-spacing: -2px;
    margin: 0 auto 18px auto;
    text-shadow: 0px 1px 3px rgba(0, 0, 0, .8);
  }

  h3 {
    font: 18px/1.9em 'librebaskerville-regular', serif;
    color: #A8A8A8;
    margin: 0 auto;
    width: 70%;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, .5);
  }

  h3 span, h3 a {
    color: #fff;
  }

  hr {
    width: 60%;
    margin: 18px auto 24px auto;
    border-color: #2F2D2E;
    border-color: rgba(150, 150, 150, .1);
  }
`

export const Social = styled.ul`
  margin: 24px 0;
  padding: 0;
  font-size: 30px;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, .8);

  li {
    display: inline-block;
    margin: 0 15px;
    padding: 0;
  }

  li a {
    color: #fff;
  }

  li a:hover {
    color: #11ABB0
  }
`

export const ScrollDown = styled.p`
  a {
    position: absolute;
    bottom: 30px;
    left: 50%;
    margin-left: -29px;
    color: #fff;
    display: block;
    height: 42px;
    width: 42px;
    font-size: 42px;
    line-height: 42px;
    color: #fff;
    border-radius: 100%;
    transition: all .3s ease-in-out;
  }

  a:hover {
    color: #11ABB0;
  }
`
export const NavWrap = styled(motion.nav)`
  font: 12px 'opensans-bold', sans-serif;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  margin: 0 auto;
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  background-color: ${props => props.isTop ? null : '#333'};

  ul, li, a {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
  }
`

export const MobileBtn = styled.div`
  display: none;
`

export const NavWrapUl = styled.ul`
  min-height: 48px;
  width: auto;
  text-align: center;

  li {
    position: relative;
    list-style: none;
    height: 48px;
    display: inline-block;
  }

  li a {
    display: inline-block;
    padding: 8px 13px;
    line-height: 32px;
    text-decoration: none;
    text-align: left;
    color: #fff;
    transition: color .2s ease-in-out;
    cursor: pointer;
  }

  li a:active {
    background-color: transparent;
  }

  li.current a {
    color: #F06000;
  }
`