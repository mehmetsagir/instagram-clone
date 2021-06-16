import React from 'react'

import styles from '@modules/Auth/GetApp.module.scss'

const GetApp = () => {
  return (
    <div className={styles.GetApp}>
      <p>Get the app.</p>
      <div>
        <a href="https://apps.apple.com/app/instagram/id389801252?vt=lo" target="_blank">
          <img src="/images/app-store.png" width="130" />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.instagram.android" target="_blank">
          <img src="/images/play-store.png" width="130" />
        </a>
      </div> 
    </div>
  )
}

export default GetApp
