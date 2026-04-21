# Colette Demay × Four Seasons Abu Dhabi

Private QR code experience.

## Quick deploy: ZIP → GitHub → Vercel

### 1. Unzip and check contents
Unzip the file. Open the `fs-vercel` folder. You should see:
- Files at the root: `package.json`, `index.html`, `vite.config.js`, `tailwind.config.js`, `postcss.config.js`, `vercel.json`, `.gitignore`, `README.md`
- Folder `src/` with `App.jsx`, `main.jsx`, `index.css`
- Folder `public/` with `debussy.mp3`

### 2. Create GitHub repo
Go to https://github.com/new
- Name: `colette-demay-fs-abu-dhabi` (or anything)
- Private (recommended)
- **Don't** initialize with README / gitignore / license
- Click **Create repository**

### 3. Upload the files
On your new repo, click **"uploading an existing file"**.
Drag ALL contents of `fs-vercel` into the upload zone (open the folder first and select everything with Cmd+A — you need the FILES and the 2 FOLDERS, not the fs-vercel folder itself).
Wait for `public/debussy.mp3` to upload (1.3 MB).
Type commit message "Initial commit", click **Commit changes**.

### 4. Connect to Vercel
Go to https://vercel.com/new
Login with GitHub. Find your repo → **Import**.
All settings auto-detected (Vite). Click **Deploy**.
Wait ~60 seconds. Your site is live.

### 5. Custom domain (optional)
Project → Settings → Domains → add `abudhabi.colettedemay.com`.
Vercel gives you DNS instructions — add the CNAME in your registrar.

## Files overview

```
fs-vercel/
├── public/debussy.mp3          1.3 MB, Debussy Clair de Lune
├── src/
│   ├── App.jsx                 2.5 MB, the whole experience
│   ├── main.jsx                React mount + ErrorBoundary
│   └── index.css               Tailwind + reset
├── index.html                  HTML shell + SEO
├── package.json                React 18 + Vite 5 + Tailwind 3 + Framer Motion 11
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
├── .gitignore
└── README.md
```

## Safety nets built in
- **ErrorBoundary** in main.jsx: if the app crashes, shows an elegant error screen with refresh button instead of blank screen
- **Audio is isolated**: if the MP3 fails to load, the app still works (button just won't appear)
- **No React StrictMode**: avoids double-mounting issues that can surface audio bugs in dev

## Replace the audio
Drop a new MP3 named exactly `debussy.mp3` into `public/`, push to GitHub. Auto-redeploys.

---
Built for Stéphane Demay · Colette Demay · Paris
