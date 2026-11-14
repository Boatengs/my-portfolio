import { StaticLink as Link } from "../static-link";
import { SiteNav } from "../site-nav";
import { LeadershipTabs } from "./leadership-tabs";

export const metadata = {
  title: "Leadership & Impact — Sampson Boateng",
  description:
    "Leadership roles, community impact, working principles and recognition, including the Laurel and Scroll 100 Society of Distinction.",
};

export default function Leadership() {
  return (
    <main className="leadership-page lx-page">
      <SiteNav label="Leadership page navigation" />
      <header className="lx-hero shell">
        <div>
          <p className="eyebrow">LEADERSHIP &amp; IMPACT</p>
          <h1>
            Service that builds <em>stronger systems.</em>
          </h1>
          <p className="lx-lead">
            For me, leadership is practical service. I make room for people,
            give them a reason to take part, and set things up so the community
            keeps going without me.
          </p>
        </div>
        <div className="lx-stats" aria-label="At a glance">
          <div>
            <strong>4</strong>
            <span>leadership roles</span>
          </div>
          <div>
            <strong>3</strong>
            <span>honors</span>
          </div>
          <div>
            <strong>2</strong>
            <span>badges</span>
          </div>
        </div>
      </header>
      <LeadershipTabs />
      <footer className="footer">
        <div className="shell">
          <p className="eyebrow">THE WORK BEHIND THE RECOGNITION</p>
          <h2>
            Service expressed
            <br />
            through <em>action.</em>
          </h2>
          <Link className="email" href="/work">
            Explore all projects ↗
          </Link>
          <div className="footer-row">
            <p>© 2026 Sampson Boateng</p>
            <div>
              <Link href="/">Home</Link>
              <Link href="/work">Selected Work</Link>
              <Link href="/person">Beyond Work</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
