import React from 'react'
import Link from 'next/link'

import styles from '@modules/components/Navbar.module.scss'
import Avatar from '@components/Avatar'

const SearchItem = () => {
  return (
    <div className={styles.SearchBoxItem}>
      <Avatar size="md" />
      <Link href="/">
        <a>
          <div>
            <b>mehmetsagirdev</b>
            <span>Mehmet Sağır</span>
          </div>
        </a>
    </Link>
    </div>
  )
}

export default SearchItem
