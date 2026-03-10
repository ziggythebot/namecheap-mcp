# Namecheap MCP Backend API

**Simple Express API that proxies domain checks to Namecheap.**

Users call YOUR API → No Namecheap account needed → Zero friction.

---

## Quick Deploy

### Option 1: Railway (Easiest)

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Deploy
cd backend-api
railway up
```

Railway will:
- Auto-detect Node.js
- Install dependencies
- Start the server
- Give you a URL: `https://your-app.railway.app`

**Add environment variables in Railway dashboard:**
- `NAMECHEAP_API_USER`
- `NAMECHEAP_API_KEY`
- `NAMECHEAP_USERNAME`
- `NAMECHEAP_CLIENT_IP`
- `NAMECHEAP_AFFILIATE_ID`

### Option 2: Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd backend-api
vercel
```

**Note:** Vercel has 10-second timeout. May need serverless functions instead.

### Option 3: DigitalOcean App Platform

1. Push to GitHub
2. Go to DigitalOcean → Apps → Create
3. Connect GitHub repo
4. Set environment variables
5. Deploy

---

## API Endpoints

### POST /api/check-domains

Check domain availability.

**Request:**
```json
{
  "domains": ["example.com", "test.io", "demo.app"]
}
```

**Response:**
```json
{
  "available": [
    {
      "domain": "test.io",
      "purchaseUrl": "https://namecheap.com/...?affid=dandare"
    }
  ],
  "premium": [
    {
      "domain": "demo.app",
      "price": "$2,500",
      "purchaseUrl": "https://namecheap.com/...?affid=dandare"
    }
  ],
  "taken": [
    "example.com"
  ],
  "timestamp": "2026-03-10T18:00:00.000Z"
}
```

### GET /health

Health check.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2026-03-10T18:00:00.000Z"
}
```

### GET /api/stats

Usage stats (optional).

---

## Rate Limits

**Built-in protection:**
- 10 requests/minute per IP
- Max 20 domains per request

**Why:** Protects YOUR Namecheap API from hitting rate limits (20 req/min).

**Your Namecheap limits:**
- 20 requests/minute
- 700 requests/hour
- 8,000 requests/day

**With 10 users per minute:**
- 10 users × 1 request each = 10 API calls
- Well under the 20/min limit
- Sustainable for moderate traffic

---

## Update MCP Client

Once deployed, update the MCP to call YOUR API:

**Before (users need API key):**
```javascript
// Each user needs their own Namecheap credentials
const client = new NamecheapClient({ ... });
```

**After (users call YOUR API):**
```javascript
// Users call your API, no credentials needed
const response = await fetch('https://your-app.railway.app/api/check-domains', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ domains: ['test.com'] })
});
const results = await response.json();
```

---

## Costs

**Railway:** $5/mo (Hobby plan)
**Vercel:** Free tier (may work)
**DigitalOcean:** $5/mo (Basic Droplet)

**Revenue:** Affiliate commissions from domain sales ($2-4 per domain)

**Break-even:** ~2-3 domain purchases per month

---

## Monitoring

**What to track:**
- Requests per day
- Failed requests
- Namecheap rate limit errors
- Most checked domains

**Add logging:**
```javascript
app.post('/api/check-domains', async (req, res) => {
  console.log('Check request:', req.body.domains);
  // ... existing code
});
```

**Or use Railway logs:**
```bash
railway logs
```

---

## Scaling

**If you outgrow 20 req/min:**

1. **Multiple Namecheap accounts**
   - 5 accounts = 100 req/min
   - Round-robin requests

2. **Caching**
   - Cache popular domains for 1 hour
   - Reduces API calls

3. **Queue system**
   - Queue requests during spikes
   - Process gradually

4. **Premium tier**
   - Free users: Rate limited
   - Paid users: Priority access

---

## Security

**Current:**
- CORS enabled (any origin)
- Rate limiting per IP
- Input validation

**Production additions:**
```javascript
// API key authentication (optional)
app.use('/api/', (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey || !isValidApiKey(apiKey)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
});
```

---

## Local Development

```bash
cd backend-api
npm install
cp .env.example .env
# Edit .env with your Namecheap credentials
npm run dev
```

**Test:**
```bash
curl -X POST http://localhost:3000/api/check-domains \
  -H "Content-Type: application/json" \
  -d '{"domains": ["test.com", "example.io"]}'
```

---

## Next Steps

1. Deploy to Railway/Vercel
2. Update MCP client to call YOUR API
3. Test with real users
4. Launch to ClawHub
5. Monitor usage
6. Scale as needed

---

**Status:** Ready to deploy 🚀
