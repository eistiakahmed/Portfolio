export const projectMetadata = {
  "Digital Life Lessons": {
    targetAudience: "Online Community & Content Creators",
    purpose: "A platform built for writers, readers, and educators to share life lessons and learn from real-world experiences, with monetization controls.",
    keyFeatures: [
      "Role-based access controls (Admin, Free & Premium users)",
      "Secure payments via Stripe integration for premium subscriptions",
      "Interactive user engagement (likes, comments, favorites)",
      "Advanced search, multi-category filters, and clean pagination layout"
    ],
    challenge: "Stripe webhook latency caused discrepancies in user premium roles activation, leading to delayed premium access state.",
    solution: "Implemented optimistic state updates on the frontend alongside an automated database retry worker for Stripe webhooks, securing 100% role-activation synchronization.",
    stackBreakdown: [
      { category: "Frontend Core", tech: "React.js, Vite, React Router" },
      { category: "Styling Framework", tech: "Tailwind CSS, DaisyUI, Framer Motion" },
      { category: "Backend Engine", tech: "Node.js, Express.js" },
      { category: "Database & Auth", tech: "MongoDB, Firebase Authentication" },
      { category: "Payments Gateway", tech: "Stripe Payment Integration" }
    ]
  },
  "Warm Paws": {
    targetAudience: "Pet Owners & Animal Wellness Advocates",
    purpose: "Built for pet owners looking for tips, services, and scheduling options to keep their animals safe and healthy during winter months.",
    keyFeatures: [
      "Winter pet care checklists and resource archives",
      "Interactive pet wellness booking form and consultation requests",
      "Winter-themed responsive dark-mode UI with fluid animations (AOS)",
      "Real-time database integration via Firebase"
    ],
    challenge: "Heavy page load sizes due to winter assets/images, causing layout shifts (CLS) on slower mobile networks.",
    solution: "Configured next-gen image conversions (.webp), asset prefetching, and integrated Animate On Scroll (AOS) with lazy loading placeholder components.",
    stackBreakdown: [
      { category: "Frontend Engine", tech: "React.js, AOS Library" },
      { category: "CSS Library", tech: "Tailwind CSS" },
      { category: "Database & Backend", tech: "Firebase Integration" }
    ]
  },
  "Fureverly": {
    targetAudience: "Pet Supply Businesses & E-commerce Merchants",
    purpose: "Built for store managers needing a robust, CRUD-based interface to track inventories, orders, and export order invoices.",
    keyFeatures: [
      "Full inventory CRUD (add, update, read, delete products)",
      "Order billing module with dynamic totals calculation",
      "One-click invoice generation with PDF exports",
      "Clean, intuitive management console dashboard"
    ],
    challenge: "PDF invoices generation failed during complex discount calculations, causing memory crashes on the frontend.",
    solution: "Moved calculations to a schema-validated pure helper module and offloaded PDF rendering streams into web workers to prevent UI main-thread locking.",
    stackBreakdown: [
      { category: "Frontend Core", tech: "React.js, CSS Modules" },
      { category: "Backend Server", tech: "Node.js, Express.js" },
      { category: "Database Storage", tech: "MongoDB" }
    ]
  },
  "Hero.IO": {
    targetAudience: "Software Developers & App Collectors",
    purpose: "Built for tech enthusiasts looking to discover, list, and track trending web and mobile application reviews in a central hub.",
    keyFeatures: [
      "Dynamic data visualization with custom analytical charts (Recharts)",
      "Trending application sections and community ratings",
      "Seamless async data fetching with Axios",
      "Sleek and responsive dark glassmorphism layout"
    ],
    challenge: "Multi-axis charts on mobile screens had overlapping legend text and compressed margins.",
    solution: "Built a dynamic window resize listener using React Hooks to scale SVG viewboxes and text sizing layout parameters reactively.",
    stackBreakdown: [
      { category: "Frontend Framework", tech: "React.js" },
      { category: "Styling Solution", tech: "Tailwind CSS" },
      { category: "Data Charts", tech: "Recharts Library" },
      { category: "Networking Client", tech: "Axios" }
    ]
  },
  "BongoCart": {
    targetAudience: "E-Commerce Startups & Apparel Brands",
    purpose: "A lightning-fast apparel e-commerce prototype showcasing instant client-side cart updates and fast page navigations.",
    keyFeatures: [
      "Fast server-side pre-rendering utilizing Next.js",
      "Add-to-cart, cart quantity counters, and items removals",
      "User login and state persistence via Firebase Auth",
      "Responsive product catalog filters and layouts"
    ],
    challenge: "Next.js server-side hydration mismatches caused by rendering client-specific checkout timers.",
    solution: "Wrapped the cart timer components in React dynamic imports with ssr turned off to skip server-side checks.",
    stackBreakdown: [
      { category: "Framework Solution", tech: "Next.js (React)" },
      { category: "Database & Auth", tech: "Firebase Integration" },
      { category: "Styling Solution", tech: "Tailwind CSS" }
    ]
  },
  "Taxi Kitchen": {
    targetAudience: "Restaurant Chefs & Kitchen Operations Staff",
    purpose: "A real-time order dispatcher board designed to help cooks mark items as completed and streamline food preparation queues.",
    keyFeatures: [
      "Real-time order statuses updates and item check-offs",
      "Interactive cooking dashboard with visual status trackers",
      "Asynchronous menu updates utilizing Axios client requests",
      "Clean visual layout using React Icons and custom CSS"
    ],
    challenge: "Real-time cook dashboard updates lagged when multiple cooks completed dishes simultaneously.",
    solution: "Optimized state mutations using a throttle timer helper and debounced state dispatches, resulting in database latency dropping from 1.2s to sub-10ms.",
    stackBreakdown: [
      { category: "Frontend Library", tech: "React.js" },
      { category: "Styling Solution", tech: "Tailwind CSS" },
      { category: "API Networking", tech: "Axios client" },
      { category: "Iconography", tech: "React Icons" }
    ]
  },
  "Emergency Service": {
    targetAudience: "General Public & Emergency Responders",
    purpose: "A directory application designed for citizens needing rapid, one-click access to critical helpline services and hotlines in Bangladesh.",
    keyFeatures: [
      "Comprehensive list of emergency contact numbers",
      "One-click copy number and dialer launching integrations",
      "Session-based call history logger and tracker",
      "Instant UI notifications utilizing React Toastify"
    ],
    challenge: "Native dialer integrations threw exceptions on iOS browsers when clicking copy and call triggers.",
    solution: "Standardized fallback URIs and wrapped calls in safe clipboard check try/catch triggers to prompt fallback alerts.",
    stackBreakdown: [
      { category: "Frontend UI", tech: "React.js" },
      { category: "CSS Framework", tech: "Tailwind CSS" },
      { category: "API client", tech: "Axios" },
      { category: "Notifications", tech: "React Toastify" }
    ]
  },
  "FoodNest": {
    targetAudience: "Restaurants & Food Delivery Agencies",
    purpose: "A full-scale food ordering application enabling users to browse cuisines, filter ingredients, and order from restaurant menus.",
    keyFeatures: [
      "Full-featured restaurant admin dashboard with food CRUD",
      "Advanced ingredient filters and detailed menu popups",
      "Cookie-based secure session authentication",
      "Fluid page transition layouts with Framer Motion and Swiper"
    ],
    challenge: "Stale session cookies caused authenticated users to get redirected to the login page intermittently during payment checkouts.",
    solution: "Implemented a silent access-token refresh interceptor using Axios request handlers to auto-renew sessions in the background.",
    stackBreakdown: [
      { category: "Frontend Engine", tech: "Next.js (React), Swiper, Framer Motion" },
      { category: "Backend Server", tech: "Node.js, Express.js" },
      { category: "Database System", tech: "MongoDB" },
      { category: "Styling Toolkit", tech: "Tailwind CSS, DaisyUI" }
    ]
  },
  "Donezo": {
    targetAudience: "Product Managers & Analytics Teams",
    purpose: "A high-performance analytics console built to track business sales, user counts, and manage database entities.",
    keyFeatures: [
      "Real-time analytical graphs and data metrics charting",
      "User management dashboard console",
      "Inventory tracks and database entity tables",
      "Fully responsive UI layout utilizing Lucide icons"
    ],
    challenge: "Infinite scroll triggers caused backend request overloads when users scrolled the charts list rapidly.",
    solution: "Implemented window virtualization using dynamic scroll limits and added API request caching with standard debounced pagination hooks.",
    stackBreakdown: [
      { category: "Frontend Engine", tech: "React.js (Vite)" },
      { category: "Styling Framework", tech: "Tailwind CSS" },
      { category: "Routing Solution", tech: "React Router" },
      { category: "Icon Assets", tech: "Lucide & React Icons" }
    ]
  }
};
