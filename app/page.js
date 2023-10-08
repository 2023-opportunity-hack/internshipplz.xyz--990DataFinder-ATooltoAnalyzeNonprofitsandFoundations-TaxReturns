// Update your Home component

import styles from './page.module.css'
import img1 from "./email.png"
import img2 from "./github.png"
import img3 from "./instagram.jpg"
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
      <footer className={styles.footer}>
        <div className={styles.footerButton}>
          <button>
            <img src={img2} alt=""/>
          </button>
        </div>
        <div className={styles.footerButton}>
          <button>
            <img src={img1} alt=""/>
          </button>
        </div>
        <div className={styles.footerButton}>
          <button>
            <img src={img3} alt=""/>
          </button>
        </div>
      </footer>
    </main>
    )
}
