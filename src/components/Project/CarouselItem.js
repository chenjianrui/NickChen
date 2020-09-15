import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

const carouselItem = ({ img, text, url, sourceCodeUrl }) => {
  return (
    <div>
      <div>
        <img src={img}/>
      </div>
      <p style={{ padding: '10px', textAlign: 'center' }}>
        {text}
        <br />
        { url && <a href={url} target='_blank'>作品連結 <FontAwesomeIcon icon={fas.faExternalLinkAlt}/></a> }
        <br />
        { sourceCodeUrl && <a href={sourceCodeUrl} target='_blank'>Source Code <FontAwesomeIcon icon={fas.faExternalLinkAlt}/></a> }
      </p>
    </div>
  )
}
export default carouselItem
