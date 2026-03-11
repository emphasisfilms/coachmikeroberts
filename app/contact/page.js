import ContactForm from './ContactForm'
import styles from './page.module.css'

export const metadata = {
  title: 'Contact — Coach Mike Roberts',
  description: 'Get in touch with Coach Mike Roberts for coaching inquiries, speaking engagements, or questions about training programs.',
}

export default function Contact() {
  return (
    <>
      <section className={styles.hero}>
        <h1>Have a question or want to connect? I&rsquo;d love to hear from you</h1>
      </section>

      <section className={styles.content}>
        <div className={styles.contentInner}>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
