'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)

    const form = e.target
    const data = new FormData(form)

    const res = await fetch('https://formspree.io/f/mpqydkqk', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })

    if (res.ok) {
      setSubmitted(true)
      form.reset()
    }

    setSubmitting(false)
  }

  if (submitted) {
    return (
      <div className={styles.confirmation}>
        <h2>Thank you!</h2>
        <p>Your message has been sent. I&rsquo;ll get back to you as soon as I can.</p>
        <button
          className={styles.submitButton}
          onClick={() => setSubmitted(false)}
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
        <select id="subject" name="subject" required>
          <option value="General">General</option>
          <option value="Speaking Request">Speaking Request</option>
          <option value="Upcoming Event">Upcoming Event</option>
          <option value="Videos">Videos</option>
          <option value="Personal Note">Personal Note</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Your message..." required />
      </div>
      <button type="submit" className={styles.submitButton} disabled={submitting}>
        {submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
