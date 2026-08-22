import Link from "next/link";
import { SiteNav } from "../site-nav";

export default function Impact() {
  return (
    <main className="impact-page">
      <SiteNav label="Impact page navigation" />
      <header className="impact-page-hero shell">
        <p className="eyebrow">IMPACT / SAM’S APPROACH</p>
        <h1>
          Service that becomes
          <br />
          <em>stronger systems.</em>
        </h1>
        <p>
          Across school, leadership, and professional work, the thread has
          remained the same: notice what makes it harder for people to
          participate, communicate, or belong—and help build a better way
          forward.
        </p>
      </header>
      <section className="impact-detail shell">
        <div className="impact-origin">
          <h2>Impact starts with paying attention.</h2>
          <p>
            Sam recognizes that meaningful improvement often begins with
            practical questions: Who is being left out? Where is information
            getting lost? What makes participation harder than necessary? His
            approach centers on listening, understanding the people and processes
            involved, and developing solutions that are clearer, more inclusive,
            and easier to sustain.
          </p>
        </div>
        <div className="impact-story-grid">
          <article>
            <span>01</span>
            <p className="eyebrow">COMMUNITY</p>
            <h3>Creating room for people to belong.</h3>
            <p>
              Through student leadership, ambassador work, community events, and
              recreational sports, Sam has helped create inclusive spaces where
              people across programs, backgrounds, and experience levels can
              meet, participate, and feel connected.
            </p>
          </article>
          <article>
            <span>02</span>
            <p className="eyebrow">ENGAGEMENT</p>
            <h3>Turning an invitation into participation.</h3>
            <p>
              Community requires more than simply announcing an event. Sam
              focuses on welcoming participants, listening to their needs,
              communicating clearly, and creating experiences that encourage
              sustained involvement.
            </p>
          </article>
          <article className="impact-feature">
            <span>03</span>
            <p className="eyebrow">BETTER INFORMATION FLOW</p>
            <h3>Making internal communication easier to follow.</h3>
            <p>
              At his current organization, Sam addressed a long-standing
              challenge in how internal information moved across the workplace.
              By helping centralize communication, he made updates easier to
              share, locate, and follow—reducing fragmentation and giving teams
              a clearer way to stay informed.
            </p>
          </article>
        </div>
        <div className="work-principles">
          <div>
            <p className="eyebrow">SAM’S WORKING PRINCIPLES</p>
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
