import React from 'react'
import { RegisterBg } from '../../assets'
import { Input } from '../../components'
import './register.scss'

const Register = () => {
  return (
    <div className='main-page'>
      <div className='left'>
        <img src={RegisterBg} className='bg-image' alt='imageBg' />
      </div>
      <div className='right'>
        <p className='title'>Register</p>
        {/* pasang Input */}
        <Input label='Full Name' placeholder='Full Name' />
        <Input label='Email' placeholder='email' />
        <Input label='Password' placeholder='password' />
      </div>
    </div>
  )
}

export default Register
