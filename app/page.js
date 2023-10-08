import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  return (

    <main className={styles.main}>
      <div className={styles.buttonContainer}>
      <div className={styles.button}>
        <button>
          Search for Organizations
        </button>
      </div>
      <div className={styles.button}>
        <button>
          Search for Non-Profit Salaries
        </button>
      </div>
      </div>
    </main>
  )
}
