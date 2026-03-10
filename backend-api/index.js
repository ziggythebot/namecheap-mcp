// Backend API for Namecheap MCP
// Users call this API, we proxy to Namecheap
// No user API setup needed

import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { NamecheapClient } from '../namecheap-client.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rate limiting (protect our API)
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10, // 10 requests per minute per IP
  message: { error: 'Too many requests, please try again later' }
});

app.use('/api/', limiter);

// Initialize Namecheap client with OUR credentials
const namecheap = new NamecheapClient({
  apiUser: process.env.NAMECHEAP_API_USER,
  apiKey: process.env.NAMECHEAP_API_KEY,
  username: process.env.NAMECHEAP_USERNAME,
  clientIp: process.env.NAMECHEAP_CLIENT_IP,
  sandbox: process.env.NAMECHEAP_SANDBOX === 'true',
  affiliateId: process.env.NAMECHEAP_AFFILIATE_ID || 'dandare'
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Check domains endpoint
app.post('/api/check-domains', async (req, res) => {
  try {
    const { domains } = req.body;

    // Validation
    if (!Array.isArray(domains) || domains.length === 0) {
      return res.status(400).json({ error: 'domains must be a non-empty array' });
    }

    if (domains.length > 20) {
      return res.status(400).json({ error: 'Maximum 20 domains per request' });
    }

    // Check domains via Namecheap
    const results = await namecheap.checkDomains(domains);

    // Format response
    const available = [];
    const taken = [];
    const premium = [];

    for (const [domain, data] of Object.entries(results)) {
      if (data.available) {
        if (data.premium) {
          premium.push({
            domain,
            price: data.price,
            purchaseUrl: data.purchaseUrl
          });
        } else {
          available.push({
            domain,
            purchaseUrl: data.purchaseUrl
          });
        }
      } else {
        taken.push(domain);
      }
    }

    res.json({
      available,
      premium,
      taken,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error checking domains:', error);
    res.status(500).json({
      error: 'Failed to check domains',
      message: error.message
    });
  }
});

// Stats endpoint (optional - track usage)
app.get('/api/stats', (req, res) => {
  res.json({
    message: 'Stats coming soon',
    rateLimits: {
      perMinute: 10,
      perHour: 100,
      perDay: 500
    }
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Namecheap MCP Backend API running on port ${PORT}`);
  console.log(`Mode: ${process.env.NAMECHEAP_SANDBOX === 'true' ? 'SANDBOX' : 'PRODUCTION'}`);
});
