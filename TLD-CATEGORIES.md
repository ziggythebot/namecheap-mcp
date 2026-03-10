# Namecheap TLD Categories for Smart Suggestions

**For AI agents:** Use this to suggest relevant TLDs based on project type.

---

## Premium Generic TLDs (Always Check These)

**Best for: SaaS, startups, tech products**

```
.com - Universal, most trusted
.io - Tech/startups
.ai - AI/ML products
.app - Applications
.dev - Developer tools
.co - Companies/startups
.net - Networks/tech
.org - Organizations
```

---

## Industry-Specific TLDs

### Tech & Software
```
.io - Tech startups
.ai - AI/ML products
.dev - Developer tools
.app - Applications
.tech - Technology
.digital - Digital services
.software - Software products
.cloud - Cloud services
.online - Web services
.systems - Tech systems
.network - Networks
.email - Email services
.codes - Code/development
```

### Business & Finance
```
.business - Business services
.company - Companies
.solutions - Business solutions
.services - Service businesses
.consulting - Consultants
.agency - Agencies
.partners - Partnerships
.capital - Finance/investment
.financial - Financial services
.cash - Finance/payments
.credit - Credit services
.loans - Lending
.ventures - Venture capital
```

### Creative & Design
```
.design - Design services
.studio - Creative studios
.gallery - Art/photo galleries
.art - Artists
.photo - Photography
.graphics - Graphic design
.media - Media companies
.productions - Production companies
.film - Filmmakers
.video - Video production
.photos - Photo services
```

### Food & Restaurant
```
.restaurant - Restaurants
.cafe - Cafes
.bar - Bars
.pizza - Pizza places
.kitchen - Food/cooking
.catering - Catering services
.coffee - Coffee shops
.menu - Menus
.recipes - Recipe sites
.food - Food businesses
```

### E-commerce & Retail
```
.shop - Online shops
.store - Stores
.shopping - Shopping sites
.buy - E-commerce
.sale - Sales
.deals - Deal sites
.discount - Discount stores
.market - Marketplaces
.boutique - Boutiques
```

### Health & Fitness
```
.fitness - Fitness services
.gym - Gyms
.yoga - Yoga studios
.health - Health services
.dental - Dentists
.clinic - Clinics
.surgery - Surgical services
.care - Healthcare
.training - Training services
```

### Education & Learning
```
.academy - Academies
.education - Educational services
.school - Schools
.university - Universities
.training - Training programs
.courses - Course platforms
.institute - Institutes
.college - Colleges
.study - Study resources
```

### Real Estate & Property
```
.realestate - Real estate
.property - Properties
.homes - Home sales
.house - Houses
.land - Land sales
.rentals - Rental properties
.estate - Estates
```

### Travel & Tourism
```
.travel - Travel services
.tours - Tour operators
.guide - Travel guides
.hotel - Hotels
.vacation - Vacation rentals
.flights - Flight booking
.cruise - Cruises
.world - Global travel
```

---

## Fun/Playful TLDs

**Best for: Consumer apps, games, entertainment**

```
.fun - Fun/entertainment
.cool - Cool products
.lol - Humorous/playful
.wtf - Edgy/quirky
.ninja - Playful tech
.rocks - Music/entertainment
.live - Live events/streaming
.games - Gaming
.bet - Gaming/betting
.racing - Racing/sports
.golf - Golf
.football - Football
.soccer - Soccer
```

---

## Geographic TLDs (for TLD Hacks)

**Best for: Creative wordplay**

```
.al - Albania (sounds like "al")
.es - Spain (sounds like "es")
.ly - Libya (sounds like "ly")
.fm - Micronesia (sounds like radio)
.ws - Samoa (sounds like "was")
.me - Montenegro (sounds like "me")
.be - Belgium (sounds like "be")
.to - Tonga (sounds like "to")
.at - Austria (sounds like "at")
.in - India (sounds like "in")
.it - Italy (sounds like "it")
.is - Iceland (sounds like "is")
.us - United States
.uk - United Kingdom
.de - Germany
.fr - France
.jp - Japan
.ca - Canada
.au - Australia
```

---

## New/Trendy TLDs

**Best for: Modern brands**

```
.xyz - Universal alternative to .com
.space - Flexible/modern
.life - Lifestyle brands
.world - Global brands
.today - News/updates
.club - Communities
.zone - Niche communities
.link - Link services
.site - General websites
.website - General websites
.page - Landing pages
```

---

## Smart Suggestion Logic

### For SaaS Products
**Always check:** .com, .io, .ai, .app, .dev
**Alternative:** .co, .tech, .software

### For Restaurants/Food
**Always check:** .com, .restaurant, .menu
**Creative:** .cafe, .bar, .pizza, .kitchen
**TLD hacks:** menu.al, dish.es

### For Creative/Design
**Always check:** .com, .design, .studio, .io
**Alternative:** .art, .gallery, .media

### For E-commerce
**Always check:** .com, .shop, .store
**Alternative:** .co, .buy, .market

### For Consumer Apps
**Always check:** .com, .app, .io
**Fun:** .fun, .cool, .lol, .rocks

### For Professional Services
**Always check:** .com, .co, .services
**Industry:** .consulting, .agency, .solutions

---

## Checking Strategy

**For each project, check 10-15 domains:**

1. **Core name variants** (3-5 options)
   - Exact name
   - Portmanteau
   - With action verb (get, try, use)

2. **Premium TLDs** (3-4 options)
   - .com
   - .io or .ai (for tech)
   - .app (for applications)
   - .co (alternative)

3. **Industry-specific** (2-3 options)
   - Best TLD for their industry

4. **Creative TLD hacks** (2-3 options)
   - Geographic TLDs that create phrases

5. **Fun alternatives** (1-2 options)
   - .cool, .fun, .rocks, etc.

**Total: ~10-15 domains per check**

---

## Example: Restaurant Menu Software

**Project:** SaaS for restaurant menus

**Suggested domains to check:**

**Core names (5):**
- menucraft.com
- menucraft.io
- plateform.io
- dishlab.com
- getmenu.app

**Premium TLDs (3):**
- menumanager.com
- menusoftware.io
- menuapp.co

**Industry-specific (3):**
- menucraft.restaurant
- digital.menu
- smart.kitchen

**TLD hacks (2):**
- menu.al (sounds like "manual")
- dish.es (sounds like "dishes")

**Fun (2):**
- menucraft.cool
- dishlab.fun

**Total: 15 domains**

---

## Implementation for Agent

When user describes project:

1. **Identify project type** (SaaS, restaurant, e-commerce, etc.)
2. **Generate 5-8 core name ideas** (portmanteaus, action verbs, metaphors)
3. **Cross with relevant TLDs** (3-4 per name)
4. **Total ~15-20 domains**
5. **Batch check all at once**
6. **Present grouped by style**

**Example prompt:**
```
User: "Restaurant menu management SaaS"

Agent thinks:
- Project type: SaaS + Restaurant
- Core names: menucraft, dishlab, plateform, getmenu
- Relevant TLDs: .com, .io, .app, .restaurant, .menu
- TLD hacks: menu.al, dish.es
- Total: 15 domains

Agent checks: All 15 at once via namecheap-mcp

Agent presents:
✅ Available: plateform.io, dishlab.com, menu.al
💎 Premium: menucraft.com ($8,500)
❌ Taken: getmenu.com, menumanager.io

Recommendation: "plateform.io" - clever wordplay, .io for SaaS
```

---

## Sources

- [Namecheap Full TLD List](https://www.namecheap.com/domains/full-tld-list/)
- [Namecheap New TLDs](https://www.namecheap.com/domains/explore-new-tlds/)
- [TLD-List Namecheap](https://tld-list.com/registrars/namecheap/tlds)

---

**Key:** Don't check all 600+ TLDs. Smart subset of 10-15 per project.
