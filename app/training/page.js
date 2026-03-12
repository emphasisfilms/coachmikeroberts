import Image from 'next/image'
import RotatingQuotes from '@/components/RotatingQuotes'
import styles from './page.module.css'

export const metadata = {
  title: 'Training — Coach Mike Roberts',
  description: 'Baseball training videos and books from Coach Mike Roberts.',
}

export default function Training() {
  return (
    <>
      <section className={styles.hero}>
        <h1>Training resources to help you master the game of baseball</h1>
      </section>

      <section className={styles.bookSection}>
        <div className={styles.sectionInner}>
          <div className={styles.bookCard}>
            <Image
              src="/images/book-cover.png"
              alt="You Can't Steal Second Base and Keep Your Foot on First — book cover"
              width={250}
              height={284}
              className={styles.bookImage}
            />
            <div className={styles.bookInfo}>
              <h2>You Can&rsquo;t Steal Second Base and Keep Your Foot on First</h2>
              <p className={styles.bookYear}>Published 2008</p>
              <p>
                My guide to baseball fundamentals, life lessons, and the coaching philosophy
                that built championship programs. A unique blend of baseball wisdom drawn from
                decades of experience to teach fundamentals that apply both on and off the field.
              </p>
              <a
                href="https://www.amazon.com/Cant-Steal-Second-Base-First/dp/B003BJMEVK"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cta}
              >
                Buy on Amazon
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.bookSection}>
        <div className={styles.sectionInner}>
          <div className={styles.bookCard}>
            <Image
              src="/images/baserunning-cover.jpg"
              alt="Baserunning — book cover"
              width={250}
              height={284}
              className={styles.bookImage}
            />
            <div className={styles.bookInfo}>
              <h2>Baserunning</h2>
              <p className={styles.bookYear}>Published 2013</p>
              <p>
                A focused guide on one of the most overlooked aspects of baseball. I break down
                the art of baserunning — from reading pitchers and getting great jumps to sliding
                technique and situational decision-making.
              </p>
              <a
                href="https://www.amazon.com/Baserunning-Mike-Roberts/dp/1450432182/ref=sr_1_1?crid=2ELJK071ANKBP&dib=eyJ2IjoiMSJ9.7CjC-rAyqjKqyb67UjtsovTitFCW1KdVM1t819tshPk.sVoSGfGhfihLeUU77YArb0JZ6N4Ozs67T0hXEOvQx4k&dib_tag=se&keywords=mike+roberts+baserunning&qid=1773267443&sprefix=mike+roberts+baserunni%2Caps%2C196&sr=8-1"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cta}
              >
                Buy on Amazon
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.quotes}>
        <RotatingQuotes />
      </section>

      <section className={styles.vimeoSection}>
        <div className={styles.sectionInner}>
          <div className={styles.videoEmbed}>
            <iframe
              src="https://player.vimeo.com/video/167310017"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Fundamentals of Baseball Trailer"
            />
          </div>
          <h2>Fundamentals of Baseball</h2>
          <p>
            My comprehensive video training series is available on Vimeo On Demand. These
            instructional videos cover the core fundamentals that every player needs to
            master — from proper throwing mechanics and fielding techniques to baserunning
            and situational awareness.
          </p>
          <a
            href="https://vimeo.com/ondemand/fundamentalsofbaseball"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            Watch on Vimeo On Demand
          </a>
        </div>
      </section>
    </>
  )
}
