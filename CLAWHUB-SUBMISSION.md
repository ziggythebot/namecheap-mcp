# ClawHub Submission: Namecheap MCP

**Prepared:** 2026-03-10
**Status:** Ready for submission once production API tested

---

## Skill Details

**Name:** namecheap-mcp
**Tagline:** Check domain availability across 600+ TLDs via Namecheap API
**Category:** Developer Tools, Domain Management, MCP Servers
**License:** MIT
**Repository:** https://github.com/ziggythebot/namecheap-mcp

---

## Description (Short - for marketplace)

Check domain availability across 600+ TLDs with the Namecheap API. Perfect for brainstorming domain names with Claude - batch check dozens of domains at once, get real-time pricing, and receive direct purchase links with affiliate tracking.

**Key features:**
- 600+ TLD support (.com, .io, .ai, .app, etc.)
- Batch checking (check 50+ domains in one call)
- Premium domain pricing
- Affiliate revenue built-in
- Demo mode for testing

---

## Description (Long - for SKILL.md / documentation)

MCP server for checking domain availability across 600+ Namecheap TLDs.

Perfect for:
- Brainstorming domain names with Claude
- Batch checking multiple domains at once
- Finding available alternatives quickly
- Premium domain discovery
- Domain research workflows

**Conversational domain hunting:**
```
User: "I'm building a retro web generator"
Claude: *checks 20 domain variations*

✅ Available:
- retrowebgen.com
- y2kweb.com
- 90sweb.io

💎 Premium:
- retroweb.com ($8,500)

I recommend y2kweb.com - catchy and era-specific.
```

---

## Competitive Advantage

**Why namecheap-mcp beats alternatives:**

| Feature | namecheap-mcp | GoDaddy MCP | mcp-domain-availability |
|---------|---------------|-------------|------------------------|
| **TLDs** | **600+** | ~200 | 50 |
| **Real API** | ✅ Namecheap | ✅ GoDaddy | ❌ DNS only |
| **Batch checking** | ✅ | ✅ | ✅ |
| **Premium pricing** | ✅ | ✅ | ❌ |
| **Affiliate revenue** | ✅ | ❌ | ❌ |
| **Demo mode** | ✅ | ❌ | ❌ |

**Unique selling points:**
1. **Best TLD coverage** - 600+ TLDs (3x more than GoDaddy, 12x more than DNS-based)
2. **Affiliate built-in** - Purchase links include affiliate tracking
3. **Professional docs** - 449-line comprehensive guide
4. **Demo mode** - Works without API key for testing

---

## Target Audience

**Primary:**
- Entrepreneurs launching products
- Domain investors
- SEO agencies
- Indie hackers
- Developers brainstorming project names

**Secondary:**
- Marketing teams
- Branding consultants
- Startup accelerators
- Web agencies

**Use cases:**
- Product naming sessions
- Domain research
- Finding alternatives when .com is taken
- Checking premium domain pricing
- Multi-region domain discovery

---

## Installation Requirements

**System requirements:**
- Node.js 14+
- npm or yarn

**External services:**
- Namecheap account (free)
- Namecheap API access (requires $50 spending threshold)

**Environment variables:**
```env
NAMECHEAP_API_USER=your_username
NAMECHEAP_API_KEY=your_api_key
NAMECHEAP_USERNAME=your_username
NAMECHEAP_CLIENT_IP=your_public_ip
```

---

## Tags

```yaml
tags:
  - domains
  - dns
  - namecheap
  - mcp
  - automation
  - api
  - domain-search
  - domain-availability
  - entrepreneurship
  - startup-tools
```

---

## Screenshots / Demo

**Demo video script:**

1. **Opening** (5 sec)
   - "Check domain availability with Claude + Namecheap MCP"

2. **Setup** (10 sec)
   - Show settings.json configuration
   - "One-time setup in Claude Code settings"

3. **Usage** (30 sec)
   - User: "I'm building a restaurant menu SaaS"
   - Claude suggests 20 domain names
   - MCP checks all 20 at once
   - Returns available domains with buy links

4. **Results** (10 sec)
   - Show formatted output with ✅ available, 💎 premium, ❌ taken
   - Click through to purchase link

5. **Closing** (5 sec)
   - "600+ TLDs, batch checking, affiliate revenue"
   - "github.com/ziggythebot/namecheap-mcp"

**Screenshot ideas:**
1. Claude conversation with domain brainstorming
2. Batch check results (formatted output)
3. MCP settings.json configuration
4. Namecheap API dashboard setup

---

## Marketing Copy

**Headline options:**
1. "Check 600+ TLDs in a single conversation"
2. "Domain hunting, conversational"
3. "Let Claude find your perfect domain"
4. "Batch domain checking for entrepreneurs"

**Social media posts:**

**Twitter/X:**
```
Just shipped namecheap-mcp 🌐

Check domain availability across 600+ TLDs directly in Claude:
• Batch checking (50+ at once)
• Real-time pricing
• Premium domain discovery
• Affiliate revenue built-in

Perfect for entrepreneurs brainstorming product names.

github.com/ziggythebot/namecheap-mcp
```

**LinkedIn:**
```
New MCP server for domain research 🚀

If you've ever spent hours manually checking domain availability while
brainstorming product names, this is for you.

namecheap-mcp lets Claude check 600+ TLDs in a single conversation:

1. Describe your product to Claude
2. Claude suggests 30 domain variations
3. MCP batch checks all 30 at once
4. Get available domains with direct purchase links

Why it's better than alternatives:
✅ 600+ TLDs (vs competitors' 50-200)
✅ Batch checking (save hours)
✅ Premium pricing info
✅ Affiliate tracking built-in

Open source + MIT license.
GitHub: github.com/ziggythebot/namecheap-mcp

#AI #Domains #Entrepreneurship #OpenClaw
```

**Reddit (r/ClaudeAI, r/SideProject):**
```
Title: "Built an MCP server for domain checking with 600+ TLDs"

I got tired of manually checking domain availability on Namecheap when
brainstorming product names, so I built an MCP server that lets Claude
do it conversationally.

How it works:
- Describe your product to Claude
- Claude suggests domain variations
- MCP checks them all via Namecheap API
- Returns available domains with purchase links

Features:
- 600+ TLD support (.com, .io, .ai, .app, etc.)
- Batch checking (check 50+ at once)
- Premium domain pricing
- Demo mode (no API key needed for testing)

Why Namecheap? Best API coverage - 600+ TLDs vs GoDaddy's ~200.

Repo: github.com/ziggythebot/namecheap-mcp

Happy to answer questions!
```

---

## Community Promotion Plan

**Week 1: Launch**
1. Submit to ClawHub marketplace
2. Post in OpenClaw Discord (109k members)
3. Tweet with demo video
4. Post on r/ClaudeAI and r/SideProject

**Week 2: Content**
1. Write blog post: "How I automate domain research with Claude"
2. Record YouTube tutorial
3. Post in IndieHackers community
4. Share in entrepreneur Facebook groups

**Week 3: Partnerships**
1. Reach out to domain investor communities
2. Contact SEO agency newsletters
3. Suggest to awesome-mcp-servers list maintainers
4. Message OpenClaw content creators

**Week 4: Iterate**
1. Respond to all GitHub issues/comments
2. Add requested features
3. Create case studies from user feedback
4. Submit to ProductHunt

---

## Metrics to Track

**Technical:**
- GitHub stars
- ClawHub downloads
- Issues opened/closed
- Contributors

**Business:**
- Affiliate clicks
- Affiliate conversions
- Revenue per month
- Active users

**Community:**
- Discord mentions
- Twitter engagement
- Reddit upvotes
- Blog post views

**Targets (6 months):**
- 15,000+ downloads
- 150+ GitHub stars
- 10+ contributors
- $1,800/year affiliate revenue

---

## Monetization Strategy

**Free tier (current):**
- Open source MCP server
- User brings their own Namecheap API key
- Affiliate code embedded in purchase links
- Revenue: $2-4 per domain sold

**Premium tier (future - if demand exists):**
- Hosted API ($19/mo)
- No Namecheap account needed
- 100 checks/day included
- Domain monitoring alerts
- Historical pricing data
- Priority support

**Break-even calculation:**
- Hosting: $15/mo
- Multiple Namecheap accounts: $99/year × 5 = $495/year
- Total: ~$675/year
- Need: 36 paid users at $19/mo

**Don't build premium until:**
- 10,000+ free tier downloads
- 50+ users explicitly requesting hosted version
- Affiliate revenue validates demand

---

## Support Plan

**Documentation:**
- Comprehensive SKILL.md (done)
- Video tutorials (Week 2)
- FAQ section (add as questions come)
- Troubleshooting guide (done)

**Community:**
- GitHub Issues for bug reports
- Discord for questions
- Twitter for announcements
- Weekly office hours (if demand grows)

**Response time goals:**
- GitHub Issues: 24 hours
- Discord questions: 12 hours
- Security issues: Immediate

---

## Roadmap

**v1.0 (Launch - Now):**
- ✅ Core MCP server
- ✅ Batch checking
- ✅ Affiliate tracking
- ✅ Demo mode
- ✅ Comprehensive docs

**v1.1 (Month 1):**
- [ ] Domain suggestions (AI-powered variations)
- [ ] TLD recommendations (suggest best TLDs for industry)
- [ ] Price history (track domain pricing over time)
- [ ] Save searches (check again later)

**v1.2 (Month 2):**
- [ ] Multi-registrar support (add GoDaddy, Porkbun)
- [ ] Bulk export (CSV/JSON)
- [ ] Domain monitoring (alerts when available)
- [ ] Similar domain finder

**v2.0 (Month 3+):**
- [ ] Hosted API tier
- [ ] Chrome extension
- [ ] Slack bot
- [ ] Discord bot

---

## FAQ for ClawHub Reviewers

**Q: Why Namecheap over GoDaddy?**
A: Best API coverage - 600+ TLDs vs GoDaddy's ~200. Better for international domains and new TLDs.

**Q: Does this require payment?**
A: Free to use. Requires Namecheap account with $50 spending threshold (production API). Sandbox mode works without spending.

**Q: How does affiliate revenue work?**
A: Purchase links include affiliate tracking. Namecheap pays 20-40% commission on first year. User pays same price, developer earns $2-4 per domain.

**Q: Is this just a wrapper around Namecheap?**
A: Yes, but adds value: batch checking, Claude integration, formatted output, demo mode, comprehensive docs. Saves hours vs manual checking.

**Q: Any rate limits?**
A: Namecheap limits: 20 req/min, 700 req/hour, 8000 req/day. Sufficient for typical use. Batch checking minimizes API calls.

**Q: How do you handle API key security?**
A: User manages their own API key in .env file (not committed to git). MCP runs locally, no data sent to external servers.

**Q: What makes this better than DNS-based checkers?**
A: Real registrar data (not just DNS), premium pricing, affiliate integration, 600+ TLDs, official API vs scraping.

---

## Pre-Launch Checklist

**Code:**
- [x] Core functionality working
- [x] Sandbox tested
- [ ] Production tested (pending $50 threshold)
- [x] Error handling
- [x] Demo mode
- [x] Affiliate tracking

**Documentation:**
- [x] README.md
- [x] SKILL.md (449 lines)
- [x] Installation guide
- [x] Troubleshooting
- [x] API setup instructions
- [x] Usage examples

**Repository:**
- [x] Clean commit history
- [x] LICENSE (MIT)
- [x] .gitignore (.env excluded)
- [ ] GitHub topics/tags
- [ ] Repository description
- [ ] About section

**Marketing:**
- [ ] Demo video (2 min)
- [ ] Screenshots (4-5)
- [ ] Tweet draft
- [ ] LinkedIn post
- [ ] Reddit post
- [ ] Discord announcement

**ClawHub:**
- [ ] Create ClawHub account
- [ ] Submit skill
- [ ] Add tags
- [ ] Upload screenshots
- [ ] Set metadata

---

## Launch Timeline

**Day 1: Buy domain**
- Purchase domain on dandare account
- Wait for $50 threshold (or add balance)
- Test production API

**Day 2-3: Final prep**
- Record demo video
- Take screenshots
- Test on fresh Claude installation
- Write all social posts

**Day 4: Launch**
- Morning: Submit to ClawHub
- Noon: Tweet with demo
- Afternoon: Post on Reddit
- Evening: Post in Discord

**Day 5-7: Engagement**
- Respond to all comments
- Fix any bugs reported
- Add FAQ items
- Thank early adopters

**Week 2+: Content marketing**
- Blog post
- YouTube tutorial
- Reach out to newsletters
- Partner outreach

---

**Status:** Ready to launch once production API tested ✅

**Next steps:**
1. Buy domain → unlock production API
2. Test with real domain checks
3. Record demo video
4. Submit to ClawHub
5. Launch marketing campaign
