// components/AdminLayout.js
import Link from "next/link";

export default function AdminLayout({ children }) {
  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <h2 style={styles.logo}>RoyalBite Admin</h2>
        <nav>
          <ul style={styles.navList}>
            <li><Link href="/admin/menu" style={styles.navLink}>🍽 Menu</Link></li>
            <li><Link href="/admin/reservations" style={styles.navLink}>📅 Reservations</Link></li>
            <li><Link href="/admin/opening-hours" style={styles.navLink}>⏰ Opening Hours</Link></li>
            <li><Link href="/admin/blogs" style={styles.navLink}>📝 Blogs</Link></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={styles.main}>
        {children}
      </main>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "Open Sans, sans-serif",
    background: "#f8f9fa",
  },
  sidebar: {
    width: "250px",
    background: "#2c3e50",
    color: "#fff",
    padding: "20px",
  },
  logo: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "30px",
    textAlign: "center",
  },
  navList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  navLink: {
    display: "block",
    padding: "12px 15px",
    marginBottom: "10px",
    borderRadius: "8px",
    color: "#fff",
    textDecoration: "none",
    transition: "background 0.3s",
  },
  main: {
    flex: 1,
    padding: "40px",
  },
};
