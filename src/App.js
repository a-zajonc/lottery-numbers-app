import styles from './App.module.css';
import { useEffect, useState } from 'react';
import { getRandomNumber } from './Components/GetRandomNumber';

function App() {

  const [number, setNumber] = useState()
  const [arr, setArray] = useState([])

  const handleClick = () => {
    setNumber(getRandomNumber(1, 49));
    setArray(arr => [...arr, number])
  }
  console.log(arr)

  return <div className={styles.bodyPage}>
    <div className={styles.header}>
      <span className={styles.headline}>Generator Liczb Lotto</span>
      <br />
      <span>Twój własny chybił-trafił!</span>
    </div>
    <div className={styles.randomDiv}>
      <div className={styles.div}>
        <div className={styles.balls}>{arr[1]}</div>
        <div className={styles.balls}>{arr[2]}</div>
        <div className={styles.balls}>{arr[3]}</div>
        <div className={styles.balls}>{arr[4]}</div>
        <div className={styles.balls}>{arr[5]}</div>
        <div className={styles.balls}>{arr[6]}</div>
      </div>
      <br />
      <button onClick={handleClick} disabled={arr.length <= 6 ? false : true}>
        Losuj liczbę  !
      </button>
    </div>
  </div>
}

export default App;
