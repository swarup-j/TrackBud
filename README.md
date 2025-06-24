# TrackBud

**TrackBud** is a modern budget tracking web application built with cutting-edge technologies including **Next.js**, **Clerk**, **Neon**, **Prisma**, **Tailwind CSS**, **Bun**, and **Radix UI**.

## 🚀 Features

- 🔐 User authentication and session management via **Clerk**
- 📊 Real-time income and expense tracking
- 🗂️ Categorized transactions for better insights
- 📅 Monthly and yearly financial summaries
- 🌙 Fully responsive dark/light mode UI
- ⚡ Super-fast performance with **Bun** as the runtime
- 🎨 Elegant and accessible design powered by **Radix UI**

## 🔗 Live Demo

Check out the live application here: [TrackBud Demo](https://your-demo-link.com)

## 📸 Screenshots

<kbd><img width="900" alt="trackbud-dashboard" src="https://your-screenshot-link.com/dashboard.png"></kbd>

<kbd><img width="900" alt="trackbud-auth" src="https://your-screenshot-link.com/auth.png"></kbd>

<kbd><img width="900" alt="trackbud-mobile" src="https://your-screenshot-link.com/mobile.png"></kbd>

## 📦 Tech Stack

- [Next.js](https://nextjs.org/) – App Router & Server Actions
- [Bun](https://bun.sh/) – Blazing fast JS runtime and bundler
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework
- [Clerk](https://clerk.dev/) – Authentication and user management
- [Neon](https://neon.tech/) – Scalable serverless Postgres
- [Prisma](https://www.prisma.io/) – ORM for type-safe database access
- [Radix UI](https://www.radix-ui.com/) – Primitives for accessible UI components

## 📄 Prerequisites

Before starting, make sure you have:

- **Bun** installed: [https://bun.sh/](https://bun.sh/)
- **Node.js** (if not using Bun)
- **Git** installed on your machine
- A **Neon Postgres** database set up
- A **Clerk** project for authentication

## 🛠️ Installation

- Clone the repository:

  ```
  git clone https://github.com/swarup-j/TrackBud
  ```

- Navigate to the project directory:

  ```
  cd Airbnb
  ```

- Install the dependencies:

  ```
  bun install
  ```

- Set up the environment variables:

  1.  Create a `.env.local` file in the root directory.

  2.  Add the following variables to the .env.local file, replacing the placeholder values with your own:

            ```

      DATABASE_URL=<your-neon-postgres-url>
      CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
      CLERK_SECRET_KEY=<your-clerk-secret-key>
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
      NEXTAUTH_SECRET=<your-nextauth-secret>

            ```

  ```
  - Push Prisma schema to your database:



  ```

  npx prisma db push

  ```

  ```

- Run the development server:

  ```
  bun run dev
  ```

- Visit the app at http://localhost:3000

```

```
