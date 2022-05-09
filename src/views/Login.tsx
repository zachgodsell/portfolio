import React from 'react'
import './Login.css'
import { Button } from '../stories/Button'
import { Input } from '../stories/Input'

export const Login = () => {
  return (
    <div className='login'>
        <div className='login_container'>
            <h3>Cool</h3>
            <Input type='text' label='username' size='medium' />
        </div>
    </div>
  )
}
