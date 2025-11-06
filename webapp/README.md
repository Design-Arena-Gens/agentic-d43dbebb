## Pulse One

Pulse One delivers a mobile-first wellbeing companion that feels at home on both Android and iOS. The experience is built with [Next.js](https://nextjs.org) and Tailwind CSS, making it deployable on Vercel while mirroring a native app shell.

### Features

- Cross-platform hero experience highlighting synced stats and device parity
- Tabbed navigation for Home, Progress, Coaching, and Profile flows
- Timeline cards for workouts, recovery, and mindful sessions
- Progress insights, streak highlights, and focus metrics
- Coach channel previews and platform-specific settings
- Install-ready manifest for a PWA hand-off to mobile

### Development

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to explore the mobile UI.

### Production

```bash
npm run build
npm run start
```

The project is optimised for deployment on Vercel (`vercel deploy --prod`).

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
