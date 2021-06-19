import React from 'react'
import Link from 'next/link'

import styles from '@modules/Avatar.module.scss'

const Avatar = ({size, story = false}) => {

  const getSize = () => {
    if (size === 'sm') return '32'
    else if (size === 'x-sm') return '20'
    else if (size === 'md') return '44'
    else if (size === 'lg') return '150'
    return '56'
  }

  return (
    <Link href="">
      <a className={`${styles.Avatar} ${story && styles.Border}`}>
        <img width={getSize()} height={getSize()} src="https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg" alt="" /> 
      </a>
    </Link>
  )
}

export default Avatar
