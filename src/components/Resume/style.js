import styled from 'styled-components'

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
`

export const HeaderCol = styled.div`
  padding-top: 9px;
`

export const MainCol = styled.div`
  padding-right: 10%;
`

export const Work = styled.div`
  margin-bottom: 48px;
  padding-bottom: 24px;
  /* border-bottom: 1px solid #E8E8E8; */
`

export const WorkInfo = styled.p`
  font: 16px/24px 'librebaskerville-italic', serif;
  color: #6E7881;
  margin-bottom: 18px;
  margin-top: 9px;

  span {
    margin-right: 5px;
    margin-left: 5px;
  }
`

export const WorkDate = styled.em`
  font: 15px/24px 'opensans-regular', sans-serif;
  margin-top: 6px;
`