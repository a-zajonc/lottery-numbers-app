import styles from './App.module.css';

function App() {
  return <div className={styles.bodyPage}>
    <div className={styles.header}>
      <span className={styles.headline}>Generator Liczb Lotto</span>
      <br />
      <span>Twój własny chybił-trafił!</span>
    </div>
    <div className={styles.randomDiv}>
      <div className={styles.div}>
        <div className={styles.balls}></div>
        <div className={styles.balls}></div>
        <div className={styles.balls}></div>
        <div className={styles.balls}></div>
        <div className={styles.balls}></div>
        <div className={styles.balls}></div>
      </div>
      <br />
      <button>Losuj liczbę!</button>
    </div>
  </div>
}

export default App;
