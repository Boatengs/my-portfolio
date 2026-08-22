import Link from "next/link";

type SiteNavProps = {
  home?: boolean;
  label?: string;
};

export function SiteNav({ home = false, label = "Primary navigation" }: SiteNavProps) {
  return (
    <nav className="nav shell" aria-label={label}>
      <Link className="wordmark" href={home ? "#top" : "/"}>
        SB<span>.</span>
      </Link>
      <div className="nav-links">
        <Link href={home ? "#about" : "/#about"}>About</Link>
        <Link href={home ? "#work" : "/work"}>Projects</Link>
        <Link href={home ? "#experience" : "/#experience"}>Experience</Link>
        <Link href={home ? "#leadership" : "/leadership"}>Leadership</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/person">Beyond Work</Link>
        <Link className="nav-cta" href="/resume">
          Résumé <span>↗</span>
        </Link>
      </div>
    </nav>
  );
}
