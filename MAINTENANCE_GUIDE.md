# 🔧 Maintenance Guide

## Issues Fixed

### 1. ✅ Theme Toggle Not Working
**Problem:** Navbar was using its own `useDarkMode` hook instead of props from App.jsx

**Solution:**
- Removed duplicate `useDarkMode` import from Navbar
- Updated toggle function to use `setDarkMode` prop
- Updated icon condition to use `darkMode` prop

**Files Modified:**
- `src/components/layout/Navbar.jsx`

---

### 2. ✅ Footer Social Icons Not Visible
**Problem:** 
- Icons had no `href` attributes (non-functional links)
- Color was too light (`text-gray-500`)
- No proper hover states

**Solution:**
- Added proper `href` attributes with placeholder URLs
- Changed color to `text-gray-600 dark:text-gray-400` (more visible)
- Added hover colors: `hover:text-blue-600 dark:hover:text-blue-400`
- Added `target="_blank"` and `rel="noopener noreferrer"` for security
- Added `aria-label` for accessibility

**Files Modified:**
- `src/components/layout/Footer.jsx`

---

### 3. ✅ Custom Cursor Hiding Icons
**Problem:** 
- Custom cursor was enabled on all devices
- `cursor: none` was hiding default cursor everywhere
- Made it hard to see clickable elements

**Solution:**
- Added mobile detection to CustomCursor component
- Only show custom cursor on desktop (>768px)
- Updated CSS to only hide cursor on desktop
- Added `hidden md:block` classes to cursor elements

**Files Modified:**
- `src/components/ui/CustomCursor.jsx`
- `src/index.css`

---

## How to Maintain

### Theme System

**Single Source of Truth:**
```
App.jsx
  ↓
  useDarkMode() hook
  ↓
  [darkMode, setDarkMode]
  ↓
  Pass as props to all components
```

**DO:**
✅ Always use props from App.jsx
✅ Pass `darkMode` and `setDarkMode` to child components
✅ Use `darkMode === 'dark'` for conditionals

**DON'T:**
❌ Create new `useDarkMode()` instances in child components
❌ Use local state for theme
❌ Forget to pass props down

---

### Color System

**Consistent Colors:**

```jsx
// Light mode text
text-gray-900  // Headings
text-gray-700  // Body text
text-gray-600  // Secondary text
text-gray-500  // Muted text

// Dark mode text
dark:text-white      // Headings
dark:text-gray-300   // Body text
dark:text-gray-400   // Secondary text
dark:text-gray-500   // Muted text

// Interactive elements
hover:text-blue-600 dark:hover:text-blue-400

// Backgrounds
bg-white dark:bg-black
bg-gray-50 dark:bg-gray-900
bg-gray-100 dark:bg-gray-800
```

**Icon Visibility:**
- Use `text-gray-600 dark:text-gray-400` for icons
- Add hover states: `hover:text-blue-600 dark:hover:text-blue-400`
- Never use `text-gray-500` alone (too light)

---

### Component Structure

**Navbar Component:**
```jsx
const Navbar = ({ darkMode, setDarkMode }) => {
  // ✅ Use props, not local state
  
  const toggleDarkMode = () => {
    setDarkMode(darkMode === 'dark' ? 'light' : 'dark');
  };
  
  // ✅ Use darkMode prop in conditionals
  {darkMode === 'dark' ? <Sun /> : <Moon />}
};
```

**Footer Component:**
```jsx
// ✅ Always include href for links
<a 
  href="https://github.com/username"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-600 dark:text-gray-400 hover:text-blue-600"
  aria-label="GitHub"
>
  <Github className="w-6 h-6" />
</a>
```

---

## Testing Checklist

### Theme Toggle
- [ ] Click theme button in navbar
- [ ] Entire page changes color
- [ ] Icon changes (Moon ↔ Sun)
- [ ] Smooth transition (500ms)
- [ ] Refresh page - theme persists
- [ ] Check localStorage has 'theme' key

### Icon Visibility
- [ ] All icons visible in light mode
- [ ] All icons visible in dark mode
- [ ] Icons have proper contrast
- [ ] Hover states work
- [ ] Icons are clickable

### Custom Cursor
- [ ] Shows on desktop (>768px)
- [ ] Hidden on mobile (<768px)
- [ ] Doesn't hide default cursor on mobile
- [ ] Expands on hover over links/buttons
- [ ] Smooth animation

### Responsive Design
- [ ] Desktop: All features work
- [ ] Tablet: Layout adjusts
- [ ] Mobile: Custom cursor disabled
- [ ] Mobile: Default cursor visible

---

## Common Issues & Solutions

### Issue: Theme toggle doesn't work
**Check:**
1. Is Navbar using props or local state?
2. Is `darkMode` prop being passed from App.jsx?
3. Is `toggleDarkMode` using `setDarkMode` prop?

**Fix:**
```jsx
// ❌ Wrong
const [theme, setTheme] = useDarkMode();

// ✅ Correct
const Navbar = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => {
    setDarkMode(darkMode === 'dark' ? 'light' : 'dark');
  };
};
```

---

### Issue: Icons not visible
**Check:**
1. Are colors too light? (text-gray-500 is too light)
2. Do icons have dark mode variants?
3. Are hover states defined?

**Fix:**
```jsx
// ❌ Wrong
className="text-gray-500"

// ✅ Correct
className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
```

---

### Issue: Custom cursor hiding elements
**Check:**
1. Is `cursor: none` applied globally?
2. Is custom cursor showing on mobile?
3. Are interactive elements hard to find?

**Fix:**
```css
/* ❌ Wrong */
body {
  cursor: none;
}

/* ✅ Correct */
@media (min-width: 768px) {
  body {
    cursor: none;
  }
}
```

---

### Issue: Links not working
**Check:**
1. Do `<a>` tags have `href` attribute?
2. Are external links using `target="_blank"`?
3. Is `rel="noopener noreferrer"` included?

**Fix:**
```jsx
// ❌ Wrong
<a className="...">
  <Icon />
</a>

// ✅ Correct
<a 
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Description"
>
  <Icon />
</a>
```

---

## File Structure

```
src/
├── App.jsx                    ← Single source of truth for theme
├── hooks/
│   └── useDarkMode.js        ← Theme hook (localStorage)
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx        ← Receives theme props
│   │   └── Footer.jsx        ← Uses consistent colors
│   └── ui/
│       └── CustomCursor.jsx  ← Desktop only
└── index.css                 ← Global styles
```

---

## Best Practices

### 1. Theme Management
✅ **DO:**
- Use single source of truth (App.jsx)
- Pass props down to children
- Use consistent naming (`darkMode`, not `theme`)
- Store in localStorage for persistence

❌ **DON'T:**
- Create multiple theme states
- Use different hook instances
- Forget to pass props
- Mix naming conventions

---

### 2. Color Consistency
✅ **DO:**
- Use Tailwind's color scale consistently
- Always include dark mode variants
- Test in both modes
- Use semantic colors (blue for links, etc.)

❌ **DON'T:**
- Use arbitrary colors
- Forget dark mode variants
- Use colors that are too light/dark
- Mix color systems

---

### 3. Accessibility
✅ **DO:**
- Add `aria-label` to icon-only buttons
- Include `alt` text on images
- Use semantic HTML
- Test with keyboard navigation
- Ensure proper color contrast

❌ **DON'T:**
- Use icons without labels
- Forget focus states
- Use low contrast colors
- Ignore keyboard users

---

### 4. Performance
✅ **DO:**
- Disable custom cursor on mobile
- Use CSS transitions for theme changes
- Lazy load images
- Optimize animations

❌ **DON'T:**
- Run heavy animations on mobile
- Use custom cursor everywhere
- Animate expensive properties
- Forget to test on low-end devices

---

## Updating Social Links

**Footer.jsx:**
```jsx
// Update these URLs with your actual profiles
<a href="https://github.com/YOUR_USERNAME">
<a href="https://linkedin.com/in/YOUR_USERNAME">
<a href="https://twitter.com/YOUR_USERNAME">
```

**FooterEnhanced.jsx** (if using):
```jsx
const socialLinks = [
  { 
    icon: Github, 
    href: 'https://github.com/YOUR_USERNAME',
    label: 'GitHub'
  },
  // ... update all links
];
```

---

## Quick Reference

### Theme Toggle
```jsx
// In App.jsx
const [darkMode, setDarkMode] = useDarkMode();

// Pass to children
<Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

// In child component
const Navbar = ({ darkMode, setDarkMode }) => {
  const toggle = () => setDarkMode(darkMode === 'dark' ? 'light' : 'dark');
};
```

### Icon Colors
```jsx
// Standard icon
className="text-gray-600 dark:text-gray-400"

// With hover
className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"

// Active state
className="text-blue-600 dark:text-blue-400"
```

### Links
```jsx
<a 
  href="URL"
  target="_blank"
  rel="noopener noreferrer"
  className="..."
  aria-label="Description"
>
  Content
</a>
```

---

## Status

✅ **All Issues Fixed:**
- Theme toggle works correctly
- Icons are visible in both modes
- Footer links are functional
- Custom cursor only on desktop
- Proper color contrast
- Accessible and maintainable

---

**Last Updated:** December 5, 2025
**Maintainer:** Follow this guide for all future updates
