# 🎯 Quick Reference - Animation Patterns

## Common Animation Patterns

### 1. Fade In
```jsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
```

### 2. Slide Up
```jsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
```

### 3. Scale In
```jsx
<motion.div
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ type: 'spring', stiffness: 200 }}
>
```

### 4. Hover Scale
```jsx
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
```

### 5. Continuous Animation
```jsx
<motion.div
  animate={{ 
    y: [0, -10, 0],
    rotate: [0, 5, -5, 0]
  }}
  transition={{ 
    duration: 3, 
    repeat: Infinity,
    ease: 'easeInOut'
  }}
>
```

---

## Stagger Animations

```jsx
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

<motion.div variants={container} initial="hidden" animate="visible">
  <motion.div variants={item}>Item 1</motion.div>
  <motion.div variants={item}>Item 2</motion.div>
</motion.div>
```

---

## Scroll Animations

### Basic Scroll Trigger
```jsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
>
```

### Scroll Progress
```jsx
const { scrollYProgress } = useScroll();
const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

<motion.div style={{ y }}>
```

---

## Gesture Animations

### Hover
```jsx
<motion.div
  whileHover={{ 
    scale: 1.1,
    rotate: 5,
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
  }}
>
```

### Tap
```jsx
<motion.button
  whileTap={{ scale: 0.9 }}
>
```

### Drag
```jsx
<motion.div
  drag
  dragConstraints={{ left: 0, right: 300, top: 0, bottom: 300 }}
  dragElastic={0.2}
>
```

---

## Layout Animations

```jsx
<motion.div layout>
  {/* Content that changes */}
</motion.div>
```

---

## Exit Animations

```jsx
import { AnimatePresence } from 'framer-motion';

<AnimatePresence>
  {isVisible && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
  )}
</AnimatePresence>
```

---

## Transition Types

### Spring (Bouncy)
```jsx
transition={{ type: 'spring', stiffness: 300, damping: 20 }}
```

### Tween (Smooth)
```jsx
transition={{ duration: 0.6, ease: 'easeOut' }}
```

### Inertia (Physics)
```jsx
transition={{ type: 'inertia', velocity: 50 }}
```

---

## Easing Functions

- `linear` - Constant speed
- `easeIn` - Slow start
- `easeOut` - Slow end
- `easeInOut` - Slow start and end
- `circIn`, `circOut`, `circInOut` - Circular
- `backIn`, `backOut`, `backInOut` - Overshoot
- `anticipate` - Anticipation

---

## Common Durations

- **Fast**: 0.2-0.3s (micro-interactions)
- **Medium**: 0.4-0.6s (standard animations)
- **Slow**: 0.8-1.2s (dramatic effects)

---

## Viewport Options

```jsx
viewport={{
  once: true,      // Animate only once
  amount: 0.3,     // Trigger when 30% visible
  margin: '100px'  // Trigger 100px before entering
}}
```

---

## Performance Tips

✅ **DO:**
- Animate `transform` and `opacity`
- Use `will-change` sparingly
- Set `once: true` for scroll animations
- Use `layoutId` for shared element transitions

❌ **DON'T:**
- Animate `width`, `height`, `top`, `left`
- Animate too many elements at once
- Use heavy animations on mobile
- Forget to test on low-end devices

---

## Tailwind Animation Classes

```jsx
// Pulse
className="animate-pulse"

// Spin
className="animate-spin"

// Bounce
className="animate-bounce"

// Ping
className="animate-ping"

// Custom (defined in index.css)
className="animate-float"
className="animate-gradient"
```

---

## Color Gradients

```jsx
// Blue to Purple
className="bg-gradient-to-r from-blue-600 to-purple-600"

// Blue to Purple to Pink
className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"

// Diagonal
className="bg-gradient-to-br from-blue-600 to-purple-600"

// Text Gradient
className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
```

---

## Component Usage

### AnimatedButton
```jsx
<AnimatedButton variant="primary" icon={Send}>
  Click Me
</AnimatedButton>
```

### SectionWrapper
```jsx
<SectionWrapper id="section" animationType="fadeUp">
  <Content />
</SectionWrapper>
```

### ProjectCard
```jsx
<ProjectCard 
  project={{
    title: 'Project',
    description: 'Description',
    image: 'image.jpg',
    technologies: ['React', 'Node'],
    liveUrl: 'https://...',
    githubUrl: 'https://...'
  }}
  index={0}
/>
```

### SkillCard
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

---

## GSAP Animations

### Basic Tween
```jsx
import gsap from 'gsap';

gsap.to('.element', {
  x: 100,
  duration: 1,
  ease: 'power2.out'
});
```

### Timeline
```jsx
const tl = gsap.timeline();
tl.to('.element1', { x: 100 })
  .to('.element2', { y: 100 })
  .to('.element3', { rotation: 360 });
```

### Stagger
```jsx
gsap.to('.elements', {
  y: -20,
  stagger: 0.1,
  duration: 0.5
});
```

---

## Debugging

### Check Animation State
```jsx
<motion.div
  onAnimationStart={() => console.log('Started')}
  onAnimationComplete={() => console.log('Completed')}
>
```

### Visualize Motion Values
```jsx
const x = useMotionValue(0);
useEffect(() => {
  const unsubscribe = x.onChange(latest => console.log(latest));
  return unsubscribe;
}, []);
```

---

**Keep this handy while building! 🚀**
