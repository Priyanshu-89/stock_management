📦 Stock Management System

A simple Stock Management System built with Next.js 15, Prisma, and MongoDB. This app allows users to add, update, remove, and view stock items with a clean and responsive UI.

🚀 Features

CRUD Operations: Create, Read, Update, and Delete stock items.

Next.js App Router: Uses Next.js app directory.

Prisma ORM: Handles database interactions.

MongoDB: Stores stock item data.

Server Actions: Uses Next.js Server Actions for efficient updates.

Tailwind CSS: Styled with a modern UI.

🛠 Tech Stack

Frontend: Next.js 15, React.js, Tailwind CSS

Backend: Prisma, MongoDB, NextAuth (for future authentication)

State Management: React Hook Form

📂 Folder Structure

E:\crud
│── prisma/          # Prisma Schema & Migrations
│── src/app/
│   ├── page.jsx     # Home Page (List of Items)
│   ├── update/[id]/page.jsx  # Update Item Page
│   ├── remove/[id]/page.jsx  # Remove Item Page
│   ├── actions/     # Server Actions for CRUD
│   ├── components/  # Reusable UI Components
│── .env             # Environment Variables
│── package.json     # Dependencies & Scripts

➕ Add a New Stock Item

Navigate to /

Fill out the Create Form

Click Save

✏️ Update an Item

Click the Edit Icon on an item

Modify the values

Click Update

❌ Delete an Item

Click the Delete Icon on an item

Confirm the deletion

