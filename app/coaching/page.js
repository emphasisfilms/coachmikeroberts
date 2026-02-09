import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'Coaching — Coach Mike Roberts',
  description: 'Coach Mike Roberts\' coaching philosophy — fundamentals, self-motivation, and the "Playground or Backyard" approach to developing complete baseball players.',
}

export default function Coaching() {
  return (
    <>
      <section className={styles.hero}>
        <h1>Coaching</h1>
        <p>
          Building complete ballplayers through fundamentals, discipline, and a love for the game.
        </p>
      </section>

      <section className={styles.philosophy}>
        <div className={styles.philosophyInner}>
          <h2>The &ldquo;Playground or Backyard&rdquo; Philosophy</h2>
          <p>
            Coach Roberts believes that the best baseball is played the way it was learned — in
            backyards, on playgrounds, and in sandlots. Before the era of year-round travel ball
            and specialization, young players developed their skills through unstructured play,
            creativity, and a genuine love for the game.
          </p>
          <p>
            This philosophy is at the heart of Coach Roberts&rsquo; approach. It&rsquo;s about
            recapturing that joy and combining it with disciplined fundamentals. When players enjoy
            what they&rsquo;re doing and feel confident in their abilities, they perform at their
            best — and they stick with the game for life.
          </p>
          <p>
            The result is a program that produces not just better players, but better competitors,
            better teammates, and better people. It&rsquo;s an approach that worked at every level
            Coach Roberts coached — from youth leagues to the College World Series.
          </p>
        </div>
      </section>

      <section className={styles.principles}>
        <div className={styles.principlesInner}>
          <h2>Key Principles</h2>
          <div className={styles.principlesGrid}>
            <div className={styles.principleCard}>
              <div className={styles.principleNumber}>01</div>
              <h3>Master the Fundamentals</h3>
              <p>
                Every advanced skill is built on a foundation of basics. Catching, throwing, fielding,
                and baserunning — these are the building blocks that never go out of style. A player
                who excels at fundamentals will always find success.
              </p>
            </div>
            <div className={styles.principleCard}>
              <div className={styles.principleNumber}>02</div>
              <h3>Individual Practice</h3>
              <p>
                Team practice is important, but individual practice is where real improvement happens.
                Players are encouraged to put in time on their own — working on weaknesses, refining
                strengths, and developing at their own pace.
              </p>
            </div>
            <div className={styles.principleCard}>
              <div className={styles.principleNumber}>03</div>
              <h3>Self-Motivation</h3>
              <p>
                The best players don&rsquo;t need to be pushed — they push themselves. Coach Roberts
                teaches players to develop an internal drive that goes beyond external rewards. This
                mindset serves them well beyond baseball.
              </p>
            </div>
            <div className={styles.principleCard}>
              <div className={styles.principleNumber}>04</div>
              <h3>Compete Every Day</h3>
              <p>
                Competition isn&rsquo;t just for game day. A competitive attitude in practice, in the
                weight room, and in the classroom creates habits that carry over when the lights come on.
              </p>
            </div>
            <div className={styles.principleCard}>
              <div className={styles.principleNumber}>05</div>
              <h3>Respect the Game</h3>
              <p>
                Play hard, play fair, and respect your opponents, your teammates, and the umpires.
                The way you carry yourself on the field says everything about who you are as a person.
              </p>
            </div>
            <div className={styles.principleCard}>
              <div className={styles.principleNumber}>06</div>
              <h3>Have Fun</h3>
              <p>
                At the end of the day, baseball is a game. If you&rsquo;re not enjoying it, something
                is wrong. The best performances come from players who are loose, confident, and having
                a great time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.approach}>
        <div className={styles.approachInner}>
          <div className={styles.approachContent}>
            <h2>Work With Coach Roberts</h2>
            <p>
              Whether you&rsquo;re a young player looking to develop your skills, a high school
              athlete preparing for the next level, or a coach seeking to improve your program,
              Coach Roberts brings decades of experience and a proven track record of success.
            </p>
            <p>
              His instructional videos, books, and personal coaching sessions offer access to the
              same methods and philosophies that built one of the top programs in college baseball.
            </p>
            <Link href="/contact" className={styles.approachCta}>
              Get in Touch
            </Link>
          </div>
          <div className={styles.approachImage}>
            Coaching Session Photo
          </div>
        </div>
      </section>

      <section className={styles.testimonials}>
        <div className={styles.testimonialsInner}>
          <h2>What People Say</h2>
          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialQuote}>
                &ldquo;Coach Roberts taught me more than just baseball. The fundamentals and work
                ethic he instilled have stayed with me throughout my entire career and life.&rdquo;
              </p>
              <p className={styles.testimonialAuthor}>Former Player</p>
              <p className={styles.testimonialRole}>UNC Baseball Alumni</p>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialQuote}>
                &ldquo;His approach to individual development is second to none. He sees what each
                player needs and finds a way to bring out their best.&rdquo;
              </p>
              <p className={styles.testimonialAuthor}>Fellow Coach</p>
              <p className={styles.testimonialRole}>ACC Baseball</p>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialQuote}>
                &ldquo;The training videos are outstanding. Clear, practical instruction that you
                can put to work immediately. Worth every minute.&rdquo;
              </p>
              <p className={styles.testimonialAuthor}>Youth Coach</p>
              <p className={styles.testimonialRole}>Vimeo On Demand Viewer</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
