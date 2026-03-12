import { useState } from "react";
import AdminLayout from "../../components/AdminLayout";

export default function AdminBlogs() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [slug, setSlug] = useState("");

  const createBlog = async (e) => {
    e.preventDefault();
    await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, summary, content, slug }),
    });
    setTitle(""); setSummary(""); setContent(""); setSlug("");
    alert("Blog created");
  };

  return (
    <AdminLayout>
      <h1 style={styles.pageTitle}>📝 Create Blog</h1>

      <div style={styles.card}>
        <form onSubmit={createBlog} style={styles.form}>
          <input
            style={styles.input}
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            style={styles.input}
            placeholder="Slug (example: sushi-guide)"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
          />
          <input
            style={styles.input}
            placeholder="Summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            required
          />
          <textarea
            style={styles.textarea}
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <button type="submit" style={styles.button}>Publish Blog</button>
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
    maxWidth: "600px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  textarea: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    minHeight: "150px",
    resize: "vertical",
  },
  button: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "#2980b9",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background 0.3s",
  },
};
