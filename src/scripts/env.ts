/** Deteksi kemampuan perangkat — efek berat hanya untuk pointer presisi. */
export const mq = (q: string) => window.matchMedia(q).matches;
export const isFinePointer = () => mq('(hover: hover) and (pointer: fine)');
export const prefersReducedMotion = () => mq('(prefers-reduced-motion: reduce)');
