import React from 'react';
import styles from './counter.module.scss';

// interface CounterProps {
//   title: any;
//   number: any; // Alterado para aceitar string ou number
// }

const Counter = ({ title, number }: { title: any; number: any }) => {
  return (
    <div className={styles.counter}>
      <p className={styles.counternumber}>{String(number)}</p> {/* Convertendo para string */}
      <h3 className={styles.countertext}>{title}</h3>
    </div>
  );
};

export default Counter;