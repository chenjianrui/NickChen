import React, { useState, useEffect } from 'react';

import Header from './components/Header/Header'
import About from './components/About/About'

function App() {
  const [resumeData, setResumeData] = useState(null)

  useEffect(() => {
    const fetchResumeData = async () => {
      const response = await fetch('/resumeData.json');
      const resumeData = await response.json();
      console.log(resumeData)
      setResumeData(resumeData)
    }
    fetchResumeData();
  }, [])

  return (
    <>
      {
        resumeData && 
        <>
          <Header resumeData={resumeData}/>
          <About resumeData={resumeData}/>
        </>
      }
    </>
  );
}

export default App;
