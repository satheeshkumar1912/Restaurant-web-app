import { useEffect, useState } from "react";

export default function Menu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("/api/menu")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f9fafb", padding: "40px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: "bold", marginBottom: "50px", color: "#1f2937" }}>
          🍴 Explore Our Menu
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {menu.map((item) => (
            <div
              key={item._id}
              style={{
                background: "white",
                borderRadius: "15px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                padding: "25px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
              }}
            >
              <h3 style={{ fontSize: "1.4rem", fontWeight: "600", color: "#111827", marginBottom: "10px" }}>
                {item.name}
              </h3>
              <p style={{ color: "#6b7280", marginBottom: "15px", lineHeight: "1.5" }}>
                {item.description}
              </p>
              <div style={{ textAlign: "right" }}>
                <span style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#f59e0b" }}>
                  ₹{item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
