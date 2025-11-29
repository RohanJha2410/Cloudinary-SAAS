<div align="center">

# 🌩️ Cloudinary SaaS

**Compress, optimize & download images and videos — plus ready-made Instagram headers & Facebook cover photos.**

Built with Next.js, TypeScript, Tailwind CSS, Prisma & Cloudinary.

</div>

---

## 🚀 Overview

**Cloudinary SaaS** is a media utility dashboard where users can:

- Upload images & videos
- Compress and optimize them
- Generate **Instagram header**–style and **Facebook cover**–style images
- Download all optimized assets directly in one click

Perfect for creators, devs, and anyone who wants fast, simple media optimization.

---

## ✨ Features

### 🖼 Image Tools

- Upload images from your device  
- Compress images while maintaining good visual quality  
- Generate:
  - Instagram-style header images
  - Facebook cover-style images  
- Download final images instantly

### 🎬 Video Tools

- Upload videos
- Compress videos to reduce file size
- Get download links for compressed versions

### 📥 One-Click Downloads

- Direct download buttons for:
  - Compressed image
  - Compressed video
  - Instagram header version
  - Facebook cover version

### 🧩 Tech Highlights

- **Next.js App Router**
- **TypeScript**
- **Tailwind CSS / DaisyUI**
- **Cloudinary** for media transformation & delivery
- **Prisma** + SQL database (e.g. Neon / PostgreSQL)
- Clean modular structure (`app`, `components`, `prisma`, `types`, etc.)

---

## 🏗️ Project Structure

> High-level structure of the repo:

```bash
Cloudinary-SAAS/
├── .vscode/              # Editor settings
├── app/                  # Next.js routes (App Router) & API routes
├── components/           # Reusable UI components
├── prisma/               # Prisma schema & migrations
├── public/               # Static assets (icons, logos, etc.)
├── types/                # Shared TypeScript types
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── proxy.ts
├── tailwind.config.ts
└── tsconfig.json
```
🔧 Environment Setup

Create a .env file in the root of the project with your own values.

Example:
```
# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```
# Database (Prisma)
```
DATABASE_URL=your_database_connection_string
```
# (Optional) Auth or other secrets
```
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```
⚠️ Do not commit .env to Git.

🧰 Getting Started
1️⃣ Clone the Repository
```
git clone https://github.com/RohanJha2410/Cloudinary-SAAS.git
cd Cloudinary-SAAS
```

2️⃣ Install Dependencies
```
npm install
```

3️⃣ (Optional) Run Prisma Migrations
```
npx prisma migrate dev
```

To inspect the database with Prisma Studio:
```
npx prisma studio
```
4️⃣ Run the Development Server
```
npm run dev
```

Then open:
```
http://localhost:3000
```

📜 NPM Scripts

Check package.json for the full list. Common ones:
```

npm run dev       # Start development server
npm run build     # Create production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

🧠 How It Works (Flow)

1. User uploads an image or video from the dashboard.

2. The file is sent to a Next.js API route, which uploads it to Cloudinary.

3. Cloudinary performs:

   a) Compression

   b) Resizing / cropping for:
    a)Instagram header style 
    b)Facebook cover style

5. The app receives optimized URLs from Cloudinary.

6. The UI shows:

a) Previews (image / video)

b) Individual Download buttons for each version.


🧱 Possible Future Enhancements

1. More social presets (YouTube banner, LinkedIn cover, X/Twitter header)

2. User accounts with upload history

3. Custom size & crop controls

4. Dark / light theme toggle

5. Usage limits & pricing tiers to turn this into a full SaaS
