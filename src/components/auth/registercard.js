import Link from 'next/link'

import React from 'react'

import authStyles from '../../../styles/auth/AuthCard.module.css'

export default class RegisterCard extends React.Component {
  constructor (props) {
    super(props)
    this.props = props
    this.getFormData = this.getFormData.bind(this)
  }

  render () {
    return (
      <div className={authStyles.card}>
        <span className={authStyles.cardheader}>Register</span>
        <div className={authStyles.cardbody}>
          <form className={authStyles.form} action="/api/auth" method="post">
            <div className={authStyles.formgroup}>
              <label>Email</label><br/>
              <input name="email" type="text" className={authStyles.input}/>
              <div className={authStyles.invalidemail}>
                Invalid Email
              </div>
            </div>
            <div className={authStyles.formgroup}>
              <label>Username</label><br/>
              <input name="username" type="text" className={authStyles.input}/>
              <div className={authStyles.invalidusername}>
                Invalid Username
              </div>
            </div>
            <div className={authStyles.formgroup}>
              <label>Password</label><br/>
              <input name="password" type="password" className={authStyles.input}/>
              <div className={authStyles.invalidpassword}>
                Invalid Password
              </div>
            </div>
            <div className={authStyles.actions}>
              <input className={"ctabutton"} id={authStyles.submitbutton} type="submit" value="Register"/>
              <Link href="./signin" className={authStyles.otherpage}>Sign In</Link>
            </div>
          </form>
        </div>
      </div>
    )
  }

  getFormData () {
    
  }
  
}