import React from 'react'
import Link from 'next/link'
import styles from '@modules/components/Navbar.module.scss'

import Avatar from '@components/Avatar'
import Button from '@components/Button'

const NotificationModalItem = ({ type }) => {

    return (
      <div className={styles.NotificationItem}>
        <Avatar />
        <div>
          <Link href="#">
            <a>mehmetsagirdev</a>
          </Link> 
          {
            type === 'like' ? (
              <p>like this.</p> 
            ) : (
              <p>started following you.</p> 
            )
          }
          <span>6d</span>
        </div> 
        {
          type === 'like' ? (
            <Link href="#">
              <a>
                <img src="https://i.internethaber.com/storage/files/images/2019/05/08/avatar-2-3-ve-4un-vizyon-tarihle-lna9_cover.jpg" alt="" />
              </a>
            </Link>
          ) : (
            <Button background={false} block={false}>
              Following
            </Button>
          )
        }
      </div>
    )
}

export default NotificationModalItem
