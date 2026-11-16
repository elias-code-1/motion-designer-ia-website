import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Utility hook for GSAP animations with ScrollTrigger.
 * Returns a ref to attach to the container element.
 * The callback receives the container element and gsap context.
 */
export function useGSAP<T extends HTMLElement = HTMLDivElement>(
  callback: (el: T, ctx: gsap.Context) => void,
  deps: React.DependencyList = []
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      callback(ref.current as T, ctx);
    }, ref);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, ...deps]);

  return ref;
}

/**
 * Fade-in-up animation for a list of elements on scroll.
 */
export function useFadeInUp(selector: string = '.fade-up') {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        selector,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, [selector]);

  return ref;
}
