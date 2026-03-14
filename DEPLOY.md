# Deployment Instructions - Railway

## Current Status

✅ Production API working (boomexchange account)
✅ Affiliate tracking integrated (campaign 7069952)
✅ Batchit backend built (Express.js)
✅ Vercel deployment attempted (blocked by IP whitelist)
⏳ Railway deployment pending (needs static IP)

## Why Railway?

Namecheap API requires whitelisting the IP making requests. Vercel uses dynamic IPs that change on each deployment, so we need a platform with static IPs. Railway provides:
- Static outbound IP per service
- Easy environment variable management
- Simple deployment from GitHub

## Deploy to Railway (Morning)

### 1. Login
```bash
cd /Users/ziggy/namecheap-mcp/batchit-backend
railway login
```

### 2. Initialize project
```bash
railway init
# Choose: Create new project
# Name: namecheap-batchit-api
```

### 3. Add environment variables
```bash
railway variables set NAMECHEAP_API_USER=boomexchange
railway variables set NAMECHEAP_API_KEY=a4624c31a1dc44f4b636ccb450680521
railway variables set NAMECHEAP_USERNAME=boomexchange
railway variables set NAMECHEAP_CLIENT_IP=RAILWAY_STATIC_IP  # Will update after deploy
railway variables set NAMECHEAP_SANDBOX=false
railway variables set NAMECHEAP_AFFILIATE_ID=7069952
```

### 4. Deploy
```bash
railway up
```

### 5. Get Railway's static IP
After first deployment, Railway will assign a static IP. Get it from the dashboard or:
```bash
railway run printenv | grep RAILWAY_STATIC_IP
```

### 6. Whitelist Railway IP in Namecheap
1. Login to Namecheap: boomexchange / -S+AzPaQr3mNi@$
2. Profile > Tools > API Access
3. Add Railway's static IP to whitelist
4. Update environment variable:
```bash
railway variables set NAMECHEAP_CLIENT_IP=<RAILWAY_STATIC_IP>
```

### 7. Redeploy
```bash
railway up
```

### 8. Test deployment
```bash
# Get Railway URL
railway domain

# Test health check
curl https://your-app.railway.app/health

# Test domain checking
curl -X POST https://your-app.railway.app/api/namecheap/check-domains \
  -H "Content-Type: application/json" \
  -d '{"domains": ["test123.com", "google.com"]}'
```

## Update MCP Server

Once Railway is working, update the MCP to use it:

```bash
cd /Users/ziggy/namecheap-mcp
echo "BATCHIT_API_URL=https://your-app.railway.app" >> .env
```

## Alternative: Keep Vercel + Manual IP Whitelist

If you want to stick with Vercel:
1. Get list of Vercel IPs from dashboard
2. Whitelist all of them in Namecheap (security risk)
3. Accept that IPs may change on region changes

**Recommendation:** Railway is cleaner for this use case.

## Files Modified

- `batchit-backend/server.js` - Express server (works on Railway)
- `batchit-backend/api/*.js` - Serverless functions (works on Vercel)
- `batchit-backend/namecheap-client.js` - API client
- `batchit-backend/package.json` - Added xml2js dependency
- `index.js` - Supports both direct API and Batchit modes
- `batchit-client.js` - Batchit HTTP client

## Next Steps After Railway Deploy

1. ✅ Test Railway deployment
2. ✅ Update MCP to use Railway URL
3. ✅ Test MCP end-to-end
4. Create Claude Code skill for easy installation
5. Record demo video
6. Submit to ClawHub
7. Launch marketing campaign
