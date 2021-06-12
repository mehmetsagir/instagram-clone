import React, { useState } from 'react'

import Button from '@components/Button'
import styles from '@modules/components/Auth/Form.module.scss'

const SignInForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordIsHide, setPasswordIsHide] = useState(true)
  const [loading, setLoading] = useState(false)

  const formControl = () => {
    if (username.length > 0 && password.length > 0) {
      return false
    }
    return true
  }

  const inputActiveClass = el => {
    if(el.length > 0) return styles.Active
    return ''
  }

  return (
    <form className={styles.Form}>
      <label className={`input-box ${inputActiveClass(username)}`}>
        <input className="input" value={username} onChange={(e) => setUsername(e.target.value)} type="text" />
        <span>Phone number, username, or email</span>
      </label>  
      <label className={`input-box ${inputActiveClass(password)}`}>
        <input className="input" value={password} onChange={(e) => setPassword(e.target.value)} type={passwordIsHide ? 'password' : 'text'} />
        <span>Password</span>
        <button className="btn" type="button" onClick={() => setPasswordIsHide(!passwordIsHide)}>{ passwordIsHide ? 'Show' : 'Hide' }</button>
      </label>  
      <Button disabled={formControl()} loading={loading}>Log In</Button>
    </form> 
  )
}

export default SignInForm
