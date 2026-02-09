import styles from './page.module.css'

export const metadata = {
  title: 'Training — Coach Mike Roberts',
  description: 'Baseball training videos and philosophy from Coach Mike Roberts. Watch the Fundamentals of Baseball series on Vimeo On Demand.',
}

export default function Training() {
  return (
    <>
      <section className={styles.hero}>
        <h1>Training</h1>
        <p>
          Learn the fundamentals of baseball from a coach with over 780 career wins
          at the Division I level.
        </p>
      </section>

      <section className={styles.vimeoSection}>
        <div className={styles.vimeoInner}>
          <div className={styles.vimeoContent}>
            <h2>Fundamentals of Baseball</h2>
            <p>
              Coach Roberts&rsquo; comprehensive video training series is now available on Vimeo On
              Demand. These instructional videos cover the core fundamentals that every player needs
              to master — from proper throwing mechanics and fielding techniques to baserunning and
              situational awareness.
            </p>
            <p>
              Built on decades of coaching experience at UNC and beyond, this series gives players,
              parents, and coaches access to the same teaching methods that produced championship
              teams and MLB-caliber talent.
            </p>
            <a
              href="https://vimeo.com/ondemand/fundamentalsofbaseball"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.vimeoCta}
            >
              Watch on Vimeo On Demand
            </a>
          </div>
          <div className={styles.vimeoEmbed}>
            <iframe
              src="https://player.vimeo.com/video/136067338"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Fundamentals of Baseball Preview"
            />
          </div>
        </div>
      </section>

      <section className={styles.philosophySection}>
        <div className={styles.philosophyInner}>
          <h2>Training Philosophy</h2>
          <div className={styles.philosophyGrid}>
            <div className={styles.philosophyCard}>
              <h3>Repetition &amp; Mastery</h3>
              <p>
                The best players are built through consistent, purposeful repetition. Our training
                emphasizes doing the basics right — over and over — until they become second nature.
              </p>
            </div>
            <div className={styles.philosophyCard}>
              <h3>Individual Development</h3>
              <p>
                Every player is different. Our approach focuses on identifying each individual&rsquo;s
                strengths and areas for growth, then building a personalized path to improvement.
              </p>
            </div>
            <div className={styles.philosophyCard}>
              <h3>Mental Toughness</h3>
              <p>
                Baseball is a game of failure. We teach players how to handle adversity, maintain
                focus, and develop the mental resilience needed to compete at any level.
              </p>
            </div>
            <div className={styles.philosophyCard}>
              <h3>Game Situation Training</h3>
              <p>
                Practice should mirror game conditions. We put players in real-game scenarios so
                they develop instincts and decision-making skills under pressure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.topics}>
        <div className={styles.topicsInner}>
          <h2>What You&rsquo;ll Learn</h2>
          <div className={styles.topicsList}>
            <div className={styles.topicItem}>
              <h3>Throwing Mechanics</h3>
              <p>Proper arm action, footwork, and accuracy for every position.</p>
            </div>
            <div className={styles.topicItem}>
              <h3>Fielding Fundamentals</h3>
              <p>Ground balls, fly balls, positioning, and game-ready technique.</p>
            </div>
            <div className={styles.topicItem}>
              <h3>Hitting Approach</h3>
              <p>Developing a consistent swing, plate discipline, and situational hitting.</p>
            </div>
            <div className={styles.topicItem}>
              <h3>Baserunning</h3>
              <p>Reading pitchers, aggressive base-to-base running, and sliding technique.</p>
            </div>
            <div className={styles.topicItem}>
              <h3>Pitching</h3>
              <p>Delivery mechanics, pitch sequencing, and managing the strike zone.</p>
            </div>
            <div className={styles.topicItem}>
              <h3>Game Strategy</h3>
              <p>Situational awareness, defensive positioning, and team execution.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
