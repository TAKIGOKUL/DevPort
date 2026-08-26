import { useEffect } from 'react';

/**
 * Toggles `activeClass` on every element matching `selector` inside
 * `containerRef` while it sits in the middle band of the viewport —
 * the same class the CSS ":hover" rules key off of, so cards "light up"
 * as they scroll through center, not just when the pointer touches them.
 */
export function useScrollActivate(containerRef, selector, activeClass = 'in-view') {
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const els = container.querySelectorAll(selector);
        if (!els.length) return;

        if (reduceMotion) {
            els.forEach((el) => el.classList.add(activeClass));
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    entry.target.classList.toggle(activeClass, entry.isIntersecting);
                });
            },
            {
                threshold: 0,
                rootMargin: '-30% 0px -30% 0px',
            }
        );

        els.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [containerRef, selector, activeClass]);
}
