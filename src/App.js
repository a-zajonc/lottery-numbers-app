import styles from './App.module.css';
import { useState } from 'react';
import { getRandomNumber } from './Components/GetRandomNumber';

function App() {

  const [number, setNumber] = useState([])

  const handleClick = () => {
    setNumber(arr => [...arr, getRandomNumber(1, 49, number)]);

  }

  return <div className={styles.bodyPage}>
    <div className={styles.header}>
      <span className={styles.headline}>Generator Liczb Lotto</span>
    </div>
    <div className={styles.randomDiv}>
      <div className={styles.div}>
        <div className={styles.balls}>{number[0]}</div>
        <div className={styles.balls}>{number[1]}</div>
        <div className={styles.balls}>{number[2]}</div>
        <div className={styles.balls}>{number[3]}</div>
        <div className={styles.balls}>{number[4]}</div>
        <div className={styles.balls}>{number[5]}</div>
      </div>
      <br />
      <button onClick={handleClick}
        disabled={number.length < 6 ? false : true}
      >
        Losuj liczbę  !
      </button>
    </div>
  </div>
}

export default App;
