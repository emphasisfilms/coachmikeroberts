import styles from './page.module.css'

export const metadata = {
  title: 'Contact — Coach Mike Roberts',
  description: 'Get in touch with Coach Mike Roberts for coaching inquiries, speaking engagements, or questions about training programs.',
}

export default function Contact() {
  return (
    <>
      <section className={styles.hero}>
        <h1>Contact</h1>
      </section>

      <section className={styles.content}>
        <div className={styles.contentInner}>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="your@email.com" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="What is this regarding?" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Your message..." required />
            </div>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
