# Namecheap MCP - Deployment Summary

## ✅ Production Deployment Complete

**Status:** Live and working
**Cost:** $0/month (running on Mac Mini)
**Approach:** Local backend + Cloudflare tunnel

## Architecture

```
User → Claude MCP → Cloudflare Tunnel → Mac Mini (Batchit Backend) → Namecheap API
```

## Components

### 1. Batchit Backend
- **Location:** Mac Mini (`/Users/ziggy/namecheap-mcp/batchit-backend/`)
- **Process Manager:** PM2
- **Port:** 3000 (localhost)
- **Status:** Running 24/7

**Management:**
```bash
pm2 list                # Check status
pm2 logs namecheap-batchit   # View logs
pm2 restart namecheap-batchit # Restart
pm2 stop namecheap-batchit    # Stop
```

### 2. Cloudflare Tunnel
- **URL:** https://transcripts-scheme-database-yale.trycloudflare.com
- **Purpose:** Expose localhost:3000 to internet (free, secure)
- **Status:** Running in background

**Note:** This is a temporary tunnel URL. For production, you'd want to create a named tunnel, but this works fine for now.

### 3. Namecheap API
- **Account:** boomexchange
- **Whitelisted IP:** 147.12.222.34 (Mac Mini's IP)
- **Affiliate Campaign:** 7069952

## Endpoints

### Health Check
```bash
curl https://transcripts-scheme-database-yale.trycloudflare.com/health
```

### Check Domains
```bash
curl -X POST https://transcripts-scheme-database-yale.trycloudflare.com/api/namecheap/check-domains \
  -H "Content-Type: application/json" \
  -d '{"domains": ["example.com", "test.io"]}'
```

## MCP Configuration

Users just need to add this to their `~/.claude/settings.json`:

```json
{
  "mcpServers": {
    "namecheap": {
      "command": "node",
      "args": ["/path/to/namecheap-mcp/index.js"],
      "env": {
        "BATCHIT_API_URL": "https://transcripts-scheme-database-yale.trycloudflare.com"
      }
    }
  }
}
```

**No Namecheap credentials needed!**

## Testing

Try in Claude Code:
```
Check if emergenceconf2026.com, emergence.london, and emergelondon.com are available
```

Should return availability + purchase URLs with affiliate tracking.

## Why This Approach?

1. **Zero cost** - Runs on existing Mac Mini
2. **Static IP** - Mac Mini has whitelisted IP (147.12.222.34)
3. **No Railway issues** - Railway rotates IPs, Cloudflare tunnel solves this
4. **Secure** - API keys stay on Mac Mini, never exposed
5. **Simple** - PM2 manages process, tunnel handles public access

## Alternatives Considered

- ✗ **Railway** - Rotating IPs broke Namecheap whitelist
- ✗ **Vercel** - Same IP rotation issues
- ✗ **DigitalOcean** - $6/month, not worth it
- ✓ **Mac Mini + Tunnel** - Free, reliable, already running

## Affiliate Revenue

Purchase URLs include affiliate tracking:
```
utm_campaign=7069952&afsrc=1&utm_source=IR&utm_medium=Affiliate&affnetwork=ir
```

Users buy domains on Namecheap → You get commission.

## Next Steps

1. ✅ Deploy backend (complete)
2. ✅ Configure MCP (complete)  
3. ✅ Test end-to-end (ready to test)
4. ⏳ Submit to ClawHub
5. ⏳ Marketing campaign
6. ⏳ Demo video

## Maintenance

**If Mac Mini restarts:**
- PM2 auto-starts the backend
- Cloudflare tunnel needs manual restart:
  ```bash
  cloudflared tunnel --url http://localhost:3000 > /tmp/cloudflare-tunnel.log 2>&1 &
  ```

**If Cloudflare URL changes:**
- Update `BATCHIT_API_URL` in settings.json
- Or create a named Cloudflare tunnel for permanent URL

## Support

Issues? Check:
1. `pm2 logs namecheap-batchit` - Backend logs
2. `tail -f /tmp/cloudflare-tunnel.log` - Tunnel logs
3. Test health: `curl http://localhost:3000/health`
4. Verify IP: `curl https://transcripts-scheme-database-yale.trycloudflare.com/detect-ip`
