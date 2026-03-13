# Namecheap Batchit API

Hosted API proxy for Namecheap domain checking. Allows MCP users to check domains without needing their own Namecheap API credentials.

## Architecture

```
User → Claude MCP → Batchit API → Namecheap API
                      (this server)
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment (uses parent .env):
```bash
cd ..
cat .env  # Should have NAMECHEAP_* credentials
```

3. Start server:
```bash
npm start
```

## Endpoints

### Health Check
```bash
GET /health
```

Response:
```json
{
  "status": "ok",
  "service": "namecheap-batchit-api",
  "version": "1.0.0"
}
```

### Check Domains
```bash
POST /api/namecheap/check-domains
Content-Type: application/json

{
  "domains": ["example.com", "test.io"]
}
```

Response:
```json
{
  "success": true,
  "results": {
    "example.com": {
      "available": false,
      "premium": false,
      "price": null,
      "purchaseUrl": "https://www.namecheap.com/domains/registration/results/?domain=example.com&utm_campaign=7069952&..."
    },
    "test.io": {
      "available": true,
      "premium": false,
      "price": null,
      "purchaseUrl": "https://www.namecheap.com/domains/registration/results/?domain=test.io&utm_campaign=7069952&..."
    }
  }
}
```

## Deployment

### Railway
```bash
railway login
railway init
railway up
```

### Vercel
```bash
vercel
```

### Fly.io
```bash
fly launch
fly deploy
```

## Environment Variables

Required (set on hosting platform):
- `NAMECHEAP_API_USER` - Your Namecheap username
- `NAMECHEAP_API_KEY` - Your API key
- `NAMECHEAP_USERNAME` - Your Namecheap username
- `NAMECHEAP_CLIENT_IP` - Server's IP (whitelist in Namecheap)
- `NAMECHEAP_AFFILIATE_ID` - Impact campaign ID (7069952)
- `PORT` - Server port (optional, defaults to 3000)

## Rate Limits

Namecheap API limits (shared across all users):
- 20 requests/minute
- 700 requests/hour
- 8000 requests/day

Consider implementing rate limiting if usage grows.

## Security

- No authentication required (read-only API)
- CORS enabled for MCP client access
- Input validation on all requests
- No sensitive data in responses

## Monitoring

Add logging/monitoring for:
- Request volume
- Error rates
- Namecheap API response times
- Rate limit hits
