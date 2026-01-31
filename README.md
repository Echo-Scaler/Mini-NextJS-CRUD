# Node.js & Next.js Mini CRUD Project

This is a simple CRUD (Create, Read, Update, Delete) application built with **Next.js** and **Node.js**.
It uses a local JSON file for data storage, making it perfect for learning the basics of API routes and Frontend integration without needing a complex database setup.

## Features

- **Create**: Add new items with a name and description.
- **Read**: View a list of all items and see individual item details.
- **Update**: Edit existing items.
- **Delete**: Remove items from the list.
- **Responsive UI**: Built with Tailwind CSS.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Data Storage**: Local File System (`src/data/items.json`)

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── api/items/       # API Routes (Backend)
│   │   ├── items/           # Frontend Pages (List & Edit)
│   │   ├── page.tsx         # Home Page
│   │   └── layout.tsx       # Root Layout
│   ├── lib/
│   │   └── data.ts          # Helper functions to read/write JSON
│   └── data/
│       └── items.json       # Data Store (JSON file)
├── public/
├── package.json
└── tsconfig.json
```

## API Endpoints

| Method | Endpoint | Description | Body |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/items` | Get all items | - |
| `POST` | `/api/items` | Create a new item | `{ "name": "...", "description": "..." }` |
| `GET` | `/api/items/[id]` | Get a single item | - |
| `PUT` | `/api/items/[id]` | Update an item | `{ "name": "...", "description": "..." }` |
| `DELETE` | `/api/items/[id]` | Delete an item | - |

## Note

This project is designed for **Junior / Beginner** level purposes. It uses a JSON file (`src/data/items.json`) to store data. In a real-world production application, you should use a proper database (like PostgreSQL, MySQL, or MongoDB).
