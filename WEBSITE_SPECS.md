# Let Her Live - Website Specifications

## 🌐 Project Identity

**Name**: Let Her Live  
**Purpose**: Activist digital platform for trans survival in Turkey  
**Target**: Cemre - 19-year-old trans woman needing urgent support  
**Languages**: Turkish (TR), English (EN), German (DE)

## 👥 Target Audiences

| Language | Audience | Insight |
|----------|----------|---------|
| TR | Queer people, allies, activists in Turkey | Knows systemic violence, looking to act in solidarity |
| EN | International queer networks, trans allies, digital donors | Needs immediate clarity and emotional connection |
| DE | Queer community, activists, progressive funders | Reacts to direct injustice, values transparency and impact |

## 🎯 Core Objectives

1. **Tell Cemre's Story**: Personal, raw, dignified narrative
2. **Raise Funds**: €10,000 goal for housing, medical care, essentials
3. **Mobilize Support**: Create shareable content for visibility
4. **Ensure Safety**: Protect Cemre while being transparent

## 📄 Page Structure

### Homepage (`/`)
- Hero section with video loop
- One-line overlay: "Let Her Live"
- Cemre's introduction (first-person)
- Live donation goal meter
- Immediate donate CTA
- Language switcher (TR | EN | DE)

### Story Page (`/story`)
- Full timeline of events
- Embedded video content
- Quote blocks from Cemre
- Image gallery (high-contrast, intimate)
- Context about trans life in Turkey

### Support Page (`/support`)
- Transparent cost breakdown:
  - Housing: €300/month
  - Medical (HRT, therapy): €150/month
  - Food & essentials: €200/month
- Multiple donation methods:
  - GoFundMe embed
  - PayPal.Me link
  - IBAN details
- Impact calculator: "€15 = one safe night"

### Updates Page (`/updates`)
- Blog-style entries
- Progress milestones
- Receipt transparency
- New images/videos
- Thank you messages

### Media Kit (`/media-kit`)
- Downloadable graphics
- Pre-written social captions
- Hashtags: #LetHerLive
- Press materials
- Logo variations

### FAQ (`/faq`)
- "Is this real?" → Direct confirmation
- "Who manages funds?" → Transparency
- "Is she safe now?" → Current status
- Available in all three languages

## 🎨 Visual Design System

### Color Palette
```css
--black: #000000 (background)
--citrus-green: #A3FF00 (CTAs)
--neon-pink: #FF006E (accents)
--grape: #6A0DAD (text overlays)
--white: #FFFFFF (body text)
```

### Typography
- **Headlines**: Druk or Neue Montreal
- **Body**: Inter
- **Sizes**: Mobile-first scaling

### Visual Effects
- Soft glitch animations on hover
- Low-res grain overlays
- Pixel motifs as decorative elements
- Progress bar pulse animations
- Cursor shimmer effects
- Scroll-triggered glow reveals

### Imagery Guidelines
- Dark, intimate portraits
- High contrast
- Emphasis on eye contact
- Nightscape aesthetics
- Authentic, not staged
- Mobile-optimized compression

## 🛠 Technical Implementation

### Frontend Architecture
```
/app
  /[locale]
    /page.tsx (homepage)
    /story/page.tsx
    /support/page.tsx
    /updates/page.tsx
    /media-kit/page.tsx
    /faq/page.tsx
  /api
    /donate
    /analytics
/components
  /Hero
  /DonationMeter
  /LanguageSwitcher
  /VideoPlayer
/lib
  /i18n
  /donations
/public
  /images
  /videos
```

### Key Features
- Server-side rendering for SEO
- Progressive enhancement
- Offline support (PWA)
- Lazy loading for images/video
- Optimistic UI for donations
- Real-time goal updates

### Accessibility Requirements
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support
- Alt text for all images
- Captions for videos
- High contrast mode
- Font size controls
- Reduced motion option

## 📝 Content Management

### Translation Structure
```json
{
  "homepage": {
    "hero": {
      "title": {
        "tr": "Cemre yaşıyor, ama hayatta kalması sizin desteğinize bağlı.",
        "en": "Cemre is alive, but survival depends on support.",
        "de": "Cemre lebt – aber ihr Überleben hängt von Hilfe ab."
      }
    }
  }
}
```

### Content Guidelines
- **Voice**: Personal, first-person ("Hi, I'm Cemre")
- **Tone**: Honest, urgent, quietly defiant
- **Length**: Concise, mobile-friendly paragraphs
- **Updates**: Weekly minimum during active campaign

## 📊 Success Metrics

### Primary KPIs
- Donation conversion rate
- Average donation amount
- Social share count
- Time on site
- Return visitor rate

### Analytics Setup
- Plausible for privacy-first analytics
- Custom events for:
  - Donation clicks
  - Video plays
  - Social shares
  - Language switches
  - Page scrolls

## 🔒 Security & Privacy

### Data Protection
- No personal data storage
- GDPR-compliant analytics
- Secure payment processing
- SSL/HTTPS required
- No tracking cookies

### Content Security
- Careful about location details
- No identifying background info
- Consent for all media use
- Regular security audits

## 🚀 Launch Checklist

### Pre-Launch
- [ ] Content in all three languages
- [ ] Payment integrations tested
- [ ] Mobile responsiveness verified
- [ ] Accessibility audit completed
- [ ] Security review passed
- [ ] Legal compliance checked

### Launch Day
- [ ] Social media announcements
- [ ] Press kit distribution
- [ ] Community outreach
- [ ] Monitoring setup
- [ ] Support team briefed

### Post-Launch
- [ ] Daily metric reviews
- [ ] Weekly content updates
- [ ] Community engagement
- [ ] Technical optimization
- [ ] Donation transparency reports

## 📱 Mobile-First Specifications

### Breakpoints
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

### Touch Targets
- Minimum 44x44px
- 8px spacing between elements
- Thumb-friendly navigation

### Performance Targets
- First Contentful Paint: <1.8s
- Time to Interactive: <3.5s
- Lighthouse score: 90+

## 🌍 Localization Details

### Turkish (Primary)
- Right-to-left considerations
- Cultural sensitivity
- Local payment methods
- Regional social platforms

### English (Global)
- Clear, simple language
- Universal payment options
- International date formats
- Metric system

### German (Fundraising)
- Formal/informal options
- SEPA payment integration
- Tax receipt language
- Privacy emphasis

## Logo Information
**File**: `letherlive-logo.png` (renamed from ChatGPT_Image_Jul_28__2025__07_19_27_PM-removebg-preview.png)
**Usage**: Main brand identity across all pages
**Variations**: Create light/dark versions for different backgrounds