# Personal Website 🌐

A modern, interactive personal portfolio website built with Next.js 16, featuring smooth animations, responsive design, and an engaging user experience.

## ✨ Features

- **Interactive Grid Background** - Dynamic, mouse-following grid effects with customizable glow and trail
- **Smooth Navigation** - Timeline-based navigation with scroll spy and snap scrolling (desktop only)
- **Responsive Design** - Fully responsive with mobile-optimized layouts and disabled snap scrolling on mobile devices
- **Sections**:
  - 🏠 **Hero** - Eye-catching landing section with encrypted text animations
  - 👤 **About** - Personal introduction and background
  - 💼 **Projects** - Showcase of work and projects
  - 🛠️ **Skills** - Technical skills organized by categories with proficiency levels
- **Modern UI Components** - Custom Bento Box layouts, toast notifications, and animated buttons
- **Theme Support** - Dark mode ready with next-themes
- **Performance Optimized** - Built with Next.js App Router and React Server Components

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd personal_website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🛠️ Tech Stack

### Core
- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety

### Styling
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lightswind](https://lightswind.com/)** - Tailwind CSS components
- **[tw-animate-css](https://www.npmjs.com/package/tw-animate-css)** - Animation utilities
- **[class-variance-authority](https://cva.style/)** - Component variants
- **[clsx](https://github.com/lukeed/clsx)** & **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Class name utilities

### UI & Animations
- **[Motion](https://motion.dev/)** - Animation library (Framer Motion successor)
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[React Icons](https://react-icons.github.io/react-icons/)** - Icon library
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible UI components

### Performance
- **[@vercel/speed-insights](https://vercel.com/docs/speed-insights)** - Performance monitoring

## 📁 Project Structure

```
personal_website/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Main page with sections
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Projects.tsx       # Projects section
│   ├── Skills.tsx         # Skills section
│   └── ui/                # Reusable UI components
│       ├── BentoBox.tsx
│       ├── encrypted-text.tsx
│       ├── heroButton.tsx
│       ├── interactive-grid-background.tsx
│       ├── Intergenerational.tsx
│       ├── TimelineNav.tsx
│       └── Toast.tsx
├── hooks/                 # Custom React hooks
│   ├── use-mobile.tsx     # Mobile detection hook
│   └── use-toast.tsx      # Toast notification hook
├── lib/                   # Utility functions
│   └── utils.ts           # Helper utilities
└── public/                # Static assets
```

## 🎨 Key Components

### Interactive Grid Background
A custom canvas-based component that creates an interactive grid with mouse-following effects, customizable colors, glow, and trail length.

### Timeline Navigation
A fixed sidebar navigation with scroll spy functionality that automatically highlights the active section and provides smooth scrolling between sections.

### Skills Categories
- 🎨 Frontend Development (React, Next.js, TypeScript, Tailwind CSS)
- ⚙️ Backend Development (Node.js, Express.js, REST APIs)
- 🛠️ Tools & Technologies (Git, VS Code, Vercel)
- 📚 Currently Learning (Docker, GraphQL, Testing, CI/CD)

### Responsive Behavior
- **Desktop (≥1024px)**: Snap scrolling enabled for section-by-section navigation
- **Mobile (<1024px)**: Smooth scrolling without snap for better mobile experience
- Timeline navigation hidden on mobile devices

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Customization

#### Update Personal Information
Edit the content in:
- `components/Hero.tsx` - Name, title, introduction
- `components/About.tsx` - About section content
- `components/Skills.tsx` - Skills and proficiency levels
- `components/Projects.tsx` - Project showcases

#### Modify Sections
Add or remove sections in `app/page.tsx`:
```typescript
const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
];
```

#### Customize Colors & Themes
Modify `app/globals.css` and Tailwind configuration in `postcss.config.mjs`.

#### Adjust Mobile Breakpoint
Change the breakpoint in `hooks/use-mobile.tsx`:
```typescript
const MOBILE_BREAKPOINT = 1024; // Adjust as needed
```

## 🚀 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy is using the [Vercel Platform](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Your site will be live with automatic deployments on every push

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

### Other Deployment Options

- **Netlify** - Connect your Git repository and deploy
- **Railway** - Deploy with a single click
- **Self-hosted** - Build and deploy using `npm run build` and `npm run start`

For more details, check the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📬 Contact

Feel free to reach out if you have any questions or suggestions!

---

Built with ❤️ using Next.js and React
