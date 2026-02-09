import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Coach Mike Roberts. All rights reserved.
        </p>
        <nav className={styles.footerLinks}>
          <Link href="/about" className={styles.footerLink}>About</Link>
          <Link href="/training" className={styles.footerLink}>Training</Link>
          <Link href="/coaching" className={styles.footerLink}>Coaching</Link>
          <Link href="/contact" className={styles.footerLink}>Contact</Link>
        </nav>
      </div>
    </footer>
  )
}
