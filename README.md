# 🌐 Domain Manager

A modern and responsive **domain management dashboard** built with **React**, **Redux Toolkit (RTK Query)**, **Ant Design**, and This single-page application (SPA) enables users to view, filter, add, and update domain records through a sleek and intuitive UI.

## ✨ Features

- 🔍 **Search & Filter** domains in a paginated table
- ➕ **Add** new domains or 📝 **Edit** existing ones via a side drawer form
- ✅ **Form validation** with real-time feedback
- ⚡ **RTK Query integration** for efficient API communication
- 🧠 Organized with Redux Toolkit's best practices

## 🛠️ Tech Stack

- **React** – Frontend UI framework
- **Redux Toolkit** – State management and data fetching (RTK Query)
- **Tailwind CSS** – Utility-first CSS for styling
- **Ant Design** – Pre-built UI components
- **Vite** – Fast dev server and bundler

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Beni26/domain-manager.git
cd domain-manager
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Start the development server

```bash
npm run dev
```

The app will be running at: [http://localhost:5173]

## 📁 Project Structure

```txt
src/
├── app/           # Redux store setup
├── components/    # Reusable UI components
├── features/      # Slices and RTK Query endpoints
├── pages/         # Main pages
└── main.jsx       # App entry point
```

## 📡 API Requirements

This app expects the following domain object structure from the backend API:

```json
{
  "_id": "string",
  "domain": "example.com",
  "status": "pending" | "verified" | "rejected",
  "isActive": true | false,
  "createdDate": "2024-05-01T12:00:00.000Z"
}
```

---
