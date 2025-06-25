# 📘 E-Tutor Booking — Client Side

Welcome to the **Client Repository** of **E-Tutor Booking**, a modern, responsive, and feature-rich **Online Tutor Booking Platform**. This web application is designed to connect students with qualified tutors across various languages and subjects. It offers a seamless experience from discovering tutors to scheduling and reviewing sessions.

🔗 **Live Website:** [Visit Now](https://tutor-booking-43ee8.web.app/)

🧠 **Assignment:** Assignment-11 (Language Exchange Tutor Booking Platform)

---

## 🚀 Project Overview

**E-Tutor Booking** simplifies the process of finding, booking, and managing online tutoring sessions. Users can:

- Browse tutors by language category
- View tutor profiles with detailed information
- Book sessions securely
- Add and manage tutorials
- Submit reviews and feedback
- Interact with a user-friendly and responsive interface

---

## 🧪 Technologies Used

This project is built using modern web technologies to ensure performance, scalability, and excellent user experience.

### 🔧 Core Stack

- **React** (via Vite)
- **Tailwind CSS** + **daisyUI**
- **React Router DOM**
- **Firebase Authentication**
- **JWT Token Authentication**
- **MongoDB (Backend)**

### 🛠 Supporting Libraries & Tools

- `react-hook-form` – Form management
- `react-hot-toast` – Toast notifications
- `sweetalert2` – Alert & confirmation modals
- `framer-motion` – Animations
- `lottie-react` – Animated illustrations
- `react-icons`, `fontawesome` – Icon support
- Responsive design for Mobile, Tablet & Desktop

---

## 🔑 Key Features

### 🧩 User Interface

- Elegant, interactive, and mobile-first UI
- Dark / Light mode toggle (global theme)
- Fully responsive layout using Tailwind and DaisyUI
- Animated transitions and feedback with Framer Motion & Lottie

### 🛡 Authentication & Security

- Google & Email/Password login via Firebase
- JWT token issued and stored client-side
- Protected private routes using JWT validation

### 📌 Core Functionalities

- **Home Page** with:
  - Banner carousel
  - Statistics section (Tutors, Reviews, Languages, Users)
  - Language category grid (9+ categories)
  - Dynamic content cards and feature sections

- **Find Tutors**
  - View all tutorials added by users
  - Filtered by language or category
  - Search by language

- **Tutor Details Page** *(Private Route)*
  - Full tutor information
  - Book button to store booking data

- **Add Tutorials** *(Private Route)*
  - Form to add new tutorial sessions
  - Inputs: Name, Email, Image, Language, Price, Description

- **My Tutorials** *(Private Route)*
  - View all added tutorials
  - Update or delete functionality with modal/form

- **My Booked Tutors** *(Private Route)*
  - View all booked sessions
  - Submit a review (increments review count in DB)

- **Error Handling**
  - Custom 404 Not Found page
  - Loading indicators/spinners on data fetch

---

## 🌐 Routing Structure

| Route                       | Access     | Description                                       |
|----------------------------|------------|---------------------------------------------------|
| `/`                        | Public     | Home page with stats and language categories      |
| `/login`                   | Public     | Firebase-based login system                       |
| `/register`                | Public     | User registration page                            |
| `/find-tutors`             | Public     | Displays all tutors                               |
| `/find-tutors/:category`   | Public     | Tutors filtered by language category              |
| `/tutor/:details`          | Private    | Detailed tutor profile + booking                  |
| `/add-tutorial`            | Private    | Add new tutorials (form)                          |
| `/my-tutorials`            | Private    | List, update, and delete your tutorials           |
| `/my-booked-tutors`        | Private    | View and review booked tutors                     |

---

## ✅ Functional Requirements Checklist

- [x] Minimum 15 meaningful commits on client repo
- [x] Responsive design (mobile, tab, desktop)
- [x] Firebase & MongoDB credentials secured via `.env` variables
- [x] Proper error handling and page routing
- [x] Loading states implemented
- [x] JWT-based private route protection
- [x] Dark/Light Theme toggle
- [x] Search functionality by language

---

## 📸 UI Snapshots (Optional)

_Add screenshots of the Home Page, Tutor Details Page, and Add Tutorial Form here to enhance appeal._

---

## 📁 Folder Structure (Client)


# Live Link

# [https://tutor-booking-43ee8.web.app/](https://tutor-booking-43ee8.web.app/)

# Client-side GitHub Code Link

# [https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-rak9b/tree/main](https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-rak9b.git)

# Server-side GitHub Code Link

# [https://github.com/Programming-Hero-Web-Course4/b11a11-server-side-rak9b](https://github.com/Programming-Hero-Web-Course4/b11a11-server-side-rak9b.git)

---

