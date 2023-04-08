import { z } from "astro:content";

export const technologies = [
   "unocss",
   "tailwind",
   "rust",
   "tauri",
   "svelte",
   "astro",
   "nextjs",
   "polodb",
   "sveltekit",
   "trpc",
   "prisma",
] as const;

export type Technologies = (typeof technologies)[number];

/**
 * link to the websites of each technology
 */
export const techLinks = {
   unocss: "https://uno.antfu.me",
   tailwind: "https://tailwindcss.org",
   rust: "https://rust-lang.org",
   tauri: "https://tauri.app",
   svelte: "https://svelte.dev",
   nextjs: "https://nextjs.org",
   astro: "https://astro.build",
   polodb: "https://polodb.org",
   sveltekit: "https://kit.svelte.dev/",
   trpc: "https://trpc.io",
   prisma: "https://prisma.io",
} as const satisfies Record<Technologies, string>;

export const techIcons = {
   unocss: "https://raw.githubusercontent.com/unocss/unocss/main/playground/public/icon-gray.svg",
   tailwind:
      "https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg",
   rust: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/2048px-Rust_programming_language_black_logo.svg.png",
   tauri: "https://cdn.worldvectorlogo.com/logos/tauri-1.svg",
   svelte:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1702px-Svelte_Logo.svg.png",
   nextjs:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH1MuogmP0rG5nAkxbm8co2ZLwQsAyiR54CZjf68Nowg&s",
   astro: "https://astro.js.org/astro.png",
   polodb: "https://www.polodb.org/_next/image?url=%2Fstatic%2Flogo.png&w=256&q=75",
   sveltekit:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGo1SbZl59nmMN7CvjT3HO5-xkjm3swgj3eJXM33pL&s",
   trpc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPCxjn29gZ2JDsOHAWLBOgzGsKvLjCVUz5T_zcFP4&s",
   prisma:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKIL_5aGs-hRBgV1f0pV8NrOCTTIJkaCvA-RwuawS1&s",
} as const satisfies Record<Technologies, string>;

export const technologiesSchema = z.enum(technologies);
