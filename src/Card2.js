import React from 'react'
import './card2.css'

const Card2 = props => {
  const { myColor2 } = props
  return <div className={`card2 ${myColor2 || ''}`}>{props.children}</div>
}

export default Card2
