# Product Store

A simple full-stack CRUD web application for managing product listings. Users can add, update, and delete products — no authentication required. Built with React, Express, and MongoDB, and deployed fully on Render.

## 🚀 Description

**Product Store** is a responsive web app that allows users to create, view, edit, and delete products. Each product includes an image URL and description. All operations provide real-time feedback via toast notifications. Designed to be lightweight, clean, and functional — perfect for demos, beginners, or small-scale product showcases.

### [Site URL](https://product-store-q5bq.onrender.com/)
## ✨ Features

- 📦 Full CRUD operations (Create, Read, Update, Delete)
- 🖼️ Products with image URL, title, and description
- 🔁 Toast notifications on successful actions
- 🔧 Edit/delete product controls
- 📱 Fully responsive layout across devices
- 🚫 No authentication — anyone can interact with the product list

## 🛠 Tech Stack

### Backend:
- **Node.js** + **Express.js**
- **MongoDB** (via Mongoose)
- REST APIs: `/create`, `/read`, `/update`, `/delete`

### Frontend:
- **React.js**
- **Chakra UI** (for component styling)
- **Zustand** (state management)
- **React Toastify** (for toasts)
- **React Router DOM**

### Deployment:
- Fully deployed on [Render](https://render.com/) (frontend + backend)

## 🔧 Installation

```bash
# Clone the repo and install root dependencies
git clone <your-repo-url>
cd product-store
npm install

# Install frontend dependencies
cd frontend
npm install
