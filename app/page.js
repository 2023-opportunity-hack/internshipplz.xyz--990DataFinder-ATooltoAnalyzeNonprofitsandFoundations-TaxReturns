"use client"

import { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (

    <main className={styles.main}>
      <div className={styles.buttonContainer}>
      <div className={styles.button}>
        <p className={styles.navLink}>
          <Link href="/orgSearch">
          Search for Organizations
          </Link>
          </p>
      </div>
      <p className={styles.navLink}>
          <Link href="/orgSearch">
          Search for Non-Profit Salaries
          </Link>
          </p>
      </div>
    </main>
  )
}
