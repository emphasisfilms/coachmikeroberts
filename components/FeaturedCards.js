import Image from 'next/image'
import styles from './FeaturedCards.module.css'

export default function FeaturedCards() {
  return (
    <section className={styles.featured}>
      <div className={styles.featuredInner}>
        <div className={styles.featuredGrid}>
          <div className={styles.featuredCard}>
            <Image
              src="/images/training-hero.jpg"
              alt="Fundamentals of Baseball training"
              width={960}
              height={540}
              className={styles.featuredCardImage}
            />
            <p className={styles.featuredCardLabel}>Training Videos</p>
            <h3 className={styles.featuredCardTitle}>Fundamentals of Baseball</h3>
            <p className={styles.featuredCardText}>
              My comprehensive video training series covering the fundamentals of baseball,
              available on Vimeo On Demand.
            </p>
            <a
              href="https://vimeo.com/ondemand/fundamentalsofbaseball"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.featuredCardLink}
            >
              Watch Now &rarr;
            </a>
          </div>
          <div className={styles.featuredCard}>
            <Image
              src="/images/book-cover.png"
              alt="You Can't Steal Second Base and Keep Your Foot on First — book cover"
              width={250}
              height={284}
              className={styles.featuredCardImage}
            />
            <p className={styles.featuredCardLabel}>Book</p>
            <h3 className={styles.featuredCardTitle}>
              You Can&rsquo;t Steal Second Base and Keep Your Foot on First
            </h3>
            <p className={styles.featuredCardText}>
              My guide to baseball fundamentals, life lessons, and the coaching
              philosophy that built championship programs.
            </p>
            <a
              href="https://www.amazon.com/Cant-Steal-Second-Base-First/dp/B003BJMEVK"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.featuredCardLink}
            >
              Buy on Amazon &rarr;
            </a>
          </div>
          <div className={styles.featuredCard}>
            <Image
              src="/images/abca-podcast.jpg"
              alt="ABCA Calls from the Clubhouse Podcast"
              width={500}
              height={500}
              className={styles.featuredCardImage}
            />
            <p className={styles.featuredCardLabel}>Podcast</p>
            <h3 className={styles.featuredCardTitle}>ABCA Podcast Interview</h3>
            <p className={styles.featuredCardText}>
              Listen to my conversation with the American Baseball Coaches Association.
            </p>
            <a
              href="https://vimeo.com/182472081"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.featuredCardLink}
            >
              Listen Now &rarr;
            </a>
          </div>
          <div className={styles.featuredCard}>
            <Image
              src="/images/baserunning-cover.jpg"
              alt="Baserunning — book cover"
              width={250}
              height={284}
              className={styles.featuredCardImage}
            />
            <p className={styles.featuredCardLabel}>Interview</p>
            <h3 className={styles.featuredCardTitle}>John Madden on Baserunning</h3>
            <p className={styles.featuredCardText}>
              Interview with John Madden about my book, Baserunning.
            </p>
            <a
              href="http://www.youtube.com/watch?v=QfZGtw71yhk"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.featuredCardLink}
            >
              Watch Interview &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
