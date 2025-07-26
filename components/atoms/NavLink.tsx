"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={href}
        className={pathname.includes(href) ? "text-teal-400" : "text-gray-300"}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavLink;
