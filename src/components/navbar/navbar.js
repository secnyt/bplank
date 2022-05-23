import Link from 'next/link'

import React from 'react'
import styles from '../../../styles/Home.module.css'
import navStyles from '../../../styles/Navbar.module.css'
import { useUser } from '@auth0/nextjs-auth0'

import Logo from '../logo'

export default function NavBar () {
  const { user, isLoading } = useUser();
    
  return (
    <div className={navStyles.navbar}>
      
      <div className={navStyles.navleftalign}>    
        <Logo className={navStyles.mainlogo} dimensions={80}/>
        <Link href="/">
          <a className={navStyles.mainlogotext}>BPLANK</a>
        </Link>
      </div>
  
      <div className={navStyles.navrightalign}>
        
        <div className={navStyles.navmenuitems}>
          <Link href="/explore"><a>Explore</a></Link>
        </div>
  
        { !isLoading && !user ?
          <div className={navStyles.navsignincontainer}>
          <Link href="/api/auth/login"><a className={navStyles.navsigninbutton}>Log In</a></Link>
          <div className={ navStyles.navgetstarted }>
            <Link href="/api/auth/login"><a className="ctabutton">Get Started</a></Link>
          </div>
        </div> : <div className={navStyles.navsignincontainer}>
          <Link href="/api/auth/logout"><a className={navStyles.navsigninbutton}>Log Out</a></Link>
          <div className={ navStyles.navgetstarted }>
            <Link href="/profile"><a className="ctabutton">Profile</a></Link>
          </div>
        </div>
        }
        
      </div>
      
    </div>
  )
}