import styled from 'styled-components'

export const SectionContainer = styled.section`
  background: #2B2B2B;
  padding-top: 96px;
  padding-bottom: 66px;
  overflow: hidden;

  a, a:visited {
    color: #fff;
  }

  a:hover, a:focus {
    color: #11ABB0
  }

  h2 {
    font: 22px/30px 'opensans-bold', sans-serif;
    color: #fff;
    margin-bottom: 12px;
  }

  p {
    line-height: 30px;
    color: #7A7A7A;
  }
`

export const ProfilePic = styled.img`
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 100%;
`

export const ContactDetails = styled.div`
  width: 41.66667%;
`