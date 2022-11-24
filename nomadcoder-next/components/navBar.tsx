import styles from "./navBar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      <Image src="/vercel.svg" width={70} height={20} alt="logo" />
      <div className="styles.container">
        <Link
          href="/"
          className={[
            styles.link,
            router.pathname === "/" ? styles.active : "",
          ].join(" ")}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`${
            (styles.link, router.pathname === "/about" ? styles.active : "")
          }`}
        >
          about
        </Link>
      </div>
    </nav>
  );
}
