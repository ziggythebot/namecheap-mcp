#!/usr/bin/env node

import express from 'express';
import cors from 'cors';
import { NamecheapClient } from './namecheap-client.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Namecheap client with server credentials
const namecheap = new NamecheapClient({
  apiUser: process.env.NAMECHEAP_API_USER,
  apiKey: process.env.NAMECHEAP_API_KEY,
  username: process.env.NAMECHEAP_USERNAME,
  clientIp: process.env.NAMECHEAP_CLIENT_IP,
  sandbox: process.env.NAMECHEAP_SANDBOX === 'true',
  affiliateId: process.env.NAMECHEAP_AFFILIATE_ID
});

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'namecheap-batchit-api',
    version: '1.0.0'
  });
});

// Get Railway's outbound IP (for Namecheap whitelist)
app.get('/detect-ip', async (req, res) => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    res.json({
      outboundIP: data.ip,
      note: 'Add this IP to Namecheap API whitelist'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Main domain checking endpoint
app.post('/api/namecheap/check-domains', async (req, res) => {
  try {
    const { domains } = req.body;

    // Validation
    if (!domains || !Array.isArray(domains)) {
      return res.status(400).json({
        error: 'Invalid request',
        message: 'domains must be an array of domain names'
      });
    }

    if (domains.length === 0) {
      return res.status(400).json({
        error: 'Invalid request',
        message: 'domains array cannot be empty'
      });
    }

    if (domains.length > 100) {
      return res.status(400).json({
        error: 'Invalid request',
        message: 'Maximum 100 domains per request'
      });
    }

    // Check domains via Namecheap API
    const results = await namecheap.checkDomains(domains);

    res.json({
      success: true,
      results
    });

  } catch (error) {
    console.error('Error checking domains:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not found',
    message: 'Endpoint not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Namecheap Batchit API running on port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/health`);
  console.log(`🔍 Domain check: POST http://localhost:${PORT}/api/namecheap/check-domains`);
});
