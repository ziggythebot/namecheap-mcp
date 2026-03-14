# Namecheap MCP

> Check domain availability across 600+ TLDs on Namecheap without leaving Claude

Ask Claude to check domains conversationally and get instant results with purchase links.

---

## Installation

```bash
npx @birdmania1/namecheap-mcp
```

**⚠️ IMPORTANT:** After installing, you MUST configure your Namecheap API credentials (see Setup below). The MCP won't work without them.

---

## Setup (3 minutes)

### 1. Get Your IP Address

Ask Claude: **"Visit https://api.ipify.org and tell me my IP address"**

Claude will fetch it and tell you. Copy it.

Alternatively, run this in your terminal:
```bash
curl -s https://api.ipify.org
```

### 2. Enable Namecheap API

1. Log into https://www.namecheap.com
2. Go to **Profile → Tools → Namecheap API Access**
3. Click **"Enable API Access"**
4. **Whitelist your IP address** (the one Claude gave you)
5. Copy your **API key**

### 3. Add Credentials to Claude Code

Open `~/.claude/settings.json` and add this MCP server configuration:

```json
{
  "mcpServers": {
    "namecheap": {
      "command": "npx",
      "args": ["-y", "@birdmania1/namecheap-mcp"],
      "env": {
        "NAMECHEAP_API_USER": "your_username",
        "NAMECHEAP_API_KEY": "your_api_key_here",
        "NAMECHEAP_USERNAME": "your_username",
        "NAMECHEAP_CLIENT_IP": "your.ip.address.here"
      }
    }
  }
}
```

**Replace these values:**
- `your_username` — Your Namecheap username (appears twice)
- `your_api_key_here` — The API key from step 2
- `your.ip.address.here` — The IP address from step 1

### 4. Restart Claude Code

Fully quit and restart Claude Code for the changes to take effect.

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
- Make sure you edited `~/.claude/settings.json` (NOT `~/.claude/mcp.json` or any other file)
- Restart Claude Code after editing settings.json.
- Check that the JSON is valid (no trailing commas, proper nesting)

---

## License

MIT

**Made by developers tired of tab-switching**
