import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Users, Terminal, CheckCircle2, LayoutGrid, Info } from 'lucide-react';

const projectMetadata = {
  "Digital Life Lessons": {
    targetAudience: "Online Community & Content Creators",
    purpose: "A platform built for writers, readers, and educators to share life lessons and learn from real-world experiences, with monetization controls.",
    keyFeatures: [
      "Role-based access controls (Admin, Free & Premium users)",
      "Secure payments via Stripe integration for premium subscriptions",
      "Interactive user engagement (likes, comments, favorites)",
      "Advanced search, multi-category filters, and clean pagination layout"
    ],
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
    stackBreakdown: [
      { category: "Frontend Engine", tech: "React.js (Vite)" },
      { category: "Styling Framework", tech: "Tailwind CSS" },
      { category: "Routing Solution", tech: "React Router" },
      { category: "Icon Assets", tech: "Lucide & React Icons" }
    ]
  }
};

const ProjectCard = ({ project, index, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1]
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-gradient-to-b from-[#12121a]/95 to-[#0b0b0f]/98 border border-white/[0.08] hover:border-white/[0.18] rounded-3xl p-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 overflow-hidden flex flex-col h-full"
      whileHover={{ y: -6 }}
    >
      {/* Accent Radial Background Glow on Hover */}
      <div className="absolute -right-24 -top-24 w-48 h-48 rounded-full blur-[80px] z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-cyan-500/10" />

      {/* Inner Container: Inset Double-Glass */}
      <div className="relative border border-white/[0.04] bg-[#07070a]/40 rounded-2xl overflow-hidden z-10 flex flex-col h-full flex-grow">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden rounded-xl m-1.5 border border-white/[0.05] flex-shrink-0">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.06 : 1,
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-transparent to-transparent opacity-80" />

          {/* Category Badge */}
          <div className="absolute top-3 right-3 px-2.5 py-1 bg-black/60 border border-white/10 text-cyan-400 backdrop-blur-md text-[10px] font-mono tracking-wider font-bold rounded-full uppercase flex items-center shadow-md">
            <span>{project.category}</span>
          </div>
        </div>

        {/* Content Details */}
        <div className="p-5 flex flex-col justify-between flex-grow">
          <div>
            {/* Title */}
            <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-cyan-400 transition-colors duration-300">
              {project.title}
            </h3>
            
            {/* Description */}
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.techStack && project.techStack.slice(0, 3).map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 bg-white/[0.03] border border-white/[0.05] text-slate-300 text-[10px] font-medium rounded"
                >
                  {tech}
                </span>
              ))}
              {project.techStack && project.techStack.length > 3 && (
                <span className="px-2 py-0.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold rounded">
                  +{project.techStack.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Direct Actions at Bottom */}
          <div className="flex items-center gap-2 mt-auto pt-4 border-t border-white/[0.04]">
            {/* View Details Button */}
            <button
              onClick={() => onViewDetails(project)}
              className="px-3.5 py-2 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-slate-300 hover:text-white rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer"
            >
              <Info className="w-3.5 h-3.5 text-cyan-400" />
              Details
            </button>

            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-grow py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 hover:shadow-[0_10px_20px_rgba(6,182,212,0.25)] cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live Link
              </a>
            )}
            
            {project.category === 'Full Stack' ? (
              <>
                {project.gitHubClient && (
                  <a
                    href={project.gitHubClient}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-slate-300 rounded-xl text-xs font-medium transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer"
                    title="Client Code"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.gitHubServer && (
                  <a
                    href={project.gitHubServer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-slate-300 rounded-xl text-xs font-medium transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer"
                    title="Server Code"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                )}
              </>
            ) : (
              project.gitHubRepo && (
                <a
                  href={project.gitHubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-slate-300 rounded-xl text-xs font-medium transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer"
                  title="Code"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
