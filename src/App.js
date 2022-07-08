import styles from './App.module.css';
import { useState } from 'react';
import { getRandomNumber } from './Components/GetRandomNumber';
import { Button } from '@chakra-ui/react'


function App() {

  const [number, setNumber] = useState([])

  const handleClick = () => {
    setNumber(arr => [...arr, getRandomNumber(1, 49, arr)]);

  }
  return (
    <div>
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
        <Button colorScheme='teal' size='md' onClick={handleClick}
          disabled={number.length < 6 ? false : true}
        >
          Losuj liczbę  !
        </Button>
        <br />
        <Button colorScheme='teal' size='sm' onClick={() => window.location.reload(false)}>Losuj od nowa!</Button>
      </div>
    </div>

  )
}

export default App;
