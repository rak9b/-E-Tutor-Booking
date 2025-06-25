sever site live server :- [e-tutor-booking-server.vercel.app](https://e-tutor-booking-server.vercel.app/)
# 🔧 E-Tutor Booking — Server Side

This is the **backend API** for **E-Tutor Booking**, an intelligent and modern platform that connects students with skilled tutors across multiple languages and subjects. This server handles secure authentication, user bookings, tutorial management, and real-time review features via RESTful APIs.

---

## 🌐 Live Server

🟢 [https://e-tutor-booking-server.vercel.app/](https://e-tutor-booking-server.vercel.app/)

📎 **Client Repo:** [Client GitHub Repository](https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-rak9b)  
🌍 **Live Client Site:** [https://tutor-booking-43ee8.web.app/](https://tutor-booking-43ee8.web.app/)

---

## 📌 Project Purpose

This server powers the client-side frontend by managing:

- Tutor and tutorial data
- User authentication (JWT-based)
- Booking logic
- Review updates
- Role-based data filtering
- Secured APIs and data flow between client and server

---

## ⚙️ Technology Stack

| Tool         | Purpose                            |
|--------------|-------------------------------------|
| **Node.js**  | Backend runtime                     |
| **Express.js** | Web framework                      |
| **MongoDB**  | NoSQL database                      |
| **Mongoose** | ODM for MongoDB                     |
| **JWT**      | Secure authentication               |
| **CORS**     | Controlled API access               |
| **dotenv**   | Manage environment variables        |

---

## 🔑 API Features

| Feature             | Description                                                   |
|---------------------|---------------------------------------------------------------|
| 🔐 JWT Auth         | Sign token on login, verify for protected routes               |
| 📚 Add Tutorials    | Users can submit new tutorial offerings                        |
| 📖 Book Sessions    | Authenticated users can book tutors                            |
| ✍️ Submit Reviews   | Logged-in users can add reviews (auto increment by $inc)       |
| 🔎 Filter by Category | Language/category-based filtering                              |
| 🧾 Secure Routes     | Middleware-authenticated private routes                        |

---

## 📁 API Endpoints Summary

### 📌 Auth & Token

| Method | Endpoint     | Access   | Description                        |
|--------|--------------|----------|------------------------------------|
| POST   | `/jwt`       | Public   | Generate token after login         |

### 📌 Tutorials

| Method | Endpoint           | Access   | Description                         |
|--------|--------------------|----------|-------------------------------------|
| GET    | `/tutorials`       | Public   | Get all tutorials                   |
| GET    | `/tutorials/:id`   | Public   | Get a specific tutorial             |
| POST   | `/tutorials`       | Private  | Add a new tutorial                  |
| DELETE | `/tutorials/:id`   | Private  | Delete a tutorial by ID             |
| PUT    | `/tutorials/:id`   | Private  | Update tutorial information         |

### 📌 Bookings

| Method | Endpoint    | Access   | Description                           |
|--------|-------------|----------|---------------------------------------|
| POST   | `/bookings` | Private  | Book a tutor session                  |
| GET    | `/bookings` | Private  | Get all bookings by logged-in user    |

### 📌 Reviews

| Method | Endpoint                   | Access   | Description                           |
|--------|----------------------------|----------|---------------------------------------|
| PATCH  | `/tutorials/review/:id`    | Private  | Increment review count of a tutorial  |

---


