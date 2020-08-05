import styled from 'styled-components'
import { device } from '../Device/device'

export const ResumeContainer = styled.section`
  background: #fff;
  padding-top: 90px;
  padding-bottom: 72px;
  overflow: hidden;

  a, a:visited {
    color: #11ABB0;
  }

  a:hover, a:focus {
    color: #313131;
  }

  h1 {
    font: 18px/24px 'opensans-bold', sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  h1 span {
    border-bottom: 3px solid #11ABB0;
    padding-bottom: 6px;
  }

  h3 {
    font: 25px/30px 'opensans-bold', sans-serif;
  }

  @media ${device.laptop} {
    h1 {
      font: 16px / 24px 'opensans-bold',sans-serif;
    }
  }
  @media ${device.tablet} {
    h1 {
      letter-spacing: 3px;
    }

    h3 {
      text-align: center;
    }
  }
`

export const HeaderCol = styled.div`
  padding-top: 9px;

  @media ${device.tablet} {
    padding-top: 0;
    margin-bottom: 48px;
    text-align: center;
  }
`

export const MainCol = styled.div`
  padding-right: 10%;

  @media ${device.laptop} {
    padding-right: 5%;
  }
  @media ${device.tablet} {
    padding-right: 30px;
  }
`

export const Work = styled.div`
  margin-bottom: 48px;
  padding-bottom: 24px;
  /* border-bottom: 1px solid #E8E8E8; */
`

export const WorkInfo = styled.p`
  font: 16px / 24px 'librebaskerville-italic', serif;
  color: #6E7881;
  margin-bottom: 18px;
  margin-top: 9px;

  span {
    margin-right: 5px;
    margin-left: 5px;
  }

  @media ${device.tablet} {
    text-align: center;
  }
`

export const WorkDate = styled.em`
  font: 15px / 24px 'opensans-regular', sans-serif;
  margin-top: 6px;
`