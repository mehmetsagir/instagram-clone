import React from 'react'
import Link from 'next/link'

import styles from '@modules/Profile/Header.module.scss'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  return (
    <>
      <div className={styles.Header}>
        <label className={styles.profileImage}>
          <img src="https://pbs.twimg.com/profile_images/1249700364506386433/x3OzFIzW_400x400.png" alt="test" />
          <input type="file" />
        </label>
        <div className={styles.Content}>
          <div>
            <h2>mehmetsagirdev</h2>
            <button className={styles.EditButton}>Edit Profile</button>
            <button><svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M46.7 20.6l-2.1-1.1c-.4-.2-.7-.5-.8-1-.5-1.6-1.1-3.2-1.9-4.7-.2-.4-.3-.8-.1-1.2l.8-2.3c.2-.5 0-1.1-.4-1.5l-2.9-2.9c-.4-.4-1-.5-1.5-.4l-2.3.8c-.4.1-.8.1-1.2-.1-1.4-.8-3-1.5-4.6-1.9-.4-.1-.8-.4-1-.8l-1.1-2.2c-.3-.5-.8-.8-1.3-.8h-4.1c-.6 0-1.1.3-1.3.8l-1.1 2.2c-.2.4-.5.7-1 .8-1.6.5-3.2 1.1-4.6 1.9-.4.2-.8.3-1.2.1l-2.3-.8c-.5-.2-1.1 0-1.5.4L5.9 8.8c-.4.4-.5 1-.4 1.5l.8 2.3c.1.4.1.8-.1 1.2-.8 1.5-1.5 3-1.9 4.7-.1.4-.4.8-.8 1l-2.1 1.1c-.5.3-.8.8-.8 1.3V26c0 .6.3 1.1.8 1.3l2.1 1.1c.4.2.7.5.8 1 .5 1.6 1.1 3.2 1.9 4.7.2.4.3.8.1 1.2l-.8 2.3c-.2.5 0 1.1.4 1.5L8.8 42c.4.4 1 .5 1.5.4l2.3-.8c.4-.1.8-.1 1.2.1 1.4.8 3 1.5 4.6 1.9.4.1.8.4 1 .8l1.1 2.2c.3.5.8.8 1.3.8h4.1c.6 0 1.1-.3 1.3-.8l1.1-2.2c.2-.4.5-.7 1-.8 1.6-.5 3.2-1.1 4.6-1.9.4-.2.8-.3 1.2-.1l2.3.8c.5.2 1.1 0 1.5-.4l2.9-2.9c.4-.4.5-1 .4-1.5l-.8-2.3c-.1-.4-.1-.8.1-1.2.8-1.5 1.5-3 1.9-4.7.1-.4.4-.8.8-1l2.1-1.1c.5-.3.8-.8.8-1.3v-4.1c.4-.5.1-1.1-.4-1.3zM24 41.5c-9.7 0-17.5-7.8-17.5-17.5S14.3 6.5 24 6.5 41.5 14.3 41.5 24 33.7 41.5 24 41.5z"></path></svg></button>
          </div>
          <ul>
            <li>
              <b>1</b>
              <span>post</span>
            </li>
            <li>
              <b>328</b>
              <span>followers</span>
            </li>
            <li>
              <b>288</b>
              <span>following</span>
            </li>
          </ul>
          <p className={styles.FullName}>Mehmet Sağır</p>
          <p className={styles.Description}>Web Developer | Documenting my journey</p>
          <a href="http://mehmetsagir.com">mehmetsagir.com</a>
        </div>
      </div>
      <ul className={styles.Links}>
        <li className={router.asPath == '/mehmetsagirdev' ? styles.ActiveLink : ''}>
          <Link href="/mehmetsagirdev">
            <a>
              <svg   height="12" viewBox="0 0 48 48" width="12"><path d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z"></path></svg>
              <span>POSTS</span>
            </a>
          </Link>
        </li>
        <li className={router.asPath == '/mehmetsagirdev/saved' ? styles.ActiveLink : ''}>
          <Link href="/mehmetsagirdev/saved">
            <a>
              <svg height="12" viewBox="0 0 48 48" width="12"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
              <span>SAVED</span>
            </a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Header
