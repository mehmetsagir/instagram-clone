import React from 'react'
import styles from '@modules/components/Auth/Layout.module.scss'

import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <section className={styles.Layout}>
      <main>
        {children}
      </main>
      <Footer />
    </section>
  )
}

export default Layout