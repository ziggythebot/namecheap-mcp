# Namecheap MCP — Project Status

**Last Updated:** 2026-03-13
**Status:** Affiliate integrated, ready for production API testing

---

## Current State

### What's Built
- ✅ Complete MCP server implementation
- ✅ Batch domain checking (up to 100 domains per call)
- ✅ 600+ TLD support
- ✅ Premium domain pricing
- ✅ Affiliate tracking in purchase URLs
- ✅ Demo mode (works without API key)
- ✅ Comprehensive documentation (449-line SKILL.md)
- ✅ Error handling and validation
- ✅ Sandbox tested and working

### What's Pending
- [ ] Enable API on existing Namecheap account (dandare)
- [ ] Get API key from Namecheap dashboard
- [ ] Production API testing
- [ ] Demo video recording
- [ ] ClawHub submission
- [ ] Marketing campaign launch

---

## Namecheap Communication History

### March 13, 2026 (Evening) — ✅ Affiliate Integrated

**Affiliate contract approved in Impact:**
- Campaign ID: 7069952
- Tracking parameters integrated into purchase URLs
- Format: `utm_campaign=7069952&afsrc=1&utm_source=IR&utm_medium=Affiliate&affnetwork=ir`
- Committed to repo: commit 8b250e9

**Decision:** Use existing Namecheap account (dandare) for API instead of buying new domain.

### March 13, 2026 (Afternoon) — ✅ API + Affiliate CONFIRMED

**Their question:**
> Could you please confirm which model you are planning to use for your tool?

They misunderstood the project as a reseller tool using API to set custom prices.

**Our reply (sent March 13, 2026):**

Clarified the actual use case:
1. **What:** Conversational domain search for Claude AI
2. **How:** Users ask Claude for domain ideas → MCP checks availability via API → Returns results with Namecheap.com purchase links
3. **Why API:** Read-only availability checks (no reselling, no custom pricing)
4. **Why Affiliate:** Purchase links include affiliate tracking for commission
5. **Competitive angle:** GoDaddy/Porkbun have AI integrations, Namecheap doesn't — this drives traffic to Namecheap

**Key positioning:**
> "AI models are becoming the new search engines for domain research. Your competitors already have these integrations. My tool directs AI users to Namecheap instead of GoDaddy."

**Their response (March 13, 2026):**
```
We've sent a proposal to join our affiliate program. It should appear in your Impact account.
Once you approve it, you will get access to the affiliate links.

Answering your question — it is possible to use API for availability checks and include affiliate tracking.

This will help you checking availability of domains:
https://www.namecheap.com/support/api/methods/domains/check/

And this adding links for certain domain registrations:
https://www.namecheap.com/support/knowledgebase/article.aspx/10127/55/how-to-link-to-a-domain-search-result-page-on-namecheapcom/
```

**Status:** ✅ **CONFIRMED — API + Affiliate combo is allowed**

---

## Technical Details

### How It Works

**User Flow:**
1. User to Claude: "I'm building a restaurant menu app, help me find a domain"
2. Claude suggests 20 domain variations (e.g., menusaas.com, restaurantmenu.io, etc.)
3. MCP server calls Namecheap API with batch check (all 20 at once)
4. Returns: Available ✅ / Taken ❌ / Premium 💎 with pricing
5. Available domains include purchase links: `https://www.namecheap.com/domains/registration/results/?domain=menusaas.com&affcode=AFFILIATE_CODE`
6. User clicks through to Namecheap.com and completes purchase
7. Affiliate commission earned on sale

**API Usage:**
- Endpoint: `domains.check`
- Method: XML-RPC over HTTPS
- Rate limits: 20 req/min, 700 req/hour, 8000 req/day
- Batch: Up to 100 domains per call

**Not Used:**
- Domain registration API (users buy on Namecheap.com)
- Domain management API
- DNS API
- Transfer API

---

## API Access Requirements

### Sandbox (Currently Using)
- ✅ Free for testing
- ✅ No spending threshold
- ✅ All endpoints work
- ❌ Returns simulated data (not real availability)

### Production (Need to Unlock)
- ⏳ Requires $50 spending in Namecheap account
- ⏳ Real-time availability data
- ⏳ Accurate premium pricing
- ⏳ Live TLD checks

**Next Step:** Buy a domain on dandare account → unlocks production API

---

## Affiliate Program

### Current Understanding
- Standard Namecheap affiliate program
- Commission: 20-40% of first year registration
- Average domain: $10-15 → $2-4 commission per sale
- Purchase links format: `https://www.namecheap.com/domains/registration/results/?domain=DOMAIN&affcode=CODE`

### ✅ Confirmed Working Model
Can we combine:
1. ✅ API access (for availability checks)
2. ✅ Affiliate tracking (in purchase URLs)

**Namecheap's initial concern:** They thought we were building a reseller tool
**Our clarification:** Read-only API + standard affiliate links (no reselling)
**Their confirmation:** "It is possible to use API for availability checks and include affiliate tracking"

---

## Competitive Landscape

### Existing AI Domain Tools

**GoDaddy:**
- Has AI integrations
- MCP servers available
- ~200 TLD coverage

**Porkbun:**
- Has community-built tools
- Good API access
- ~400 TLD coverage

**DNS-based checkers:**
- `mcp-domain-availability` (generic)
- No registrar integration
- ~50 TLD coverage
- No pricing data

**Namecheap:**
- ❌ No official AI tools
- ❌ No MCP servers
- ✅ Best API (600+ TLDs)
- ✅ Best coverage

**Opportunity:** First-mover advantage for Namecheap AI integration

---

## Project Goals

### Primary
1. Get production API working
2. Submit to ClawHub marketplace
3. Drive affiliate revenue (target: $150-300/month)
4. Become default domain tool for Claude users

### Secondary
1. Get Namecheap to officially endorse/feature
2. Grow to 10,000+ downloads
3. 150+ GitHub stars
4. Inspire other developers to build on Namecheap API

---

## Revenue Model

### Current (Open Source + Affiliate)
- Free MCP server (MIT license)
- Users bring own Namecheap API key
- Purchase links include affiliate code
- Revenue: $2-4 per domain sold
- Target: 50-100 sales/month = $150-300/month

### Future (If Demand Exists)
- Hosted API tier ($19/mo)
- No API key needed
- 100 checks/day included
- Domain monitoring
- Historical pricing
- Don't build until 10,000+ free tier users

---

## Documentation

### Completed
- ✅ README.md (basic setup)
- ✅ SKILL.md (449 lines comprehensive)
- ✅ CLAWHUB-SUBMISSION.md (launch plan)
- ✅ DOMAIN-NAMING-GUIDE.md (best practices)
- ✅ TLD-CATEGORIES.md (600+ TLDs organized)
- ✅ .env.example (configuration template)

### Pending
- [ ] Demo video (2-3 min)
- [ ] Screenshots (4-5)
- [ ] FAQ section (add as questions come)
- [ ] Video tutorial (YouTube)

---

## Marketing Plan

### Week 1: Launch
1. Buy domain → unlock production API
2. Test with real availability checks
3. Record demo video
4. Submit to ClawHub
5. Tweet with demo
6. Post on r/ClaudeAI, r/SideProject
7. Post in OpenClaw Discord

### Week 2: Content
1. Blog post: "How I automate domain research with Claude"
2. YouTube tutorial
3. IndieHackers post
4. Reach out to domain investor communities

### Week 3: Partnerships
1. Contact SEO agency newsletters
2. Suggest to awesome-mcp-servers list
3. Message OpenClaw content creators
4. Entrepreneur communities

### Week 4: Iterate
1. Respond to GitHub issues
2. Add requested features
3. Create case studies
4. ProductHunt launch

---

## Open Questions

### For Namecheap
1. ✅ Can we use API + affiliate together? **YES — confirmed March 13**
2. ✅ Affiliate program access? **YES — proposal sent to Impact account**
3. ⏳ Is there a special program for developer tools?
4. ⏳ Would Namecheap officially endorse/feature this?
5. ✅ Any restrictions on purchase URL format? **NO — standard deep-link format works**

### Technical
1. ⏳ Do we need separate affiliate code vs API credentials?
2. ⏳ Can we track conversions from API-generated links?
3. ⏳ Are there better affiliate deep-link formats?

---

## Next Actions

### Immediate (This Week)
1. **User:** Check Impact account for affiliate proposal → approve it
2. **User:** Get affiliate code from Impact dashboard
3. **User:** Buy domain on dandare account ($10-15) → unlocks production API
4. **Agent:** Update .env with affiliate code
5. **Agent:** Test production API with real availability checks
6. **Agent:** Verify affiliate tracking works in purchase URLs
7. **Agent:** Update docs based on production testing

### Short-term (Next 2 Weeks)
1. Record demo video
2. Take screenshots
3. Submit to ClawHub
4. Launch marketing campaign
5. Monitor for Namecheap response

### Medium-term (Next Month)
1. Gather user feedback
2. Add requested features
3. Build case studies
4. ProductHunt launch
5. Reach 1,000 downloads

---

## Success Metrics

### Technical
- GitHub stars: Target 150+ (6 months)
- ClawHub downloads: Target 10,000+ (6 months)
- Active users: Target 500+ monthly
- Issues/PRs: Healthy engagement

### Business
- Affiliate revenue: $150-300/month (3 months)
- Conversion rate: 2-5% (searches → purchases)
- Average commission: $2-4 per sale
- 6-month target: $1,800+ total revenue

### Community
- Discord mentions
- Twitter engagement
- Reddit upvotes
- Blog post views
- YouTube views

---

## Risk Mitigation

### API Access Issues
**Risk:** Namecheap restricts API + affiliate combo
**Mitigation:** Clarification email sent, open dialogue, willing to adjust

### Rate Limits
**Risk:** Heavy usage hits rate limits
**Mitigation:** 700/hour is sufficient, batch checking minimizes calls

### Competition
**Risk:** GoDaddy/Porkbun tools gain traction
**Mitigation:** First to market with 600+ TLD coverage, best docs

### Low Adoption
**Risk:** Not enough Claude users need this
**Mitigation:** Free tier, demo mode, comprehensive docs, active marketing

---

## Files

```
namecheap-mcp/
├── index.js                    # Main MCP server
├── namecheap-client.js         # API client
├── package.json                # Dependencies
├── .env.example                # Config template
├── README.md                   # Basic setup
├── SKILL.md                    # Comprehensive guide (449 lines)
├── CLAWHUB-SUBMISSION.md       # Launch plan
├── DOMAIN-NAMING-GUIDE.md      # Domain best practices
├── TLD-CATEGORIES.md           # 600+ TLDs organized
├── PROJECT-STATUS.md           # This file
└── backend-api/                # Future: hosted API tier
```

---

## Repository

**GitHub:** https://github.com/ziggythebot/namecheap-mcp
**License:** MIT
**Status:** Private (will go public after production testing)

---

## Contacts

**Namecheap Support:** Replied March 13, 2026 (awaiting our response)
**Affiliate Program:** Standard program (need to verify if developer tools qualify)

---

**Next Update:** After domain purchase + production API testing
