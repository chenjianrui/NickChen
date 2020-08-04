import React from 'react'
import profileImage from '../../images/profile.png'

import { SectionContainer, ProfilePic, ContactDetails } from './style'

const About = ({ resumeData }) => {
  const { bio, name, email, phone, address } = resumeData.data
  const { city, state } = address
  return (
    <SectionContainer id="about">
      <div className="row">
        <div className="three columns">
        <ProfilePic className="profile-pic"  src={profileImage} alt="Nick Chen Profile Pic" />
        </div>
        <div className="nine columns main-col" style={{ paddingRight: '5%' }}>
          <h2>About Me</h2>
          <p>{bio}</p>
          <div className="row">
            <ContactDetails className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span><br />
                <span>
                {city} {state}
                </span><br />
                <span>{phone}</span><br />
                <span>{email}</span>
              </p>
            </ContactDetails>
            <div className="columns download">
              <p>
                {/* <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default About