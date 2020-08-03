import React from 'react'

import { ResumeContainer, HeaderCol, MainCol, Work, WorkInfo, WorkDate } from './style'

const Resume = ({ resumeData }) => {
  const { works } = resumeData.data.resume

  const work = works.map(({company, title, years, description, skills}) => (
    <div key={company}>
      <h3>
        {company}
      </h3>
      <WorkInfo>
        {title} <WorkDate>{years}</WorkDate>
      </WorkInfo>
      <p>
        {description}
      </p>
      <p>
        Skills: {skills}
      </p>
    </div>
  ))
  
  return (
    <ResumeContainer id="resume">
      <Work className="row">
        <HeaderCol className="three columns">
          <h1>
            <span>Work</span>
          </h1>
        </HeaderCol>
        <MainCol className="nine columns">
          {work}
        </MainCol>
      </Work>
    </ResumeContainer>
  )
}

export default Resume