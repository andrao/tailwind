import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * @const BREAKPOINT_2XL
 * @description Tailwind 2XL breakpoint
 */
export const BREAKPOINT_2XL = 1400;

/**
 * @function cn
 * @description Classnames wrapper that merges Tailwind classes
 * @see https://ui.shadcn.com
 */
export function cn(...inputs: Array<ClassValue>) {
    return twMerge(clsx(inputs));
}

/**
 * @const BREAKPOINTS
 * @description Tailwind breakpoints
 * @see https://v1.tailwindcss.com/docs/breakpoints
 */
export const BREAKPOINTS = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': BREAKPOINT_2XL,
};
