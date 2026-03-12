import { useState, useEffect } from "react";
import AdminLayout from "../../components/AdminLayout";

export default function OpeningHoursAdmin() {
  const [open, setOpen] = useState("");
  const [close, setClose] = useState("");

  useEffect(() => {
    fetch("/api/opening-hours")
      .then(res => res.json())
      .then(data => {
        if (data) {
          setOpen(data.open);
          setClose(data.close);
        }
      });
  }, []);

  const updateHours = async (e) => {
    e.preventDefault();
    await fetch("/api/opening-hours", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ open, close }),
    });
    alert("Opening hours updated");
  };

  return (
    <AdminLayout>
      <h1 style={styles.pageTitle}>⏰ Opening Hours</h1>

      <div style={styles.card}>
        <form onSubmit={updateHours} style={styles.form}>
          <div style={styles.field}>
            <label style={styles.label}>Open Time</label>
            <input
              type="time"
              value={open}
              onChange={(e) => setOpen(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Close Time</label>
            <input
              type="time"
              value={close}
              onChange={(e) => setClose(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <button type="submit" style={styles.button}>Save Hours</button>
        </form>
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
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    maxWidth: "400px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  label: {
    fontWeight: "600",
    color: "#333",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "#27ae60",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background 0.3s",
  },
};
