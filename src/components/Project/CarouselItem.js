import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

const carouselItem = ({ img, text, url }) => {
  return (
    <div>
      <div>
        <img src={img}/>
      </div>
      <p style={{ padding: '10px' }}>
        {text}
        { url && <a href={url} target='_blank'>連結 <FontAwesomeIcon icon={fas.faExternalLinkAlt}/></a> }
      </p>
    </div>
  )
}
export default carouselItem
