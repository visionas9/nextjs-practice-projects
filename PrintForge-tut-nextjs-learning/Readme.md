# PrintForge — Next.js Learning Project

A 3D model marketplace built while learning Next.js. The app itself is a PrintForge concept, but the real goal was getting hands-on with modern Next.js patterns.

---

## What I Learned Building This

### 📁 File-Based Routing & Layouts

- Folders create URL segments, `page.tsx` is what actually renders
- Root layout wraps every page with shared UI like nav and footer
- `{children}` is where page content gets injected into the layout

### 🔤 Fonts

- Using `next/font/google` — downloads fonts at build time, no Google request at runtime
- `.className` applies the font directly, `.variable` registers it as a CSS custom property for selective use in CSS

### 🖼️ Image Optimization

- `<Image>` from `next/image` auto-compresses, converts to WebP, lazy loads, and prevents layout shift
- Importing images as modules lets Next.js auto-detect size — no need to manually set `width` and `height`

### 🔗 Links

- `<Link>` from `next/link` for internal navigation, `<a>` for external URLs
- `<Link>` navigates without a full page reload

### 🔀 Dynamic Routes

- Folders with `[brackets]` create dynamic segments like `/posts/5` or `/blog/hello-world`
- Next.js passes `params` automatically — `await` it to get the value from the URL
- The bracket name becomes the key: `[id]` → `params.id`, `[slug]` → `params.slug`

### 🗂️ Routing & Navigation

- File-based routing with dynamic routes like `[id]` and `[categoryName]`
- Using `usePathname()` to highlight active links in the nav
- Building a reusable `NavLink` component to keep things DRY

### ⚡ Rendering Strategies

- **Static (SSG)** — built once at deploy time, fastest
- **ISR** — cached but refreshes every X seconds
- **Dynamic (SSR)** — fresh on every request, great for real-time data
- How to check which strategy Next.js picked using `npm run build`

### 🔍 Search & Filtering

- Accessing URL query params via `searchParams` (a Promise in Next.js 15, so always `await` it!)
- Filtering data with `.toLowerCase()` for case-insensitive search
- Using Next.js `<Form>` component — like `<Link>` but for forms, with prefetching built in
- Why `action` must point to the route where `searchParams` is being read

### 🧩 Client vs Server Components

- Keeping pages as server components for performance
- Extracting small interactive pieces into `"use client"` components
- The golden rule: **push `"use client"` as low as possible**

### 🚀 Deployment

- Deploying to Netlify with GitHub integration
- Configuring `netlify.toml` for Next.js
- Using Netlify's AI agent to fix build errors
- Opening and merging a pull request for the first time

---

## Tech Stack

- **Next.js 15** — App Router
- **TypeScript**
- **Tailwind CSS**
- **Netlify** — Hosting

---

## Live Demo

🔗 [majestic-syrniki-392789.netlify.app](https://majestic-syrniki-392789.netlify.app)

---

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see it.
