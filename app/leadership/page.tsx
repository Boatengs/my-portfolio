import Link from "next/link";
import { SiteNav } from "../site-nav";

export default function Leadership() {
  return (
    <main className="leadership-page">
      <SiteNav label="Leadership page navigation" />
      <header className="leadership-page-hero shell">
        <p className="eyebrow">LEADERSHIP / SERVICE / RECOGNITION</p>
        <h1>
          Building community
          <br />
          with <em>purpose.</em>
        </h1>
        <p>
          Leadership is approached as practical service: fostering belonging,
          creating meaningful opportunities to participate, and building
          structures that allow communities to grow.
        </p>
      </header>
      <section className="leadership-detail shell">
        <div className="leadership-origin">
          <h2>Connection is something you build.</h2>
          <p>
            Across universities, student organizations, professional programs,
            and community initiatives, he has taken on roles requiring active
            listening, thoughtful coordination, clear communication, and
            dependable follow-through. Across each position, his purpose remains
            consistent: make it easier for people to belong and contribute.
          </p>
        </div>
        <div className="leadership-grid">
          <article className="role-card">
            <span>01</span>
            <h3>Student Ambassador</h3>
            <h4>Northeastern University · The Roux Institute</h4>
            <ul>
              <li>
                Represented the student experience for prospective and incoming
                students through campus programs and community events.
              </li>
              <li>
                Welcomed new students, shared peer guidance, and helped
                strengthen connections across the Roux community.
              </li>
            </ul>
          </article>
          <article className="role-card">
            <span>02</span>
            <h3>Founder, Roux Pickup Sports</h3>
            <h4>The Roux Institute</h4>
            <ul>
              <li>
                Founded an inclusive recreational sports community that created
                consistent opportunities for students to connect outside the
                classroom.
              </li>
              <li>
                Organized games, coordinated participation, and built a
                welcoming environment across programs and experience levels.
              </li>
            </ul>
          </article>
          <article className="role-card">
            <span>03</span>
            <h3>
              Executive Member — Marketing and Roux Connections Coordinator
            </h3>
            <h4>Data for Social Good (DSG)</h4>
            <ul>
              <li>
                Supported one of the campus’s leading student interest groups
                focused on applying data skills to meaningful social challenges.
              </li>
              <li>
                Contributed to group strategy, programming, student engagement,
                and collaborative initiatives connecting analytics with
                community impact.
              </li>
            </ul>
          </article>
          <article className="role-card">
            <span>04</span>
            <h3>Event Organizer and Coordinator</h3>
            <h4>
              National Union of Ghanaian Students (NUGS Saratov) · Saratov State
              University
            </h4>
            <ul>
              <li>
                Organized academic, cultural, and community-building programs
                that supported Ghanaian students living and studying in Saratov.
              </li>
              <li>
                Coordinated events, student communications, and peer-support
                initiatives while helping connect students with university and
                community resources.
              </li>
            </ul>
          </article>
        </div>
        <article className="award-card">
          <div className="award-mark">
            <b>100</b>
            <span>
              LAUREL
              <br />& SCROLL
            </span>
          </div>
          <div>
            <p className="eyebrow">UNIVERSITY RECOGNITION</p>
            <h3>Laurel and Scroll 100 Award</h3>
            <h4>Northeastern University</h4>
            <p>
              Recognized among 100 students for outstanding achievement across
              academics, leadership, and meaningful student engagement.
            </p>
            <div className="proof-links">
              <a
                href="https://news.northeastern.edu/2025/04/15/laurel-scroll-induction-ceremony-2025/"
                target="_blank"
                rel="noreferrer"
              >
                Official inductee list ↗
              </a>
              <a
                href="https://news.northeastern.edu/2025/06/16/northeastern-portland-commencement-2025/"
                target="_blank"
                rel="noreferrer"
              >
                Portland commencement feature ↗
              </a>
              <a
                href="https://www.instagram.com/p/DIg2T6NOyWb/"
                target="_blank"
                rel="noreferrer"
              >
                Roux Institute celebration ↗
              </a>
            </div>
          </div>
        </article>
        <article className="fellowship-card">
          <div>
            <span>2018</span>
            <b>YALI</b>
          </div>
          <div>
            <p className="eyebrow">LEADERSHIP FELLOWSHIP</p>
            <h3>Young African Leadership Initiative Fellow</h3>
            <p>
              Selected for the Young African Leadership Initiative, joining a
              network of emerging African leaders committed to strengthening
              leadership, civic engagement, entrepreneurship, and positive
              community impact.
            </p>
          </div>
        </article>
        <div className="professional-badges">
          <p className="eyebrow">PROFESSIONAL BADGES &amp; RECOGNITION</p>
          <div className="badge-grid">
            <article className="credential-badge">
              <span className="badge-signal" aria-hidden="true">
                <span className="badge-emblem">★</span>
              </span>
              <div>
                <h3>AI in the Workplace</h3>
                <p>Northeastern University</p>
              </div>
            </article>
            <article className="credential-badge">
              <span className="badge-signal" aria-hidden="true">
                <span className="badge-emblem">★</span>
              </span>
              <div>
                <h3>Interview Communication</h3>
                <p>Northeastern University</p>
              </div>
            </article>
          </div>
          <article className="hackathon-recognition">
            <div className="hackathon-place">
              <strong>1ST</strong>
              <span>PLACE</span>
            </div>
            <div>
              <p className="eyebrow">CLIMATE RESILIENCY HACKATHON</p>
              <h3>SeeLevelRise</h3>
              <p>
                Built with Qiuhao Gu, Nicholas Toole, and John Kovarik, this web
                and mobile app concept helps communities visualize how locations
                could be affected by sea-level rise across climate projections
                and timelines.
              </p>
              <div className="proof-links">
                <a
                  href="https://news.northeastern.edu/2024/11/25/climate-resiliency-hackathon/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Northeastern feature ↗
                </a>
                <a
                  href="https://www.linkedin.com/posts/terradunham_from-october-28thto-30th-50-roux-students-activity-7258186513094426624-qp7z"
                  target="_blank"
                  rel="noreferrer"
                >
                  First-place announcement ↗
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
      <footer className="footer">
        <div className="shell">
          <p className="eyebrow">THE WORK BEHIND THE RECOGNITION</p>
          <h2>
            Service expressed
            <br />
            through <em>action.</em>
          </h2>
          <Link className="email" href="/impact">
            Explore the professional approach ↗
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
