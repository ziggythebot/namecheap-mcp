---
name: namecheap-mcp
description: Check domain availability across 600+ TLDs via Namecheap API
homepage: https://github.com/ziggythebot/namecheap-mcp
emoji: 🌐
tags: [domains, dns, namecheap, mcp, automation, api]
metadata:
  clawdbot:
    requires:
      env:
        - NAMECHEAP_API_USER
        - NAMECHEAP_API_KEY
        - NAMECHEAP_USERNAME
        - NAMECHEAP_CLIENT_IP
      bins:
        - node
        - npm
---

# Namecheap MCP Server

MCP server for checking domain availability across 600+ Namecheap TLDs.

Perfect for:
- Brainstorming domain names with Claude
- Batch checking multiple domains at once
- Finding available alternatives quickly
- Premium domain discovery
- Domain research workflows

## Features

- **Batch checking** - Check multiple domains in a single API call
- **600+ TLDs** - .com, .net, .org, .io, .ai, and hundreds more
- **Premium pricing** - Get pricing info for premium domains
- **Fast & reliable** - Direct Namecheap API integration

## Installation

### 1. Get Namecheap API Credentials

1. Log into your Namecheap account
2. Go to: **Account → Profile → Tools → API Access**
3. Enable API access
4. Whitelist your IP address
5. Note your credentials:
   - API User (usually your username)
   - API Key (long hex string)
   - Username (your account username)

### 2. Install the MCP Server

```bash
git clone https://github.com/ziggythebot/namecheap-mcp.git
cd namecheap-mcp
npm install
```

### 3. Configure Claude Code / GhostClaw

Add to your `~/.claude/settings.json`:

```json
{
  "mcpServers": {
    "namecheap": {
      "command": "node",
      "args": ["/absolute/path/to/namecheap-mcp/index.js"],
      "env": {
        "NAMECHEAP_API_USER": "your_username",
        "NAMECHEAP_API_KEY": "your_api_key_here",
        "NAMECHEAP_USERNAME": "your_username",
        "NAMECHEAP_CLIENT_IP": "your_ip_address"
      }
    }
  }
}
```

**Important:**
- Use absolute paths (e.g., `/Users/yourname/namecheap-mcp/index.js`)
- Replace credentials with your actual Namecheap API credentials
- Your IP must be whitelisted in Namecheap dashboard

### 4. Test It

Restart Claude Code, then try:

```
Check if retroweb.com, retroweb.io, and retroweb.ai are available
```

Claude will use the MCP server to check all three domains at once.

## Usage Examples

### Basic Domain Check

```
Check if myawesomeapp.com is available
```

Claude calls `check_domains` with `["myawesomeapp.com"]` and returns availability.

### Batch Checking Multiple Domains

```
Check these domains:
- myapp.com
- myapp.io
- myapp.ai
- myapp.co
- myapp.net
```

Checks all 5 domains in a single API call.

### Domain Brainstorming

```
I'm building a retro web generator tool.
Help me brainstorm domain names and check which are available.
```

Claude will suggest names like:
- retroweb.generator
- retrowebgen.com
- makeretroweb.com
- geocitiesmaker.com

...and check them all with the MCP server.

### Finding Alternatives

```
example.com is taken. Find me 10 similar available domains.
```

Claude will generate variations and check them:
- getexample.com
- tryexample.com
- example.io
- example.app
- etc.

## Response Format

The MCP server returns results categorized:

**✅ Available**
- domain1.com
- domain2.io

**💎 Available (Premium)**
- premium.com (Premium: $2,500)
- luxury.net (Premium: Contact for pricing)

**❌ Taken**
- example.com
- google.com

## Use Cases

### 1. Product Naming Sessions

When brainstorming product names:
```
I'm building a SaaS tool for [description].
Suggest 20 domain names and check which are available.
```

Claude generates names + checks them all instantly.

### 2. Domain Research

Finding the best domain for your project:
```
Compare these domains and tell me which are available:
- brandname.com
- brandname.io
- getbrandname.com
- trybrandname.com
- brandname.app
```

### 3. Alternative TLD Discovery

When .com is taken:
```
myapp.com is taken. What other TLDs are available?
Check: .io, .ai, .app, .co, .dev, .tech
```

### 4. Premium Domain Discovery

Finding premium domains in your budget:
```
Check if these short domains are available as premiums:
- web.io
- app.ai
- dev.co
```

## Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NAMECHEAP_API_USER` | Your Namecheap username | Yes |
| `NAMECHEAP_API_KEY` | Your API key from Namecheap | Yes |
| `NAMECHEAP_USERNAME` | Your Namecheap username (usually same as API_USER) | Yes |
| `NAMECHEAP_CLIENT_IP` | Your IP address (must be whitelisted) | Yes |
| `NAMECHEAP_SANDBOX` | Set to `true` for testing (optional) | No |

### Sandbox Mode

For testing without real API calls:

```json
{
  "env": {
    "NAMECHEAP_SANDBOX": "true"
  }
}
```

Sandbox returns mock data - useful for development.

## Troubleshooting

### "Invalid API key" Error

**Problem:** API authentication failing

**Solutions:**
1. Check your API key is correct in settings.json
2. Verify your IP is whitelisted in Namecheap dashboard
3. Make sure you've enabled API access in your account

### "IP not whitelisted" Error

**Problem:** Your IP isn't whitelisted in Namecheap

**Solution:**
1. Go to Namecheap: **Account → Profile → Tools → API Access**
2. Click "Edit" next to Whitelisted IPs
3. Add your current IP (get it from https://ifconfig.me)
4. Save changes

### MCP Server Not Found

**Problem:** Claude says "tool not available" or "namecheap server not found"

**Solutions:**
1. Check the path in settings.json is absolute (not relative)
2. Verify `index.js` exists at that path
3. Restart Claude Code after changing settings.json
4. Check MCP server logs for errors

### Rate Limiting

**Problem:** Getting rate limit errors

**Solution:**
- Namecheap allows reasonable limits for typical usage
- Batch checks up to 100 domains per call
- Space out large batch requests
- See [Namecheap API docs](https://www.namecheap.com/support/api/intro/) for details

## Advanced Usage

### Standalone Node.js

Use the client directly in Node.js:

```javascript
import { NamecheapClient } from './namecheap-client.js';

const client = new NamecheapClient({
  apiUser: process.env.NAMECHEAP_API_USER,
  apiKey: process.env.NAMECHEAP_API_KEY,
  username: process.env.NAMECHEAP_USERNAME,
  clientIp: process.env.NAMECHEAP_CLIENT_IP,
  sandbox: false
});

const results = await client.checkDomains([
  'example.com',
  'test.io',
  'myapp.ai'
]);

console.log(results);
// {
//   'example.com': { available: false },
//   'test.io': { available: true, premium: false },
//   'myapp.ai': { available: true, premium: true, price: '$2,500' }
// }
```

### Integration with Other MCP Servers

Combine with other tools:

**With Gmail MCP:**
```
Check if these domains are available, then email me a summary:
[list of domains]
```

**With Slack MCP:**
```
Check these domains and post available ones to #marketing channel
```

**With GitHub MCP:**
```
Find available domains for this project and add them to the README
```

## Supported TLDs

600+ TLDs including:

**Popular:**
.com, .net, .org, .io, .ai, .app, .dev, .co, .me

**Tech:**
.tech, .digital, .online, .website, .site, .cloud

**Business:**
.biz, .company, .solutions, .services, .agency

**Creative:**
.design, .studio, .gallery, .art, .shop

**Location:**
.us, .uk, .ca, .de, .fr, .jp, .au

**New:**
.xyz, .fun, .live, .world, .today

...and 500+ more. See [Namecheap TLD list](https://www.namecheap.com/domains/domain-name-search/) for complete list.

## Why Namecheap?

- **Best API coverage** - 600+ TLDs (most registrars: 50-200)
- **Batch checking** - Check many domains at once
- **Premium pricing** - Get real pricing for premium domains
- **Reliable** - Namecheap is a major registrar with good API docs
- **No rate limits for typical use** - Generous limits for checking domains

## Alternatives Considered

| Registrar | TLDs | Batch Check | API Quality | Why Not? |
|-----------|------|-------------|-------------|----------|
| GoDaddy | ~200 | Yes | Good | Fewer TLDs, more expensive API |
| Google Domains | ~300 | No | Fair | Shutting down (Squarespace) |
| Cloudflare | ~120 | No | Good | Limited TLD support |
| Porkbun | ~400 | No | Fair | No batch checking |

**Verdict:** Namecheap has the best combination of TLD coverage + batch checking + API quality.

## Contributing

Contributions welcome! To add features:

1. Fork the repo
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## License

MIT

## Support

- **Issues:** [GitHub Issues](https://github.com/ziggythebot/namecheap-mcp/issues)
- **Docs:** [Namecheap API Docs](https://www.namecheap.com/support/api/intro/)
- **Community:** [OpenClawOS Telegram](https://t.me/+8qJbqxzBQAZkYTNk)

## Example Workflows

### Workflow 1: Product Launch Domain Hunt

```
I'm launching a SaaS product called "TaskFlow" - it helps teams manage workflows.

1. Suggest 30 domain name variations
2. Check availability for all
3. Filter for available .com, .io, or .app
4. Rank by memorability
```

Claude will:
1. Generate variations (taskflow.com, gettaskflow.com, taskflow.io, etc.)
2. Check all 30 at once
3. Filter to available domains
4. Rank and present best options

### Workflow 2: Finding Short Domains

```
Find me available 4-letter .com domains related to "code" or "dev"
Check: code.com, coda.com, cody.com, kode.com, devs.com, etc.
```

### Workflow 3: International Domains

```
I want to launch in multiple regions. Check if mybrand.[tld] is available for:
.com (global)
.uk (UK)
.de (Germany)
.fr (France)
.jp (Japan)
.au (Australia)
```

### Workflow 4: Competitor Alternative Names

```
My competitor owns example.com. Help me find similar available domains:
- getexample.com
- tryexample.com
- example.io
- example.app
- useexample.com
```

## Changelog

### v1.0.0 (2026-03-10)

- Initial release
- Batch domain checking
- 600+ TLD support
- Premium domain pricing
- MCP server integration
- Standalone client library

---

**Made for Claude Code / GhostClaw**

Built with [Model Context Protocol](https://modelcontextprotocol.io)
