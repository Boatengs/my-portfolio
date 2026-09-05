import Link from "next/link";

type SiteNavProps = {
  home?: boolean;
  label?: string;
};

export function SiteNav({ home = false, label = "Primary navigation" }: SiteNavProps) {
  const links = [
    { label: "About", href: home ? "#about" : "/#about" },
    { label: "Experience", href: home ? "#experience" : "/#experience" },
    { label: "Projects", href: home ? "#work" : "/work" },
    { label: "Skills", href: home ? "#skills" : "/skills" },
    { label: "Leadership", href: home ? "#leadership" : "/leadership" },
    { label: "Beyond Work", href: "/person" },
  ];

  return (
    <nav className="nav shell" aria-label={label}>
      <Link className="wordmark" href={home ? "#top" : "/"}>
        SB<span>.</span>
      </Link>

      <div className="nav-links">
        {links.map((link) => (
          <Link key={link.label} href={link.href}>
            {link.label}
          </Link>
        ))}
        <Link className="nav-cta" href="/resume">
          Résumé <span>↗</span>
        </Link>
      </div>

      <details className="mobile-nav">
        <summary aria-label="Open navigation menu">Menu</summary>
        <div className="mobile-nav-panel">
          {links.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label} <span aria-hidden="true">→</span>
            </Link>
          ))}
          <Link className="mobile-resume" href="/resume">
            Résumé <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </details>
    </nav>
  );
}
