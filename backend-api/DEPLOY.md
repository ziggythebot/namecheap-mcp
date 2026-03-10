# Deploy to Railway (Manual Steps)

Since Railway needs browser login, here's how to deploy manually:

## Step 1: Login to Railway

1. Go to https://railway.app
2. Sign up / Log in
3. Click "New Project"

## Step 2: Deploy from GitHub

1. Click "Deploy from GitHub repo"
2. Select: `ziggythebot/namecheap-mcp`
3. Root directory: `/backend-api`
4. Railway will auto-detect Node.js

## Step 3: Add Environment Variables

In Railway dashboard, go to Variables tab and add:

```
NAMECHEAP_API_USER=dandare
NAMECHEAP_API_KEY=b1514b8dc6ed43da89d5ede745c3e0d5
NAMECHEAP_USERNAME=dandare
NAMECHEAP_CLIENT_IP=147.12.222.34
NAMECHEAP_SANDBOX=false
NAMECHEAP_AFFILIATE_ID=dandare
PORT=3000
```

## Step 4: Deploy

Railway will automatically deploy. You'll get a URL like:
`https://namecheap-mcp-backend-production.up.railway.app`

## Step 5: Test

```bash
curl https://your-app.railway.app/health
```

Should return:
```json
{"status":"ok","timestamp":"..."}
```

## Step 6: Test Domain Check

```bash
curl -X POST https://your-app.railway.app/api/check-domains \
  -H "Content-Type: application/json" \
  -d '{"domains": ["test.com", "example.io"]}'
```

## Alternative: Railway CLI

If you want to use CLI later:

```bash
# Install
npm install -g @railway/cli

# Login (opens browser)
railway login

# Link project
railway link

# Deploy
railway up
```

---

**Once deployed, update the URL in the MCP client to use YOUR API!**
