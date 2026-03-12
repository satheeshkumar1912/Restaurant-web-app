import { useEffect } from "react";
import { useRouter } from "next/router";
import AdminLayout from "../../components/AdminLayout";

export default function Dashboard() {
  const router = useRouter();
  useEffect(() => {
    const admin = localStorage.getItem("admin");
    if (!admin) router.push("/admin/login");
  }, []);

  return (
    <AdminLayout>
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>Admin Dashboard</h1>
      <p>Welcome Admin 👋</p>

      <div style={styles.cardGrid}>
        <div style={styles.card}>
          <h3>🍽 Menu Items</h3>
          <p>Manage food items</p>
        </div>
        <div style={styles.card}>
          <h3>📅 Reservations</h3>
          <p>View bookings</p>
        </div>
        <div style={styles.card}>
          <h3>⏰ Opening Hours</h3>
          <p>Control timings</p>
        </div>
        <div style={styles.card}>
          <h3>📝 Blogs</h3>
          <p>Publish articles</p>
        </div>
      </div>
    </AdminLayout>
  );
}

const styles = {
  cardGrid: {
    display: "flex",
    gap: "20px",
    marginTop: "30px",
    flexWrap: "wrap",
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    width: "220px",
    textAlign: "center",
  },
};
