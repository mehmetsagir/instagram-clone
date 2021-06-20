import React, { useRef } from 'react'
import Link from 'next/link'

import styles from '@modules/Modal.module.scss'
import Avatar from '@components/Avatar'
import Button from '@components/Button'
import outSide from 'src/helpers/outSide'

const Modal = ({ isHide, type = 'followers' }) => {
  const ref = useRef()
  outSide(isHide, ref)

  const getTitle = () => {
    switch(type) {
      case 'followers': return { title: 'Followers', btnText: 'Remove' }
      case 'following' : return { title: 'Following', btnText: 'Following' }
      case 'likes' : return { title: 'Likes', btnText: '' }
    }
  }

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Modal} ref={ref}>
        <div className={styles.Header}>
          <h1>{getTitle().title}</h1>
          <button onClick={() => isHide(false)}>
            <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M41.1 9.1l-15 15L41 39c.6.6.6 1.5 0 2.1s-1.5.6-2.1 0L24 26.1l-14.9 15c-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1l14.9-15-15-15c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0l15 15 15-15c.6-.6 1.5-.6 2.1 0 .6.6.6 1.6 0 2.2z"></path></svg>
          </button>
        </div>
        <div className={styles.Content}>
          <div>
            <Avatar size="sm" />
            <div>
              <Link href="#"><a>mehmetsagirdev</a></Link>
              <p>Mehmet Sağır</p>
            </div>
            <Button background={false} block={false}>{getTitle().btnText}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
