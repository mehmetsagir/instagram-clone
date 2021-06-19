import React from 'react'

import ProfileLayout from '@components/Profile/ProfileLayout'
import styles from '@modules/Profile/Saved.module.scss'

const username = () => {
  return (
    <ProfileLayout>
      <span className={styles.Info}>Only you can see what you've saved</span>
      <div className={styles.NotSaved}>
        <div>
          <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
        </div>
        <p>Save</p>
        <span>Save photos and videos that you want to see again. No one is notified, and only you can see what you've saved.</span>
      </div>
    </ProfileLayout>
  )
}

export default username
