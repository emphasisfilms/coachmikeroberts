import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <h1 className={styles.heroLogo}>Coach Mike Roberts</h1>
        <p className={styles.heroQuote}>
          &ldquo;People don&rsquo;t care how much you know until they know how much you care.&rdquo;
        </p>
        <p className={styles.heroAttribution}>&mdash; Theodore Roosevelt</p>
      </section>

      <section className={styles.featured}>
        <div className={styles.featuredInner}>
          <div className={styles.featuredGrid}>
            <div className={styles.featuredCard}>
              <p className={styles.featuredCardLabel}>Training Videos</p>
              <h3 className={styles.featuredCardTitle}>Fundamentals of Baseball</h3>
              <p className={styles.featuredCardText}>
                Master the fundamentals with Coach Roberts&rsquo; comprehensive video training series
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
              <p className={styles.featuredCardLabel}>Book</p>
              <h3 className={styles.featuredCardTitle}>
                You Can&rsquo;t Steal Second Base and Keep Your Foot on First
              </h3>
              <p className={styles.featuredCardText}>
                Coach Roberts&rsquo; guide to baseball fundamentals, life lessons, and the coaching
                philosophy that built championship programs.
              </p>
              <Link href="/about#books" className={styles.featuredCardLink}>
                Learn More &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.welcome}>
        <div className={styles.welcomeInner}>
          <div className={styles.welcomeContent}>
            <h2>Welcome</h2>
            <p>
              Coach Mike Roberts served as the head baseball coach at the University of North
              Carolina at Chapel Hill for 23 seasons, compiling 780 wins and leading the Tar Heels
              to numerous ACC championships and College World Series appearances.
            </p>
            <p>
              A respected voice in baseball coaching, Coach Roberts is dedicated to teaching the
              fundamentals of the game and helping players develop not only as athletes, but as
              individuals. His coaching philosophy centers on discipline, preparation, and a genuine
              care for each player&rsquo;s growth.
            </p>
            <p>
              He is the father of Brian Roberts, a two-time MLB All-Star who played 14 seasons with
              the Baltimore Orioles.
            </p>
          </div>
          <div className={styles.welcomeImage}>
            Coach Roberts Photo
          </div>
        </div>
      </section>

      <section className={styles.philosophy}>
        <div className={styles.philosophyInner}>
          <h2>Coaching Philosophy</h2>
          <div className={styles.philosophyGrid}>
            <div className={styles.philosophyItem}>
              <h3>Fundamentals First</h3>
              <p>
                Every great player is built on a foundation of fundamentals. Coach Roberts emphasizes
                mastering the basics before advancing to complex strategies.
              </p>
            </div>
            <div className={styles.philosophyItem}>
              <h3>Self-Motivation</h3>
              <p>
                True improvement comes from within. Players are taught to take ownership of their
                development and cultivate a personal drive to get better every day.
              </p>
            </div>
            <div className={styles.philosophyItem}>
              <h3>Playground Style</h3>
              <p>
                The &ldquo;Playground or Backyard&rdquo; approach encourages players to rediscover
                the joy and creativity that made them fall in love with baseball.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
