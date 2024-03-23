import React from 'react'
import styles from './counter.module.scss'

const Counter = ({title, number}) => {
  return (
    <div className={styles.counter}>
      <p className={styles.counternumber}>{number}</p>
      <h3 className={styles.countertext}>{title}</h3>
    </div>
  )
}

export default Counter