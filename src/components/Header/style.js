import styled from 'styled-components'
import { motion } from 'framer-motion'
import { device } from '../Device/device'

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

  @media ${device.laptop} {
    padding-bottom: 12px;
  }

  @media ${device.tablet} {
    padding-bottom: 12px;
    padding-top: 6px;
  }

  @media ${device.mobileL} {
    padding-top: 24px;
  }
`

export const BannerText = styled(motion.div)`
  width: 100%;

  h1 {
    font: 7vw "Noto Serif";
    color: #fff;
    letter-spacing: -2px;
    margin: 0 auto 18px auto;
    text-shadow: 0px 1px 3px rgba(0, 0, 0, .8);
  }

  h3 {
    font: 40px/1.9em 'librebaskerville-regular', serif;
    color: #A8A8A8;
    margin: 0 auto;
    width: 70%;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, .5);
  }

  h3::after{
    content: '|';
  }

  h3.active::after{
    content: '|';
    animation: blink 1.5s infinite
    }
    @keyframes blink{
      from{
        opacity: 0;
      }
      to{
        opacity: 1;
      }
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
  @media ${device.laptop} {
    h1 {
      font-size: 5vw;
      letter-spacing: -1px;
      margin: 0 auto 12px auto;
    } 

    h3 {
      font: 17px/1.9em 'librebaskerville-regular', serif;
      width: 80%;
    }
    hr {
      width: 65%;
      margin: 12px auto;
    }
  }
  @media ${device.tablet} {
    h1 {
      /* font: 68px / 1.1em 'opensans-bold',sans-serif; */
    }

    h3 {
      font: 16px / 1.9em 'opensans-bold',sans-serif;
      width: 85%;
    }
    
    hr {
      width: 80%;
      margin: 10px auto;
    }
  }

  @media ${device.mobileL} {
    h1 {
      font: 40px / 1.1em 'opensans-bold',sans-serif;
      margin: 0 auto 24px auto;
    }

    h3 {
      font: 14px / 1.9em 'opensans-bold',sans-serif;
      width: 90%;
    }
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

  @media ${device.tablet} {
    margin: 18px 0 24px 0;
    font-size: 24px;
    line-height: 36px;
    li {
      margin: 0 10px;
    }
  }

  @media ${device.mobileL} {
    font-size: 20px;

    li {
      margin: 0 6px;
    }
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

  @media ${device.tablet} {
    display: none;
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

  @media ${device.laptop} {
    #nav-wrap {
      font-size: 11px;
      letter-spacing: 1.5px;
    }
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