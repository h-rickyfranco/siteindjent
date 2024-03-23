import React from 'react'
import Counter from "./counter"
import styles from './counter.module.scss';
import useCountdown from '../../hooks/useCountdown';

const CounterContainer = () => {
  const [day, hour, minute, second] = useCountdown('Apr 19, 2024 12:00:00');
  return (
    <div className={styles.countercontainer}>
      <Counter title="Dias" number={day} />
      <Counter title="Horas" number={hour} />
      <Counter title="Minutos" number={minute} />
      <Counter title="Segundos" number={second} />
    </div> 
  )
}

export default CounterContainer