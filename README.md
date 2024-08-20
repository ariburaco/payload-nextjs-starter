This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

```
nite-life-nav-web

├─ src
│  ├─ app
│  │  ├─ (app)
│  │  │  ├─ about-us
│  │  │  │  └─ page.tsx
│  │  │  ├─ faq
│  │  │  │  └─ page.tsx
│  │  │  ├─ favicon.ico
│  │  │  ├─ globals.css
│  │  │  ├─ layout.tsx
│  │  │  ├─ markdown.css
│  │  │  ├─ page.tsx
│  │  │  ├─ terms-and-conditions
│  │  │  │  └─ page.tsx
│  │  │  └─ venues
│  │  │     ├─ page.tsx
│  │  │     └─ [slug]
│  │  │        └─ page.tsx
│  │  ├─ (payload)
│  │  │  ├─ admin
│  │  │  │  └─ [[...segments]]
│  │  │  │     ├─ not-found.tsx
│  │  │  │     └─ page.tsx
│  │  │  ├─ api
│  │  │  │  ├─ graphql
│  │  │  │  │  └─ route.ts
│  │  │  │  ├─ graphql-playground
│  │  │  │  │  └─ route.ts
│  │  │  │  └─ [...slug]
│  │  │  │     └─ route.ts
│  │  │  ├─ custom.scss
│  │  │  └─ layout.tsx
│  │  ├─ api
│  │  │  ├─ getAddress.ts
│  │  │  └─ updateAddress.ts
│  │  └─ my-route
│  │     └─ route.ts
│  ├─ collections
│  │  ├─ AboutUs.ts
│  │  ├─ Address.ts
│  │  ├─ Faqs.ts
│  │  ├─ Media.ts
│  │  ├─ Users.ts
│  │  └─ Venue.ts
│  ├─ components
│  │  ├─ icons
│  │  │  └─ hamburgerIcon.tsx
│  │  ├─ MarkdownRenderer.tsx
│  │  ├─ navbar
│  │  │  └─ Navbar.tsx
│  │  ├─ pages
│  │  │  ├─ about-us
│  │  │  │  └─ AboutUsOurTeamSection.tsx
│  │  │  └─ single-venue
│  │  │     ├─ SingleVenuePageSection.tsx
│  │  │     └─ VenueSlider.tsx
│  │  ├─ sections
│  │  │  ├─ Combobox.tsx
│  │  │  ├─ ComingSoon.tsx
│  │  │  ├─ Comments.tsx
│  │  │  ├─ CompactMap.tsx
│  │  │  ├─ FeaturedVenuesAlternativeCardsSection.tsx
│  │  │  ├─ FeaturedVenuesCardsSection.tsx
│  │  │  ├─ FeaturedVenuesPagination.tsx
│  │  │  ├─ FeaturedVenuesSection.tsx
│  │  │  ├─ Footer.tsx
│  │  │  ├─ HeroSection.tsx
│  │  │  ├─ MapModal.tsx
│  │  │  ├─ MapSection.tsx
│  │  │  ├─ MotionEffectAboutUs.tsx
│  │  │  ├─ MultipleLocationMap.tsx
│  │  │  └─ SearchSection.tsx
│  │  ├─ theme-provider.tsx
│  │  ├─ theme-toggle.tsx
│  │  └─ ui
│  │     ├─ accordion.tsx
│  │     ├─ background-boxes.tsx
│  │     ├─ background-gradient.tsx
│  │     ├─ button.tsx
│  │     ├─ card-hover-effect.tsx
│  │     ├─ card.tsx
│  │     ├─ carousel.tsx
│  │     ├─ command.tsx
│  │     ├─ dialog.tsx
│  │     ├─ dropdown-menu.tsx
│  │     ├─ input.tsx
│  │     ├─ lamp.tsx
│  │     ├─ navigation-menu.tsx
│  │     ├─ pagination.tsx
│  │     ├─ popover.tsx
│  │     ├─ sparkles.tsx
│  │     ├─ sticky-scroll-reveal.tsx
│  │     ├─ table.tsx
│  │     ├─ text-generate-effect.tsx
│  │     └─ vortex.tsx
│  ├─ constants
│  │  ├─ comingsoon-data.ts
│  │  ├─ coordinates.ts
│  │  ├─ faqItems.ts
│  │  ├─ featured-venues.ts
│  │  ├─ footerItems.ts
│  │  ├─ search-data.ts
│  │  └─ venuephotos.ts
│  ├─ lib
│  │  ├─ db.ts
│  │  └─ utils.ts
│  ├─ pages
│  │  └─ updateAddress.tsx
│  ├─ payload-types.ts
│  └─ payload.config.ts
├─ tailwind.config.ts
└─ tsconfig.json

```
