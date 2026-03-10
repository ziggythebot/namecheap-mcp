# Namecheap MCP Server

MCP server for checking domain availability across 600+ Namecheap TLDs.

## Features

- Batch domain availability checking
- 600+ TLD support (.com, .net, .org, .io, .ai, etc.)
- Premium domain pricing info
- Returns availability status + pricing in your account currency

## Installation

```bash
npm install
```

## Configuration

You need Namecheap API credentials:

1. Enable API access in your Namecheap account:
   - Account → Profile → Tools → API Access
2. Whitelist your IP address
3. Get your API credentials (ApiUser, ApiKey, Username)

Create `.env`:

```env
NAMECHEAP_API_USER=your_username
NAMECHEAP_API_KEY=your_api_key_from_dashboard
NAMECHEAP_USERNAME=your_username
NAMECHEAP_CLIENT_IP=your_public_ip
NAMECHEAP_SANDBOX=false  # Set to true for testing
```

**Important:**
- `NAMECHEAP_API_KEY` is NOT your login password - it's the long hex key from API Access page
- `NAMECHEAP_CLIENT_IP` is your public IP (run `curl -4 ifconfig.me` to get it)
- API changes can take 5-10 minutes to propagate after enabling

## Usage

### As MCP Server (Claude Code / GhostClaw)

Add to `~/.claude/settings.json`:

```json
{
  "mcpServers": {
    "namecheap": {
      "command": "node",
      "args": ["/path/to/namecheap-mcp/index.js"],
      "env": {
        "NAMECHEAP_API_USER": "your_username",
        "NAMECHEAP_API_KEY": "your_api_key",
        "NAMECHEAP_USERNAME": "your_username",
        "NAMECHEAP_CLIENT_IP": "your_ip"
      }
    }
  }
}
```

Then use in Claude:

```
Check if retroweb.generator is available
```

### Standalone

```javascript
const { checkDomains } = require('./namecheap-client');

const result = await checkDomains(['example.com', 'test123.net']);
console.log(result);
// { 'example.com': false, 'test123.net': true }
```

## API

### `checkDomains(domains: string[])`

Check availability of multiple domains in a single API call.

**Parameters:**
- `domains` - Array of domain names (e.g., `['example.com', 'test.io']`)

**Returns:**
- Object mapping domain names to availability (`true` = available, `false` = taken)

**Example:**

```javascript
const result = await checkDomains([
  'retroweb.generator',
  'mysite.com',
  'test.ai'
]);

// {
//   'retroweb.generator': true,
//   'mysite.com': false,
//   'test.ai': true
// }
```

### MCP Tools

When running as MCP server, exposes these tools:

#### `mcp__namecheap__check`

Check domain availability.

**Parameters:**
- `domains` (string[]) - List of domain names to check

**Returns:**
- Availability status for each domain
- Pricing information for available domains
- Premium domain indicators

## Rate Limits

- Namecheap API has reasonable rate limits for typical usage
- Batch checking up to 100 domains per call
- See [Namecheap API docs](https://www.namecheap.com/support/api/intro/) for details

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Test with sandbox
NAMECHEAP_SANDBOX=true node test.js
```

## License

MIT
