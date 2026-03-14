# Namecheap MCP

> Check domain availability across 600+ TLDs on Namecheap without leaving Claude

Ask Claude to check domains conversationally and get instant results with purchase links.

---

## Setup (3 minutes)

### 1. Get Your IP Address

Ask Claude: **"What's my IP address?"**

Claude will tell you. Copy it.

### 2. Enable Namecheap API

1. Log into https://www.namecheap.com
2. Go to **Profile → Tools → Namecheap API Access**
3. Click **"Enable API Access"**
4. **Whitelist your IP address** (the one Claude gave you)
5. Copy your **API key**

### 3. Add to Claude Code

Open `~/.claude/settings.json` and add:

```json
{
  "mcpServers": {
    "namecheap": {
      "command": "npx",
      "args": ["-y", "@birdmania1/namecheap-mcp"],
      "env": {
        "NAMECHEAP_API_USER": "your_username",
        "NAMECHEAP_API_KEY": "your_api_key",
        "NAMECHEAP_USERNAME": "your_username",
        "NAMECHEAP_CLIENT_IP": "your_ip_address"
      }
    }
  }
}
```

Replace with your actual values.

### 4. Restart Claude Code

### 5. Try It

Ask Claude: **"Check if example.com and startup.io are available"**

You'll get instant results with prices and purchase links!

---

## What You Can Do

**Find startup names:**
```
"I'm building a SaaS for restaurants. Help me find a domain."
```

**Check specific domains:**
```
"Check if myapp.com, myapp.io, and myapp.ai are available"
```

**Find alternatives:**
```
"example.com is taken. Find me similar domains."
```

**Research TLDs:**
```
"Check if any single-word domains are available in .ai"
```

---

## Features

- **600+ TLDs** — .com, .io, .ai, .xyz, .tech, and more
- **Batch checking** — Check 100 domains at once
- **Instant pricing** — See costs upfront
- **Purchase links** — One-click to buy
- **Secure** — Direct API, no proxy server

---

## Troubleshooting

**"Invalid request IP" error:**
- Your IP changed. Update it in Namecheap's whitelist.
- Ask Claude "What's my IP?" to get your current IP.

**"API access not enabled":**
- Enable it in your Namecheap account settings.

**Not showing up in Claude:**
- Restart Claude Code after editing settings.json.

---

## License

MIT

**Made by developers tired of tab-switching**
