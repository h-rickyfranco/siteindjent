import React from 'react';
import styles from './counter.module.scss';

interface CounterProps {
  title: string;
  number: string | number; // Alterado para aceitar string ou number
}

const Counter: React.FC<CounterProps> = ({ title, number }) => {
  return (
    <div className={styles.counter}>
      <p className={styles.counternumber}>{String(number)}</p> {/* Convertendo para string */}
      <h3 className={styles.countertext}>{title}</h3>
    </div>
  );
};

export default Counter;