import { motion } from 'framer-motion'

/**
 * Reveal — the single reusable "coming into view" treatment used across
 * every section and item on the site, so the motion language stays
 * consistent instead of every component inventing its own animation.
 *
 * direction: 'up' | 'none'  (fade-only for large hero elements)
 * delay: stagger offset in seconds
 */
export default function Reveal({
  children,
  as = 'div',
  direction = 'up',
  delay = 0,
  duration = 0.9,
  distance = 28,
  className = '',
  once = true,
  amount = 0.2,
  ...rest
}) {
  const MotionTag = motion[as] || motion.div
  const initial = {
    opacity: 0,
    y: direction === 'up' ? distance : 0,
  }

  return (
    <MotionTag
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
