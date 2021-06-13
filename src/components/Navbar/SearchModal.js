import React, { useRef } from 'react'

import SearchItem from '@components/Navbar/SearchItem'

import styles from '@modules/components/Navbar.module.scss'
import outSide from 'src/helpers/outSide'

const SearchModal = ({setSearchModal}) => {
  const ref = useRef()

  outSide(setSearchModal, ref)

  return (
    <div className={styles.SearchModal} ref={ref}>
      <input type="text" placeholder="Search" />
      <div>
        <SearchItem />
        <SearchItem />
        <SearchItem />
      </div> 
    </div>
  )
}

export default SearchModal
