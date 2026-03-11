'use client'

import { useState, useEffect } from 'react'
import styles from './RotatingQuotes.module.css'

const quotes = [
  { text: "People don\u2019t care how much you know until they know how much you care", author: "Teddy Roosevelt" },
  { text: "The only thing that stands between a person and what they want from life is often the will to try it and the faith to believe it\u2019s possible", author: "Rich Devos" },
  { text: "The best way to succeed is to discover what you love and find a way to share it with others", author: "Oprah Winfrey" },
  { text: "The most important thing about goals is\u2026HAVING ONE!", author: "Geoffry Abert" },
  { text: "Unless you try to do something beyond what you have already mastered you will never grow", author: "Ronald E. Osborn" },
  { text: "Nothing great was ever accomplished without enthusiasm", author: "Ralph Waldo Emerson" },
  { text: "Leaders aren\u2019t born; they are made. They are made by hard effort which is the price which all of us must pay to achieve any goal which is worthwhile", author: "Vince Lombardi" },
  { text: "I believe anybody who is not afraid to fail is a winner", author: "Joe Torre" },
  { text: "It is not the things we get but the hearts we touch that will measure our success in life", author: "Anonymous" },
  { text: "Belief fuels passion", author: "M. Anderson" },
]

export default function RotatingQuotes() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % quotes.length)
        setVisible(true)
      }, 600)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.wrapper}>
      <p className={`${styles.quote} ${visible ? styles.visible : styles.hidden}`}>
        &ldquo;{quotes[index].text}&rdquo;
      </p>
      <p className={`${styles.author} ${visible ? styles.visible : styles.hidden}`}>
        &mdash; {quotes[index].author}
      </p>
    </div>
  )
}
