import React from 'react'
import styles from '../../styles/Home.module.css'

import Image from 'next/image'

export default class Logo extends React.Component {
  constructor (props) {
    super(props)
    this.dimensions = props.dimensions
    this.props = props
  }

  render () {
    return (
      <span className={this.props.className}>
        <Image src="/bplank.svg" alt="bplank logo" width={this.dimensions} height={this.dimensions} />
      </span>
    )
  }
}