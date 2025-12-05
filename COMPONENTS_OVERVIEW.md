# 🎨 Components Overview

Visual guide to all interactive components and their features.

---

## 🖱️ CustomCursor

**Location:** `src/components/ui/CustomCursor.jsx`

**What it does:**
- Replaces default cursor with custom animated cursor
- Two-layer design: inner dot + outer ring
- Expands when hovering over interactive elements
- Smooth spring physics animation
- Automatically disabled on mobile devices

**Visual Effect:**
```
Normal State:        Hover State:
    ●                   ⚫
   ( )                 (   )
```

**Usage:**
```jsx
<CustomCursor />
```

**Customization:**
- Change colors: Update `bg-blue-500` classes
- Adjust size: Modify `w-4 h-4` and `w-8 h-8`
- Change animation: Adjust `stiffness` and `damping`

---

## 📊 ScrollProgress

**Location:** `src/components/ui/ScrollProgress.jsx`

**What it does:**
- Shows scroll progress at top of page
- Gradient color bar (blue → purple → pink)
- Smooth spring animation
- Tracks scroll position in real-time

**Visual Effect:**
```
[████████░░░░░░░░░░] 40% scrolled
```

**Usage:**
```jsx
<ScrollProgress />
```

**Customization:**
- Change gradient: Update `from-blue-500 via-purple-500 to-pink-500`
- Adjust height: Modify `h-1`
- Change animation: Adjust spring settings

---

## ✨ ParticlesBackground

**Location:** `src/components/ui/ParticlesBackground.jsx`

**What it does:**
- Canvas-based particle animation
- Particles move randomly
- Nearby particles connect with lines
- Responsive to window resize
- Low performance impact

**Visual Effect:**
```
    ●     ●
     \   /
      \ /
   ●---●---●
      / \
     /   \
    ●     ●
```

**Usage:**
```jsx
<ParticlesBackground />
```

**Customization:**
- Particle count: Adjust calculation in `initParticles()`
- Colors: Change `rgba(59, 130, 246, ...)` values
- Connection distance: Modify `distance < 100`
- Speed: Adjust `speedX` and `speedY` ranges

---

## 🎴 ProjectCard

**Location:** `src/components/ui/ProjectCard.jsx`

**What it does:**
- Interactive project showcase card
- Image zooms on hover
- Shows action buttons on hover
- Animated tech stack tags
- Category badge
- Animated border effect

**Visual Effect:**
```
┌─────────────────┐
│   [Category]    │
│                 │
│   Project Img   │ ← Zooms on hover
│                 │
├─────────────────┤
│ Project Title   │
│ Description...  │
│ [React] [Node]  │ ← Animated tags
└─────────────────┘
```

**Props:**
```jsx
<ProjectCard 
  project={{
    title: 'Project Name',
    description: 'Description',
    image: 'image.jpg',
    category: 'Web App',
    technologies: ['React', 'Node'],
    liveUrl: 'https://...',
    githubUrl: 'https://...'
  }}
  index={0}
/>
```

**Hover Effects:**
- Image scales to 1.1x
- Overlay fades in
- Action buttons appear
- Border highlights
- Title shifts right

---

## 🎯 SkillCard

**Location:** `src/components/ui/SkillCard.jsx`

**What it does:**
- Displays skill with icon
- Animated progress bar
- Icon rotates on hover
- Gradient background fade
- Shine effect sweep
- Floating particles on hover

**Visual Effect:**
```
┌─────────────┐
│    [Icon]   │ ← Rotates on hover
│             │
│   React     │
│             │
│ ████░░░ 90% │ ← Animated progress
└─────────────┘
```

**Props:**
```jsx
<SkillCard 
  skill={{
    name: 'React',
    icon: 'react.png',
    level: 90
  }}
  index={0}
/>
```

**Hover Effects:**
- Card lifts up (-10px)
- Icon rotates and scales
- Background gradient appears
- Shine effect sweeps across
- Particles float away

---

## 🔘 AnimatedButton

**Location:** `src/components/ui/AnimatedButton.jsx`

**What it does:**
- Reusable button with animations
- Multiple style variants
- Ripple effect on hover
- Shine sweep effect
- Icon rotation
- Scale on hover/tap

**Variants:**
```
Primary:   [  Button  ] ← Gradient background
Secondary: [  Button  ] ← White/dark with border
Outline:   [  Button  ] ← Transparent with border
Ghost:     [  Button  ] ← Minimal style
```

**Usage:**
```jsx
<AnimatedButton 
  variant="primary"
  icon={Send}
  href="#contact"
>
  Contact Me
</AnimatedButton>
```

**Effects:**
- Hover: Scale 1.05x, shadow increases
- Tap: Scale 0.95x
- Ripple: Expands from center
- Shine: Sweeps left to right

---

## 📦 SectionWrapper

**Location:** `src/components/ui/SectionWrapper.jsx`

**What it does:**
- Wraps sections with scroll animations
- 5 animation types available
- Viewport detection
- Animate once or repeat
- Configurable delay

**Animation Types:**
```
fadeUp:     ↑ Fade in from bottom
fadeIn:     ○ Simple fade
slideLeft:  ← Slide from left
slideRight: → Slide from right
scale:      ⊕ Scale from center
```

**Usage:**
```jsx
<SectionWrapper 
  id="about"
  animationType="fadeUp"
  delay={0.2}
>
  <YourContent />
</SectionWrapper>
```

---

## 🌊 ParallaxSection

**Location:** `src/components/ui/ParallaxSection.jsx`

**What it does:**
- Creates parallax scrolling effect
- Elements move at different speeds
- Opacity fades based on scroll
- Configurable speed

**Visual Effect:**
```
Scroll Down ↓

Background: Moves slowly
Foreground: Moves faster
```

**Usage:**
```jsx
<ParallaxSection speed={0.5}>
  <img src="background.jpg" />
</ParallaxSection>
```

**Speed Values:**
- `0.5` = Slow (background)
- `1.0` = Normal
- `1.5` = Fast (foreground)

---

## ⏳ LoadingAnimation

**Location:** `src/components/ui/LoadingAnimation.jsx`

**What it does:**
- Shows on page load
- Rotating logo animation
- Progress bar with gradient
- Percentage counter
- Smooth fade-out

**Visual Effect:**
```
    ┌─────┐
    │  ⟳  │ ← Rotating logo
    └─────┘
    
[████████░░] 80%
Loading... 80%
```

**Usage:**
```jsx
<LoadingAnimation />
```

**Customization:**
- Duration: Adjust interval timing
- Logo: Replace with your logo
- Colors: Update gradient classes

---

## 🎭 Enhanced Hero

**Location:** `src/components/sections/Hero.jsx`

**Features:**
- GSAP letter-by-letter animation on title
- Pulsing availability badge
- Floating skill badges (React, Fast, Design)
- Animated statistics counters
- Interactive buttons with effects
- Gradient text
- Profile image with border

**Animations:**
1. Title letters animate in with rotation
2. Availability badge pulses
3. Skill badges float at different speeds
4. Stats count up on mount
5. Buttons have ripple and shine effects

---

## 🧭 Enhanced Navbar

**Location:** `src/components/layout/Navbar.jsx`

**Features:**
- Scroll-triggered background blur
- Active section highlighting
- Smooth underline on hover
- Animated logo rotation
- Dark mode toggle with icon transition
- Mobile menu with staggered items
- Sticky positioning

**Effects:**
1. Background blurs when scrolled
2. Active section gets highlighted background
3. Hover shows animated underline
4. Logo rotates continuously
5. Dark mode icon rotates on toggle
6. Mobile menu items stagger in

---

## 🎨 Enhanced Projects

**Location:** `src/components/sections/ProjectsEnhanced.jsx`

**Features:**
- Section header with badge
- Grid layout (1/2/3 columns)
- ProjectCard components
- "View All" button
- Staggered card animations

**Layout:**
```
┌─────────────────────────────┐
│      Featured Projects      │
├─────────┬─────────┬─────────┤
│ Card 1  │ Card 2  │ Card 3  │
├─────────┼─────────┼─────────┤
│ Card 4  │ Card 5  │ Card 6  │
└─────────┴─────────┴─────────┘
```

---

## 🎯 Enhanced Skills

**Location:** `src/components/sections/SkillsEnhanced.jsx`

**Features:**
- Technical skills grid
- Soft skills section
- Statistics cards
- Progress bars
- Hover effects

**Layout:**
```
┌─────────────────────────────┐
│    Skills & Technologies    │
├─────────────────────────────┤
│   Technical Skills Grid     │
│  [React] [JS] [HTML] [CSS]  │
├─────────────────────────────┤
│      Soft Skills Row        │
│  [Problem] [Comm] [Team]    │
├─────────────────────────────┤
│        Statistics           │
│  [12+] [10+] [1yr] [5+]    │
└─────────────────────────────┘
```

---

## 📧 Enhanced Contact

**Location:** `src/components/sections/ContactEnhanced.jsx`

**Features:**
- Contact information cards
- Interactive form
- Input animations
- Submit button with states
- Decorative elements

**Layout:**
```
┌──────────────┬──────────────┐
│ Contact Info │ Contact Form │
│              │              │
│ [Email]      │ Name: ___    │
│ [Phone]      │ Email: ___   │
│ [Location]   │ Message: ___ │
│              │              │
│ [Available]  │ [Send] ──→   │
└──────────────┴──────────────┘
```

**Form States:**
- Normal: "Send Message"
- Submitting: Loading animation
- Success: "Message Sent!" with checkmark

---

## 🦶 Enhanced Footer

**Location:** `src/components/layout/FooterEnhanced.jsx`

**Features:**
- Three-column layout
- Brand section
- Quick links
- Social icons
- Scroll to top button
- Floating gradient orbs
- Animated divider

**Layout:**
```
┌─────────┬─────────┬─────────┐
│  Brand  │  Links  │ Social  │
│         │         │         │
│ Name    │ About   │ [Git]   │
│ Desc    │ Skills  │ [Link]  │
│         │ Contact │ [Mail]  │
├─────────┴─────────┴─────────┤
│  © 2024 Made with ❤️  [↑]  │
└───────────────────────────────┘
```

**Effects:**
- Social icons bounce on hover
- Links shift right on hover
- Scroll button lifts on hover
- Heart icon pulses
- Orbs float in background

---

## 🎨 Color Scheme

**Current Gradients:**
```
Primary:   Blue → Purple → Pink
Secondary: Green → Teal → Blue
Accent:    Orange → Red → Pink
```

**Tailwind Classes:**
```jsx
// Primary gradient
from-blue-600 via-purple-600 to-pink-600

// Text gradient
bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text

// Background gradient
bg-gradient-to-br from-gray-50 to-gray-100
```

---

## 📱 Responsive Breakpoints

```
Mobile:    < 768px   (1 column)
Tablet:    768-1024  (2 columns)
Desktop:   > 1024px  (3 columns)
```

**Tailwind Classes:**
```jsx
// Mobile first
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Responsive text
className="text-4xl md:text-5xl lg:text-6xl"

// Responsive spacing
className="px-4 sm:px-6 lg:px-8"
```

---

## ⚡ Performance Tips

**Optimize:**
- Use `once: true` for scroll animations
- Lazy load images with `loading="lazy"`
- Reduce particle count on mobile
- Disable custom cursor on mobile
- Use WebP images
- Compress assets

**Monitor:**
- Chrome DevTools Performance tab
- Lighthouse scores
- FPS during animations
- Bundle size

---

## 🎯 Quick Integration

**Minimal Setup (5 min):**
1. Components already created ✓
2. App.jsx already updated ✓
3. Just run: `npm run dev`

**Full Setup (30 min):**
1. Replace section imports
2. Update project data
3. Update skills data
4. Update contact info
5. Customize colors

**Production Ready (2 hours):**
1. Add all content
2. Optimize images
3. Test all devices
4. Check accessibility
5. Build and deploy

---

**All components are production-ready and fully documented! 🚀**
