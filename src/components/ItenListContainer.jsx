import React from 'react'

const ItenListContainer = (props) => {
  const {mensaje} =props

  return (
    <div className='productos'>{mensaje}</div>
  )
}

export default ItenListContainer