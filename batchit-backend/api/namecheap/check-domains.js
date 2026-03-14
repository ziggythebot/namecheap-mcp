import { NamecheapClient } from '../../namecheap-client.js';

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed',
      message: 'Only POST requests are accepted'
    });
  }

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

    // Initialize Namecheap client
    const namecheap = new NamecheapClient({
      apiUser: process.env.NAMECHEAP_API_USER,
      apiKey: process.env.NAMECHEAP_API_KEY,
      username: process.env.NAMECHEAP_USERNAME,
      clientIp: process.env.NAMECHEAP_CLIENT_IP,
      sandbox: process.env.NAMECHEAP_SANDBOX === 'true',
      affiliateId: process.env.NAMECHEAP_AFFILIATE_ID
    });

    // Check domains via Namecheap API
    const results = await namecheap.checkDomains(domains);

    res.status(200).json({
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
}
