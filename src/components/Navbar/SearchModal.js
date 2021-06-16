import React, { useRef } from 'react'

import SearchItem from '@components/Navbar/SearchItem'

import styles from '@modules/Navbar.module.scss'
import outSide from 'src/helpers/outSide'

const SearchModal = ({setSearchModal }) => {
  const ref = useRef()

  outSide(setSearchModal, ref)

  return (
    <div className={styles.SearchModal} ref={ref}>
      <SearchItem />
      <SearchItem />
      <SearchItem />
    </div>
  )
}

export default SearchModal
