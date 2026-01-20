# Personal Website - Action Items

## ⚠️ IMPORTANT: Email Address Standardization

**Correct email**: `an.omar.ees@gmail.com`

**Action Required**: Your codebase currently has an inconsistency:
- `Footer.jsx` line 25: `an.omar.ees@gmail.com` ✅ CORRECT
- `Now.jsx` line 15: `omar.anees@gmail.com` ❌ WRONG - needs to be updated

**Files to update**:
- `/src/components/Now.jsx` line 15 - change to `an.omar.ees@gmail.com`
- `/src/components/Hero.jsx` (when adding CTA in Phase 3, step 7) - use `an.omar.ees@gmail.com`

---

## Testing & Deployment Commands

**Local development**:
```bash
npm run dev
# Opens at http://localhost:5173
```

**Build for production**:
```bash
npm run build
```

**Deploy to GitHub Pages**:
```bash
npm run deploy
# Builds and pushes to gh-pages branch
# Live at https://omaranees.com
```

**After completing each phase**: Test locally with `npm run dev` before deploying

---

## Phase 1: Content Updates (New Projects)
*Priority: Complete these first to showcase current work*

### Add Side Projects Section

#### 1. Create SideProjects.jsx component
**File**: `/src/components/SideProjects.jsx`

**Implementation**: Copy the structure from `SelectedWork.jsx` (lines 1-59) with these changes:

```jsx
import React from 'react';
import StandardText from './text/StandardText.jsx';

const sideProjects = [
  {
    emoji: '📱',
    title: ' YM App (In Development)',
    role: 'Non-Profit Leadership Platform',
    desc: 'Building a centralized platform for 1000+ leaders in a non-profit organization. Features include member onboarding, searchable profiles, chapter directory, and resource hub to streamline organization-wide communication and access.'
  },
  {
    emoji: '🧋',
    title: ' Boba Wali Landing Page (In Development)',
    role: 'Small Business Website',
    desc: 'Designed and built a conversion-optimized landing page for a South Asian fusion boba catering business. Built with Next.js, TypeScript, and Framer Motion. Features event inquiry form, client logo carousel, and mobile-first responsive design.',
    link: null // Add link when live: 'https://bobawali.com'
  }
];

export default function SideProjects() {
  return (
    <section className="py-24 px-6">
      <StandardText tag="h3" className="text-3xl font-serif text-center mb-12">
        Side Projects
      </StandardText>
      <div className="space-y-12">
        {sideProjects.map((p, i) => (
          <div key={i} className="max-w-2xl mx-auto space-y-1">
            <StandardText tag="h4" className="text-2xl">
              {p.link ? (
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  {p.emoji} {p.title}
                </a>
              ) : (
                <>{p.emoji} {p.title}</>
              )}
            </StandardText>
            <StandardText className="text-gray-500 italic">
              {p.role}
            </StandardText>
            <StandardText className="text-gray-700">
              {p.desc}
            </StandardText>
          </div>
        ))}
      </div>
    </section>
  );
}
```

**Note**: The link will use the `accent` color once it's defined in Phase 2.

#### 2. Add SideProjects to App.jsx
**File**: `/src/App.jsx`

**Change**: Add import and component placement

1. Add to imports (around line 3-5):
```jsx
import SideProjects from './components/SideProjects';
```

2. Add component between SelectedWork and Footer (after line ~13):
```jsx
<SelectedWork />
<SideProjects />
{/* <Now /> */}
<Footer />
```

**Context**: Current App.jsx structure has Hero, SelectedWork, commented-out Now, and Footer. Insert SideProjects before the Now section.

---

## Phase 2: High-Impact Polish (Do These Next)
*Priority: ~1.5 hours total, transforms site from "unfinished" to "polished"*

### 1. Rewrite Positioning Line (5 min)
**File**: `/src/components/Hero.jsx`

**Change**: Line 10-12

**From**:
```jsx
<StandardText tag="h2" className="mt-2 text-xl text-gray-600">
  Product Manager
</StandardText>
```

**To**:
```jsx
<StandardText tag="h2" className="mt-2 text-xl text-gray-600">
  Product Manager • Energy, Retail, Healthcare, Finance
</StandardText>
```

**Why**: Immediate differentiation for recruiters - shows breadth at a glance

---

### 2. Add Accent Color (15 min)

**Color choice context**: I've selected `#0099ff` (bright blue) because:
- Farza's site uses a similar blue (#09f)
- Blue is professional, trustworthy, and commonly used in tech
- High contrast against grayscale for visibility

**Alternative colors** if you prefer:
- **Warm blue**: `#0066cc` (more conservative)
- **Teal**: `#00bfa5` (modern, friendly)
- **Purple**: `#6366f1` (creative, differentiated)

Use the same color for both `accent` and `accent-dark` if you prefer, or make `accent-dark` slightly darker for hover states.

#### Step 1: Define color in Tailwind config
**File**: `/tailwind.config.js`

**Change**: Line 7-9 (the `extend: {}` section)

**From**:
```js
theme: {
  extend: {},
},
```

**To**:
```js
theme: {
  extend: {
    colors: {
      accent: '#0099ff',
      'accent-dark': '#0077cc',
    }
  },
},
```

#### Step 2: Apply accent color to Footer social buttons
**File**: `/src/components/Footer.jsx`

**Change**: Update all 4 social button anchor tags (lines 24-31, 36-45, 50-59, 64-73)

**Pattern to apply to each button**:

**From**:
```jsx
className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full"
```

**To**:
```jsx
className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-accent rounded-full transition-colors"
```

**Changes made**:
- `hover:bg-gray-300` → `hover:bg-accent` (uses your new accent color)
- Added `transition-colors` for smooth animation

**Apply to these 4 locations**:
1. Line 26 - Email button
2. Line 40 - LinkedIn button
3. Line 54 - X button
4. Line 68 - GitHub button

**Note**: The SVG images inside will remain visible on the blue background because they're dark icons

**Why**: Grayscale-only feels unfinished, accent color adds visual identity and draws attention to CTAs

---

### 3. Add Entrance Animation - CSS Only (20 min)

#### Step 1: Add animation to index.css
**File**: `/src/index.css`

**Change**: Add after the `@tailwind utilities;` line (line 3)

**Add**:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}
```

#### Step 2: Apply animation to Hero
**File**: `/src/components/Hero.jsx`

**Change**: Line 6 (the opening `<section>` tag)

**From**:
```jsx
<section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pb-24">
```

**To**:
```jsx
<section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pb-24 animate-fade-in-up">
```

**Test**: Run `npm run dev` and refresh the page - hero should fade in from below

**Why**: Adds polish, signals craft, zero maintenance after setup

---

### 4. Fix "All Umbrage" Problem (10 min)
**File**: `/src/components/SelectedWork.jsx`

**Change**: Lines 8, 15, 22, 30 (the `role:` values in the projects array)

**From**:
```js
{ role: 'PM @ Umbrage', ... }  // Line 8
{ role: 'PM @ Umbrage', ... }  // Line 15
{ role: 'PM @ Umbrage', ... }  // Line 22
{ role: 'PM @ Umbrage', ... }  // Line 30
```

**To**:
```js
{ role: 'Private Equity Tech', ... }  // AI Due Diligence project
{ role: 'Oil & Gas IoT', ... }         // Field App project
{ role: 'Retail & Loyalty', ... }      // Convenience App project
{ role: 'Healthcare ERP', ... }        // Healthcare project
```

**Why**: Shows breadth, prevents "one job" perception, aligns with your differentiator of working across industries

---

### 5. Add Metrics to Project Descriptions (30 min)
**File**: `/src/components/SelectedWork.jsx`

**Change**: Lines 9-10, 16-17, 23-24, 31-32 (the `desc:` values)

**Important**: You need to fill in real metrics. Below are templates - replace with your actual data.

**Project 1 - AI Due Diligence (lines 9-10)**
**From**:
```js
desc: 'Designed AI-driven due diligence platform for private equity, leveraging Claude Code for rapid POC development to validate concepts and dramatically reduce due diligence analysis time.'
  //to do: better description line
```

**To** (example - use your real numbers):
```js
desc: 'Designed AI-driven due diligence platform that reduced analysis time from 40 hours to 4 hours per deal. Used Claude Code for rapid POC development and concept validation.'
```

**Project 2 - Oil & Gas (lines 16-17)**
**Template**: Add user count, adoption rate, or efficiency gain
```js
desc: 'Built iOS and web app used by [X] field operators to make data-driven decisions using live telemetry from IoT devices on upstream oil and gas wells. [Outcome metric like "Reduced response time by X%" or "Enabled real-time monitoring for Y wells"].'
```

**Project 3 - Convenience Loyalty (lines 23-24)**
**Template**: Add engagement, revenue, or adoption metric
```js
desc: 'Designed and built cashback and loyalty journeys across app and in-store for [X customers/stores]. Collaborated with engineering, strategy, and design to [specific outcome like "increase repeat visits by X%" or "drive $Y in incremental revenue"].'
```

**Project 4 - Healthcare ERP (lines 31-32)**
**Template**: Add number of users impacted or specific improvement
```js
desc: 'Interviewed [X] nurses and stakeholders to surface UX pain points in legacy systems used by [Y healthcare workers]. Delivered actionable recommendations that improved findability by [Z% or specific outcome].'
```

**Action Required**: Fill in the bracketed placeholders with your actual metrics. If you don't have exact numbers, use approximations like "~50 field operators" or "reduced time by ~30%"

**Why**: Specificity = credibility for recruiters. Numbers prove execution.

---

## Phase 3: Personality & CTAs (Do After Phase 2)
*Priority: ~45 minutes total, makes site memorable and drives action*

### 6. Add Custom Typography (20 min)

#### Option A: IBM Plex Mono (Technical Credibility)
Use this if you want to signal technical expertise, like Ahmed and Suphian's sites.

#### Option B: Inter (Professional Polish)
Use this if you want a clean, modern professional look.

**Recommendation**: Start with **Inter** for broader appeal, easier to read. You can always switch to IBM Plex Mono later.

#### Step 1: Add font to index.html
**File**: `/index.html`

**Change**: Add between line 6-7 (after viewport meta, before title)

**Add**:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

**For IBM Plex Mono instead, use**:
```html
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

#### Step 2: Configure Tailwind
**File**: `/tailwind.config.js`

**Change**: Update the `extend: {}` section (should already have colors from Phase 2)

**Add** (for Inter):
```js
theme: {
  extend: {
    colors: {
      accent: '#0099ff',
      'accent-dark': '#0077cc',
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
    }
  },
},
```

**OR** (for IBM Plex Mono):
```js
fontFamily: {
  mono: ['IBM Plex Mono', 'monospace'],
}
```

#### Step 3: Apply font to components
**For Inter**: No changes needed - Tailwind uses `sans` by default
**For IBM Plex Mono**: Add `font-mono` class to body text elements in Hero, SelectedWork, SideProjects, Now

**Why**: Custom typography signals intentionality, both reference sites use custom fonts

---

### 7. Add Contact CTA in Hero (10 min)
**File**: `/src/components/Hero.jsx`

**Change**: Add after line 18 (after the second bio paragraph)

**Add**:
```jsx
<a
  href="mailto:an.omar.ees@gmail.com"
  className="inline-block mt-8 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors"
>
  Get in touch
</a>
```

**Full context** - Hero section should now look like:
```jsx
export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pb-24 animate-fade-in-up">
      <StandardText tag="h1" className="text-5xl font-serif">
        Omar Anees
      </StandardText>
      <StandardText tag="h2" className="mt-2 text-xl text-gray-600">
        Product Manager • Energy, Retail, Healthcare, Finance
      </StandardText>
      <StandardText className="mt-6 max-w-5xl text-lg text-gray-700 leading-relaxed">
        I've worked across energy, retail, healthcare, and finance—solving complex business problems for field operators, frontline staff, and everyday customers.
      </StandardText>
      <StandardText className="mt-6 text-gray-600 max-w-2xl text-md">
        I just like building cool things that solve real problems and make people's lives better.
      </StandardText>
      <a
        href="mailto:an.omar.ees@gmail.com"
        className="inline-block mt-8 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors"
      >
        Get in touch
      </a>
    </section>
  );
}
```

**Why**: Removes friction for "contact" goal, gives clear CTA above the fold

---

### 8. Uncomment Now Section (2 min)

#### Step 1: Uncomment in App.jsx
**File**: `/src/App.jsx`

**Change**: Line ~13 (between SideProjects and Footer)

**From**:
```jsx
<SideProjects />
{/* <Now /> */}
<Footer />
```

**To**:
```jsx
<SideProjects />
<Now />
<Footer />
```

#### Step 2: Update Now.jsx content
**File**: `/src/components/Now.jsx`

**Change lines 10-18**: Update content and make email link consistent with accent color

**Current state**:
```jsx
<StandardText>
  I'm deep in product delivery for enterprise clients, balancing user needs, delivery constraints, and long‑term scalability.
</StandardText>
<StandardText className="mt-4">
  Catch me building, learning, or tweaking this site at{' '}
  <a href="mailto:omar.anees@gmail.com" className="underline">
    omar.anees@gmail.com
  </a>.
</StandardText>
```

**Updated to**:
```jsx
<StandardText className="text-gray-600">
  I'm building an internal tool for 1000+ non-profit leaders and a landing page for a local boba catering business.
</StandardText>
<StandardText className="mt-4 text-gray-600">
  Catch me building, learning, or tweaking this site at{' '}
  <a href="mailto:an.omar.ees@gmail.com" className="text-accent hover:underline">
    an.omar.ees@gmail.com
  </a>
  .
</StandardText>
```

**Remember**: Replace `an.omar.ees@gmail.com` with whichever email you decided on at the top of this document

**Why**: Humanizes you, shows current activity, connects to your side projects, uses consistent accent color

---

### 9. Add Hover States to Project Cards (10 min)

#### Step 1: Update SelectedWork.jsx
**File**: `/src/components/SelectedWork.jsx`

**Change**: Line 44 (the project card div)

**From**:
```jsx
<div key={i} className="max-w-2xl mx-auto space-y-1">
```

**To**:
```jsx
<div key={i} className="max-w-2xl mx-auto space-y-1 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg cursor-pointer p-4 rounded-lg">
```

**Note**: Added `p-4 rounded-lg` to give the shadow something to work with

#### Step 2: Update SideProjects.jsx
**File**: `/src/components/SideProjects.jsx`

**Change**: Same pattern - line 41 (the project card div)

**From**:
```jsx
<div key={i} className="max-w-2xl mx-auto space-y-1">
```

**To**:
```jsx
<div key={i} className="max-w-2xl mx-auto space-y-1 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg cursor-pointer p-4 rounded-lg">
```

**Test**: Run `npm run dev`, hover over project cards - they should:
- Lift up by ~4px (translateY(-1) = -0.25rem)
- Show a subtle shadow underneath
- Transition smoothly over 300ms
- Cursor changes to pointer

**Expected result**: Cards should feel like they're floating up when you hover, similar to modern UI patterns on sites like Stripe, Linear, etc.

**Why**: Interactive elements signal "product not document", adds polish

---

## Visual Design Expectations

After completing Phases 1-3, your site should have:

**Visual Hierarchy**:
- Name (Omar Anees) → largest, serif font
- Positioning line → visible accent (Energy, Retail, etc.)
- Blue accent color → draws eye to CTAs and hover states
- Clear sectioning → Selected Work, Side Projects, Now, Footer

**Motion**:
- Hero fades in smoothly on page load (not jarring)
- Social buttons change to blue on hover (smooth transition)
- Project cards lift up on hover (playful but professional)
- All transitions feel smooth, not jumpy

**Polish signals**:
- Custom font (if you add it in Phase 3)
- Consistent accent color throughout
- Subtle animations that enhance, not distract
- Clear CTAs ("Get in touch" button stands out)

**Reference feeling**: Your site should feel closer to Farza's polished aesthetic - minimal but intentional, not empty.

---

## Phase 4: Analytics & Advanced Features (Later)
*Priority: High value but can wait until Phases 1-3 complete*

### Analytics (PostHog)
- [ ] Create PostHog account
- [ ] Add PostHog script to project
- [ ] Load PostHog key via `.env` for environment config
- [ ] Test event tracking on key interactions (CTA clicks, section views)
- **Why**: Understand visitor behavior, optimize for conversions

### Dark Mode / Theme Toggle
- [ ] Research Tailwind dark mode implementation with local storage
- [ ] Add theme toggle component
- [ ] Add dark color variants to all components
- [ ] Test across all sections
- **Note**: Requires ongoing maintenance/testing - defer until after Phases 1-3

### Copy Review
- [ ] Review all text on site for tone/clarity
- [ ] Finalize project descriptions
- [ ] Update Now section with compelling current focus
- **Note**: Do this AFTER adding Side Projects section

---

## Phase 5: Optional Enhancements (Nice to Have)
*Priority: Low - only if you have time and interest*

### Animations (Beyond Entrance)
- [ ] Fade-in sections on scroll (intersection observer)
- [ ] Hover underlines on links
- [ ] Title cycling animation ("Product Manager" → "Builder" → "New Yorker")
- **Note**: Title cycling is cool but low impact, skip unless you want the learning

### Additional Unique Section
- [ ] Consider "Reading" section (inspired by Ahmed's Bookshelf)
- [ ] Or "Tools" section (Claude, Cursor, etc.)
- [ ] Update quarterly
- **Note**: Adds personality but not critical

### Case Study Deep-Dives
- [ ] Create separate pages for 1-2 key projects
- [ ] Add process details, screenshots, outcomes
- [ ] Link from project cards
- **Note**: High effort, defer unless recruiters specifically request

### TypeScript Migration (Learning Exercise)
- [ ] Migrate one component to TypeScript
- [ ] Learn TS patterns for React components
- **Note**: Educational value only, not necessary for portfolio

---

## Recommended Execution Order

**Week 1: Content + Foundation**
1. Complete Phase 1 (Side Projects section)
2. Complete Phase 2 items 1-4 (positioning, color, animation, Umbrage fix)

**Week 2: Polish**
3. Complete Phase 2 item 5 (metrics)
4. Complete Phase 3 (typography, CTA, Now section, hover states)

**Week 3+: Advanced**
5. Phase 4 (Analytics, Dark Mode, Copy Review)
6. Phase 5 (optional enhancements as desired)

---

## Notes
- **Maintenance commitment**: Low - update every few months
- **Time investment**: Phases 1-3 = ~3.5 hours total for major transformation
- **Impact**: After Phases 1-3, site goes from "wireframe" to "polished portfolio that drives action"
- **Removed from README**: Roadmap section (integrated here)

---

## Metrics for Success
After completing Phases 1-3, your site will have:
- ✅ Differentiated positioning (not generic "Product Manager")
- ✅ Visual identity (accent color, custom typography)
- ✅ Current work showcased (YM app, Boba Wali)
- ✅ Clear CTAs (contact button, Now section)
- ✅ Polish signals (animations, hover states)
- ✅ Breadth demonstrated (Umbrage + side projects)
- ✅ Specificity (metrics in descriptions)
