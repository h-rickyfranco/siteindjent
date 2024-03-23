import React from 'react'
import styles from './counter.module.scss'

interface CounterProps {
  title: string;
  number: number;
}

const Counter: React.FC<CounterProps> = ({title, number}) => {
  return (
    <div className={styles.counter}>
      <p className={styles.counternumber}>{number}</p>
      <h3 className={styles.countertext}>{title}</h3>
    </div>
  )
}

export default Counter