import Image from 'next/image'
import styles from './page.module.css'

export const metadata = {
  title: 'About — Coach Mike Roberts',
  description: 'Learn about Coach Mike Roberts — 23 years as UNC head baseball coach, author, and father of MLB All-Star Brian Roberts.',
}

export default function About() {
  return (
    <>
      <section className={styles.hero}>
        <h1>About Coach Roberts</h1>
      </section>

      <section className={styles.bio}>
        <div className={styles.bioInner}>
          <div className={styles.bioImage}>
            <Image
              src="/images/about-collage.jpg"
              alt="Coach Mike Roberts — career collage"
              width={400}
              height={500}
            />
          </div>
          <div className={styles.bioContent}>
            <p>
              What a blessing it was to grow up in a small town in Tennessee where the entire
              community embraced the sport of baseball. My coaches were tough and old school but
              positive. They drilled fundamentals into us at every practice.
            </p>
            <p>
              John Whited was my outstanding high school coach who went on to be the head coach
              at the University of Tennessee. He taught us to compete with everything we could
              give to the final pitch of every game. Clyde Starrette, whose brother Herm was a
              major league pitching coach, threw great batting practice and taught us to hit the
              ball where it was pitched. Jim Herbert, a young engineer at Eastman Kodak who had
              pitched at Tennessee, worked with all the pitchers in the community. My father, Edd
              Roberts who never played on a baseball team in his life but had a love for the game,
              gave many youth the opportunity to play. He raised the money for equipment and travel
              expenses. All of us were so fortunate to have the coaching, leadership, and guidance
              of these gentlemen throughout our youth and high school years.
            </p>
            <p>
              My father gave me a set of catcher&rsquo;s gear when I was nine years old because
              we had no catchers on the team. After that, I spent my entire playing career behind
              the plate. Throughout my school years there were many excellent pitchers in the area.
              The hardest thrower was a left-hander by the name of Larry Kiser. His nickname was
              &ldquo;Lurch&rdquo; from the character on the television show &ldquo;The
              Munsters.&rdquo; Larry was a senior in high school when I was a junior. He was being
              recruited by several major universities in the southeast. Since he was being scouted
              I was fortunate that a few also watched the catcher behind the plate who caught the
              fastballs, blocked most of the big curve balls in the dirt, hustled, sprayed a few
              singles and stole some bases.
            </p>
            <p>
              I received more scholarship opportunities than I would have if coaches had not been
              traveling to watch Larry pitch. Both of us signed at the UNC-Chapel Hill. Larry
              enrolled in the fall of 1967 and I entered the following year.
            </p>
            <p>
              When I completed my playing career at UNC, I was drafted in the forty fourth round
              by the Kansas City Royals. After playing two full seasons in minor league baseball,
              I asked for my release so I could return to UNC to study for my Masters of Arts in
              Teaching. My dream was to become a college coach.
            </p>
            <p>
              Two years later at 26 years of age, I was named the Designated Head Coach at UNC to
              take over for Walt Rabb who would be retiring the next year. I spent 23 years as the
              head coach at UNC with two trips to Omaha and the College World Series, 5 ACC
              championships, and the opportunity to coach many future major league players. Some of
              these players were Walt Weiss, 1989 American League Rookie of the Year, B.J. Surhoff,
              the first person selected in the 1985 amateur draft who went on to accumulate over
              2300 hits, Scott Bradley was the second pick of the New York Yankees and my son,
              Brian, a first round pick in 1999 and now a two time all-star second baseman with
              the Baltimore Orioles. Also, I coached one year at UNC-Asheville and have been the
              head coach at Wareham of the Cape Cod Summer Baseball League on two different
              occasions. Currently, I am the head coach of the Cotuit Kettleers in the Cape League.
            </p>
            <p>
              Why should you read this book about my baseball experiences, how I learned an
              aggressive base stealing game as a young player and have taught it for years as a
              coach, and believe more players of all ages should hustle and show a greater respect
              for the game? Because, if you have a desire to learn new ways to improve your game
              or help others improve theirs I am giving you encouragement and some new practice
              ideas. If you like baseball stories you will find this interesting. If you just have
              a passion for the game, as I do, you will be motivated to become an improved player
              or coach.
            </p>
            <p>
              I have spent most of my life around or on a baseball field. I believed in myself as
              a player and played the game all out. I believe in myself as a teacher of the game
              and work enthusiastically to help young players improve. This interest and love of
              the game has fueled my passion for writing this book.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
