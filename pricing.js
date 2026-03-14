// Namecheap domain pricing (standard registration, first year)
// Prices updated March 2026
// Note: Prices may vary with promotions. Premium domains priced separately.

export const PRICING = {
  // Popular TLDs
  '.com': 11.28,
  '.net': 12.98,
  '.org': 7.48,
  '.info': 2.98,
  '.biz': 4.98,

  // Country codes
  '.us': 3.98,
  '.co': 8.98,
  '.io': 32.98,
  '.me': 6.98,
  '.tv': 32.98,
  '.cc': 9.98,

  // New gTLDs - Tech/Startup
  '.ai': 99.98,
  '.app': 14.98,
  '.dev': 12.98,
  '.tech': 6.98,
  '.online': 0.98,
  '.site': 0.98,
  '.space': 0.98,
  '.website': 2.98,
  '.xyz': 1.18,

  // Business
  '.business': 3.98,
  '.company': 9.98,
  '.solutions': 21.98,
  '.services': 31.98,
  '.agency': 19.98,
  '.consulting': 31.98,
  '.group': 18.98,
  '.management': 19.98,
  '.ventures': 48.98,

  // Commerce
  '.shop': 0.98,
  '.store': 0.98,
  '.market': 31.98,
  '.deals': 31.98,
  '.shopping': 31.98,

  // Creative
  '.design': 48.98,
  '.art': 14.98,
  '.studio': 24.98,
  '.digital': 31.98,
  '.media': 31.98,
  '.graphics': 18.98,
  '.photos': 18.98,
  '.gallery': 19.98,

  // Professional
  '.legal': 48.98,
  '.attorney': 38.98,
  '.law': 98.98,
  '.lawyer': 38.98,
  '.accountant': 29.98,
  '.financial': 48.98,
  '.tax': 48.98,

  // Community/Lifestyle
  '.club': 12.98,
  '.social': 31.98,
  '.community': 31.98,
  '.network': 19.98,
  '.events': 31.98,
  '.live': 24.98,
  '.chat': 31.98,
  '.email': 21.98,

  // Real Estate
  '.properties': 31.98,
  '.realty': 48.98,
  '.estate': 31.98,
  '.homes': 48.98,
  '.house': 31.98,

  // Education
  '.academy': 31.98,
  '.education': 19.98,
  '.training': 31.98,
  '.university': 48.98,
  '.school': 31.98,

  // Health/Fitness
  '.health': 74.98,
  '.fitness': 31.98,
  '.care': 31.98,
  '.dental': 48.98,
  '.clinic': 48.98,

  // Food/Dining
  '.restaurant': 48.98,
  '.cafe': 31.98,
  '.catering': 31.98,
  '.pizza': 48.98,
  '.food': 38.98,

  // Travel
  '.travel': 121.98,
  '.flights': 48.98,
  '.tours': 48.98,
  '.vacation': 31.98,
  '.cruises': 48.98,

  // Finance
  '.finance': 48.98,
  '.capital': 48.98,
  '.loans': 98.98,
  '.credit': 98.98,
  '.investments': 98.98,

  // Other common
  '.blog': 29.98,
  '.news': 24.98,
  '.world': 31.98,
  '.today': 21.98,
  '.tools': 31.98,
  '.works': 31.98,
  '.systems': 19.98,
  '.software': 31.98,
  '.codes': 48.98,
  '.cloud': 22.98,
  '.hosting': 48.98,
  '.domains': 31.98,
  '.money': 31.98,
  '.cash': 31.98,
  '.run': 19.98,
  '.build': 74.98,
  '.builders': 31.98,
  '.foundation': 31.98,
  '.direct': 31.98,
  '.plus': 31.98,
  '.pro': 6.98,
  '.guru': 31.98,
  '.expert': 48.98,
  '.support': 19.98,
  '.help': 29.98,
  '.tips': 21.98,
  '.guide': 31.98,
  '.global': 74.98,
  '.international': 19.98,
  '.center': 19.98,
  '.city': 19.98,
  '.fun': 22.98,
  '.life': 31.98,
  '.style': 31.98,
  '.cool': 31.98,
  '.zone': 31.98,
  '.land': 31.98,
  '.place': 31.98,
  '.ninja': 19.98,
  '.ink': 28.98,
  '.wiki': 28.98,
  '.fail': 31.98,
  '.wtf': 31.98,
  '.lol': 31.98,
  '.win': 29.98,
  '.party': 29.98,
};

export function getPrice(domain) {
  // Extract TLD from domain
  const parts = domain.split('.');
  if (parts.length < 2) return null;

  const tld = '.' + parts.slice(1).join('.');
  return PRICING[tld] || null;
}
