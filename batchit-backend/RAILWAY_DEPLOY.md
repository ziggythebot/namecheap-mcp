# Deploy to Railway (No CLI Required)

## Quick Deploy

1. Go to [railway.app/new](https://railway.app/new)
2. Click "Deploy from GitHub repo"
3. Select: `ziggythebot/namecheap-batchit-api`
4. Railway will auto-detect Node.js and deploy

## Add Environment Variables

After deployment, go to your project → Variables tab and add:

```
NAMECHEAP_API_USER=boomexchange
NAMECHEAP_API_KEY=a4624c31a1dc44f4b636ccb450680521
NAMECHEAP_USERNAME=boomexchange
NAMECHEAP_CLIENT_IP=WILL_UPDATE_AFTER_FIRST_DEPLOY
NAMECHEAP_SANDBOX=false
NAMECHEAP_AFFILIATE_ID=7069952
```

Click "Redeploy" after adding variables.

## Get Railway's Static IP

1. Go to Settings → Networking
2. Look for "Static Outbound IP" or check the logs for the first API call error
3. The error will show Railway's IP: `Invalid request IP: X.X.X.X`
4. Copy that IP

## Whitelist Railway IP in Namecheap

1. Login to Namecheap: boomexchange / -S+AzPaQr3mNi@$
2. Profile → Tools → API Access
3. Add Railway's IP to whitelist
4. Update Railway env var: `NAMECHEAP_CLIENT_IP=<RAILWAY_IP>`
5. Redeploy

## Test Deployment

```bash
# Get your Railway URL from dashboard (something like: https://namecheap-batchit-api-production.up.railway.app)

# Test health
curl https://YOUR-APP.up.railway.app/health

# Test domain checking
curl -X POST https://YOUR-APP.up.railway.app/api/namecheap/check-domains \
  -H "Content-Type: application/json" \
  -d '{"domains": ["test123.com", "google.com"]}'
```

## Update MCP Server

Once working, update the main MCP to use Railway:

```bash
cd /Users/ziggy/namecheap-mcp
echo "BATCHIT_API_URL=https://YOUR-APP.up.railway.app" >> .env
```

Done! Users can now use the MCP without Namecheap credentials.
