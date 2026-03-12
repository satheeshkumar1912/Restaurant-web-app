import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>RoyalBite</h2>

      <div style={styles.links}>
        <Link href="/" style={styles.link}>Home</Link>
        <Link href="/menu" style={styles.link}>Menu</Link>
        <Link href="/reservation" style={styles.link}>Reservation</Link>
        <Link href="/admin/login" style={styles.link}>Admin</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 60px",
    background: "#0f172a",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logo: {
    color: "#facc15",
    fontWeight: "bold",
    fontSize: "22px",
  },
  links: {
    display: "flex",
    gap: "25px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    transition: "transform 0.2s ease, color 0.2s ease",
  },
};
