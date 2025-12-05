# ⚡ Quick Fix Reference

## 🚨 If Theme Toggle Stops Working

**Check this first:**
```jsx
// In Navbar.jsx - Should NOT have this line:
❌ const [theme, setTheme] = useDarkMode();

// Should use props instead:
✅ const Navbar = ({ darkMode, setDarkMode }) => {
```

**Quick Fix:**
1. Open `src/components/layout/Navbar.jsx`
2. Remove any `useDarkMode` import
3. Remove any local theme state
4. Use `darkMode` and `setDarkMode` props

---

## 🎨 If Icons Are Not Visible

**Check colors:**
```jsx
// ❌ Too light
className="text-gray-500"

// ✅ Good visibility
className="text-gray-600 dark:text-gray-400"

// ✅ With hover
className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
```

**Quick Fix:**
1. Find the icon component
2. Update className to use `text-gray-600 dark:text-gray-400`
3. Add hover state if needed

---

## 🔗 If Links Don't Work

**Check link structure:**
```jsx
// ❌ Missing href
<a className="...">
  <Icon />
</a>

// ✅ Complete link
<a 
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Description"
>
  <Icon />
</a>
```

**Quick Fix:**
1. Add `href` attribute
2. Add `target="_blank"` for external links
3. Add `rel="noopener noreferrer"`
4. Add `aria-label`

---

## 🖱️ If Cursor Issues

**Desktop cursor not showing:**
```css
/* Check index.css has this: */
@media (min-width: 768px) {
  body {
    cursor: none;
  }
}
```

**Mobile cursor hidden:**
```jsx
// Check CustomCursor.jsx has this:
if (isMobile) return null;
```

**Quick Fix:**
1. Ensure custom cursor only renders on desktop
2. Check CSS only hides cursor on desktop
3. Clear cache and refresh

---

## 🎯 Color Reference

### Light Mode
```jsx
text-gray-900  // Headings
text-gray-700  // Body text
text-gray-600  // Icons, secondary
text-gray-500  // Muted (use sparingly)
```

### Dark Mode
```jsx
dark:text-white      // Headings
dark:text-gray-300   // Body text
dark:text-gray-400   // Icons, secondary
dark:text-gray-500   // Muted
```

### Interactive
```jsx
hover:text-blue-600 dark:hover:text-blue-400
```

---

## 📋 Quick Checklist

Before deploying, verify:
- [ ] Theme toggle works
- [ ] All icons visible
- [ ] All links clickable
- [ ] Custom cursor desktop-only
- [ ] No console errors
- [ ] Tested in both modes

---

## 🔍 Debug Commands

```bash
# Check for errors
npm run dev

# Clear cache
Ctrl + Shift + Delete (browser)

# Hard refresh
Ctrl + F5

# Check localStorage
DevTools > Application > Local Storage
```

---

## 📞 Common Issues

| Issue | Quick Fix |
|-------|-----------|
| Theme not changing | Check Navbar uses props, not local state |
| Icons invisible | Update to `text-gray-600 dark:text-gray-400` |
| Links not working | Add `href` attribute |
| Cursor everywhere | Check mobile detection in CustomCursor |
| Colors wrong | Follow color reference above |

---

## 🎯 Files to Check

1. **Theme issues:** `src/components/layout/Navbar.jsx`
2. **Icon issues:** `src/components/layout/Footer.jsx`
3. **Cursor issues:** `src/components/ui/CustomCursor.jsx`
4. **Style issues:** `src/index.css`

---

**Keep this handy for quick fixes! 🚀**
