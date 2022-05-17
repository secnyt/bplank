import React from 'react'

import Link from 'next/link'

import footerStyles from '../../../styles/Footer.module.css'

export default class Footer extends React.Component {
  constructor (props) {
    super(props)
    this.props = props;
  }

  render () {
    return (
      <div className={footerStyles.footer}>
        <span>Copyright © 2022 Ben Varner</span>
        <a href="https://github.com/secnyt/bplank" className={footerStyles.footerlink}>
          <img src="/github-mark.png" className={footerStyles.githublogo}/>
        </a>
        <a href="https://vercel.com" className={footerStyles.footerlink}>
          <img src="/vercel-logo.svg" className={footerStyles.vercellogo}/>
        </a>
      </div>
    )
  }
}