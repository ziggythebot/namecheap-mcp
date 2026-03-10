import https from 'https';
import { parseStringPromise } from 'xml2js';

/**
 * Namecheap API client for domain availability checking
 */
export class NamecheapClient {
  constructor(config) {
    this.apiUser = config.apiUser;
    this.apiKey = config.apiKey;
    this.username = config.username;
    this.clientIp = config.clientIp;
    this.sandbox = config.sandbox || false;

    this.baseUrl = this.sandbox
      ? 'api.sandbox.namecheap.com'
      : 'api.namecheap.com';
  }

  /**
   * Check domain availability for multiple domains
   * @param {string[]} domains - Array of domain names
   * @returns {Promise<Object>} - Map of domain to availability (true = available)
   */
  async checkDomains(domains) {
    if (!Array.isArray(domains) || domains.length === 0) {
      throw new Error('domains must be a non-empty array');
    }

    const domainList = domains.join(',');
    const params = new URLSearchParams({
      ApiUser: this.apiUser,
      ApiKey: this.apiKey,
      UserName: this.username,
      ClientIp: this.clientIp,
      Command: 'namecheap.domains.check',
      DomainList: domainList
    });

    const url = `https://${this.baseUrl}/xml.response?${params}`;

    return new Promise((resolve, reject) => {
      https.get(url, (res) => {
        let data = '';

        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', async () => {
          try {
            const result = await this.parseResponse(data);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        });
      }).on('error', (error) => {
        reject(error);
      });
    });
  }

  /**
   * Parse XML response from Namecheap API
   * @param {string} xml - XML response
   * @returns {Promise<Object>} - Parsed availability data
   */
  async parseResponse(xml) {
    const parsed = await parseStringPromise(xml);
    const response = parsed.ApiResponse;

    // Check for errors
    if (response.$.Status === 'ERROR') {
      const error = response.Errors[0].Error[0];
      throw new Error(`Namecheap API Error ${error.$.Number}: ${error._}`);
    }

    // Parse domain check results
    const commandResponse = response.CommandResponse[0];
    const domainCheckResult = commandResponse.DomainCheckResult;

    const results = {};

    for (const domain of domainCheckResult) {
      const domainName = domain.$.Domain;
      const available = domain.$.Available === 'true';
      const isPremium = domain.$.IsPremiumName === 'true';
      const premiumPrice = domain.$.PremiumRegistrationPrice;

      results[domainName] = {
        available,
        premium: isPremium,
        price: premiumPrice || null
      };
    }

    return results;
  }
}

/**
 * Convenience function for checking domains
 * @param {string[]} domains - Array of domain names
 * @returns {Promise<Object>} - Availability map
 */
export async function checkDomains(domains) {
  const client = new NamecheapClient({
    apiUser: process.env.NAMECHEAP_API_USER,
    apiKey: process.env.NAMECHEAP_API_KEY,
    username: process.env.NAMECHEAP_USERNAME,
    clientIp: process.env.NAMECHEAP_CLIENT_IP,
    sandbox: process.env.NAMECHEAP_SANDBOX === 'true'
  });

  const results = await client.checkDomains(domains);

  // Simplify to just availability
  const simplified = {};
  for (const [domain, data] of Object.entries(results)) {
    simplified[domain] = data.available;
  }

  return simplified;
}
