import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";

export default function AdminReservations() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetch("/api/reservations")
      .then(res => res.json())
      .then(data => setReservations(data));
  }, []);

  return (
    <AdminLayout>
      <h1 style={styles.pageTitle}>📅 Reservations</h1>

      <div style={styles.card}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>Time</th>
              <th style={styles.th}>Guests</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((r) => (
              <tr key={r._id} style={styles.row}>
                <td style={styles.td}>{r.name}</td>
                <td style={styles.td}>{r.date}</td>
                <td style={styles.td}>{r.time}</td>
                <td style={styles.td}>{r.guests}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

const styles = {
  pageTitle: {
    fontSize: "26px",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "16px",
  },
  th: {
    textAlign: "left",
    padding: "12px",
    background: "#2c3e50",
    color: "#fff",
  },
  td: {
    padding: "12px",
    borderBottom: "1px solid #ddd",
  },
  row: {
    background: "#fff",
  },
};
