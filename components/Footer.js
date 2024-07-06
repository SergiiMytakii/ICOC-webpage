import styles from './Footer.module.css'
import { FaEnvelope, FaTelegram, FaFacebook } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>App made by Sergii Mytakii from Odesa, Ukraine</p>
        <div className={styles.contactsContainer}>
          <span className={styles.iconContainer}>
            <FaEnvelope className={styles.icon} />
            <a href="mailto:serjmitaki@gmail.com" target="_blank" rel="noopener noreferrer">
              serjmitaki@gmail.com
            </a>
          </span>
          <span className={styles.iconContainer}>
            <FaTelegram className={styles.icon} />
            <a href="https://t.me/serjmitaki" target="_blank" rel="noopener noreferrer">
             Telegram
            </a>
          </span>
          <span className={styles.iconContainer}>
            <FaFacebook className={styles.icon} />
            <a href="https://www.facebook.com/serjmitaki" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
