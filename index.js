#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import dotenv from 'dotenv';
import { NamecheapClient } from './namecheap-client.js';
import { BatchitClient } from './batchit-client.js';

// Load environment variables
dotenv.config();

// Choose client based on configuration
let domainClient;
const useBatchit = !!process.env.BATCHIT_API_URL;

if (useBatchit) {
  // Use Batchit hosted API (zero setup for users)
  console.log('Using Batchit hosted API');
  domainClient = new BatchitClient({
    apiUrl: process.env.BATCHIT_API_URL
  });
} else {
  // Use direct Namecheap API (requires credentials)
  console.log('Using direct Namecheap API');

  const requiredEnvVars = [
    'NAMECHEAP_API_USER',
    'NAMECHEAP_API_KEY',
    'NAMECHEAP_USERNAME',
    'NAMECHEAP_CLIENT_IP'
  ];

  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      console.error(`Error: ${envVar} is required in .env file`);
      console.error(`Alternatively, set BATCHIT_API_URL to use hosted API`);
      process.exit(1);
    }
  }

  domainClient = new NamecheapClient({
    apiUser: process.env.NAMECHEAP_API_USER,
    apiKey: process.env.NAMECHEAP_API_KEY,
    username: process.env.NAMECHEAP_USERNAME,
    clientIp: process.env.NAMECHEAP_CLIENT_IP,
    sandbox: process.env.NAMECHEAP_SANDBOX === 'true',
    affiliateId: process.env.NAMECHEAP_AFFILIATE_ID
  });
}

// Alias for backwards compatibility
const namecheap = domainClient;

// Create MCP server
const server = new Server(
  {
    name: 'namecheap-mcp',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Register tool handlers
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'check_domains',
        description: 'Check domain availability on Namecheap for multiple domains at once. Supports 600+ TLDs including .com, .net, .org, .io, .ai, and more.',
        inputSchema: {
          type: 'object',
          properties: {
            domains: {
              type: 'array',
              items: {
                type: 'string'
              },
              description: 'List of domain names to check (e.g., ["example.com", "test.io"])',
            },
          },
          required: ['domains'],
        },
      },
    ],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === 'check_domains') {
    const domains = request.params.arguments.domains;

    if (!Array.isArray(domains) || domains.length === 0) {
      return {
        content: [
          {
            type: 'text',
            text: 'Error: domains must be a non-empty array',
          },
        ],
      };
    }

    try {
      const results = await namecheap.checkDomains(domains);

      // Format results for display
      const available = [];
      const taken = [];
      const premium = [];

      for (const [domain, data] of Object.entries(results)) {
        if (data.available) {
          if (data.premium) {
            premium.push({ domain, data });
          } else {
            available.push({ domain, data });
          }
        } else {
          taken.push(domain);
        }
      }

      let output = '# Domain Availability Results\n\n';

      if (available.length > 0) {
        output += '## ✅ Available\n';
        available.forEach(({ domain, data }) => {
          output += `- **${domain}** — [Buy now](${data.purchaseUrl})\n`;
        });
        output += '\n';
      }

      if (premium.length > 0) {
        output += '## 💎 Available (Premium)\n';
        premium.forEach(({ domain, data }) => {
          output += `- **${domain}** (${data.price || 'Contact for pricing'}) — [Buy now](${data.purchaseUrl})\n`;
        });
        output += '\n';
      }

      if (taken.length > 0) {
        output += '## ❌ Taken\n';
        taken.forEach(d => output += `- ${d}\n`);
      }

      return {
        content: [
          {
            type: 'text',
            text: output,
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: 'text',
            text: `Error checking domains: ${error.message}`,
          },
        ],
        isError: true,
      };
    }
  }

  return {
    content: [
      {
        type: 'text',
        text: `Unknown tool: ${request.params.name}`,
      },
    ],
    isError: true,
  };
});

// Start server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('Namecheap MCP server running on stdio');
}

main().catch((error) => {
  console.error('Server error:', error);
  process.exit(1);
});
