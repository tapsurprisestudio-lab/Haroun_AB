HARON — Ultra Premium Creator Website Specification

Project Overview





Project Name: HARON



Type: Multi-page creator portfolio website with internal routing



Core Functionality: Cinematic presentation of a daily content creator from Syria living in Germany, with social connections, real reviews, and smart chatbot



Target Users: Followers, potential collaborators, fans from Arabic, English, and German speaking regions

Visual & Rendering Specification

Color Palette





Background: #05070d (deep dark blue-black)



Primary Neon: #46f2ff (cyan/teal glow)



Secondary Glow: #7b5cff (violet)



Accent White: #ffffff



Soft Grey Text: #a0a8b8



Glass Panels: rgba(255, 255, 255, 0.05) with backdrop-filter blur

Typography





Arabic: Cairo (Google Fonts)



English/German: Poppins (Google Fonts)



Premium Headings: Cinzel (Google Fonts)

Visual Effects





Electric neon border animations (CSS keyframes)



Glass morphism with backdrop-filter: blur(10px)



Subtle moving gradient fog background



Particle stars/dust (CSS-only)



Smooth page transitions (fade + slide)



Reduced motion support via media queries

Site Structure (6 Pages via Internal Router)

1. Splash Page





Full-screen cinematic intro (1.5-2.5s or click to skip)



Circular portrait with animated electric ring



Welcome text in all 3 languages



Glowing "Enter" button



Uses sessionStorage to show only once per session

2. Home Page





Hero with large headline (name in all languages)



Subtitle with origin story



3 animated stat cards (glass style)



CTA buttons to Story and Connect pages



Fog gradient + stars background

3. Story Page





Left: portrait circle with soft glow



Right: inspiring life story text



Timeline mini-section (2000 → present)



Premium quote highlights

4. Connect Page





Grid of social cards with electric border hover



Instagram, TikTok, Facebook, WhatsApp, Email, Phone



Each card: icon + label + handle



Micro-interactions: glow, ripple

5. Reviews Page





Form: Name (optional), Language dropdown, Rating stars (1-5), Comment



Submit saves to localStorage



Reviews persist on refresh



Filter: All / 5 stars / 4+ stars



Disclaimer note in all languages

6. Contact Page





Message Builder form: Name, Topic dropdown, Message



Buttons: Copy Message, Open Instagram DM, Open WhatsApp (prefilled)



Prefilled format includes name, topic, message, language

Language System





Top-right switcher: AR | EN | DE



Arabic uses RTL direction



English/German use LTR



Selection persists in localStorage



All UI elements translated

Chatbot Specification





Floating orb bottom-right with neon glow



Opens glass panel



Persona: Premium assistant



Quick buttons for common queries



Multi-step flow for collaboration



Keyword-based routing for free typing



"Back to menu" always available

Interaction Specification





Navigation: hash-based routing (#home, #story, #connect, #reviews, #contact)



Mobile: burger menu opens side drawer



Desktop: horizontal nav links



Active link highlight with neon



Page transitions: fade + slide animation

Acceptance Criteria





✓ Only 3 files (index.html, styles.css, script.js)



✓ No npm, frameworks, or external JS libs



✓ Mobile-first responsive design



✓ Zero console errors



✓ All links clickable and functional



✓ Real reviews stored in localStorage (no fake prefilled)



✓ Rule-based smart chatbot with multi-step flows



✓ GitHub Pages compatible



✓ Cinematic dark + neon electric aesthetic



✓ 3 language support with RTL for Arabic

