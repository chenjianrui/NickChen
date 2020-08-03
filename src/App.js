import React, { useState, useEffect } from 'react';

import Header from './components/Header/Header'

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
      {resumeData && <Header resumeData={resumeData}/>}
    </>
  );
}

export default App;
