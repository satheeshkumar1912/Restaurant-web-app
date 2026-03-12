import { useState, useEffect } from "react";
import AdminLayout from "../../components/AdminLayout";

export default function MenuAdmin() {
  const [menus, setMenus] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    fetch("/api/menu")
      .then(res => res.json())
      .then(data => setMenus(data));
  }, []);

  const addMenu = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/menu", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description, price }),
    });
    const newItem = await res.json();
    setMenus([...menus, newItem]);
    setName(""); setDescription(""); setPrice("");
    alert("Menu Added");
  };

  async function deleteItem(id) {
    await fetch(`/api/menu/${id}`, { method: "DELETE" });
    setMenus(menus.filter(menu => menu._id !== id));
    alert("Item deleted");
  }

  return (
    <AdminLayout>
      <h1 style={styles.pageTitle}>🍽 Menu Manager</h1>

      {/* Add Menu Form */}
      <div style={styles.card}>
        <h3 style={styles.sectionTitle}>Add Menu Item</h3>
        <form onSubmit={addMenu} style={styles.form}>
          <input
            style={styles.input}
            placeholder="Food Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
          />
          <input
            style={styles.input}
            placeholder="Description"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            required
          />
          <input
            style={styles.input}
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            required
          />
          <button type="submit" style={styles.button}>Add Menu</button>
        </form>
      </div>

      {/* Menu Items List */}
      <h2 style={styles.sectionTitle}>Menu Items</h2>
      <div style={styles.grid}>
        {menus.map(menu => (
          <div key={menu._id} style={styles.itemCard}>
            <h3 style={{marginBottom:"8px"}}>{menu.name}</h3>
            <p style={{color:"#555"}}>{menu.description}</p>
            <p style={{fontWeight:"bold", color:"#d35400"}}>₹ {menu.price}</p>
            <button onClick={()=>deleteItem(menu._id)} style={styles.deleteBtn}>
              Delete
            </button>
          </div>
        ))}
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
  sectionTitle: {
    fontSize: "20px",
    marginBottom: "15px",
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    marginBottom: "30px",
    maxWidth: "500px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "12px",
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
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
  },
  itemCard: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  deleteBtn: {
    marginTop: "10px",
    padding: "8px 12px",
    borderRadius: "8px",
    border: "none",
    background: "#c0392b",
    color: "#fff",
    cursor: "pointer",
  },
};
