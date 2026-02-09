import styles from './page.module.css'

export const metadata = {
  title: 'About — Coach Mike Roberts',
  description: 'Learn about Coach Mike Roberts — 23 years as UNC head baseball coach, 780 wins, author, and father of MLB All-Star Brian Roberts.',
}

export default function About() {
  return (
    <>
      <section className={styles.hero}>
        <h1>About Coach Roberts</h1>
        <p>
          A lifetime dedicated to the game of baseball and the development of young athletes.
        </p>
      </section>

      <section className={styles.bio}>
        <div className={styles.bioInner}>
          <div className={styles.bioImage}>
            Coach Roberts Photo
          </div>
          <div className={styles.bioContent}>
            <h2>A Legacy of Excellence</h2>
            <p>
              Coach Mike Roberts served as the head baseball coach at the University of North
              Carolina at Chapel Hill for 23 seasons. During his tenure, he compiled over 780 wins
              and established UNC as one of the premier baseball programs in the Atlantic Coast
              Conference and the nation.
            </p>
            <p>
              Under his leadership, the Tar Heels made numerous NCAA Tournament appearances,
              including trips to the College World Series. His teams were known for their
              disciplined approach to the game, strong fundamentals, and competitive spirit.
            </p>
            <p>
              Before his time at UNC, Coach Roberts served as the head baseball coach at
              UNC-Asheville, where he built the program from the ground up. He also managed the
              Cotuit Kettleers of the prestigious Cape Cod Baseball League, one of the top summer
              collegiate leagues in the country.
            </p>
            <p>
              Beyond his own coaching career, Coach Roberts is the father of Brian Roberts, who
              played 14 seasons in Major League Baseball with the Baltimore Orioles. Brian was
              named a two-time MLB All-Star and was known for his exceptional work ethic and
              fundamental approach to the game — traits instilled by his father from an early age.
            </p>
            <p>
              Now retired from collegiate coaching, Coach Roberts remains active in baseball
              instruction and is passionate about sharing his knowledge with the next generation
              of players, coaches, and parents through his training videos, books, and personal
              coaching.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.highlights}>
        <div className={styles.highlightsInner}>
          <h2>Career Highlights</h2>
          <div className={styles.highlightsGrid}>
            <div className={styles.highlightCard}>
              <div className={styles.highlightNumber}>780+</div>
              <div className={styles.highlightLabel}>Career Wins</div>
            </div>
            <div className={styles.highlightCard}>
              <div className={styles.highlightNumber}>23</div>
              <div className={styles.highlightLabel}>Seasons at UNC</div>
            </div>
            <div className={styles.highlightCard}>
              <div className={styles.highlightNumber}>Multiple</div>
              <div className={styles.highlightLabel}>NCAA Tournament Appearances</div>
            </div>
            <div className={styles.highlightCard}>
              <div className={styles.highlightNumber}>ACC</div>
              <div className={styles.highlightLabel}>Championship Contender</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.books} id="books">
        <div className={styles.booksInner}>
          <h2>Books</h2>
          <div className={styles.booksList}>
            <div className={styles.bookCard}>
              <div className={styles.bookCover}>
                You Can&rsquo;t Steal Second Base and Keep Your Foot on First
              </div>
              <div className={styles.bookInfo}>
                <h3>You Can&rsquo;t Steal Second Base and Keep Your Foot on First</h3>
                <p className={styles.bookYear}>Published 2008</p>
                <p>
                  A unique blend of baseball wisdom and life lessons, this book draws on Coach
                  Roberts&rsquo; decades of experience to teach fundamentals that apply both on and off
                  the field. It&rsquo;s a must-read for players, coaches, and anyone who loves
                  the game.
                </p>
                <a href="#" className={styles.bookCta}>Learn More &rarr;</a>
              </div>
            </div>
            <div className={styles.bookCard}>
              <div className={styles.bookCover}>
                Baserunning
              </div>
              <div className={styles.bookInfo}>
                <h3>Baserunning</h3>
                <p className={styles.bookYear}>Published 2013</p>
                <p>
                  A focused guide on one of the most overlooked aspects of baseball. Coach Roberts
                  breaks down the art of baserunning — from reading pitchers and getting great jumps
                  to sliding technique and situational decision-making.
                </p>
                <a href="#" className={styles.bookCta}>Learn More &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
