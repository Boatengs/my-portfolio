import { StaticLink as Link } from "../static-link";
import { SiteNav } from "../site-nav";

export default function Impact() {
  return (
    <main className="impact-page">
      <SiteNav label="Impact page navigation" />
      <header className="impact-page-hero shell">
        <p className="eyebrow">IMPACT / PROFESSIONAL APPROACH</p>
        <h1>
          Service that becomes
          <br />
          <em>stronger systems.</em>
        </h1>
        <p>
          In school, in community roles and at work, I keep ending up in the
          same place: noticing what makes it harder for people to take part or
          stay informed, and helping fix it.
        </p>
      </header>
      <section className="impact-detail shell">
        <div className="impact-origin">
          <h2>Impact starts with paying attention.</h2>
          <p>
            Most of the improvements I&apos;ve been part of started with
            listening. Before I suggest a change, I try to understand who is
            involved and what is getting in their way. I aim for fixes people
            can keep using after I&apos;ve moved on.
          </p>
        </div>
        <div className="impact-story-grid">
          <article>
            <span>01</span>
            <p className="eyebrow">COMMUNITY</p>
            <h3>Creating room for people to belong.</h3>
            <p>
              Through student leadership, ambassador work, community events and
              pickup sports, I&apos;ve helped build spaces where people from
              different programs and backgrounds actually meet and get
              involved.
            </p>
          </article>
          <article>
            <span>02</span>
            <p className="eyebrow">ENGAGEMENT</p>
            <h3>Turning an invitation into participation.</h3>
            <p>
              Announcing an event is the easy part. I focus on welcoming people,
              listening to what they need and communicating clearly, so they
              come back the next time.
            </p>
          </article>
          <article className="impact-feature">
            <span>03</span>
            <p className="eyebrow">BETTER INFORMATION FLOW</p>
            <h3>Making internal communication easier to follow.</h3>
            <p>
              At my current organization, internal updates were spread across
              too many places and were easy to miss. I helped centralize that
              communication, so updates are now easier to share, find and
              follow.
            </p>
          </article>
        </div>
        <div className="work-principles">
          <div>
            <p className="eyebrow">PROFESSIONAL WORKING PRINCIPLES</p>
            <h3>Practical principles, not corporate language.</h3>
          </div>
          <ol>
            <li>
              <span>01</span>
              <b>Listen before changing things.</b>
            </li>
            <li>
              <span>02</span>
              <b>Make information easier to understand.</b>
            </li>
            <li>
              <span>03</span>
              <b>Build with the people who will use it.</b>
            </li>
            <li>
              <span>04</span>
              <b>Leave every process stronger than before.</b>
            </li>
          </ol>
        </div>
      </section>
      <footer className="footer">
        <div className="shell">
          <p className="eyebrow">CONTINUE EXPLORING</p>
          <h2>
            See the work behind
            <br />
            <em>the approach.</em>
          </h2>
          <Link className="email" href="/work">
            Explore all projects ↗
          </Link>
          <div className="footer-row">
            <p>© 2026 Sampson Boateng</p>
            <div>
              <Link href="/">Home</Link>
              <Link href="/person">Beyond Work</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
