import React from 'react'

import ProfileLayout from '@components/Profile/ProfileLayout'
import Post from '@components/Explore/Post'
import styles from '@modules/Profile/Profile.module.scss'

const username = () => {
  const fakePostData = [
    {
      id: 321,
      like: 413,
      comment: 1
    },
    {
      id: 232,
      like: 65,
      comment: 5
    },
    {
      id: 123,
      like: 244,
      comment: 3
    }
  ]

  return (
    <ProfileLayout>
      {
        fakePostData.length > 0 ? (
          <div className={styles.Posts}>
            {
              fakePostData.map(post => (
                <Post key={post.id} post={post} />
              ))
            }
          </div>
        ) : (
          <span className={styles.Info}>Post not found!</span>
        )
      }

    </ProfileLayout>
  )
}

export default username
