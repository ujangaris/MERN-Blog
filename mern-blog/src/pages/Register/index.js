import React from 'react'
import { RegisterBg } from '../../assets'
import { Button, Gap, Input } from '../../components'
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
        <Gap height={18} />
        <Input label='Email' placeholder='email' />
        <Gap height={18} />
        <Input label='Password' placeholder='password' />
        <Gap height={50} />
        <Button title='Register' />
      </div>
    </div>
  )
}

export default Register
