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
        <p>
          Have a question or want to work with Coach Roberts? Reach out below.
        </p>
      </section>

      <section className={styles.content}>
        <div className={styles.contentInner}>
          <div className={styles.formSection}>
            <h2>Send a Message</h2>
            <p>Fill out the form and Coach Roberts will get back to you as soon as possible.</p>
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

          <div className={styles.infoSection}>
            <h2>Get in Touch</h2>
            <p>You can also reach Coach Roberts through the following channels.</p>

            <div className={styles.infoCard}>
              <h3>Email</h3>
              <p>
                <a href="mailto:info@coachmikeroberts.com">info@coachmikeroberts.com</a>
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Training Videos</h3>
              <p>
                Watch the Fundamentals of Baseball series on{' '}
                <a
                  href="https://vimeo.com/ondemand/fundamentalsofbaseball"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vimeo On Demand
                </a>
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Location</h3>
              <p>Chapel Hill, North Carolina</p>
            </div>

            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>Vimeo</a>
              <a href="#" className={styles.socialLink}>Twitter</a>
              <a href="#" className={styles.socialLink}>Facebook</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
