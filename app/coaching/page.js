import Image from 'next/image'
import FeaturedCards from '@/components/FeaturedCards'
import RotatingQuotes from '@/components/RotatingQuotes'
import styles from './page.module.css'

export const metadata = {
  title: 'Coaching — Coach Mike Roberts',
  description: 'Coaching news and stories from Coach Mike Roberts.',
}

export default function Coaching() {
  return (
    <>
      <section className={styles.hero}>
        <h1>Coaching</h1>
      </section>

      <article className={styles.post}>
        <div className={styles.postInner}>
          <h2>Cotuit Sweeps Mariners to Win Its 17th Cape League Title</h2>
          <p className={styles.postMeta}>Story by Aria Gerson, August 9, 2019</p>

          <p>
            COTUIT &ndash; Casey Schmitt was supposed to have thrown his last pitch of the summer.
          </p>
          <p>
            In a four-inning effort against Wareham last Sunday, the Cotuit right-hander hit his
            innings limit. Usually, those are strict, and usually, once hit, the players don&rsquo;t
            throw another pitch.
          </p>
          <p>
            But Mike Roberts had other plans.
          </p>
          <Image
            src="/images/kettleers-mound.jpg"
            alt="Cotuit Kettleers meeting on the mound at Lowell Park"
            width={800}
            height={533}
            className={styles.postImage}
          />
          <p>
            The Cotuit manager called Schmitt&rsquo;s college coaches at San Diego State and asked
            if Schmitt could have one more inning. He had a particular inning in mind: the ninth
            inning of the championship game, throwing the pitch that would clinch a Cape Cod Baseball
            League championship &mdash; the 17th in Cotuit team history since 1961.
          </p>
          <p>
            Schmitt&rsquo;s coaches said yes. So on Friday at Lowell Park, a title almost in hand,
            Schmitt got the ball.
          </p>
          <p>
            And there, on the mound, Schmitt did exactly what Roberts had envisioned last week:
            threw the last pitch of a championship, as the Kettleers got the sweep with a 10-3 win.
          </p>
          <p>
            As if that weren&rsquo;t enough, Schmitt also hit two home runs as the starting third
            baseman, securing playoff MVP honors.
          </p>
          <p>
            In the first inning, a cheer of &ldquo;Holy Schmitt!&rdquo; rang out as Schmitt watched
            his fly ball leave the yard. His teammates poured out of the dugout to give him high
            fives. It was already the second time they&rsquo;d done so that inning, as first baseman
            Matt Mervis (Duke) went deep two batters earlier. Schmitt would go yard again in the
            fourth to put Cotuit up, 3-0.
          </p>
          <p>
            &ldquo;Things fell into place, and it didn&rsquo;t surprise me that Casey hit two home
            runs today,&rdquo; Roberts said. &ldquo;I&rsquo;m so thrilled for Casey. I&rsquo;m
            thrilled that he was able to push us out to 3-0 with another home run, and then the
            whole team kind of chipped in.&rdquo;
          </p>
          <p>
            The Mariners&rsquo; starter, right-hander Connor McCullough (Kansas State), had a 1.05
            ERA in the regular season and tossed five scoreless innings in his last start against
            Cotuit. But all that was soon forgotten. In the fourth, Schmitt hit his second long ball
            of the night and an error, single, walk and another single put the Kettleers up by four.
          </p>
          <p>
            That would be McCullough&rsquo;s last inning.
          </p>
          <p>
            Harwich caught the home run bug in the fifth when third baseman Riley Tirotta (Dayton)
            and first baseman Niko Kavadas (Notre Dame) both went deep to bring it to 4-2, but it
            was a mere reprieve before the wheels fell off.
          </p>
          <p>
            Eleven batters came to the plate and six got hits for the Kettleers in the fifth, with
            a hit batter, walk, sacrifice fly and passed ball pitching in to score six runs. Mervis
            singled twice in the inning, scoring a run and driving in another. He finished 4-for-5
            with two RBIs.
          </p>
          <p>
            &ldquo;That was definitely a momentum-booster,&rdquo; Schmitt said. &ldquo;So that was
            fun.&rdquo;
          </p>
          <p>
            Tirotta doubled in the seventh and scored on a single, finishing 2-for-3 as one of the
            Mariners&rsquo; few bright spots. But the extra run was far too little, far too late.
          </p>
          <p>
            All season, Harwich had been a team that had lockdown pitching, featuring multiple
            rotation studs and a stalwart bullpen. But the Mariners couldn&rsquo;t come through in
            the championship series.
          </p>
          <p>
            &ldquo;When you&rsquo;re going to [Cotuit&rsquo;s] park ... obviously they pack this
            place and they&rsquo;re one of the crazier fanbases,&rdquo; said Harwich designated
            hitter Patrick Winkel (UConn), who hit two home runs in Thursday&rsquo;s 7-6 loss to
            Cotuit in Game 1 that lasted 15 innings. &ldquo;So you have that in the back of your
            head, but outside of that, we came, we knew they would be tough to beat, they&rsquo;re
            coming off of a big win, especially that 15 innings. That&rsquo;s a dream win for any
            team. Coming off of that, you have all the momentum.&rdquo;
          </p>
          <p>
            Schmitt took the mound to close it out, a little amped at first. He walked Tirotta and
            ran a 3-0 count on catcher Sean Harrington before coming back to strike him out.
          </p>
          <p>
            The next batter, outfielder Max Marusak, hit a looping line drive, but shortstop Adam
            Oviedo leapt up and caught it and tagged Tirotta for the double play.
          </p>
          <p>
            In the blink of an eye, he was being hounded as the Kettleers piled on one another on
            the mound, throwing their hats everywhere, coming together as a team one last time as
            they received the championship trophy.
          </p>
          <Image
            src="/images/kettleers-trophy.jpg"
            alt="Cotuit Kettleers celebrating with the championship trophy"
            width={800}
            height={533}
            className={styles.postImage}
          />
        </div>
      </article>

      <div className={styles.divider} />

      <FeaturedCards />

      <section className={styles.quotes}>
        <RotatingQuotes />
      </section>
    </>
  )
}
