/**
 * ============================================================================
 * NEXORA — Modern Event Management Platform
 * Core Application JavaScript (Modular ES6+ Architecture)
 * ============================================================================
 */

'use strict';

// ----------------------------------------------------------------------------
// 1. EVENT DATA REPOSITORY (Realistic sample data across all 6 categories)
// ----------------------------------------------------------------------------
const EVENTS_DATA = [
  {
    id: 1,
    title: "Global AI & Web3 Summit 2026",
    category: "Technology",
    date: "2026-11-20T09:00:00",
    displayDate: "Friday, Nov 20, 2026 • 09:00 AM",
    venue: "Silicon Convention Center",
    city: "San Francisco, CA & Virtual",
    price: 149,
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "The premier gathering of artificial intelligence pioneers, neural network researchers, and decentralized Web3 architects.",
    fullDesc: "Step into the epicenter of technological transformation at the Global AI & Web3 Summit 2026. Join over 3,000 engineers, researchers, founders, and venture capitalists exploring frontier LLMs, autonomous agent systems, decentralized computing networks, and zero-knowledge cryptography. Features live hands-on hackathons, keynote debates with industry titans, and exclusive access to the VIP investor salon.",
    highlights: [
      "Keynote addresses from AI lab directors",
      "Hands-on Autonomous Agent Hackathon",
      "Decentralized Infrastructure Expo Stage",
      "Exclusive Venture Capital Pitch Lounge",
      "Complimentary catered networking lunch"
    ],
    organizer: "Silicon Tech Alliances",
    totalSeats: 1200,
    registeredSeats: 980
  },
  {
    id: 2,
    title: "Neon Horizon Music Festival",
    category: "Music",
    date: "2026-12-05T18:00:00",
    displayDate: "Saturday, Dec 05, 2026 • 06:00 PM",
    venue: "Echo Park Amphitheater",
    city: "Los Angeles, CA",
    price: 89,
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "An immersive open-air electronic soundscape with synchronized holographic laser visuals and world-renowned DJs.",
    fullDesc: "Neon Horizon brings together world-renowned electronic, synthwave, and melodic house artists under the open California skies. Featuring three custom acoustic stages, spatial audio arrays, synchronized laser mapping, artisanal culinary trucks, and interactive digital art installations. Prepare for an unforgettable sonic voyage celebrating electronic music culture.",
    highlights: [
      "3 custom stages with 360-degree spatial audio",
      "World-class headlining electronic producers",
      "Synchronized holographic light shows",
      "Gourmet food truck bazaar & craft beer garden",
      "Chillout lounge with ambient generative soundscapes"
    ],
    organizer: "Horizon Live Entertainment",
    totalSeats: 3500,
    registeredSeats: 2940
  },
  {
    id: 3,
    title: "NextGen Founders & Venture Expo",
    category: "Business",
    date: "2026-11-28T10:00:00",
    displayDate: "Saturday, Nov 28, 2026 • 10:00 AM",
    venue: "Metro Financial Center",
    city: "New York, NY",
    price: 199,
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "High-impact startup matchmaking, seed-to-Series B pitch battles, and executive leadership roundtables.",
    fullDesc: "The NextGen Founders & Venture Expo is the premier East Coast nexus for early-stage and growth founders seeking capital, partnerships, and market scaling strategies. Featuring keynote fireside chats with unicorn operators, curated 1-on-1 investor speed dating sessions, and real-time live pitch battles with $250,000 in non-dilutive grant prizes.",
    highlights: [
      "1-on-1 curated Investor Speed Matchmaking",
      "Live Pitch Battle with $250k Prize Pool",
      "Operator Roundtables on Scaling & Monetization",
      "Executive networking cocktail reception",
      "Founder toolkit & enterprise software perks"
    ],
    organizer: "Empire Venture Network",
    totalSeats: 800,
    registeredSeats: 640
  },
  {
    id: 4,
    title: "Mastering UI/UX & Design Systems",
    category: "Workshop",
    date: "2026-11-15T14:00:00",
    displayDate: "Sunday, Nov 15, 2026 • 02:00 PM",
    venue: "Design Hub Creative Studios",
    city: "Austin, TX",
    price: 49,
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Hands-on masterclass building production-grade tokenized design systems and high-fidelity micro-interactions.",
    fullDesc: "Transform your design workflow in this immersive 4-hour masterclass. Learn how industry leaders structure scalable design tokens, component architecture, dark mode theming, and accessibility primitives. Bring your laptop: you'll build and document a complete design system module with live mentor critiques.",
    highlights: [
      "Comprehensive Figma component architecture guide",
      "Tokenization & seamless developer handoff",
      "Live micro-interaction prototyping exercises",
      "1-on-1 portfolio & design system critique",
      "Digital certificate of completion"
    ],
    organizer: "Studio Craft Collective",
    totalSeats: 150,
    registeredSeats: 132
  },
  {
    id: 5,
    title: "International Indie Jazz & Soul Night",
    category: "Music",
    date: "2026-11-22T19:30:00",
    displayDate: "Sunday, Nov 22, 2026 • 07:30 PM",
    venue: "Blue Note Heritage Lounge",
    city: "Chicago, IL",
    price: 35,
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "An intimate evening of improvisational jazz, neo-soul vocals, and craft cocktails with renowned musicians.",
    fullDesc: "Experience the timeless beauty of live acoustic improvisation. Featuring acclaimed saxophone virtuosos, upright bassists, and neo-soul vocalists hailing from New Orleans, Paris, and Havana. Enjoy candlelit table seating, artisan charcuterie boards, and curated cocktail pairings.",
    highlights: [
      "Two 60-minute live ensemble performance sets",
      "Intimate candlelit club seating layout",
      "Signature craft cocktail tastings",
      "Meet-and-greet with guest soloists",
      "Commemorative vinyl record giveaway"
    ],
    organizer: "Chicago Soul Society",
    totalSeats: 200,
    registeredSeats: 185
  },
  {
    id: 6,
    title: "Urban Marathon & Wellness Festival",
    category: "Sports",
    date: "2026-12-10T06:30:00",
    displayDate: "Thursday, Dec 10, 2026 • 06:30 AM",
    venue: "Waterfront Promenade Park",
    city: "Seattle, WA",
    price: 0,
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Community 5K/10K run along the scenic waterfront, accompanied by outdoor yoga, sound baths, and nutrition stalls.",
    fullDesc: "Lace up your running shoes for Seattle's premier wellness morning. Choose between the leisurely 5K fun run or timed 10K waterfront circuit. Afterwards, unwind on the central lawn with instructor-led vinyasa yoga, Tibetan sound bowl recovery baths, cold brew bars, and sports nutrition workshops. Entirely free admission for all community participants.",
    highlights: [
      "Scenic chip-timed waterfront course",
      "Free commemorative moisture-wicking race tee",
      "Post-race recovery yoga & guided meditation",
      "Electrolyte refuel & protein shake booths",
      "Finisher medals for all registered runners"
    ],
    organizer: "Pacific Northwest Runners",
    totalSeats: 2000,
    registeredSeats: 1420
  },
  {
    id: 7,
    title: "Contemporary Digital Art & Sculptures",
    category: "Art & Culture",
    date: "2026-11-18T11:00:00",
    displayDate: "Wednesday, Nov 18, 2026 • 11:00 AM",
    venue: "Grand Modern Art Gallery",
    city: "Boston, MA",
    price: 25,
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Curated exhibition showcasing generative algorithms, kinetic light sculptures, and interactive projection rooms.",
    fullDesc: "Step beyond conventional canvas into a world of algorithmic aesthetics. This biennial exhibition features 24 international artists combining physical kinetic sculptures with generative neural code and reactive audio-visual projections. Includes guided curatorial tours and an interactive digital pavilion where visitors create their own projected artwork.",
    highlights: [
      "Over 30 immersive digital installations",
      "Interactive motion-reactive projection walls",
      "Guided walk with exhibition curator at 1 PM",
      "Catalog booklet & exclusive digital print postcard",
      "Evening ambient audio performance"
    ],
    organizer: "Boston Digital Arts Guild",
    totalSeats: 450,
    registeredSeats: 310
  },
  {
    id: 8,
    title: "Cloud Architecture & DevOps Masterclass",
    category: "Technology",
    date: "2026-12-02T13:00:00",
    displayDate: "Wednesday, Dec 02, 2026 • 01:00 PM",
    venue: "Tech Innovation Center",
    city: "Denver, CO & Live Stream",
    price: 75,
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Master Kubernetes orchestration, zero-trust security postures, and cost-effective multi-cloud infrastructure.",
    fullDesc: "Designed for senior engineers, cloud architects, and site reliability specialists. Dive deep into enterprise container orchestration, GitOps automation workflows with ArgoCD, and automated resilience engineering under extreme multi-region traffic spikes. Includes hands-on sandboxed cloud clusters for all participants.",
    highlights: [
      "Live chaos engineering & failover simulation",
      "Cost optimization strategies for AWS/GCP/Azure",
      "Zero-trust microservices security deep-dive",
      "Full source code repositories and Terraform scripts",
      "Q&A session with Principal Cloud Architects"
    ],
    organizer: "CloudOps Worldwide",
    totalSeats: 300,
    registeredSeats: 265
  },
  {
    id: 9,
    title: "E-Sports Championship Finals 2026",
    category: "Sports",
    date: "2026-12-14T15:00:00",
    displayDate: "Monday, Dec 14, 2026 • 03:00 PM",
    venue: "Apex Gaming Arena",
    city: "Las Vegas, NV",
    price: 60,
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "The pinnacle battle of 16 world-champion squads competing for the global trophy and a $1,000,000 purse.",
    fullDesc: "Witness apex tactical gameplay in person! The world's top 16 esports organizations clash in a double-elimination bracket inside Las Vegas's state-of-the-art arena. Enjoy 8K ultra-wide stadium screens, Dolby Atmos stadium sound, live caster commentary, and meet-and-greets with championship players.",
    highlights: [
      "Live Grand Finals on 8K Jumbotron displays",
      "Celebrity caster commentary & analyst desk",
      "Exclusive team merchandise booths & autographs",
      "VIP fan badge with lanyard & digital badge",
      "Cosplay showcase & after-party entry"
    ],
    organizer: "Apex Esports League",
    totalSeats: 4000,
    registeredSeats: 3680
  },
  {
    id: 10,
    title: "Culinary Arts & Wine Tasting Gala",
    category: "Workshop",
    date: "2026-11-25T17:00:00",
    displayDate: "Wednesday, Nov 25, 2026 • 05:00 PM",
    venue: "Le Petit Chateaux Estates",
    city: "Napa Valley, CA",
    price: 120,
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "A five-course master gastronomic tasting paired with vintage reserve wines led by Michelin-star chefs.",
    fullDesc: "Indulge your palate in an exquisite culinary journey across California's most prestigious wine country. Master chefs demonstrate modern gastronomy techniques, sauce emulsion mastery, and artisanal cheese curation. Each course is accompanied by private cellar reserve vintages explained by master sommeliers.",
    highlights: [
      "Five-course gourmet tasting menu",
      "Pairing of 6 rare vintage estate reserve wines",
      "Live culinary demonstration by Michelin-starred chef",
      "Hands-on plating & flavor pairing workshop",
      "Complimentary engraved crystal tasting glass"
    ],
    organizer: "Napa Epicurean Guild",
    totalSeats: 80,
    registeredSeats: 72
  },
  {
    id: 11,
    title: "Sustainable Tech & Green Energy Forum",
    category: "Business",
    date: "2026-12-08T09:30:00",
    displayDate: "Tuesday, Dec 08, 2026 • 09:30 AM",
    venue: "Horizon Eco Innovation Center",
    city: "Portland, OR",
    price: 0,
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Showcasing breakthroughs in grid battery storage, carbon capture infrastructure, and climate tech investment.",
    fullDesc: "Bridging the gap between technological innovation and ecological stewardship. The Sustainable Tech & Green Energy Forum convenes clean-tech founders, policy architects, and environmental scientists to discuss next-generation battery chemistries, circular materials, and renewable micro-grids. Open registration supported by clean energy sponsorships.",
    highlights: [
      "Keynotes on circular economy & grid batteries",
      "Exhibition of 40+ clean-tech startup innovations",
      "Networking breakfast with sustainability directors",
      "Green technology venture investment panel",
      "Zero-waste certified conference experience"
    ],
    organizer: "Cascadia Clean Futures",
    totalSeats: 600,
    registeredSeats: 510
  },
  {
    id: 12,
    title: "Symphony of Lights Classical Gala",
    category: "Art & Culture",
    date: "2026-12-20T19:00:00",
    displayDate: "Sunday, Dec 20, 2026 • 07:00 PM",
    venue: "Royal Symphony Grand Hall",
    city: "Philadelphia, PA",
    price: 65,
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "A breathtaking 75-piece orchestral performance of Vivaldi, Beethoven, and Hans Zimmer under 2,000 candle lanterns.",
    fullDesc: "Immerse yourself in sublime symphonic harmony inside Philadelphia's premier acoustics hall. 75 world-class musicians perform masterworks from Vivaldi's Four Seasons, Beethoven's 9th Symphony, and modern cinematic overtures by Hans Zimmer and Ennio Morricone. Accompanied by 2,000 warm candle lanterns illuminating the hall in a spellbinding glow.",
    highlights: [
      "75-piece live master philharmonic orchestra",
      "Illuminated candlelit architectural setting",
      "Repertoire spanning classical & cinematic masterpieces",
      "Acoustically certified premium tiered seating",
      "Post-concert champagne toast with concertmaster"
    ],
    organizer: "Philharmonic Arts Trust",
    totalSeats: 1100,
    registeredSeats: 940
  }
];

// ----------------------------------------------------------------------------
// 2. APPLICATION CORE CONTROLLER
// ----------------------------------------------------------------------------
class NexoraApp {
  constructor() {
    // State
    this.events = [...EVENTS_DATA];
    this.selectedCategory = "All";
    this.searchQuery = "";
    this.locationQuery = "";
    this.sortBy = "date-asc";
    this.selectedEventId = 1;
    this.participantsCount = 1;
    this.registrations = this.loadRegistrations();
    this.favorites = this.loadFavorites();
    this.countdownInterval = null;

    // DOM Elements Cache
    this.cacheElements();

    // Initialize Components
    this.initTheme();
    this.initCategoryCounts();
    this.renderFeaturedEvents();
    this.renderExploreEvents();
    this.populateRegistrationDropdown();
    this.updateRegistrationPreview(this.selectedEventId);
    this.updateMyTicketsBadge();
    this.renderInPageRegistrations();
    this.initEventListeners();
    this.startLiveCountdowns();
    this.initScrollReveal();
    this.initScrollSpy();
    this.initAnimatedCounters();
    this.initParallax();
    this.initBackToTopProgress();
  }

  // Cache essential DOM elements
  cacheElements() {
    this.el = {
      // Header & Navigation
      header: document.getElementById('main-header'),
      themeToggle: document.getElementById('theme-toggle'),
      mobileToggle: document.getElementById('mobile-toggle'),
      mobileDrawer: document.getElementById('mobile-drawer'),
      mobileDrawerClose: document.getElementById('mobile-drawer-close'),
      myTicketsBtn: document.getElementById('my-tickets-btn'),
      mobileTicketsBtn: document.getElementById('mobile-tickets-btn'),
      ticketBadgeCount: document.getElementById('ticket-badge-count'),
      mobileBadgeCount: document.querySelector('.mobile-badge-count'),
      hostHeaderBtn: document.getElementById('host-event-header-btn'),
      heroHostBtn: document.getElementById('hero-host-btn'),
      mobileHostBtn: document.getElementById('mobile-host-btn'),

      // Hero Elements
      heroSearchForm: document.getElementById('hero-search-form'),
      heroSearchInput: document.getElementById('hero-search-input'),
      heroLocationInput: document.getElementById('hero-location-input'),
      heroTimer: document.getElementById('hero-timer'),
      heroDays: document.getElementById('hero-days'),
      heroHours: document.getElementById('hero-hours'),
      heroMins: document.getElementById('hero-mins'),
      heroSecs: document.getElementById('hero-secs'),

      // Featured & Explore Grids
      featuredGrid: document.getElementById('featured-events-grid'),
      eventsGrid: document.getElementById('events-grid'),
      emptyState: document.getElementById('empty-state'),
      emptyResetBtn: document.getElementById('empty-reset-btn'),
      eventSearchInput: document.getElementById('event-search-input'),
      searchClearBtn: document.getElementById('search-clear-btn'),
      eventSortSelect: document.getElementById('event-sort-select'),
      categoryPillsGroup: document.getElementById('category-pills-group'),
      resultsCountText: document.getElementById('results-count-text'),
      resetAllFiltersBtn: document.getElementById('reset-all-filters-btn'),

      // Registration Form & Preview
      regEventSelect: document.getElementById('reg-event-select'),
      regName: document.getElementById('reg-name'),
      regEmail: document.getElementById('reg-email'),
      regPhone: document.getElementById('reg-phone'),
      regParticipants: document.getElementById('reg-participants'),
      stepperMinus: document.getElementById('stepper-minus'),
      stepperPlus: document.getElementById('stepper-plus'),
      regTerms: document.getElementById('reg-terms'),
      regForm: document.getElementById('registration-form'),
      previewCategory: document.getElementById('preview-event-category'),
      previewBanner: document.getElementById('preview-event-image'),
      previewPrice: document.getElementById('preview-event-price'),
      previewTitle: document.getElementById('preview-event-title'),
      previewDate: document.getElementById('preview-event-date'),
      previewVenue: document.getElementById('preview-event-venue'),
      breakdownRate: document.getElementById('breakdown-single-price'),
      breakdownQty: document.getElementById('breakdown-qty'),
      breakdownTotal: document.getElementById('breakdown-total'),

      // In-Page My Registrations Section
      inPageRegGrid: document.getElementById('in-page-registrations-grid'),
      inPageRegEmpty: document.getElementById('in-page-reg-empty'),

      // Modals
      eventModal: document.getElementById('event-details-modal'),
      closeDetailsModal: document.getElementById('close-details-modal'),
      modalCloseSecondary: document.getElementById('modal-close-secondary-btn'),
      modalRegisterBtn: document.getElementById('modal-register-action-btn'),
      modalShareBtn: document.getElementById('modal-share-btn'),

      ticketModal: document.getElementById('ticket-confirmation-modal'),
      closeTicketModal: document.getElementById('close-ticket-modal'),
      printTicketBtn: document.getElementById('print-ticket-btn'),
      viewAllTicketsBtn: document.getElementById('view-all-my-tickets-btn'),

      myRegModal: document.getElementById('my-registrations-modal'),
      closeRegModal: document.getElementById('close-registrations-modal'),
      regListContainer: document.getElementById('registrations-list-container'),
      myRegEmpty: document.getElementById('my-reg-empty'),
      storedTicketsCounter: document.getElementById('stored-tickets-counter'),

      hostModal: document.getElementById('host-modal'),
      closeHostModal: document.getElementById('close-host-modal'),
      hostForm: document.getElementById('host-event-form'),

      // Extras
      newsletterForm: document.getElementById('newsletter-form'),
      newsletterEmail: document.getElementById('newsletter-email'),
      newsletterMsg: document.getElementById('newsletter-msg'),
      backToTopBtn: document.getElementById('back-to-top-btn'),
      toastContainer: document.getElementById('toast-container')
    };
  }

  // --------------------------------------------------------------------------
  // 3. THEME MANAGEMENT (Dark / Light Mode)
  // --------------------------------------------------------------------------
  initTheme() {
    const savedTheme = localStorage.getItem('nexora_theme') || localStorage.getItem('eventora_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    this.updateThemeLabels(savedTheme);
  }

  updateThemeLabels(theme) {
    const isDark = theme === 'dark';
    const textLabel = isDark ? 'Dark' : 'Light';

    const headerLabel = document.getElementById('theme-label-text');
    if (headerLabel) headerLabel.textContent = textLabel;

    const mobileLabel = document.getElementById('mobile-theme-label-text');
    if (mobileLabel) mobileLabel.textContent = textLabel;
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('nexora_theme', newTheme);
    this.updateThemeLabels(newTheme);
    this.showToast(
      "Theme Updated",
      `Switched to ${newTheme === 'dark' ? 'Dark Mode 🌙' : 'Light Mode ☀️'}`,
      "info"
    );
  }

  // --------------------------------------------------------------------------
  // 4. CATEGORY COUNTS
  // --------------------------------------------------------------------------
  initCategoryCounts() {
    const counts = {
      Technology: 0,
      Music: 0,
      Business: 0,
      Workshop: 0,
      Sports: 0,
      "Art & Culture": 0
    };

    this.events.forEach(evt => {
      if (counts[evt.category] !== undefined) {
        counts[evt.category]++;
      }
    });

    // Update Pills
    const countAllEl = document.getElementById('count-all');
    if (countAllEl) countAllEl.textContent = this.events.length;

    const badgeTech = document.getElementById('badge-tech');
    if (badgeTech) badgeTech.textContent = counts['Technology'];

    const badgeMusic = document.getElementById('badge-music');
    if (badgeMusic) badgeMusic.textContent = counts['Music'];

    const badgeBusiness = document.getElementById('badge-business');
    if (badgeBusiness) badgeBusiness.textContent = counts['Business'];

    const badgeWorkshop = document.getElementById('badge-workshop');
    if (badgeWorkshop) badgeWorkshop.textContent = counts['Workshop'];

    const badgeSports = document.getElementById('badge-sports');
    if (badgeSports) badgeSports.textContent = counts['Sports'];

    const badgeArt = document.getElementById('badge-art');
    if (badgeArt) badgeArt.textContent = counts['Art & Culture'];

    // Update Categories section badges
    const cTech = document.querySelector('.count-tech');
    if (cTech) cTech.textContent = counts['Technology'];
    const cMusic = document.querySelector('.count-music');
    if (cMusic) cMusic.textContent = counts['Music'];
    const cBusiness = document.querySelector('.count-business');
    if (cBusiness) cBusiness.textContent = counts['Business'];
    const cWorkshop = document.querySelector('.count-workshop');
    if (cWorkshop) cWorkshop.textContent = counts['Workshop'];
    const cSports = document.querySelector('.count-sports');
    if (cSports) cSports.textContent = counts['Sports'];
    const cArt = document.querySelector('.count-art');
    if (cArt) cArt.textContent = counts['Art & Culture'];
  }

  // --------------------------------------------------------------------------
  // 5. RENDERING FEATURED EVENTS
  // --------------------------------------------------------------------------
  renderFeaturedEvents() {
    const featured = this.events.filter(e => e.isFeatured);
    if (!this.el.featuredGrid) return;

    this.el.featuredGrid.innerHTML = featured.map(evt => {
      const priceBadge = evt.price === 0
        ? '<span class="card-badge-price free">Free Entry</span>'
        : `<span class="card-badge-price">$${evt.price}</span>`;

      const isFav = this.favorites.includes(evt.id);

      return `
        <article class="event-card reveal-on-scroll" data-id="${evt.id}">
          <div class="card-img-container" onclick="app.openEventModal(${evt.id})">
            <img src="${evt.image}" alt="${evt.title}" class="card-img" loading="lazy">
            <div class="card-top-badges">
              <span class="card-badge-category">
                <i class="${this.getCategoryIcon(evt.category)}"></i> ${evt.category}
              </span>
              <button class="bookmark-btn ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); app.toggleFavorite(${evt.id})" aria-label="Save to Wishlist" title="Save Event">
                <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i>
              </button>
            </div>
            <div class="card-countdown-banner">
              <span class="mini-timer-label"><i class="fa-regular fa-clock"></i> In:</span>
              <span class="mini-timer-val" data-target="${evt.date}" id="timer-evt-${evt.id}">Calculating...</span>
            </div>
          </div>
          <div class="card-body">
            <div class="card-date-time">
              <i class="fa-regular fa-calendar text-accent"></i> <span>${evt.displayDate}</span>
            </div>
            <h3 class="card-title" onclick="app.openEventModal(${evt.id})">${evt.title}</h3>
            <div class="card-venue">
              <i class="fa-solid fa-location-dot"></i>
              <span>${evt.venue}, ${evt.city}</span>
            </div>
            <p class="card-desc">${evt.shortDesc}</p>
            ${this.renderSeatProgress(evt)}
            <div class="card-footer-row">
              <div class="card-price-wrap">${priceBadge}</div>
              <div class="card-actions">
                <button class="btn btn-outline btn-sm" onclick="app.openEventModal(${evt.id})">
                  Details
                </button>
                <button class="btn btn-primary btn-sm" onclick="app.quickRegister(${evt.id})">
                  <i class="fa-solid fa-ticket"></i> Register
                </button>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // --------------------------------------------------------------------------
  // 6. RENDERING EXPLORE EVENTS (FILTER, SEARCH, SORT)
  // --------------------------------------------------------------------------
  renderExploreEvents() {
    if (!this.el.eventsGrid) return;

    let filtered = this.events.filter(evt => {
      // Category filter
      const matchesCategory = (this.selectedCategory === "All" || evt.category === this.selectedCategory);

      // Search keyword filter
      const q = this.searchQuery.toLowerCase().trim();
      const matchesSearch = !q || (
        evt.title.toLowerCase().includes(q) ||
        evt.shortDesc.toLowerCase().includes(q) ||
        evt.venue.toLowerCase().includes(q) ||
        evt.city.toLowerCase().includes(q) ||
        evt.category.toLowerCase().includes(q)
      );

      // Location filter (from hero search)
      const loc = this.locationQuery.toLowerCase().trim();
      const matchesLoc = !loc || (
        evt.venue.toLowerCase().includes(loc) ||
        evt.city.toLowerCase().includes(loc)
      );

      return matchesCategory && matchesSearch && matchesLoc;
    });

    // Sorting
    filtered.sort((a, b) => {
      if (this.sortBy === 'date-asc') {
        return new Date(a.date) - new Date(b.date);
      } else if (this.sortBy === 'date-desc') {
        return new Date(b.date) - new Date(a.date);
      } else if (this.sortBy === 'price-asc') {
        return a.price - b.price;
      } else if (this.sortBy === 'price-desc') {
        return b.price - a.price;
      } else if (this.sortBy === 'name-asc') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

    // Update Status Bar
    if (this.el.resultsCountText) {
      this.el.resultsCountText.innerHTML = `Showing <strong>${filtered.length}</strong> event${filtered.length === 1 ? '' : 's'}`;
    }

    const hasActiveFilters = this.selectedCategory !== "All" || this.searchQuery !== "" || this.locationQuery !== "";
    if (this.el.resetAllFiltersBtn) {
      this.el.resetAllFiltersBtn.style.display = hasActiveFilters ? 'inline-flex' : 'none';
    }

    // Empty State Handling
    if (filtered.length === 0) {
      this.el.eventsGrid.style.display = 'none';
      if (this.el.emptyState) this.el.emptyState.style.display = 'block';
      return;
    }

    this.el.eventsGrid.style.display = 'grid';
    if (this.el.emptyState) this.el.emptyState.style.display = 'none';

    // Render Cards
    this.el.eventsGrid.innerHTML = filtered.map(evt => {
      const priceBadge = evt.price === 0
        ? '<span class="card-badge-price free">Free Entry</span>'
        : `<span class="card-badge-price">$${evt.price}</span>`;

      const isFav = this.favorites.includes(evt.id);

      return `
        <article class="event-card reveal-on-scroll" data-id="${evt.id}">
          <div class="card-img-container" onclick="app.openEventModal(${evt.id})">
            <img src="${evt.image}" alt="${evt.title}" class="card-img" loading="lazy">
            <div class="card-top-badges">
              <span class="card-badge-category">
                <i class="${this.getCategoryIcon(evt.category)}"></i> ${evt.category}
              </span>
              <button class="bookmark-btn ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); app.toggleFavorite(${evt.id})" aria-label="Save to Wishlist" title="Save Event">
                <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i>
              </button>
            </div>
          </div>
          <div class="card-body">
            <div class="card-date-time">
              <i class="fa-regular fa-calendar text-accent"></i> <span>${evt.displayDate}</span>
            </div>
            <h3 class="card-title" onclick="app.openEventModal(${evt.id})">${evt.title}</h3>
            <div class="card-venue">
              <i class="fa-solid fa-location-dot"></i>
              <span>${evt.venue}, ${evt.city}</span>
            </div>
            <p class="card-desc">${evt.shortDesc}</p>
            ${this.renderSeatProgress(evt)}
            <div class="card-footer-row">
              <div class="card-price-wrap">${priceBadge}</div>
              <div class="card-actions">
                <button class="btn btn-outline btn-sm" onclick="app.openEventModal(${evt.id})">
                  Details
                </button>
                <button class="btn btn-primary btn-sm" onclick="app.quickRegister(${evt.id})">
                  <i class="fa-solid fa-ticket"></i> Register
                </button>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Re-observe newly created elements for scroll reveal
    this.initScrollReveal();
  }

  getCategoryIcon(category) {
    const icons = {
      Technology: "fa-solid fa-microchip",
      Music: "fa-solid fa-music",
      Business: "fa-solid fa-briefcase",
      Workshop: "fa-solid fa-chalkboard-user",
      Sports: "fa-solid fa-medal",
      "Art & Culture": "fa-solid fa-palette"
    };
    return icons[category] || "fa-solid fa-calendar-star";
  }

  // --------------------------------------------------------------------------
  // 6B. SEAT AVAILABILITY PROGRESS BAR
  // --------------------------------------------------------------------------
  renderSeatProgress(evt) {
    const percent = Math.round((evt.registeredSeats / evt.totalSeats) * 100);
    const seatsLeft = evt.totalSeats - evt.registeredSeats;
    let fillClass = '';
    let leftClass = '';

    if (percent >= 90) {
      fillClass = 'high';
      leftClass = 'almost-full';
    } else if (percent >= 75) {
      fillClass = 'medium';
      leftClass = 'few-left';
    }

    return `
      <div class="seat-progress-container">
        <div class="seat-progress-header">
          <span>${percent}% Filled</span>
          <span class="seats-left ${leftClass}">${seatsLeft} seat${seatsLeft !== 1 ? 's' : ''} left</span>
        </div>
        <div class="seat-progress-bar">
          <div class="seat-progress-fill ${fillClass}" style="width: ${percent}%"></div>
        </div>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // 7. REAL-TIME COUNTDOWN TIMERS
  // --------------------------------------------------------------------------
  startLiveCountdowns() {
    const update = () => {
      const now = new Date().getTime();

      // Hero Spotlight Timer (Event #1: Nov 20, 2026)
      const heroTargetDate = new Date("2026-11-20T09:00:00").getTime();
      const heroDiff = heroTargetDate - now;

      if (heroDiff > 0) {
        const days = Math.floor(heroDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((heroDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((heroDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((heroDiff % (1000 * 60)) / 1000);

        if (this.el.heroDays) this.el.heroDays.textContent = String(days).padStart(2, '0');
        if (this.el.heroHours) this.el.heroHours.textContent = String(hours).padStart(2, '0');
        if (this.el.heroMins) this.el.heroMins.textContent = String(minutes).padStart(2, '0');
        if (this.el.heroSecs) this.el.heroSecs.textContent = String(seconds).padStart(2, '0');
      } else {
        if (this.el.heroDays) this.el.heroDays.textContent = "00";
        if (this.el.heroHours) this.el.heroHours.textContent = "00";
        if (this.el.heroMins) this.el.heroMins.textContent = "00";
        if (this.el.heroSecs) this.el.heroSecs.textContent = "00";
      }

      // Featured cards mini timers
      const miniTimers = document.querySelectorAll('.mini-timer-val');
      miniTimers.forEach(el => {
        const targetStr = el.getAttribute('data-target');
        if (!targetStr) return;
        const targetTime = new Date(targetStr).getTime();
        const diff = targetTime - now;

        if (diff > 0) {
          const d = Math.floor(diff / (1000 * 60 * 60 * 24));
          const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          const s = Math.floor((diff % (1000 * 60)) / 1000);
          el.textContent = `${d}d ${String(h).padStart(2, '0')}h ${String(m).padStart(2, '0')}m ${String(s).padStart(2, '0')}s`;
        } else {
          el.textContent = "Happening Now!";
        }
      });
    };

    update();
    this.countdownInterval = setInterval(update, 1000);
  }

  // --------------------------------------------------------------------------
  // 8. EVENT DETAILS MODAL
  // --------------------------------------------------------------------------
  openEventModal(eventId) {
    const event = this.events.find(e => e.id === eventId);
    if (!event) return;

    // Cache elements for modal
    const modalImg = document.getElementById('modal-event-image');
    const modalCat = document.getElementById('modal-event-category');
    const modalPrice = document.getElementById('modal-event-price');
    const modalTitle = document.getElementById('modal-event-title');
    const modalDateTime = document.getElementById('modal-event-datetime');
    const modalVenue = document.getElementById('modal-event-venue');
    const modalPricing = document.getElementById('modal-event-pricing');
    const modalCapacity = document.getElementById('modal-event-capacity');
    const modalDesc = document.getElementById('modal-event-desc');
    const modalHighlights = document.getElementById('modal-event-highlights');
    const modalOrganizer = document.getElementById('modal-event-organizer');

    // Populate data
    if (modalImg) modalImg.src = event.image;
    if (modalCat) modalCat.innerHTML = `<i class="${this.getCategoryIcon(event.category)}"></i> ${event.category}`;
    if (modalPrice) modalPrice.textContent = event.price === 0 ? "FREE ENTRY" : `$${event.price}`;
    if (modalTitle) modalTitle.textContent = event.title;
    if (modalDateTime) modalDateTime.textContent = event.displayDate;
    if (modalVenue) modalVenue.textContent = `${event.venue}, ${event.city}`;
    if (modalPricing) modalPricing.textContent = event.price === 0 ? "Complimentary Pass" : `$${event.price}.00 per attendee`;
    if (modalCapacity) modalCapacity.textContent = `${event.registeredSeats} / ${event.totalSeats} seats booked (${Math.round((event.registeredSeats / event.totalSeats) * 100)}%)`;
    if (modalDesc) modalDesc.textContent = event.fullDesc;
    if (modalOrganizer) modalOrganizer.textContent = event.organizer;

    if (modalHighlights) {
      modalHighlights.innerHTML = event.highlights.map(h => `
        <li><i class="fa-solid fa-circle-check"></i> <span>${h}</span></li>
      `).join('');
    }

    // Modal register CTA button
    if (this.el.modalRegisterBtn) {
      this.el.modalRegisterBtn.onclick = () => {
        this.closeModal('event-details-modal');
        this.quickRegister(event.id);
      };
    }

    // Share Event Button
    if (this.el.modalShareBtn) {
      this.el.modalShareBtn.onclick = () => {
        const dummyUrl = `${window.location.origin}${window.location.pathname}#event-${event.id}`;
        if (navigator.clipboard) {
          navigator.clipboard.writeText(dummyUrl).then(() => {
            this.showToast("Link Copied!", "Event link copied to clipboard.", "success");
          }).catch(() => {
            this.showToast("Event Selected", `Share: ${event.title}`, "info");
          });
        } else {
          this.showToast("Event Selected", `Share: ${event.title}`, "info");
        }
      };
    }

    this.openModal('event-details-modal');
  }

  // --------------------------------------------------------------------------
  // 9. REGISTRATION SYSTEM & LIVE PREVIEW
  // --------------------------------------------------------------------------
  populateRegistrationDropdown() {
    if (!this.el.regEventSelect) return;
    this.el.regEventSelect.innerHTML = this.events.map(evt => {
      const priceText = evt.price === 0 ? "FREE" : `$${evt.price}`;
      return `<option value="${evt.id}">${evt.title} (${evt.category} - ${priceText})</option>`;
    }).join('');

    this.el.regEventSelect.value = this.selectedEventId;
  }

  updateRegistrationPreview(eventId) {
    const event = this.events.find(e => e.id === Number(eventId)) || this.events[0];
    this.selectedEventId = event.id;

    if (this.el.previewCategory) this.el.previewCategory.textContent = event.category;
    if (this.el.previewBanner) this.el.previewBanner.src = event.image;
    if (this.el.previewPrice) this.el.previewPrice.textContent = event.price === 0 ? "FREE" : `$${event.price}`;
    if (this.el.previewTitle) this.el.previewTitle.textContent = event.title;
    if (this.el.previewDate) this.el.previewDate.textContent = event.displayDate;
    if (this.el.previewVenue) this.el.previewVenue.textContent = `${event.venue}, ${event.city}`;

    // Update pricing breakdown
    const singlePrice = event.price;
    const qty = this.participantsCount;
    const total = singlePrice * qty;

    if (this.el.breakdownRate) this.el.breakdownRate.textContent = singlePrice === 0 ? "$0.00 (Free)" : `$${singlePrice}.00`;
    if (this.el.breakdownQty) this.el.breakdownQty.textContent = `× ${qty}`;
    if (this.el.breakdownTotal) this.el.breakdownTotal.textContent = total === 0 ? "Free Pass" : `$${total}.00`;
  }

  quickRegister(eventId) {
    this.selectedEventId = eventId;
    if (this.el.regEventSelect) {
      this.el.regEventSelect.value = eventId;
    }
    this.updateRegistrationPreview(eventId);

    // Scroll smoothly to registration section
    const regSection = document.getElementById('register');
    if (regSection) {
      regSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Focus name input after a short delay
    setTimeout(() => {
      if (this.el.regName) this.el.regName.focus();
    }, 450);
  }

  // Form Validation & Submission
  handleRegistrationSubmit(e) {
    e.preventDefault();

    let isValid = true;
    const nameVal = this.el.regName.value.trim();
    const emailVal = this.el.regEmail.value.trim();
    const phoneVal = this.el.regPhone.value.trim();
    const eventIdVal = Number(this.el.regEventSelect.value);
    const participantsVal = Number(this.el.regParticipants.value);
    const termsChecked = this.el.regTerms.checked;

    // Reset inline errors
    this.clearFormErrors();

    // 1. Name Validation
    if (!nameVal) {
      this.showFieldError('name-error', 'Full Name is required.');
      this.el.regName.classList.add('is-invalid');
      isValid = false;
    } else if (nameVal.length < 3) {
      this.showFieldError('name-error', 'Name must be at least 3 characters long.');
      this.el.regName.classList.add('is-invalid');
      isValid = false;
    } else {
      this.el.regName.classList.add('is-valid');
    }

    // 2. Email Validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailVal) {
      this.showFieldError('email-error', 'Email address is required.');
      this.el.regEmail.classList.add('is-invalid');
      isValid = false;
    } else if (!emailRegex.test(emailVal)) {
      this.showFieldError('email-error', 'Please enter a valid email address (e.g., name@domain.com).');
      this.el.regEmail.classList.add('is-invalid');
      isValid = false;
    } else {
      this.el.regEmail.classList.add('is-valid');
    }

    // 3. Phone Validation
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{7,15}$/;
    const digitsOnly = phoneVal.replace(/\D/g, '');
    if (!phoneVal) {
      this.showFieldError('phone-error', 'Phone number is required.');
      this.el.regPhone.classList.add('is-invalid');
      isValid = false;
    } else if (!phoneRegex.test(phoneVal) || digitsOnly.length < 10) {
      this.showFieldError('phone-error', 'Please enter a valid phone number (minimum 10 digits).');
      this.el.regPhone.classList.add('is-invalid');
      isValid = false;
    } else {
      this.el.regPhone.classList.add('is-valid');
    }

    // 4. Participants Validation
    if (!participantsVal || participantsVal < 1 || participantsVal > 5) {
      this.showFieldError('participants-error', 'Number of participants must be between 1 and 5.');
      isValid = false;
    }

    // 5. Terms Validation
    if (!termsChecked) {
      this.showFieldError('terms-error', 'You must agree to the Terms of Service to reserve passes.');
      isValid = false;
    }

    if (!isValid) {
      this.showToast("Validation Error", "Please check the highlighted fields above.", "error");
      return;
    }

    // Check for duplicate registration in Local Storage
    const isDuplicate = this.registrations.some(
      r => r.email.toLowerCase() === emailVal.toLowerCase() && r.eventId === eventIdVal
    );

    if (isDuplicate) {
      this.showFieldError('email-error', 'You have already registered for this event with this email.');
      this.el.regEmail.classList.add('is-invalid');
      this.showToast(
        "Duplicate Registration",
        "A ticket for this event is already booked under this email address. View 'My Tickets' in the header.",
        "warning"
      );
      return;
    }

    // Get event details
    const selectedEvent = this.events.find(e => e.id === eventIdVal);
    const registrationId = `EVT-${Math.floor(100000 + Math.random() * 900000)}`;
    const totalPrice = selectedEvent.price * participantsVal;

    // Create Registration Record
    const newRegistration = {
      id: registrationId,
      eventId: selectedEvent.id,
      eventTitle: selectedEvent.title,
      eventCategory: selectedEvent.category,
      eventDate: selectedEvent.displayDate,
      eventVenue: `${selectedEvent.venue}, ${selectedEvent.city}`,
      eventImage: selectedEvent.image,
      name: nameVal,
      email: emailVal,
      phone: phoneVal,
      participants: participantsVal,
      totalPrice: totalPrice,
      registeredAt: new Date().toISOString()
    };

    // Save to Local Storage
    this.registrations.push(newRegistration);
    this.saveRegistrations();
    this.updateMyTicketsBadge();
    this.renderInPageRegistrations(); // Update in-page section as well

    // Show Success Ticket Modal
    this.showTicketConfirmation(newRegistration);

    // Launch confetti celebration!
    this.launchConfetti();

    // Toast notification
    this.showToast(
      "Registration Confirmed!",
      `Pass generated for ${selectedEvent.title}. Your Ticket ID is ${registrationId}.`,
      "success"
    );

    // Reset Form
    this.el.regForm.reset();
    this.participantsCount = 1;
    if (this.el.regParticipants) this.el.regParticipants.value = "1";
    this.clearFormErrors();
    this.populateRegistrationDropdown();
    this.updateRegistrationPreview(this.selectedEventId);
  }

  clearFormErrors() {
    const errorSpans = document.querySelectorAll('.error-msg');
    errorSpans.forEach(span => { span.textContent = ''; });

    const inputs = document.querySelectorAll('.form-input');
    inputs.forEach(inp => {
      inp.classList.remove('is-invalid', 'is-valid');
    });
  }

  showFieldError(elementId, message) {
    const errorEl = document.getElementById(elementId);
    if (errorEl) errorEl.textContent = message;
  }

  // --------------------------------------------------------------------------
  // 10. TICKET PASS GENERATOR MODAL
  // --------------------------------------------------------------------------
  showTicketConfirmation(reg) {
    const ticketEventName = document.getElementById('ticket-event-name');
    const ticketAttendee = document.getElementById('ticket-attendee-name');
    const ticketRegId = document.getElementById('ticket-reg-id');
    const ticketDateTime = document.getElementById('ticket-date-time');
    const ticketParticipants = document.getElementById('ticket-participants-count');
    const ticketVenue = document.getElementById('ticket-venue');
    const ticketQrText = document.getElementById('ticket-qr-code-text');

    if (ticketEventName) ticketEventName.textContent = reg.eventTitle;
    if (ticketAttendee) ticketAttendee.textContent = reg.name;
    if (ticketRegId) ticketRegId.textContent = reg.id;
    if (ticketDateTime) ticketDateTime.textContent = reg.eventDate;
    if (ticketParticipants) ticketParticipants.textContent = `${reg.participants} Attendee${reg.participants > 1 ? 's' : ''}`;
    if (ticketVenue) ticketVenue.textContent = reg.eventVenue;
    if (ticketQrText) ticketQrText.textContent = reg.id;

    this.openModal('ticket-confirmation-modal');
  }

  // --------------------------------------------------------------------------
  // 11. LOCAL STORAGE & MY REGISTRATIONS MANAGEMENT
  // --------------------------------------------------------------------------
  loadRegistrations() {
    try {
      const data = localStorage.getItem('nexora_registrations') || localStorage.getItem('eventora_registrations');
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Failed to parse registrations from localStorage:", e);
      return [];
    }
  }

  saveRegistrations() {
    try {
      localStorage.setItem('nexora_registrations', JSON.stringify(this.registrations));
    } catch (e) {
      console.error("Failed to save registrations to localStorage:", e);
    }
  }

  loadFavorites() {
    try {
      const data = localStorage.getItem('nexora_favorites') || localStorage.getItem('eventora_favorites');
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  saveFavorites() {
    try {
      localStorage.setItem('nexora_favorites', JSON.stringify(this.favorites));
    } catch (e) {
      console.error(e);
    }
  }

  toggleFavorite(eventId) {
    const idx = this.favorites.indexOf(eventId);
    const event = this.events.find(e => e.id === eventId);
    if (idx === -1) {
      this.favorites.push(eventId);
      this.showToast("Added to Wishlist", `"${event.title}" saved to your wishlist.`, "success");
    } else {
      this.favorites.splice(idx, 1);
      this.showToast("Removed from Wishlist", `"${event.title}" removed.`, "info");
    }
    this.saveFavorites();
    this.renderFeaturedEvents();
    this.renderExploreEvents();
  }

  updateMyTicketsBadge() {
    const count = this.registrations.length;
    if (this.el.ticketBadgeCount) this.el.ticketBadgeCount.textContent = count;
    if (this.el.mobileBadgeCount) this.el.mobileBadgeCount.textContent = count;
  }

  // Render dedicated In-Page section cards
  renderInPageRegistrations() {
    if (!this.el.inPageRegGrid) return;

    if (this.registrations.length === 0) {
      this.el.inPageRegGrid.style.display = 'none';
      if (this.el.inPageRegEmpty) this.el.inPageRegEmpty.style.display = 'block';
    } else {
      this.el.inPageRegGrid.style.display = 'grid';
      if (this.el.inPageRegEmpty) this.el.inPageRegEmpty.style.display = 'none';

      this.el.inPageRegGrid.innerHTML = this.registrations.map(reg => `
        <div class="in-page-ticket-card reveal-on-scroll">
          <div class="in-page-ticket-header">
            <img src="${reg.eventImage}" alt="${reg.eventTitle}" class="in-page-ticket-img">
            <div class="in-page-ticket-badges">
              <span class="in-page-badge"><i class="${this.getCategoryIcon(reg.eventCategory)}"></i> ${reg.eventCategory}</span>
              <span class="reg-status-badge"><i class="fa-solid fa-circle-check"></i> Confirmed Pass</span>
            </div>
          </div>
          <div class="in-page-ticket-body">
            <h4 class="in-page-ticket-title">${reg.eventTitle}</h4>
            <div class="in-page-ticket-meta">
              <div class="meta-field">
                <span class="meta-field-lbl">ATTENDEE</span>
                <span class="meta-field-val">${reg.name}</span>
              </div>
              <div class="meta-field">
                <span class="meta-field-lbl">TICKET ID</span>
                <span class="meta-field-val font-mono">${reg.id}</span>
              </div>
              <div class="meta-field">
                <span class="meta-field-lbl">DATE & TIME</span>
                <span class="meta-field-val">${reg.eventDate}</span>
              </div>
              <div class="meta-field">
                <span class="meta-field-lbl">PARTICIPANTS</span>
                <span class="meta-field-val">${reg.participants} Ticket${reg.participants > 1 ? 's' : ''}</span>
              </div>
            </div>
            <div class="in-page-ticket-actions">
              <button class="btn btn-primary btn-sm btn-block" onclick="app.viewStoredTicket('${reg.id}')">
                <i class="fa-solid fa-qrcode"></i> View E-Ticket Pass
              </button>
              <button class="btn btn-secondary btn-sm" onclick="app.cancelRegistration('${reg.id}')" title="Cancel Booking">
                <i class="fa-solid fa-trash-can text-danger"></i>
              </button>
            </div>
          </div>
        </div>
      `).join('');

      this.initScrollReveal();
    }
  }

  openMyRegistrationsModal() {
    if (!this.el.regListContainer) return;

    if (this.el.storedTicketsCounter) {
      this.el.storedTicketsCounter.innerHTML = `Total Registrations: <strong>${this.registrations.length}</strong>`;
    }

    if (this.registrations.length === 0) {
      this.el.regListContainer.style.display = 'none';
      if (this.el.myRegEmpty) this.el.myRegEmpty.style.display = 'block';
    } else {
      this.el.regListContainer.style.display = 'flex';
      if (this.el.myRegEmpty) this.el.myRegEmpty.style.display = 'none';

      this.el.regListContainer.innerHTML = this.registrations.map(reg => `
        <div class="registered-ticket-card">
          <div class="reg-card-left">
            <img src="${reg.eventImage}" alt="${reg.eventTitle}" class="reg-card-thumb">
            <div>
              <h4 class="reg-card-title">${reg.eventTitle}</h4>
              <div class="reg-card-meta">
                <span><i class="fa-solid fa-user"></i> ${reg.name}</span>
                <span><i class="fa-solid fa-users"></i> ${reg.participants} Ticket${reg.participants > 1 ? 's' : ''}</span>
                <span><i class="fa-solid fa-id-badge"></i> ${reg.id}</span>
                <span class="reg-status-badge"><i class="fa-solid fa-circle-check"></i> Confirmed</span>
              </div>
            </div>
          </div>
          <div class="reg-card-actions">
            <button class="btn btn-outline btn-sm" onclick="app.viewStoredTicket('${reg.id}')">
              <i class="fa-solid fa-qrcode"></i> View Pass
            </button>
            <button class="btn btn-secondary btn-sm" onclick="app.cancelRegistration('${reg.id}')" title="Cancel Booking">
              <i class="fa-solid fa-trash-can text-danger"></i> Cancel
            </button>
          </div>
        </div>
      `).join('');
    }

    this.openModal('my-registrations-modal');
  }

  viewStoredTicket(ticketId) {
    const reg = this.registrations.find(r => r.id === ticketId);
    if (!reg) return;
    this.closeModal('my-registrations-modal');
    this.showTicketConfirmation(reg);
  }

  cancelRegistration(ticketId) {
    if (confirm("Are you sure you want to cancel this event registration? This will revoke your ticket pass.")) {
      const idx = this.registrations.findIndex(r => r.id === ticketId);
      if (idx !== -1) {
        const removed = this.registrations.splice(idx, 1)[0];
        this.saveRegistrations();
        this.updateMyTicketsBadge();
        this.openMyRegistrationsModal(); // Re-render modal
        this.renderInPageRegistrations(); // Re-render in-page section
        this.showToast(
          "Registration Cancelled",
          `Pass for ${removed.eventTitle} was removed.`,
          "info"
        );
      }
    }
  }

  // --------------------------------------------------------------------------
  // 12. HOST AN EVENT MODAL & FORM
  // --------------------------------------------------------------------------
  handleHostFormSubmit(e) {
    e.preventDefault();

    const title = document.getElementById('host-title').value.trim();
    const date = document.getElementById('host-date').value;
    const venue = document.getElementById('host-venue').value.trim();
    const email = document.getElementById('host-email').value.trim();

    let valid = true;
    if (!title) {
      document.getElementById('host-title-error').textContent = 'Event Title is required.';
      valid = false;
    } else {
      document.getElementById('host-title-error').textContent = '';
    }

    if (!date) {
      document.getElementById('host-date-error').textContent = 'Date is required.';
      valid = false;
    } else {
      document.getElementById('host-date-error').textContent = '';
    }

    if (!venue) {
      document.getElementById('host-venue-error').textContent = 'Venue is required.';
      valid = false;
    } else {
      document.getElementById('host-venue-error').textContent = '';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      document.getElementById('host-email-error').textContent = 'Valid organizer email is required.';
      valid = false;
    } else {
      document.getElementById('host-email-error').textContent = '';
    }

    if (!valid) return;

    // Success response
    this.closeModal('host-modal');
    this.el.hostForm.reset();
    this.showToast(
      "Proposal Submitted!",
      `"${title}" has been submitted for review. Our curation team will contact you within 24 hours.`,
      "success"
    );
  }

  // --------------------------------------------------------------------------
  // 13. TOAST NOTIFICATION SYSTEM
  // --------------------------------------------------------------------------
  showToast(title, message, type = "info", duration = 4000) {
    if (!this.el.toastContainer) return;

    const icons = {
      success: "fa-solid fa-circle-check",
      error: "fa-solid fa-circle-exclamation",
      info: "fa-solid fa-circle-info",
      warning: "fa-solid fa-triangle-exclamation"
    };

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.setAttribute('role', 'status');

    toast.innerHTML = `
      <i class="${icons[type] || icons.info} toast-icon"></i>
      <div class="toast-content">
        <h5 class="toast-title">${title}</h5>
        <p class="toast-msg">${message}</p>
      </div>
      <button class="toast-close-btn" aria-label="Dismiss Notification">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <div class="toast-progress" style="animation-duration: ${duration}ms;"></div>
    `;

    // Close button click
    toast.querySelector('.toast-close-btn').addEventListener('click', () => {
      this.dismissToast(toast);
    });

    this.el.toastContainer.appendChild(toast);

    // Auto dismiss
    const timer = setTimeout(() => {
      this.dismissToast(toast);
    }, duration);

    toast._timer = timer;
  }

  dismissToast(toast) {
    if (!toast || toast._dismissed) return;
    toast._dismissed = true;
    clearTimeout(toast._timer);
    toast.classList.add('toast-out');
    toast.addEventListener('animationend', () => {
      toast.remove();
    });
  }

  // --------------------------------------------------------------------------
  // 14. MODAL MANAGEMENT UTILITIES
  // --------------------------------------------------------------------------
  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    // Check if any other modal is still open
    const openModals = document.querySelectorAll('.modal-backdrop.open');
    if (openModals.length === 0) {
      document.body.classList.remove('modal-open');
    }
  }

  // --------------------------------------------------------------------------
  // 15. SCROLL REVEAL & SCROLL SPY
  // --------------------------------------------------------------------------
  initScrollReveal() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: "0px 0px -30px 0px"
    });

    document.querySelectorAll('.reveal-on-scroll:not(.revealed)').forEach(el => {
      observer.observe(el);
    });
  }

  initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY + 120;

      sections.forEach(sec => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // 16. EVENT LISTENERS SETUP
  // --------------------------------------------------------------------------
  initEventListeners() {
    // Window Scroll (Sticky Header & Back-to-Top)
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;

      // Header shadow/blur
      if (scrollY > 40) {
        this.el.header?.classList.add('scrolled');
      } else {
        this.el.header?.classList.remove('scrolled');
      }

      // Back-to-top button
      if (scrollY > 450) {
        this.el.backToTopBtn?.classList.add('visible');
      } else {
        this.el.backToTopBtn?.classList.remove('visible');
      }
    });

    // Back to top click
    this.el.backToTopBtn?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Theme toggles (Desktop header & Mobile drawer)
    this.el.themeToggle?.addEventListener('click', () => this.toggleTheme());
    document.getElementById('mobile-theme-toggle')?.addEventListener('click', () => this.toggleTheme());

    // Mobile Hamburger Drawer
    this.el.mobileToggle?.addEventListener('click', () => {
      this.el.mobileDrawer?.classList.add('open');
      this.el.mobileDrawer?.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
    });

    this.el.mobileDrawerClose?.addEventListener('click', () => {
      this.el.mobileDrawer?.classList.remove('open');
      this.el.mobileDrawer?.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
    });

    // Close mobile drawer on link click
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        this.el.mobileDrawer?.classList.remove('open');
        this.el.mobileDrawer?.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
      });
    });

    // My Tickets Modal Triggers
    this.el.myTicketsBtn?.addEventListener('click', () => this.openMyRegistrationsModal());
    this.el.mobileTicketsBtn?.addEventListener('click', () => {
      this.el.mobileDrawer?.classList.remove('open');
      this.openMyRegistrationsModal();
    });

    // Host Event Modal Triggers
    this.el.hostHeaderBtn?.addEventListener('click', () => this.openModal('host-modal'));
    this.el.heroHostBtn?.addEventListener('click', () => this.openModal('host-modal'));
    this.el.mobileHostBtn?.addEventListener('click', () => {
      this.el.mobileDrawer?.classList.remove('open');
      this.openModal('host-modal');
    });

    // Close Modal Buttons
    this.el.closeDetailsModal?.addEventListener('click', () => this.closeModal('event-details-modal'));
    this.el.modalCloseSecondary?.addEventListener('click', () => this.closeModal('event-details-modal'));
    this.el.closeTicketModal?.addEventListener('click', () => this.closeModal('ticket-confirmation-modal'));
    this.el.closeRegModal?.addEventListener('click', () => this.closeModal('my-registrations-modal'));
    this.el.closeHostModal?.addEventListener('click', () => this.closeModal('host-modal'));

    // Print / PDF Button
    this.el.printTicketBtn?.addEventListener('click', () => {
      window.print();
    });

    this.el.viewAllTicketsBtn?.addEventListener('click', () => {
      this.closeModal('ticket-confirmation-modal');
      this.openMyRegistrationsModal();
    });

    // Close on backdrop click
    document.querySelectorAll('.modal-backdrop').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('open');
          modal.setAttribute('aria-hidden', 'true');
          document.body.classList.remove('modal-open');
        }
      });
    });

    // Escape key closes modals
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-backdrop.open').forEach(modal => {
          modal.classList.remove('open');
          modal.setAttribute('aria-hidden', 'true');
        });
        this.el.mobileDrawer?.classList.remove('open');
        document.body.classList.remove('modal-open');
      }
    });

    // Hero Search Form
    this.el.heroSearchForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = this.el.heroSearchInput?.value.trim() || "";
      const loc = this.el.heroLocationInput?.value.trim() || "";

      this.searchQuery = query;
      this.locationQuery = loc;

      if (this.el.eventSearchInput) {
        this.el.eventSearchInput.value = query;
        if (this.el.searchClearBtn) {
          this.el.searchClearBtn.style.display = query ? 'block' : 'none';
        }
      }

      this.renderExploreEvents();

      // Scroll to explore section
      const exploreSection = document.getElementById('explore');
      if (exploreSection) {
        exploreSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    // Explore Keyword Search
    this.el.eventSearchInput?.addEventListener('input', (e) => {
      this.searchQuery = e.target.value;
      if (this.el.searchClearBtn) {
        this.el.searchClearBtn.style.display = this.searchQuery ? 'block' : 'none';
      }
      this.renderExploreEvents();
    });

    this.el.searchClearBtn?.addEventListener('click', () => {
      if (this.el.eventSearchInput) {
        this.el.eventSearchInput.value = '';
        this.searchQuery = '';
        this.el.searchClearBtn.style.display = 'none';
        this.renderExploreEvents();
      }
    });

    // Explore Sort Select
    this.el.eventSortSelect?.addEventListener('change', (e) => {
      this.sortBy = e.target.value;
      this.renderExploreEvents();
    });

    // Category Filter Pills
    const pills = document.querySelectorAll('.filter-pill');
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => {
          p.classList.remove('active');
          p.setAttribute('aria-selected', 'false');
        });
        pill.classList.add('active');
        pill.setAttribute('aria-selected', 'true');

        this.selectedCategory = pill.getAttribute('data-category');
        this.renderExploreEvents();
      });
    });

    // Categories section cards (clickable)
    document.querySelectorAll('.category-card').forEach(card => {
      card.addEventListener('click', () => {
        const cat = card.getAttribute('data-category');
        this.filterByCategory(cat);
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const cat = card.getAttribute('data-category');
          this.filterByCategory(cat);
        }
      });
    });

    // Reset Filters Buttons
    this.el.emptyResetBtn?.addEventListener('click', () => this.resetAllFilters());
    this.el.resetAllFiltersBtn?.addEventListener('click', () => this.resetAllFilters());

    // Registration Event Selection Change
    this.el.regEventSelect?.addEventListener('change', (e) => {
      this.updateRegistrationPreview(e.target.value);
    });

    // Participants Stepper
    this.el.stepperMinus?.addEventListener('click', () => {
      if (this.participantsCount > 1) {
        this.participantsCount--;
        if (this.el.regParticipants) this.el.regParticipants.value = this.participantsCount;
        this.updateRegistrationPreview(this.selectedEventId);
      }
    });

    this.el.stepperPlus?.addEventListener('click', () => {
      if (this.participantsCount < 5) {
        this.participantsCount++;
        if (this.el.regParticipants) this.el.regParticipants.value = this.participantsCount;
        this.updateRegistrationPreview(this.selectedEventId);
      } else {
        this.showToast("Order Limit", "Maximum 5 tickets allowed per registration order.", "warning");
      }
    });

    // Real-time input validation clear
    ['reg-name', 'reg-email', 'reg-phone'].forEach(id => {
      const input = document.getElementById(id);
      input?.addEventListener('input', () => {
        input.classList.remove('is-invalid');
        const errSpan = document.getElementById(`${id.replace('reg-', '')}-error`);
        if (errSpan) errSpan.textContent = '';
      });
    });

    // Registration Form Submit
    this.el.regForm?.addEventListener('submit', (e) => this.handleRegistrationSubmit(e));

    // Host Form Submit
    this.el.hostForm?.addEventListener('submit', (e) => this.handleHostFormSubmit(e));

    // Newsletter Form
    this.el.newsletterForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = this.el.newsletterEmail?.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email || !emailRegex.test(email)) {
        if (this.el.newsletterMsg) {
          this.el.newsletterMsg.textContent = "Please enter a valid email address.";
          this.el.newsletterMsg.style.color = "var(--accent-rose)";
        }
        return;
      }

      this.el.newsletterForm.reset();
      if (this.el.newsletterMsg) {
        this.el.newsletterMsg.textContent = "🎉 You're on the VIP list! Welcome aboard.";
        this.el.newsletterMsg.style.color = "var(--accent-emerald)";
      }

      this.showToast(
        "Subscribed!",
        "You've been added to the NEXORA VIP announcement list.",
        "success"
      );
    });
  }

  // --------------------------------------------------------------------------
  // 17. HELPER ACTIONS
  // --------------------------------------------------------------------------
  filterByCategory(catName) {
    this.selectedCategory = catName;

    // Update Pills
    const pills = document.querySelectorAll('.filter-pill');
    pills.forEach(p => {
      if (p.getAttribute('data-category') === catName) {
        p.classList.add('active');
        p.setAttribute('aria-selected', 'true');
      } else {
        p.classList.remove('active');
        p.setAttribute('aria-selected', 'false');
      }
    });

    this.renderExploreEvents();

    // Scroll to explore
    const exploreSection = document.getElementById('explore');
    if (exploreSection) {
      exploreSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  resetAllFilters() {
    this.selectedCategory = "All";
    this.searchQuery = "";
    this.locationQuery = "";
    this.sortBy = "date-asc";

    if (this.el.eventSearchInput) this.el.eventSearchInput.value = "";
    if (this.el.searchClearBtn) this.el.searchClearBtn.style.display = "none";
    if (this.el.eventSortSelect) this.el.eventSortSelect.value = "date-asc";
    if (this.el.heroSearchInput) this.el.heroSearchInput.value = "";
    if (this.el.heroLocationInput) this.el.heroLocationInput.value = "";

    // Reset pills
    const pills = document.querySelectorAll('.filter-pill');
    pills.forEach(p => {
      if (p.getAttribute('data-category') === "All") {
        p.classList.add('active');
        p.setAttribute('aria-selected', 'true');
      } else {
        p.classList.remove('active');
        p.setAttribute('aria-selected', 'false');
      }
    });

    this.renderExploreEvents();
  }

  // --------------------------------------------------------------------------
  // 18. ANIMATED NUMBER COUNTERS (About Metrics Section)
  // --------------------------------------------------------------------------
  initAnimatedCounters() {
    const counters = document.querySelectorAll('.counter[data-target]');
    if (counters.length === 0) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-target'), 10);
          this.animateCounter(el, 0, target, 1800);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.3 });

    counters.forEach(c => {
      c.textContent = '0';
      observer.observe(c);
    });
  }

  animateCounter(element, start, end, duration) {
    element.classList.add('counting');
    const startTime = performance.now();

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (end - start) * eased);

      element.textContent = current.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        element.textContent = end.toLocaleString();
        element.classList.remove('counting');
      }
    };

    requestAnimationFrame(step);
  }

  // --------------------------------------------------------------------------
  // 21. CONFETTI CELEBRATION ON REGISTRATION
  // --------------------------------------------------------------------------
  launchConfetti() {
    const canvas = document.createElement('canvas');
    canvas.id = 'confetti-canvas';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confettiPieces = [];
    const colors = ['#8b5cf6', '#06b6d4', '#ec4899', '#f59e0b', '#10b981', '#f43f5e', '#3b82f6'];
    const PIECE_COUNT = 150;

    for (let i = 0; i < PIECE_COUNT; i++) {
      confettiPieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        w: Math.random() * 10 + 5,
        h: Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 4,
        vy: Math.random() * 4 + 2,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 8,
        opacity: 1
      });
    }

    const startTime = Date.now();
    const DURATION = 3000;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      confettiPieces.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05;
        p.rotation += p.rotSpeed;

        if (elapsed > DURATION - 800) {
          p.opacity = Math.max(0, 1 - (elapsed - (DURATION - 800)) / 800);
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });

      if (elapsed < DURATION) {
        requestAnimationFrame(animate);
      } else {
        canvas.remove();
      }
    };

    requestAnimationFrame(animate);
  }

  // --------------------------------------------------------------------------
  // 22. PARALLAX FLOAT ON HERO VISUAL
  // --------------------------------------------------------------------------
  initParallax() {
    const heroVisual = document.querySelector('.hero-visual');
    if (!heroVisual) return;

    document.addEventListener('mousemove', (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const moveX = (e.clientX - centerX) / centerX * 12;
      const moveY = (e.clientY - centerY) / centerY * 8;

      heroVisual.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    document.addEventListener('mouseleave', () => {
      heroVisual.style.transform = 'translate(0, 0)';
    });
  }

  // --------------------------------------------------------------------------
  // 23. BACK-TO-TOP SCROLL PROGRESS RING
  // --------------------------------------------------------------------------
  initBackToTopProgress() {
    const btn = this.el.backToTopBtn;
    if (!btn) return;

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('progress-ring');
    svg.setAttribute('viewBox', '0 0 50 50');

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '25');
    circle.setAttribute('cy', '25');
    circle.setAttribute('r', '22');
    const circumference = 2 * Math.PI * 22;
    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;

    svg.appendChild(circle);
    btn.appendChild(svg);

    window.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = scrollTop / (scrollHeight || 1);
      const offset = circumference - (scrollPercent * circumference);
      circle.style.strokeDashoffset = offset;
    });
  }
}

// ----------------------------------------------------------------------------
// 24. INITIALIZE APPLICATION ON DOM READY
// ----------------------------------------------------------------------------
let app;
const EventoraApp = NexoraApp; // Compatibility alias
document.addEventListener('DOMContentLoaded', () => {
  app = new NexoraApp();
  // Expose app to window for inline onclick handlers if needed
  window.app = app;
  window.NexoraApp = NexoraApp;
  window.EventoraApp = EventoraApp;
});
