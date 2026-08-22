import Link from "next/link";
import { SiteNav } from "../site-nav";

const interests = [
  {
    index: "01",
    title: "Volunteering",
    kicker: "SERVICE",
    copy: "Giving time to people and meaningful causes keeps Sam connected to purpose. For him, volunteering turns empathy into action and demonstrates how thoughtful contributions can strengthen a community.",
  },
  {
    index: "02",
    title: "Cooking",
    kicker: "CREATIVITY",
    copy: "Cooking gives Sam an opportunity to slow down, experiment, and bring people together. It rewards patience, attention to detail, and the confidence to explore new combinations.",
  },
  {
    index: "03",
    title: "Travel",
    kicker: "PERSPECTIVE",
    copy: "Travel introduces Sam to new places, cultures, and perspectives. Every journey reinforces the value of approaching familiar challenges from an entirely different point of view.",
  },
  {
    index: "04",
    title: "Fitness",
    kicker: "DISCIPLINE",
    copy: "Fitness brings structure to Sam’s energy and routine. Consistent training reinforces the discipline, resilience, and steady progress he values across every area of life.",
  },
  {
    index: "05",
    title: "Music & Audio",
    kicker: "RHYTHM",
    copy: "Music helps Sam reset, focus, and stay connected to emotion. Audiobooks, ideas, stories, and thoughtful conversations turn ordinary moments into opportunities for reflection and learning.",
  },
  {
    index: "06",
    title: "Reading",
    kicker: "CURIOSITY",
    copy: "Reading introduces Sam to unfamiliar subjects and perspectives. Part exploration and part reflection, it keeps his thinking open, curious, and continually evolving.",
  },
];

export default function PersonPage() {
  return (
    <main className="person-page">
      <SiteNav label="Personal page navigation" />
      <section className="person-hero shell">
        <div className="person-intro">
          <p className="eyebrow">THE PERSON BEHIND THE WORK</p>
          <h1>
            There is more to Sam than <em>models and metrics.</em>
          </h1>
          <p>
            Sam’s professional work demonstrates what he can build. His life
            beyond it shapes how he contributes—with curiosity, discipline,
            empathy, creativity, and an instinct for bringing people together.
          </p>
          <div className="person-scroll">
            SCROLL TO MEET THE PERSON <span>↓</span>
          </div>
        </div>
        <div className="person-portrait">
          <span className="portrait-ring ring-one" aria-hidden="true" />
          <span className="portrait-ring ring-two" aria-hidden="true" />
        <img
          src="/sam-profile.webp"
          width="900"
          height="900"
          decoding="async"
          alt="Portrait of Sampson Boateng"
        />
          <div className="portrait-note">
            <span>BEYOND THE SCREEN</span>
            <b>Present. Curious. Always moving.</b>
          </div>
        </div>
      </section>
      <div className="person-marquee" aria-hidden="true">
        <div>
          VOLUNTEER · COOK · TRAVEL · TRAIN · LISTEN · READ · PLAY · CONNECT ·
          VOLUNTEER · COOK · TRAVEL · TRAIN · LISTEN · READ · PLAY · CONNECT ·
        </div>
      </div>
      <section className="person-values shell">
        <div>
          <p className="eyebrow">01 / WHAT KEEPS SAM GROUNDED</p>
          <h2>
            Life outside work is not an <em>afterthought.</em>
          </h2>
        </div>
        <blockquote>
          “Beyond professional work, Sam practices the same qualities that
          define his approach: showing up, staying curious, learning from
          others, and making room for joy.”
        </blockquote>
      </section>
      <section
        className="interest-grid shell"
        aria-label="Interests and hobbies"
      >
        {interests.map((item, i) => (
          <article
            className={
              i === 0 || i === 5
                ? "interest-card feature"
                : i === 2
                  ? "interest-card dark"
                  : "interest-card"
            }
            key={item.title}
          >
            <span className="interest-index">{item.index}</span>
            <div className="interest-symbol" aria-hidden="true">
              {item.title === "Volunteering"
                ? "✦"
                : item.title === "Cooking"
                  ? "○"
                  : item.title === "Travel"
                    ? "↗"
                    : item.title === "Fitness"
                      ? "+"
                      : item.title === "Music & Audio"
                        ? "≈"
                        : "Aa"}
            </div>
            <p>{item.kicker}</p>
            <h2>{item.title}</h2>
            <div className="interest-copy">{item.copy}</div>
          </article>
        ))}
      </section>
      <section className="play-section">
        <div className="shell play-grid">
          <div>
            <p className="eyebrow">02 / HOW SAM PLAYS</p>
            <h2>
              Competition,
              <br />
              <em>connection,</em>
              <br />
              and joy.
            </h2>
            <p>
              Basketball and soccer keep Sam active, strengthen teamwork, and
              create opportunities to connect beyond job titles and classrooms.
              Sports also reflect his commitment to community building—one game,
              one team, and one shared experience at a time.
            </p>
          </div>
          <div
            className="sport-stage"
            aria-label="Animated basketball and soccer graphic"
          >
            <div className="sport-orbit" />
            <div className="court-lines" />
            <span className="basketball">BASKETBALL</span>
            <span className="soccer">SOCCER</span>
            <b>
              PLAY
              <br />
              TOGETHER
            </b>
          </div>
        </div>
      </section>
      <section className="visual-journal shell">
        <div className="journal-head">
          <div>
            <p className="eyebrow">03 / A GROWING VISUAL JOURNAL</p>
            <h2>
              Moments beyond
              <br />
              the <em>résumé.</em>
            </h2>
          </div>
          <p>
            This space is designed to grow with personal moments from travel,
            volunteering, sport, food, and everyday life.
          </p>
        </div>
        <div className="journal-grid">
          <div className="journal-tile tile-one">
            <span>TRAVEL</span>
            <b>
              New places.
              <br />
              Wider perspective.
            </b>
          </div>
          <div className="journal-tile tile-two">
            <span>COMMUNITY</span>
            <b>
              Time shared
              <br />
              with purpose.
            </b>
          </div>
          <div className="journal-tile tile-three">
            <span>EVERYDAY LIFE</span>
            <b>
              The moments
              <br />
              between milestones.
            </b>
          </div>
        </div>
      </section>
      <section className="person-closing shell">
        <p className="eyebrow">THE WHOLE PICTURE</p>
        <h2>
          Good work is technical.
          <br />
          Meaningful work is <em>human.</em>
        </h2>
        <p>
          Sam brings both dimensions to his work: an analyst committed to
          evidence and a person who values people, movement, culture,
          creativity, and community.
        </p>
        <Link href="/#work">Return to selected work ↗</Link>
      </section>
      <footer className="footer">
        <div className="shell">
          <div className="footer-row">
            <p>© 2026 Sampson Boateng</p>
            <div>
              <Link href="/">Portfolio</Link>
              <a href="mailto:samboateng190@gmail.com">Email</a>
              <a
                href="https://linkedin.com/in/sam-boateng"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
