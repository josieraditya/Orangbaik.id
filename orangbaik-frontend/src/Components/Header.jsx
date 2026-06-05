"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./Header.css";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Program", href: "/program" },
    { name: "Berita", href: "/berita" },
    { name: "Donasi", href: "/donasi" },
  ];

  return (
    <header className="header">
      <nav className="navbar">
        <Link href="/" className="logo">
          <div className="logo-bg">
            <Image
              src="/aset/clip-path-group.png"
              alt="OrangBaik.id Logo"
              width={150}
              height={45}
              priority
            />
          </div>
        </Link>

        <ul className="nav-menu">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={isActive ? "nav-link active" : "nav-link"}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="header-actions">
          <form className="search-box">
            <input type="text" placeholder="Cari..." />

            <button type="button" aria-label="Cari">
              🔍
            </button>
          </form>

          <div className="auth-buttons">
            <Link href="/login" className="btn-login">
              Login
            </Link>

            <Link href="/register" className="btn-register">
              Register
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}