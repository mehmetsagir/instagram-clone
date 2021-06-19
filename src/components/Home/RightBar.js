import React from 'react'
import Link from 'next/link'

import styles from '@modules/Home/Rightbar.module.scss'
import Avatar from '@components/Avatar'

const RightBar = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.UserBox}>
        <div>
          <Avatar />
          <div>
            <Link href="#">
              <a>
                mehmetsagirc
              </a>
            </Link>
            <span>mehmet</span>
          </div>
          <button>
            Switch
          </button>
        </div>
      </div>
      
      <div className={styles.Title}>
        <span>Suggestions For You</span>
        <Link href="#"><a>See All</a></Link>
      </div>

      <div className={styles.UserList}>
        <div>
          <Avatar size="sm" />
          <div>
            <Link href="#"><a>username</a></Link>
            <span>New to Instagram</span>
          </div>
          <button>
            Follow
          </button>
        </div>
        <div>
          <Avatar size="sm" />
          <div>
            <Link href="#"><a>username</a></Link>
            <span>New to Instagram</span>
          </div>
          <button>
            Follow
          </button>
        </div>
        <div>
          <Avatar size="sm" />
          <div>
            <Link href="#"><a>username</a></Link>
            <span>New to Instagram</span>
          </div>
          <button>
            Follow
          </button>
        </div>
        <div>
          <Avatar size="sm" />
          <div>
            <Link href="#"><a>username</a></Link>
            <span>New to Instagram</span>
          </div>
          <button>
            Follow
          </button>
        </div>
        <div>
          <Avatar size="sm" />
          <div>
            <Link href="#"><a>username</a></Link>
            <span>New to Instagram</span>
          </div>
          <button>
            Follow
          </button>
        </div>
      </div>
  
      <footer>
        <div className={styles.Links}>
          <a>About</a>
          <a>Help</a>
          <a>Press</a>
          <a>API</a>
          <a>Jobs</a>
          <a>Privacy</a>
          <a>Terms</a>
          <a>Locations</a>
          <a>Top Accounts</a>
          <a>Hashtags</a>
          <a>Language</a>
        </div>
        <p className={styles.CopyRight}>
          © 2021 INSTAGRAM FROM FACEBOOK
        </p>
      </footer>
    </div>
  )
}

export default RightBar
