import React from 'react'

const Card = ({props, header}) => {
  return (
    <div>
        <h1>{header}</h1>
        <h2>{props}</h2>
    </div>
  )
}

export default Card