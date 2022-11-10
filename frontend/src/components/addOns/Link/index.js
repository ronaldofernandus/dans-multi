import React from 'react'
import './Link.css';

const Link = ({title,onClick}) => {
  return (
    <p className="Link" onClick={onClick}>{title}</p>
  )
}

export default Link