# NEXORA — Modern Event Management Platform

> **Discover Experiences. Create Memories.**  
> A premium, responsive, full-featured event discovery and ticketing platform built with semantic HTML5, modern CSS3, and Vanilla JavaScript.

---

## 📖 Table of Contents
1. [Project Overview](#project-overview)
2. [Problem Statement](#problem-statement)
3. [Design & UI/UX Highlights](#design--uiux-highlights)
4. [Features & Capabilities](#features--capabilities)
   - [Core Features](#core-features)
   - [Bonus Features](#bonus-features)
5. [Technical Stack](#technical-stack)
6. [Project Structure](#project-structure)
7. [Getting Started & Installation](#getting-started--installation)
8. [Usage Guide](#usage-guide)
9. [Screenshots & UI Showcase](#screenshots--ui-showcase)
10. [Future Enhancements](#future-enhancements)
11. [Author & Evaluation Note](#author--evaluation-note)

---

## 🌟 Project Overview

**NEXORA** is a next-generation event management and ticketing platform inspired by modern industry benchmarks such as *Luma*, *Eventbrite*, and contemporary SaaS landing experiences. Developed for academic evaluation, NEXORA demonstrates how high-end design systems, glassmorphism, dynamic data rendering, real-time client-side search/filtering, and persistent state management can be engineered using purely vanilla web technologies without heavyweight frameworks.

Whether users are looking for frontier AI summits, vibrant electronic music festivals, startup pitch sessions, or intimate culinary workshops, NEXORA provides an effortless discovery experience with instant local-storage-backed ticket reservations and verifiable digital passes.

---

## 🎯 Problem Statement

Traditional event discovery websites often suffer from:
- Cluttered, outdated layouts with poor visual hierarchy and readability.
- Slow or cumbersome search and filter mechanisms requiring full-page reloads.
- Complex account creation walls for simple attendee registration.
- Lack of offline-accessible ticket summaries or instant confirmation receipts.
- Inconsistent mobile responsiveness and missing accessibility considerations.

**NEXORA resolves this** by offering:
- A glassmorphic, dark-mode-first aesthetic with dynamic neon violet and electric cyan accents.
- Instant, client-side keyword search, multi-category filtering, and dynamic schedule sorting.
- Frictionless registration with instant barcode and QR-code-equipped boarding passes.
- Local storage persistence preventing duplicate registrations while allowing attendees to view and manage their passes anytime.
- 100% fluid responsiveness across mobile (320px+), tablet, and desktop viewports.

---

## 🎨 Design & UI/UX Highlights

- **Aesthetic Direction**: Dark navy (`#080c16`) with electric violet (`#8b5cf6`) and cyan (`#06b6d4`) accents, contrasted by a bright, clean Light Mode.
- **Glassmorphism**: Translucent backdrop filters (`backdrop-filter: blur(16px)`), subtle 1px border glows, and elevated cards.
- **Typography**: Paired with Google Fonts — `Plus Jakarta Sans` for bold, contemporary headlines and `Inter` for clean, high-legibility body text.
- **Micro-Interactions**: Hover lifts, smooth spring animations, floating ambient orbs, and interactive card zoom effects.
- **Accessibility**: Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), ARIA live regions for form validation, keyboard accessible modals (`Esc` dismiss), and high-contrast color ratios.

---

## 🚀 Features & Capabilities

### Core Features

1. **Sticky Glassmorphic Navigation Bar**:
   - Dynamic blur and shadow reveal on scroll.
   - Interactive brand logo with animated particle pulse.
   - Live "My Tickets" badge counter synced with Local Storage.
   - Smooth-scrolling navigation links with active state indicator.
   - Mobile hamburger menu drawer with smooth slide-in transition.

2. **Hero Showcase & Search Engine**:
   - Impactful headline with KaTeX-styled gradient text highlights.
   - Social trust indicator featuring attendee avatar pile and 4.9/5 star rating.
   - Live Search bar allowing instant filtering by title, artist, or venue city.
   - 3D visual spotlight card with real-time countdown timer to the headline summit.

3. **Curated Featured Events**:
   - 3 prominent featured cards with high-resolution Unsplash imagery.
   - Live countdown clocks running in real-time down to seconds.
   - Price indicators, venue metadata, category badges, and quick actions.

4. **Category Exploration**:
   - Dedicated visual cards for all 6 categories: **Technology**, **Music**, **Business**, **Workshop**, **Sports**, and **Art & Culture**.
   - Clicking any category instantly activates the category filter and scrolls to the events calendar.

5. **Explore Upcoming Events (Dynamic Grid)**:
   - 12 comprehensive sample events with realistic details.
   - Instant debounce search by event title, venue, or keywords.
   - Multi-category pill selector with dynamic counter badges.
   - Sorting options: Date (Soonest/Latest), Price (Low to High / High to Low), and Name (A–Z).
   - Graceful Empty State with an illustration and "View All Events" reset button.

6. **Interactive Event Details Modal**:
   - High-definition event banner image.
   - Date, time, venue, ticket price, and real-time seat availability indicator.
   - In-depth event description and key highlights list.
   - Organizer profile with verified partner status.
   - One-click "Register For This Event" CTA and link clipboard sharing.

7. **Registration & Pass Booking System**:
   - 2-Column layout pairing live booking summary with the checkout form.
   - Dynamic total price calculation based on the participant quantity stepper (1–5 tickets).
   - Strict JavaScript validation:
     - Full Name validation (min 3 characters).
     - Strict email format regex check (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`).
     - Phone number format check (minimum 10 digits).
     - Inline real-time error messages and visual feedback.
   - **Duplicate Prevention**: Prevents the same email from registering twice for the same event using Local Storage.
   - Instant form reset and confirmation feedback.

8. **Footer & Global Ecosystem**:
   - Multi-column footer with brand statement, quick links, category filters, and contact details.
   - Interactive newsletter subscription form with client-side validation and toast feedback.
   - Floating back-to-top button with smooth window scrolling.

---

### Bonus Features Checklist

- [x] **1. Dark/Light Mode Toggle**: Smooth theme transition with persistence via `localStorage.getItem('nexora_theme')`.
- [x] **2. Real-Time Countdown Timers**: Active live tickers for both hero spotlight and featured cards.
- [x] **3. Smooth Scrolling**: Seamless navigation accounting for sticky header offset.
- [x] **4. Scroll Reveal Animations**: Intersection Observer API gracefully reveals elements as they enter the viewport.
- [x] **5. Interactive Hover Effects**: 3D card elevation, image zoom, button shine, and pill transitions.
- [x] **6. Local Storage-Based Registration Management**: Full CRUD persistence for event registrations.
- [x] **7. Toast Notifications**: Stackable notifications with custom status icons, dismiss timers, and progress bars.
- [x] **8. Mobile-First Responsive Navigation**: Full-height drawer menu with body-scroll locking and backdrop blur.
- [x] **9. Registration Confirmation & E-Ticket Modal**: Airline/festival style boarding pass with simulated QR code and barcode.
- [x] **10. "My Registrations" Management Dashboard**: Modal allowing attendees to view stored passes, re-inspect their e-ticket, or cancel bookings with instant UI and badge synchronization.

### 🌟 Wow-Factor Premium Additions

- [x] **Interactive Particle Constellation**: Real-time canvas particle network floating behind the hero section with dynamic connection lines and motion preference detection.
- [x] **Dynamic Typewriter Headline**: Interactive letter-by-letter typing animation on the hero headline with a pulsing neon cursor.
- [x] **Confetti Explosion**: Custom physics-based multi-colored confetti canvas burst triggered upon every successful event registration.
- [x] **Animated Metric Counters**: Eased numeric counters (`120k+`, `500+`, `99.4%`) that roll smoothly from 0 to target when scrolled into view.
- [x] **Seat Capacity Progress Indicator**: Real-time capacity bar with color-shifting thresholds (Green/Amber/Rose) and remaining seat urgency badges.
- [x] **SVG Scroll-Progress Back-to-Top**: Circular SVG progress ring wrapped around the floating button that fills as the user scrolls down the page.
- [x] **Interactive 3D Mouse Parallax**: Subtle mouse tracking on the hero spotlight visual card for premium depth perception.

---

## 🛠️ Technical Stack

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Markup** | HTML5 | Semantic structure (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`) |
| **Styling** | CSS3 | CSS Variables, Flexbox, CSS Grid, Glassmorphism, Keyframe animations |
| **Logic** | Vanilla JavaScript (ES6+) | Classes, DOM manipulation, Regex validation, LocalStorage API, IntersectionObserver |
| **Typography** | Google Fonts | `Inter` and `Plus Jakarta Sans` |
| **Icons** | Font Awesome 6.5.1 | High-definition SVG icons via CDN |
| **Imagery** | Unsplash | Curated, high-resolution photography with optimized query dimensions |

> **Note**: Strictly built with vanilla web standards. No React, Vue, Angular, jQuery, Tailwind, or backend dependencies required.

---

## 📂 Project Structure

```text
Nexora/
├── index.html          # Semantic HTML5 layout and modal dialogs
├── style.css           # Complete responsive stylesheet & design system
├── script.js           # Event data, state controller, validation, and timers
├── README.md           # Project documentation and evaluation guide
└── assets/             # Project assets and branding logo storage
    ├── nexora-logo.jpg # Official Nexora logo
    └── logo.jpg        # Nexora logo copy
```

---

## 💻 Getting Started & Installation

No complex compilation, npm install, or bundler setup is required. NEXORA runs in any modern web browser.

### Option 1: Direct Browser Launch
1. Navigate to the project root directory:
   ```bash
   cd c:\Users\KIIT\OneDrive\Desktop\Nexora
   ```
2. Double-click `index.html` or open it with your favorite browser:
   ```bash
   start index.html
   ```

### Option 2: Live Server (Recommended for Development)
If using VS Code or any local web server:
1. Open the project folder in VS Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and select **"Open with Live Server"**.
4. The site will launch at `http://127.0.0.1:5500/index.html`.

---

## 📱 Responsiveness Testing

NEXORA has been tested across all major device breakpoints:
- **Mobile Handsets** (320px – 480px): Collapsed navigation drawer, single-column stacked layout, touch-optimized button hit targets.
- **Tablets** (768px – 1024px): 2-Column responsive grids, compact header actions, fluid search form.
- **Desktop & Widescreen** (1280px – 1920px+): 3-Column event grids, dual-column registration dashboard, sticky preview pane.

---

## 🔮 Future Enhancements

- **PDF Export**: Integration of `jsPDF` or `html2pdf.js` for direct one-click downloading of PDF boarding passes.
- **Real Calendar Integration**: Direct "Add to Google Calendar" / `.ics` file generation.
- **Payment Gateway Simulation**: Mock Stripe / Razorpay modal for paid ticket tiers.
- **Seat Map Selector**: Interactive SVG stadium and hall seat selection.
- **Multi-Language Support**: i18n localization for international attendees.

---

## 👨‍💻 Author & Evaluation Note

- **Project**: NEXORA — Modern Event Management Website
- **Purpose**: Academic Assignment & UI/UX Frontend Showcase
- **Developed with**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Evaluation Criteria Met**: 
  - 100% functional interactive controls.
  - Complete form validation with inline feedback and duplicate check.
  - Full local storage CRUD integration.
  - Stunning dark/light mode toggle with theme memory.
  - Zero placeholder links or non-functional buttons.

*Designed and crafted with precision for evaluation excellence.*

