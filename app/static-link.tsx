import type { AnchorHTMLAttributes } from "react";
import { sitePath } from "./site-path";

type StaticLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
};

export function StaticLink({ href, ...props }: StaticLinkProps) {
  const resolvedHref = href.startsWith("/") ? sitePath(href) : href;
  return <a href={resolvedHref} {...props} />;
}
