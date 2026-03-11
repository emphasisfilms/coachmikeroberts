import Image from 'next/image'
import Link from 'next/link'
import RotatingQuotes from '@/components/RotatingQuotes'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <RotatingQuotes />
      </section>

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
                Coach Roberts&rsquo; guide to baseball fundamentals, life lessons, and the coaching
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
          </div>
        </div>
      </section>

      <section className={styles.welcome}>
        <div className={styles.welcomeInner}>
          <div className={styles.welcomeContent}>
            <h2>Welcome!</h2>
            <p>
              I am the former baseball coach at the University of North Carolina at Chapel Hill
              and UNC-Asheville, and current head coach of the Cotuit Kettleers in the Cape Cod
              Collegiate Summer Baseball League the past 10 seasons. My son, Brian, has played
              for the Baltimore Orioles the past 12 seasons and is a 2 time MLB All Star. I have
              authored two books (<em>You Can&rsquo;t Steal Second Base and Keep Your Foot on
              1st</em>, 2008 and <em>Baserunning</em>, 2013) and provide instructional videos,
              all available in my store below.
            </p>
            <p>
              I am an old fashioned &ldquo;Playground or Backyard&rdquo; style coach. Some people
              ask me what that means: players must have fun practicing and playing the game as if
              participating in a game of Wiffle Ball in the yard, and practice fundamentals,
              fundamentals, fundamentals! Baseball players should learn to practice baseball
              fundamentals on their own. Team practices will never provide individuals enough
              attention and work to truly polish their skills.
            </p>
            <p>
              Self-Motivation is critical for improvement in any area of life. A baseball player,
              no matter what age, must have a desire to polish personal skills through practice
              and should spend at least twice as many hours practicing as playing games.
            </p>
            <a
              href="https://www.capecodleague.com/cotuit"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.welcomeButton}
            >
              Follow the Cotuit Kettleers
            </a>
          </div>
          <div className={styles.welcomeImage}>
            <Image
              src="/images/coach-roberts.png"
              alt="Coach Mike Roberts"
              width={350}
              height={350}
            />
          </div>
        </div>
      </section>

      <section className={styles.trainingVideo}>
        <div className={styles.trainingVideoInner}>
          <h2>Watch Training Videos Now</h2>
          <div className={styles.videoEmbed}>
            <iframe
              src="https://player.vimeo.com/video/167310017"
              width="640"
              height="360"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Fundamentals of Baseball Trailer"
            />
          </div>
          <a
            href="https://vimeo.com/ondemand/fundamentalsofbaseball"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.trainingCta}
          >
            Watch the Full Training Series on Vimeo
          </a>
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
