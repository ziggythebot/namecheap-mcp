# Namecheap MCP

> Check domain availability across 600+ TLDs without leaving Claude

Stop tab-switching between Claude and Namecheap. Ask Claude to check domains conversationally, get instant results, and continue brainstorming.

```
You: "I'm building a restaurant menu app. Help me find a domain."

Claude: *checks 20 domains in 2 seconds*
✅ menusaas.com - available ($12.98/year)
✅ restaurantmenu.io - available ($34.98/year)
❌ menu.app - taken
✅ getmenu.ai - available ($89.98/year)
```

**Perfect for:** Startup naming sessions · Domain research · Agency client work · Content creation

---

## Why Use This

**Before:** Brainstorm with Claude → Tab to Namecheap → Type domain → Check → Back to Claude → Repeat 20 times → 30 minutes wasted

**After:** "Check if these 20 domains are available" → Instant results → Keep brainstorming

### What You Get

- **600+ TLDs** — .com, .io, .ai, .xyz, .tech, and 595 more
- **Batch checking** — Check 100 domains in one call
- **Zero setup** — No API keys needed (uses hosted backend)
- **Premium pricing** — See costs for premium domains upfront
- **Purchase links** — One-click to Namecheap checkout

---

## Quick Start

### 1. Install via npm

```bash
npm install -g @birdmania1/namecheap-mcp
```

### 2. Configure Claude Code

Add to `~/.claude/settings.json`:

```json
{
  "mcpServers": {
    "namecheap": {
      "command": "npx",
      "args": ["-y", "@birdmania1/namecheap-mcp"],
      "env": {
        "BATCHIT_API_URL": "https://transcripts-scheme-database-yale.trycloudflare.com"
      }
    }
  }
}
```

### 3. Restart Claude Code

### 4. Try It

```
Check if retroweb.com, retroweb.io, and retroweb.ai are available
```

Claude calls the MCP server and returns results instantly.

---

## Use Cases

### Startup Naming

```
You: "I'm building a SaaS for restaurant menus. Help me brainstorm domains."

Claude: Let me suggest some options and check availability...
✅ menusaas.com
✅ restaurantmenu.io
✅ tablemenu.app
❌ menu.com (taken)
✅ getmenu.co

Want me to check more variations?
```

### Batch Checking

```
You: Check these domains:
- myapp.com
- myapp.io
- myapp.ai
- myapp.co
- myapp.net
- getmyapp.com
- trymyapp.com
- myapp.app

Claude: *checks all 8 at once*
✅ myapp.io - available
✅ getmyapp.com - available
❌ myapp.com - taken
...
```

### Finding Alternatives

```
You: "example.com is taken. Find me 10 similar available domains."

Claude: *generates and checks variations*
✅ getexample.com
✅ tryexample.com
✅ example.io
✅ example.app
❌ examples.com (taken)
...
```

### Domain Research

```
You: "Check if any single-word tech domains are available in .ai"

Claude: *batch checks common tech terms*
✅ compiler.ai - available ($89.98/year)
❌ code.ai - premium domain ($15,000)
✅ deploy.ai - available ($89.98/year)
...
```

---

## How It Works

**Architecture:**

```
Claude MCP → Hosted Backend → Namecheap API → Results
```

1. You ask Claude to check domains (natural language)
2. Claude calls the Namecheap MCP tool
3. MCP hits the hosted backend (no API keys needed)
4. Backend queries Namecheap API in real-time
5. Results return with availability + pricing + purchase links

**Why a hosted backend?**

Zero setup. You don't need Namecheap API credentials, IP whitelisting, or configuration. Just install and use.

---

## Response Format

The MCP returns structured results Claude can format for you:

**Available Domains:**
- Domain name
- Price per year
- Direct purchase link

**Taken Domains:**
- Domain name
- Availability status

**Premium Domains:**
- Domain name
- Premium price
- Marketplace link

---

## Coverage

**600+ TLDs including:**

| Popular | Developer | Regional | Creative |
|---------|-----------|----------|----------|
| .com | .io | .uk | .xyz |
| .net | .dev | .eu | .online |
| .org | .ai | .ca | .store |
| .co | .app | .de | .tech |
| .me | .tech | .fr | .fun |

[See full TLD list →](./TLD-CATEGORIES.md)

---

## FAQ

**Do I need a Namecheap account?**

No — anyone can check availability. You only need a Namecheap account when you're ready to buy.

**Is this official?**

This is a community tool using Namecheap's public API. Purchase links go directly to Namecheap.com.

**What about rate limits?**

The hosted backend handles rate limiting. Normal usage (checking dozens of domains per day) won't hit limits.

**Can I use my own Namecheap API key?**

Yes. Set these env vars instead of `BATCHIT_API_URL`:
```json
{
  "NAMECHEAP_API_USER": "your_username",
  "NAMECHEAP_API_KEY": "your_api_key",
  "NAMECHEAP_USERNAME": "your_username",
  "NAMECHEAP_CLIENT_IP": "your_ip"
}
```

**Is it secure?**

The hosted backend only checks availability — it can't access your Namecheap account or buy domains. Purchases happen directly on Namecheap.com.

**What about privacy?**

Domain searches are not logged. We don't track what you check.

---

## Advanced Usage

### Install from Source

For development or customization:

```bash
git clone https://github.com/ziggythebot/namecheap-mcp.git
cd namecheap-mcp
npm install
```

Then in `~/.claude/settings.json`:

```json
{
  "mcpServers": {
    "namecheap": {
      "command": "node",
      "args": ["/absolute/path/to/namecheap-mcp/index.js"],
      "env": {
        "BATCHIT_API_URL": "https://transcripts-scheme-database-yale.trycloudflare.com"
      }
    }
  }
}
```

### Self-Hosted Backend

Want to run your own backend? See [DEPLOYMENT_SUMMARY.md](./DEPLOYMENT_SUMMARY.md)

Requirements:
- Namecheap API credentials
- Static IP (for Namecheap whitelist)
- Node.js server

### Batch API

Check multiple domains programmatically:

```bash
curl -X POST https://transcripts-scheme-database-yale.trycloudflare.com/api/namecheap/check-domains \
  -H "Content-Type: application/json" \
  -d '{"domains": ["example.com", "test.io"]}'
```

---

## Contributing

Found a bug? Have a feature request? PRs welcome.

**Common improvements:**
- Additional TLD support
- Better error handling
- Caching for faster repeat checks

---

## Credits

Built for the [Claude AI](https://claude.ai) and [MCP](https://modelcontextprotocol.io) community.

Uses [Namecheap API](https://www.namecheap.com/support/api/intro/) for domain data.

---

## License

MIT

---

## Related Projects

- **[Claude Code](https://claude.ai/code)** — AI coding assistant (what this runs on)
- **[MCP Servers](https://github.com/modelcontextprotocol/servers)** — Official MCP server examples
- **[GhostClaw](https://github.com/qwibitai/ghostclaw)** — Personal AI assistant with MCP support

---

**Made with ☕ by developers tired of tab-switching**

[⭐ Star this repo](https://github.com/ziggythebot/namecheap-mcp) if you find it useful
