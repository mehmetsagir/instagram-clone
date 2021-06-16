import Link from 'next/link'
import React from 'react'

import styles from '@modules/Auth/Form.module.scss'

const FormFooter = ({label, link, linkTitle}) => {
  return (
    <div className={styles.FormFooter}>
      <p>{label} <Link href={link}><a>{linkTitle}</a></Link></p>
    </div>
  )
}

export default FormFooter