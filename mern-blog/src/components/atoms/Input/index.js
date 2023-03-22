import React from 'react'
import './input.scss'
// panggilde ngan props : label & rest, rest artinya semua selain label
const Input = ({ label, ...rest }) => {
  return (
    <div className='input-wrapper'>
      <p className='label'>{label}</p>
      <input className='input' {...rest} />
    </div>
  )
}

export default Input
