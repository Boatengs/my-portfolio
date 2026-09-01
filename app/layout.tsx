import type { Metadata } from "next";
import "./globals.css";
import "./modern-white.css";
export const metadata: Metadata = {
  title: "Sampson Boateng — Data Analytics & Applied Machine Learning",
  description:
    "Data analytics and applied machine learning professional transforming data into insight, strategy, and impact.",
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <style>{`.skip-link{position:fixed;z-index:10000;top:12px;left:12px;padding:12px 16px;background:#111;color:#fff;border:2px solid #fff;border-radius:4px;font:800 14px/1 Arial,sans-serif;box-shadow:0 8px 24px rgba(0,0,0,.22);transform:translateY(calc(-100% - 28px));transition:transform .18s ease}.skip-link:focus,.skip-link:focus-visible{transform:translateY(0);outline:3px solid #d4492f;outline-offset:3px}#main-content>main:not([class]) .education-grid b{color:#df513f!important}`}</style>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <div id="main-content" tabIndex={-1}>
          {children}
        </div>
      </body>
    </html>
  );
}
