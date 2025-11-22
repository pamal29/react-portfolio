import { useEffect, useRef, useState } from 'react';

// Custom hook for scroll animations (MUST start with "use")
// eslint-disable-next-line react-refresh/only-export-components
export function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options.once) {
            observer.unobserve(entry.target);
          }
        } else if (!options.once) {
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options.threshold, options.rootMargin, options.once]);

  return [ref, isVisible];
}

// Fade In Animation
export function FadeIn({ children, delay = 0, duration = 600, once = true }) {
  const [ref, isVisible] = useScrollAnimation({ once });

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Slide In from Left
export function SlideInLeft({ children, delay = 0, duration = 600, once = true }) {
  const [ref, isVisible] = useScrollAnimation({ once });

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Slide In from Right
export function SlideInRight({ children, delay = 0, duration = 600, once = true }) {
  const [ref, isVisible] = useScrollAnimation({ once });

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Scale Up Animation
export function ScaleUp({ children, delay = 0, duration = 600, once = true }) {
  const [ref, isVisible] = useScrollAnimation({ once });

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0.9)',
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Rotate In Animation
export function RotateIn({ children, delay = 0, duration = 800, once = true }) {
  const [ref, isVisible] = useScrollAnimation({ once });

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'rotate(0deg) scale(1)' : 'rotate(-10deg) scale(0.9)',
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Stagger Container
export function StaggerContainer({ children, staggerDelay = 100, once = true, className = "" }) {
  const [ref, isVisible] = useScrollAnimation({ once });

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 600ms ease-out ${index * staggerDelay}ms, transform 600ms ease-out ${index * staggerDelay}ms`,
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
}