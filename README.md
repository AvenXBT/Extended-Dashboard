# Extended Dashboard by Aven

🚀 Track your Extended Exchange positions, PnL, and airdrop points in real-time.

**Live demo:** [Your Vercel URL after deployment]

## Features

- 💰 Real-time equity and balance tracking
- 📈 Unrealized PnL monitoring
- 📊 Trading volume stats
- ⭐ Airdrop points breakdown (Trading, LP, Referral)
- 🔐 Secure - API key stored locally, never sent to external servers

## Deployment Guide

### Prerequisites

1. A [GitHub](https://github.com) account
2. A [Vercel](https://vercel.com) account (free)

### Step-by-Step Deployment

#### 1. Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Name it `extended-dashboard`
3. Keep it **Public** or **Private** (your choice)
4. Click **Create repository**

#### 2. Upload the Code

**Option A: Using GitHub Web Interface**

1. In your new repo, click **"uploading an existing file"**
2. Drag and drop all the files from this folder:
   - `vercel.json`
   - `package.json`
   - `api/proxy.js`
   - `public/index.html`
3. Click **Commit changes**

**Option B: Using Git Command Line**

```bash
cd extended-dashboard
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/extended-dashboard.git
git push -u origin main
```

#### 3. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Find and select your `extended-dashboard` repository
4. Click **Deploy**
5. Wait ~1 minute for deployment to complete
6. 🎉 Your dashboard is live!

### Your Dashboard URL

After deployment, Vercel will give you a URL like:
```
https://extended-dashboard-xxx.vercel.app
```

You can also set up a custom domain in Vercel settings.

## Usage

1. Go to your deployed dashboard
2. Get your API key from [Extended API Management](https://app.extended.exchange/api-management)
3. Paste your API key and click **Load Data**
4. Your data will load automatically (and save for next time)

## Project Structure

```
extended-dashboard/
├── api/
│   └── proxy.js          # Serverless proxy to handle CORS
├── public/
│   └── index.html        # Main dashboard UI
├── vercel.json           # Vercel configuration
├── package.json          # Project metadata
└── README.md             # This file
```

## Security

- Your API key is stored **only in your browser's localStorage**
- The proxy server only forwards requests - it doesn't store any data
- All communication with Extended API is over HTTPS

## Credits

Built by [@Aven_xbt](https://x.com/Aven_xbt) 🤍

Free tool for the Extended community.

---

**Questions?** DM me on Twitter [@Aven_xbt](https://x.com/Aven_xbt)
