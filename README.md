# Redux Todo App

A local-first Todo + User Management application built with **React**, **Redux Toolkit**, **ShadCN UI**, and **Vite**. This project supports basic CRUD operations for both todos and users and is intended strictly for local development using **Bun**.

---

## 🧭 Table of Contents

- [Introduction](#-introduction)
- [Features](#-features)
- [Installation](#-installation)
- [Usage](#-usage)
- [Scripts](#-scripts)
- [Dependencies](#-dependencies)
- [Troubleshooting](#-troubleshooting)
- [License](#-license)

---

## 📌 Introduction

This is a learning-focused application that combines a Todo list with basic user management. It uses Redux Toolkit for centralized state handling, with modern, accessible UI built using **ShadCN (Radix + Tailwind)** components.

---

## 🚀 Features

### ✅ Todo Management

- Add, update, complete, and delete todos
- Filter by priority (low, medium, high and all)

### 👥 User Management

- Add new users
- Delete existing users
- Store user data in Redux state

### 💄 UI & Developer Experience

- ShadCN components with Radix primitives
- Tailwind CSS with `tailwind-variants` for styling logic
- Form validation with React Hook Form + Zod
- Instant reload via Vite
- Runs entirely in local dev mode using Bun

---

## 🛠️ Installation

Make sure [**Bun**](https://bun.sh) is installed:

Option A: Using npm (recommended for Node.js users)

```bash
npm i -g bun
```

Option B: Using the official shell script

```bash
curl -fsSL https://bun.sh/install | bash
```

Then clone and install dependencies:

```bash
git clone https://github.com/younus-always/Redux-basic-todo-project.git
cd Redux-basic-todo-project
bun install
```

### 💻 Usage

Start the local development server:

```bash
bun dev
```

Run linting:

```bash
bun lint
```

📌 Note: This project is for local development only—no production build or deploy step.

### 📦 Scripts

| Command    | Description                    |
| ---------- | ------------------------------ |
| `bun dev`  | Starts Vite development server |
| `bun lint` | Runs ESLint checks             |

### 🎨 UI and Styling

This project uses shadcn/ui for UI components, which combines:

- Radix UI for unstyled, accessible primitives

- Tailwind CSS for utility-first styling

- Class Variance Authority for variant handling

- Tailwind Merge to intelligently combine classes

### 📚 Dependencies

#### Runtime

- react, react-dom

- @reduxjs/toolkit, react-redux

- react-router

- shadcn/ui (Radix components via @radix-ui/react-\*)

- react-hook-form, zod, @hookform/resolvers

- tailwindcss, tailwind-merge, clsx

- lucide-react, date-fns

#### Dev

- vite, @vitejs/plugin-react

- typescript, eslint, typescript-eslint

- @types/react, @types/node

### 🐛 Troubleshooting

- ❗ Ensure Bun is installed:

```bash
bun --version
```

### 📄 License

This project is private and intended for local development only.
