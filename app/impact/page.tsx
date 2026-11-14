import { StaticLink as Link } from "../static-link";
import { sitePath } from "../site-path";

// The Impact page is now part of Leadership & Impact. Keep this address working
// by sending visitors to the Serve tab there.
export default function Impact() {
  const target = `${sitePath("/leadership/")}#serve`;
  return (
    <main className="lx-redirect shell">
      <meta httpEquiv="refresh" content={`0; url=${target}`} />
      <p>
        This page has moved to{" "}
        <Link href="/leadership">Leadership &amp; Impact</Link>.
      </p>
    </main>
  );
}
