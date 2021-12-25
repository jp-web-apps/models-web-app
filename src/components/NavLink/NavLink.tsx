import { useRouter } from "next/router";
import Link from "next/link";

interface Props {
  href: string;
  exact?: boolean;
  children: React.ReactNode;
  className?: string;
  defaultClassName?: string;
  activeClassName?: string;
}

export function NavLink({
  href,
  exact,
  children,
  className,
  defaultClassName,
  activeClassName,
}: Props) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  const classNameProp = `${className} ${
    isActive ? activeClassName : defaultClassName
  }`;

  return (
    <Link href={href}>
      <a className={classNameProp}>{children}</a>
    </Link>
  );
}
