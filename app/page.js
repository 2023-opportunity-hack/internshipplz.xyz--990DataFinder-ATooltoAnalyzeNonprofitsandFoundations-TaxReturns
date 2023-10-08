"use client"

import { useState } from 'react'
import styles from './page.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'; // Import the next/image component

import img1 from "./email.png"
import img2 from "./github.png"
import img3 from "./instagram.png"
import headerImage from "./headerImage.png"

export default function Home() {
  return (

    <main className={styles.main}>
      <div>
        <Head>
          <title>The 990 Search</title>
        </Head>
      </div>
        <Image src={headerImage} alt=""/>
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
      <footer className={styles.footer}>
        <div className={styles.footerButton}>
          <button>
            <Image src={img2} alt=""/>
          </button>
        </div>
        <div className={styles.footerButton}>
          <button>
            <Image src={img1} alt=""/>
          </button>
        </div>
        <div className={styles.footerButton}>
          <button>
            <Image src={img3} alt=""/>
          </button>
        </div>
      </footer>
    </main>
    )
}