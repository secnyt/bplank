import Link from 'next/link'

import React from 'react'
import styles from '../../../styles/Home.module.css'
import navStyles from '../../../styles/Navbar.module.css'

import Logo from '../logo'

export default class NavBar extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className={navStyles.navbar}>
        
        <div className={navStyles.navleftalign}>    
          
          <Logo className={navStyles.mainlogo} dimensions={80}/>
          <span className={navStyles.mainlogotext}>BPLANK</span>
          
        </div>

        <div className={navStyles.navrightalign}>
          
          <div className={navStyles.navmenuitems}>
            <Link href="/explore"><a>Explore</a></Link>
          </div>
          
          <div className={navStyles.navsignincontainer}>
            <Link href="/sign-in"><a className={navStyles.navsigninbutton}>Sign In</a></Link>
            <div className={ navStyles.navgetstarted }>
              <Link href="/sign-up"><a className={ navStyles.navgetstartedbutton }>Get Started</a></Link>
            </div>
          </div>
          
        </div>
        
      </div>
    )
  }
}