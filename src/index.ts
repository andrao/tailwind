import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';
import { fontFamily } from 'tailwindcss/defaultTheme';
import { BREAKPOINT_2XL } from './util';

export type { Config } from 'tailwindcss';

export default {
    darkMode: ['class'],
    content: ['src/**/*.{ts,tsx}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': `${BREAKPOINT_2XL}px` as const,
            },
        },
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
            },
            borderColor: {
                DEFAULT: 'hsl(var(--border))',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            fontFamily: {
                mono: ['var(--font-geist-mono)', ...fontFamily.mono],
                sans: ['var(--font-sans)', ...fontFamily.sans],
                serif: ['var(--font-serif)', ...fontFamily.serif],
                letter: ['var(--font-letter)', ...fontFamily.sans],
                signature: ['var(--font-signature)', ...fontFamily.serif],
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
                bounce: {
                    '0%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(2px)' },
                    '100%': { transform: 'translateY(0)' },
                },
                fade: {
                    '0%': { opacity: '1' },
                    '50%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'gradient-bg': {
                    '0%': { backgroundPosition: '0 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
                'location-pulse': {
                    '0%': { strokeWidth: '1.3' },
                    '50%': { strokeWidth: '2.2' },
                    '100%': { strokeWidth: '1.3' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                bounce: 'bounce 900ms ease infinite',
                fade: 'fade 1600ms infinite',
                'gradient-bg': 'gradient-bg 5s ease infinite',
                'location-pulse': 'location-pulse 3s ease infinite',
            },
        },
    },
    plugins: [animate],
    variants: {
        extend: {
            animation: ['responsive', 'motion-safe', 'motion-reduce'],
        },
    },
} satisfies Config;
