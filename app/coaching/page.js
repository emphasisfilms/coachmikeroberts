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
        <h1>Proud to lead the Cotuit Kettleers in the Cape Cod Baseball League.</h1>
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

      <article className={styles.post}>
        <div className={styles.postInner}>
          <h2>Cotuit Kettleers</h2>
          <p className={styles.postMeta}>Story by Steve McCarthy, August 13, 2010</p>

          <Image
            src="/images/kettleers-slide.jpg"
            alt="Kettleers player sliding into base"
            width={800}
            height={600}
            className={styles.postImage}
          />
          <p>
            SOUTH YARMOUTH - Based on the attendance figures from Friday&rsquo;s deciding Game 3
            of the Cape Cod Baseball League Championship Series, it&rsquo;s pretty certain everyone
            interested knows by now that the Cotuit Kettleers beat the Yarmouth-Dennis Red Sox 6-0
            to hoist the Arnold Mycock Trophy for the first time since 1999 and the Kettleers
            faithful were rewarded after enduring a pair of Finals sweeps.
          </p>
          <p>
            Most accounts of the afternoon at &ldquo;Red&rdquo; Wilson Field in South Yarmouth will
            highlight playoffs MVP Jordan Leyland (UC Irvine), who hit .462 in the seven games
            against Falmouth, Wareham, and Y-D. Others will commend Nick Tropeano&rsquo;s (Stony
            Brook) six and two thirds shutout innings in relief, four days after hurling five in a
            start against Wareham. A Yastrzemski homering against the Red Sox was also big, as was
            the pitching and defensive showcase which surrendered just two runs over three games to
            the same Y-D lineup that shattered scoring records in the Eastern Division Final.
          </p>
          <p>
            Those statistics are a snapshot of what happened on one day, conveyed by someone that
            doesn&rsquo;t know how to correctly pronounce Andriese (Besides coach Mike Roberts). The
            Kettleers in no way resemble the Buffalo Bills of the 1990&rsquo;s, and Leyland is not
            the son of Detroit Tigers manager Jim Leyland.
          </p>
          <p>
            I had the privilege of recording every out of all 51 games this summer in three
            different scorebooks. From the sweltering June days when the team began wearing their
            batting practice jerseys as game uniforms, to the 18 inning afternoon split between
            Hyannis and Chatham, the temporary players to the full contract, the undrafted division
            three pitcher to the sixth overall pick, this group became my brothers. But this article
            isn&rsquo;t about me.
          </p>
          <p>
            It&rsquo;s about Deven Marrero, in conversations as the top shortstop on the Cape this
            summer, who got drilled with a pitch in the chest Friday while squared around to bunt.
            The Kettleers didn&rsquo;t have another infielder available, so Marrero played four more
            innings without the ability to swing the bat. All he could do was square around again
            and stare pain in the eyes.
          </p>
          <p>
            &ldquo;Deven Marrero had as much to do with us winning that game today as any player on
            this field,&rdquo; Roberts said. &ldquo;He could have easily not played the last five
            innings. He&rsquo;s a phenomenal young man and a fierce competitor.&rdquo;
          </p>
          <p>
            Tropeano started and finished the season on the mound for Cotuit and I&rsquo;ll admit I
            was one of the crowd that called him &ldquo;Hard-luck&rdquo; in the early going. The
            truth is, he was just hard-working. Roberts called Tropeano the most competitive college
            pitcher he&rsquo;s ever worked with and that fire was at full roar when the coach pulled
            him after the fifth inning of a 2-2 game on Monday. I overheard Tropeano tell Roberts
            he would be available in a closer role if needed on Thursday and there was no hint of
            hesitation as the lanky right-hander hurried to the aid of ailing starter Brady Rodgers
            in the third inning Friday. Tropeano also contributed a base hit to help his own cause
            in Chatham and would have caught his own pitches if asked to.
          </p>
          <p>
            &ldquo;There was no doubt in my mind that if Nick Tropeano finished that ballgame, the
            Cotuit Kettleers were going to win,&rdquo; Roberts said.
          </p>
          <p>
            James McCann declined an invitation to try out for Team USA and his maturity in and out
            of the catcher&rsquo;s gear was an under-appreciated factor in the postseason success of
            the Kettleers pitching staff. His teammates saw it, when McCann proved he could call the
            right pitch in any situation. The coaches saw it when after 9 innings in the crouch,
            McCann would not leave Lowell Park until the tarps were laid out and darkness had settled
            in. Then he&rsquo;d go to the batting cage and hack away, struggling with the transition
            to the wood bat. Justice was finally served when McCann hit in five of the seven playoff
            games, including two home runs and five runs batted in.
          </p>
          <p>
            &ldquo;To have a 20-year old young man take your pitching staff and call all of the
            pitches for the rest of the year, to me in today&rsquo;s world, is amazing,&rdquo;
            Roberts said.
          </p>
          <p>
            Yastrzemski (Yes...Carl&rsquo;s grandson) carried so much weight on his 5-foot-10,
            168-pound frame it&rsquo;s a wonder he led the team in stolen bases. He was prepared for
            it, because it&rsquo;s been there his whole life. Yaz had a pretty memorable summer in
            Cotuit. He broke up a no hitter with two outs in the ninth inning, hit a grand slam,
            and homered in Game 3 of the Finals to ignite the Kettleers rally. He also signed
            autographs, stood for pictures, honored media requests, and promised to say
            &ldquo;Hi&rdquo; to Grandpa, even after each of Cotuit&rsquo;s five walkoff losses. The
            comparisons to his grandfather are constant, but Mike Yastrzemski played every game this
            summer as though he were a temporary contract player fighting for an opportunity to stay.
            If he makes it to the Big Leagues, it won&rsquo;t be an achievement that was just handed
            to him. It will be because he plays the game the right way and never shortchanges
            himself or his teammates.
          </p>
          <p>
            &ldquo;There&rsquo;s not a player in this league that has more pressure on him than Mike
            Yastrzemski,&rdquo; Roberts said. &ldquo;He is a wonderful young man, and whoever has
            taught him to play the game, they taught him to play it the right way.&rdquo;
          </p>
          <p>
            This Cotuit Kettleers team was a model of character, maturity, and passion for both the
            game of baseball and being responsible members of the community. Each player came with a
            story, built new ones, and left the village of Cotuit with one to savor forever. None of
            these young men felt they were bigger than the game or more deserving to be in the league
            than the next.
          </p>
          <p>
            In a Mike Roberts managed baseball team, one will find class, in and away from the
            dugout. These are some of the best college athletes in the world, some on the brink of
            signing professional contracts, but Roberts prepares them to succeed in life whether or
            not they throw another pitch or swing a bat ever again. Like any coach, his decisions
            during the game are scrutinized, but one thing that can never be questioned is Mike
            Roberts&rsquo; heart. He cares about the integrity of the game, the community which has
            welcomed him back for seven summers, and each talent that commits a summer of nothing
            but their best effort regardless of the result. The Cotuit Kettleers have been in the
            Championship Series each of the past three summers because at home and on the road, on
            and off the diamond, Roberts&rsquo; club is full of winners.
          </p>
          <p>
            Finally, the Kettleers were rewarded.
          </p>
        </div>
      </article>

      <FeaturedCards />

      <section className={styles.quotes}>
        <RotatingQuotes />
      </section>
    </>
  )
}
