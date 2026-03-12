# 🍽️ FullStack Restaurant Web Application

A complete restaurant management system built with **Next.js**, **Node.js**, and **MongoDB**.  
This project demonstrates a modern full-stack architecture with customer-facing features and an admin dashboard.

---

## 🚀 Features

### Customer

- View restaurant menu
- Make reservations
- Read blog posts

### Admin

- Secure login
- Manage menu items
- View reservations

---

## 🏗️ Architecture

The application follows a **3-layer architecture**:

1. **Client (Frontend)** → Next.js pages & components
2. **Server (Backend)** → Node.js API routes
3. **Database** → MongoDB collections

**Flow Example:**  
Customer opens menu → Frontend request → Backend API → MongoDB returns data → UI renders menu.

---

## 📂 Project Structure

```
src/
 ├── pages/
 │    ├── index.js
 │    ├── menu.js
 │    ├── reservation.js
 │
 ├── admin/
 │    ├── login.js
 │    ├── dashboard.js
 │
 ├── api/
 │    ├── menu/
 │    ├── reservations/
 │
 ├── components/
 ├── models/
 ├── lib/
 └── public/
```

# 📂 Project Structure

- **pages/** → Website pages
- **api/** → Backend endpoints
- **components/** → Reusable UI components
- **models/** → Database schemas
- **public/** → Images & static files

---

## 🗄️ Database Design

MongoDB stores data as **documents** inside **collections**.

**Reservation Example:**

```json
{
  "name": "Satheesh",
  "date": "2026-03-10",
  "time": "19:00",
  "guests": 2
}
```

## 📂 Collections Used

- `menus`
- `reservations`
- `blogs`

---

## 📌 Reservation Workflow

1. **User fills reservation form**
2. **Frontend sends POST request** → `/api/reservations`
3. **Backend saves data in MongoDB**
4. **User sees confirmation message**

---

## 🔑 Admin Authentication

- **Login page:** `/admin/login`
- **Simple demo logic:**

````js
if(username === "admin" && password === "1234") {
  localStorage.setItem("admin", "true");
}
````

- Dashboard checks `localStorage` before granting access.

⚠️ **Note:** Replace with secure authentication (JWT, bcrypt, etc.) for production.


---

## 🧩 UI Components

- **Navbar**
- **MenuCard**
- **ReservationForm**

**Benefits:**
- Clean code
- Reusability
- Easier maintenance


## 📊 System Architecture Diagram

```
User Browser
   ↓
Next.js Frontend (Pages + Components)
   ↓
API Routes (Node.js Backend)
   ↓
MongoDB Database
```