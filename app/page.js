import Image from 'next/image'
import FeaturedCards from '@/components/FeaturedCards'
import RotatingQuotes from '@/components/RotatingQuotes'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <section className={styles.welcome}>
        <div className={styles.welcomeInner}>
          <div className={styles.welcomeContent}>
            <h2>Welcome!</h2>
            <p>
              I am the former baseball coach at the University of North Carolina at Chapel Hill
              and UNC-Asheville, and current head coach of the Cotuit Kettleers in the Cape Cod
              Collegiate Summer Baseball League the past 10 seasons. My son, Brian, has played
              for the Baltimore Orioles the past 12 seasons and is a 2 time MLB All Star. I have
              authored two books (<a href="https://www.amazon.com/Cant-Steal-Second-Base-First/dp/B003BJMEVK" target="_blank" rel="noopener noreferrer" className={styles.inlineLink}><em>You Can&rsquo;t Steal Second Base and Keep Your Foot on
              1st</em></a>, 2008 and <a href="https://www.amazon.com/Baserunning-Mike-Roberts/dp/1450432182/ref=sr_1_1?crid=2ELJK071ANKBP&dib=eyJ2IjoiMSJ9.7CjC-rAyqjKqyb67UjtsovTitFCW1KdVM1t819tshPk.sVoSGfGhfihLeUU77YArb0JZ6N4Ozs67T0hXEOvQx4k&dib_tag=se&keywords=mike+roberts+baserunning&qid=1773267443&sprefix=mike+roberts+baserunni%2Caps%2C196&sr=8-1" target="_blank" rel="noopener noreferrer" className={styles.inlineLink}><em>Baserunning</em></a>, 2013) and provide instructional videos,
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

      <FeaturedCards />

      <section className={styles.hero}>
        <RotatingQuotes />
      </section>

      <section className={styles.trainingVideo}>
        <div className={styles.trainingVideoInner}>
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

    </>
  )
}
