# Product Marketing Context

*Last updated: March 14, 2026*

## Product Overview
**One-liner:** MCP server that lets Claude check domain availability across 600+ Namecheap TLDs instantly

**What it does:** Namecheap MCP connects Claude AI to Namecheap's domain API, enabling real-time domain availability checks, batch searching across hundreds of TLDs, and instant purchase links with affiliate tracking. Zero setup for end users via hosted backend.

**Product category:** Developer tools, AI agents, domain research automation

**Product type:** Open-source MCP server (Model Context Protocol) with hosted backend option

**Business model:** Free open-source + affiliate revenue (20-40% commission on domain purchases made through generated links)

## Target Audience
**Target companies:**
- Indie hackers and solopreneurs
- Startups in naming phase
- Domain investors and researchers
- Development agencies
- Marketing agencies doing brand work

**Decision-makers:**
- Developers using Claude Code/Cline
- Product managers brainstorming names
- Brand/marketing leads
- Domain portfolio managers

**Primary use case:** Eliminate the tedious back-and-forth of checking domain availability - do it conversationally with Claude while brainstorming

**Jobs to be done:**
- Brainstorm domain names and check availability without context switching
- Batch check multiple TLD variations instantly (.com, .io, .ai, etc.)
- Find available alternatives when first choice is taken
- Research premium domain pricing
- Discover niche TLDs (.xyz, .tech, .app, etc.)

**Use cases:**
- Startup naming sessions - "I'm building a restaurant menu SaaS, help me find a domain"
- Brand brainstorming - check 20 variations at once
- Domain research - bulk check portfolio opportunities
- Content creation - quickly verify domains mentioned in articles
- Client work - agencies checking availability for client projects

## Personas
| Persona | Cares about | Challenge | Value we promise |
|---------|-------------|-----------|------------------|
| Indie Developer | Speed, not context-switching | Constantly tab-switching between Claude and Namecheap | Check domains without leaving Claude conversation |
| Startup Founder | Finding THE name before competition | Good names go fast, manual checking is slow | Batch check 50 variations in seconds, not minutes |
| Domain Investor | Finding undervalued opportunities | Checking hundreds of domains manually is tedious | Automate bulk research with AI assistance |
| Agency PM | Client efficiency | Clients want instant answers during calls | Real-time availability checks during brainstorming sessions |

## Problems & Pain Points
**Core problem:** Checking domain availability disrupts creative flow - you're brainstorming names with Claude, then have to stop, open Namecheap/GoDaddy, manually type each domain, check, come back, repeat 20 times

**Why alternatives fall short:**
- Manual checking (Namecheap.com): Slow, breaks flow, can't batch check
- GoDaddy's AI: Limited TLDs, pushes expensive premium domains
- Generic domain checkers: Don't integrate with AI workflows, miss niche TLDs
- DNS-based checkers: No pricing info, can't generate purchase links

**What it costs them:**
- **Time**: 30+ minutes of tab-switching for what should be a 2-minute task
- **Opportunity**: Good domains get snatched while you're manually checking alternatives
- **Focus**: Breaking creative flow kills momentum in brainstorming sessions
- **Money**: Settling for worse domains because research is too tedious

**Emotional tension:** Frustration from repetitive busywork, anxiety about missing perfect domains, FOMO when names get taken mid-research

## Competitive Landscape
**Direct:**
- GoDaddy MCP servers - Limited TLD coverage (~200 vs our 600+), pushes expensive domains
- Porkbun community tools - Incomplete API, no MCP integration
- Generic domain availability MCPs - DNS-based only, no pricing/purchase links

**Secondary:**
- Manual Namecheap checking - Slow, no batch operations, no AI integration
- Browser extensions (Domainr, etc.) - Still require context switching, don't work conversationally

**Indirect:**
- Hiring naming consultants - Expensive ($5K+), slow turnaround
- Using whatever .com is available - Limits creativity, weaker branding

## Differentiation
**Key differentiators:**
- **600+ TLDs** - Most comprehensive coverage (vs 200 for competitors)
- **Zero setup** - Hosted backend means users just install and go (no API keys needed)
- **Batch checking** - Check 100 domains in one API call
- **AI-native** - Built specifically for Claude workflows, not retrofitted
- **Affiliate tracking** - Purchase links generate revenue (win-win)
- **Premium pricing** - See actual costs for premium domains upfront

**How we solve it differently:**
Instead of bolting domain checking onto existing tools, we built specifically for AI-assisted brainstorming - the MCP protocol means Claude can seamlessly check domains mid-conversation

**Why that's better:**
Natural language ("find me 10 .io alternatives") beats typing each domain manually. Batch API calls are 50x faster than sequential checks. Zero setup means developers actually use it.

**Why customers choose us:**
"It just works" - no API keys, no setup friction, comprehensive TLD coverage, works exactly how you'd expect in a Claude conversation

## Objections
| Objection | Response |
|-----------|----------|
| "Why not just use Namecheap.com?" | You will - our purchase links go straight to Namecheap checkout. We just eliminate the tedious checking phase so you can make decisions faster. |
| "What about privacy/security?" | We never see your Namecheap credentials. The hosted backend only checks availability - it can't buy domains or access your account. Purchase happens directly on Namecheap.com. |
| "Do I need a Namecheap account?" | No - anyone can check availability. You only need a Namecheap account when you're ready to buy (through the purchase links we provide). |

**Anti-persona:**
- Already owns their domain and isn't shopping
- Needs enterprise-level domain management (registrars, DNS config, etc.) - we only do availability checking
- Wants automated purchasing - we only check and provide links (purchases happen on Namecheap.com)

## Switching Dynamics
**Push:** Tired of tab-switching between Claude and Namecheap 20 times per brainstorming session. Frustrated by slow, repetitive checking.

**Pull:** "Just ask Claude" sounds magical. Batch checking 50 domains at once. Zero setup (no API keys to manage).

**Habit:** Used to manual checking - "I'll just open Namecheap really quick" is muscle memory. Skeptical that AI tools actually save time.

**Anxiety:** "Is this secure?" (we don't touch their Namecheap account). "Will it actually work?" (hosted backend eliminates config issues). "Is it accurate?" (direct Namecheap API, same data as website).

## Customer Language
**How they describe the problem:**
- "I waste so much time checking if domains are available"
- "I'm brainstorming with Claude and then have to break flow to check Namecheap"
- "Checking 20 TLD variations manually is mind-numbing"
- "By the time I finish checking alternatives, the good ones are taken"
- "I need to check domains without leaving my conversation"

**How they describe us:**
- "Domain checking without leaving Claude"
- "It's like having Namecheap built into Claude"
- "Finally - batch checking that actually works"
- "Zero-setup domain research"

**Words to use:**
- Instant, seamless, zero-setup, batch checking, conversational, AI-native, comprehensive (600+ TLDs), built-in

**Words to avoid:**
- Enterprise, complex, platform, ecosystem, revolutionary, game-changing (too salesy)
- Scraper, unofficial (implies unreliable)
- Free (it is, but emphasize value not price)

**Glossary:**
| Term | Meaning |
|------|---------|
| MCP | Model Context Protocol - lets AI assistants connect to external tools |
| TLD | Top-level domain (.com, .io, .ai, etc.) |
| Batch checking | Checking multiple domains in a single API call |
| Premium domain | Already-registered domain available for purchase at higher price |
| Hosted backend | Server that handles API calls so users don't need their own credentials |

## Brand Voice
**Tone:** Direct, helpful, developer-focused - not overly salesy or corporate

**Style:** Clear and concise. Show don't tell. Lead with value, not features. Technical but accessible.

**Personality:** Pragmatic, efficient, honest, slightly understated ("it just works" vs "revolutionary platform")

## Proof Points
**Metrics:**
- 600+ TLDs supported (vs ~200 for competitors)
- 100 domains per batch API call
- Zero setup time (vs 10+ minutes for API key config)
- 20-40% affiliate commission on purchases

**Customers:**
- Indie developers using Claude Code
- Startup founders in naming phase
- Domain researchers

**Testimonials:**
> "Finally - I can brainstorm names with Claude without breaking flow every 30 seconds" - [future user quote]

**Value themes:**
| Theme | Proof |
|-------|-------|
| Speed | Batch check 100 domains in one call vs 100 sequential checks |
| Coverage | 600+ TLDs (most comprehensive MCP server for domains) |
| Zero friction | No API keys, no config - just install and use |
| Trust | Direct Namecheap API integration (same data as their website) |

## Goals
**Business goal:** Become the default domain checking tool for Claude users, generating affiliate revenue at scale

**Conversion action:**
1. Primary: Install the MCP server (GitHub clone or npm install)
2. Secondary: Click through purchase links when buying domains (affiliate revenue)

**Current metrics:**
- Just launched (March 2026)
- Hosted backend live at https://transcripts-scheme-database-yale.trycloudflare.com
- Zero-setup deployment complete
- Affiliate program active (campaign 7069952)

---

## Marketing Priorities

### Immediate (Launch Week)
1. **GitHub README** - Nail the first impression (clear value prop, quick install, demo GIF)
2. **Product Hunt launch** - "Domain availability checking, now built into Claude"
3. **Reddit posts** - r/ClaudeAI, r/SideProject, r/buildinpublic
4. **Twitter thread** - Demo video + use cases
5. **OpenClaw Discord** - Share in MCP server channel

### Short-term (Month 1)
1. **Demo video** - Screen recording of brainstorming session with live domain checking
2. **Blog post** - "How I automated domain research with Claude Code"
3. **ClawHub submission** - Get listed in MCP marketplace
4. **SEO content** - "Best domain availability checker for Claude AI" etc.

### Ongoing
1. Monitor affiliate conversions
2. Collect user feedback / testimonials
3. Track GitHub stars / installs
4. Iterate messaging based on what resonates
