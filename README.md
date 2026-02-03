# Legal Hero Section

A modern, responsive hero section for legal management platform built with Next.js 16, React 19, and TailwindCSS 4.

## Features

- 🎨 Modern UI with floating cards
- 📱 Fully responsive design
- ⚡ Built with Next.js 16 and React 19
- 🎯 TypeScript for type safety
- 💅 Styled with TailwindCSS 4
- 🎭 Smooth animations and transitions
- 🏗️ Production-ready structure

## Tech Stack

- **Framework:** Next.js 16
- **UI Library:** React 19
- **Styling:** TailwindCSS 4
- **Language:** TypeScript 5
- **Icons:** Lucide React
- **Font:** Plus Jakarta Sans (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn or pnpm

### Installation

1. Clone the repository:

```bash
git clone git@github.com:ConnectMayukh12/Praava-Assignement.git
cd legal-hero-section
```

2. Install dependencies:

```bash
npm install
```

3. Create environment file:

```bash
cp .env.example .env.local
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
legal-hero-section/
├── app/
│   ├── components/       # Reusable components
│   │   ├── FloatingCard.tsx
│   │   └── HeroSection.tsx
│   ├── constants/        # App constants
│   │   └── colors.ts
│   ├── types/           # TypeScript types
│   │   └── index.ts
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── public/              # Static assets
├── .eslintrc.json      # ESLint configuration
├── .prettierrc         # Prettier configuration
├── next.config.ts      # Next.js configuration
├── tsconfig.json       # TypeScript configuration
└── tailwind.config.ts  # TailwindCSS configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Component Documentation

### FloatingCard

A reusable component for creating floating cards with icons or images.

**Props:**

- `icon` - Lucide icon component
- `title` - Card title
- `bgColor` - Background color
- `textColor` - Text color
- `position` - Positioning object (top, bottom, left, right)
- `rotation` - Rotation angle in degrees
- `width` - Card width
- `height` - Card height
- `image` - Optional image path
- `subtitle` - Optional subtitle
- `message` - Optional message

### HeroSection

Main hero section component with title, description, background pills, and floating cards.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

Build the project:

```bash
npm run build
```

The output will be in the `.next` folder.

## Color Scheme

- Background: `#F4F6FC`
- Primary Text: `#8B87A8`
- Accent: `#5B68F4`
- Cards: Various (see `constants/colors.ts`)

## License

This project is private and proprietary.

## Author

Mayukh Bhowmik
