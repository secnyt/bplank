import Link from 'next/link'

import React from 'react'

import authStyles from "../../../styles/auth/AuthCard.module.css"

export default class SignInCard extends React.Component {
  constructor (props) {
    super(props)
    this.props = props
  }

  render () {
    return (
      <div className={authStyles.card}>
        <span className={authStyles.cardheader}>Sign In</span>
        <div className={authStyles.cardbody}>
          <form className={authStyles.form} onSubmit={() => {}}>
            <div className={authStyles.formgroup}>
              <label>Username</label><br/>
              <input name="username" type="text" className={authStyles.input}/>
            </div>
            <div className={authStyles.formgroup}>
              <label>Password</label><br/>
              <input name="password" type="password" className={authStyles.input}/>
            </div>
            <div className={authStyles.actions}>
              <input className={"ctabutton"} id={authStyles.submitbutton} type="submit" value="Sign In"/>
              <Link href="./register" className={authStyles.otherpage}>Register</Link>
            </div>
          </form>
        </div>
      </div>
    )
  }
  
}