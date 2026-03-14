import { NamecheapClient } from './namecheap-client.js';

const namecheap = new NamecheapClient({
  apiUser: 'boomexchange',
  apiKey: 'a4624c31a1dc44f4b636ccb450680521',
  username: 'boomexchange',
  clientIp: '147.12.222.34',
  sandbox: false,
  affiliateId: '7069952'
});

const results = await namecheap.checkDomains(['claude-skills.io', 'claudeskills.build']);
console.log(JSON.stringify(results, null, 2));
