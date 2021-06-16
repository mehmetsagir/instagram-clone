import React, { useEffect, useRef, useState } from 'react'
import styles from '@modules/Navbar.module.scss'

import NotificationModalItem from '@components/Navbar/NotificationModalItem'

import outSide from 'src/helpers/outSide'

const NotificationModal = ({ setNotification }) => {

  const [loading, setLoading] = useState(true)

  const ref = useRef()
  outSide(setNotification, ref)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <div className={styles.NotificationModal} ref={ref}>
    {
      loading ? (
        <div style={{textAlign: 'center'}}>
          <svg height="26px" style={{marginTop: '2px'}} viewBox="0 0 50 50">
            <path fill="#000" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
              <animateTransform attributeType="xml"
                attributeName="transform"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="0.6s"
                repeatCount="indefinite"/>
            </path>
          </svg>
        </div>
      ) : (
        <>
          <NotificationModalItem type="like" />
          <NotificationModalItem type="follow" />
        </>
      )
    }
    </div>
  )
}

export default NotificationModal
