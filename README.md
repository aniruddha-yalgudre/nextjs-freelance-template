# Next.js Freelance Starter

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Biome](https://img.shields.io/badge/Biome-2.6.8-60A5FA?logo=biome)](https://biomejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern, production-oriented **Next.js 16 freelance starter template** designed to accelerate the development of creative websites, business websites, landing pages, and scalable frontend applications.

Built with a carefully selected ecosystem of modern technologies, reusable UI primitives, animation libraries, developer tooling, and production-ready configurations.

**Repository:** [aniruddha-yalgudre/nextjs-freelance-template](https://github.com/aniruddha-yalgudre/nextjs-freelance-template)

---

## ✨ Features

- **Modern Framework:** Next.js 16 App Router with React 19 and TypeScript.
- **Styling:** Tailwind CSS 4 with CSS-first configuration and custom design tokens.
- **UI Components:** shadcn/ui architecture with unified Radix UI primitives.
- **Icon System:** Lucide React.
- **Animation Ecosystem:** GSAP, ScrollTrigger, @gsap/react, Lenis, and Motion.
- **Smooth Scrolling:** Optional Lenis integration synchronized with GSAP.
- **Theme Management:** Light and dark mode using next-themes.
- **Typography:** Geist Sans and Geist Mono using Next.js font optimization.
- **Utility Functions:** clsx, tailwind-merge, and class-variance-authority.
- **Form-ready Architecture:** Extensible foundation for modern form and validation libraries.
- **SEO Ready:** Centralized metadata configuration, OpenGraph support, and sitemap.
- **Code Quality:** Biome, ESLint, and Prettier.
- **Git Workflow:** Husky and lint-staged pre-commit automation.
- **Production Validation:** TypeScript checks, linting, formatting checks, and optimized builds.

---

## 🧰 Tech Stack

### Core

| Technology     | Purpose            |
| -------------- | ------------------ |
| Next.js 16     | React framework    |
| React 19       | UI library         |
| TypeScript     | Static typing      |
| Tailwind CSS 4 | Styling system     |
| pnpm           | Package management |

### UI and Design System

| Technology     | Purpose                            |
| -------------- | ---------------------------------- |
| shadcn/ui      | Reusable component architecture    |
| Radix UI       | Accessible UI primitives           |
| Lucide React   | Icon library                       |
| next-themes    | Theme management                   |
| CVA            | Component variants                 |
| clsx           | Conditional classes                |
| tailwind-merge | Tailwind class conflict resolution |

### Animation

| Technology         | Purpose                           |
| ------------------ | --------------------------------- |
| GSAP               | Advanced animations and timelines |
| GSAP ScrollTrigger | Scroll-based animations           |
| @gsap/react        | React integration for GSAP        |
| Lenis              | Smooth scrolling                  |
| Motion             | React animations and interactions |

### Developer Experience

| Technology               | Purpose                          |
| ------------------------ | -------------------------------- |
| Biome                    | Code linting                     |
| ESLint 10                | Next.js and React linting        |
| Prettier                 | Code formatting                  |
| Prettier Tailwind Plugin | Automatic Tailwind class sorting |
| Husky                    | Git hooks                        |
| lint-staged              | Staged-file validation           |

---

## 📁 Project Structure

```text
nextjs-freelance-template/
│
├── public/
│   ├── images/
│   ├── fonts/
│   └── icons/
│
├── src/
│   │
│   ├── app/
│   │   │
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── sitemap.ts
│   │
│   ├── config/
│   │   └── metadata.ts
│   │
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-gsap.ts
│   │
│   ├── lib/
│   │   ├── animations/
│   │   │   └── gsap.ts
│   │   ├── fonts.ts
│   │   └── utils.ts
│   │
│   ├── primitives/
│   │   ├── button.tsx
│   │   ├── container.tsx
│   │   └── dropdown-menu.tsx
│   │
│   ├── provider/
│   │   ├── animation-provider.tsx
│   │   ├── container-provider.tsx
│   │   ├── theme-provider.tsx
│   │   └── theme-toggle.tsx
│   │
│   └── styles/
│       └── globals.css
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── .husky/
│   └── pre-commit
│
├── components.json
├── biome.json
├── eslint.config.mjs
├── .prettierrc
├── .prettierignore
├── next.config.ts
├── postcss.config.mjs
├── pnpm-workspace.yaml
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── LICENSE
└── README.md
```

_The structure above documents the starter's application architecture. Additional component, hook, and configuration directories can be added as projects evolve._

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- Node.js 24
- pnpm 12
- Git

Check your environment:

```bash
node -v
pnpm -v
git --version
```

### 1. Clone the repository

```bash
git clone https://github.com/aniruddha-yalgudre/nextjs-freelance-template.git

cd nextjs-freelance-template
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Start the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production

```bash
pnpm build
```

### 5. Run the production server

```bash
pnpm start
```

---

## 🛠️ Available Scripts

| Command             | Description                                       |
| ------------------- | ------------------------------------------------- |
| `pnpm dev`          | Start the development server                      |
| `pnpm build`        | Create an optimized production build              |
| `pnpm start`        | Start the production server                       |
| `pnpm lint`         | Run Biome and ESLint                              |
| `pnpm lint:fix`     | Apply available lint fixes                        |
| `pnpm format`       | Format files using Prettier                       |
| `pnpm format:check` | Check formatting without modifying files          |
| `pnpm typecheck`    | Run TypeScript type checking                      |
| `pnpm check`        | Run type checking, linting, and formatting checks |
| `pnpm validate`     | Run complete validation and production build      |

---

## 🎨 Styling and Theming

The project uses Tailwind CSS 4 with CSS-first configuration.

Global styles and theme tokens are maintained in:

```text
src/styles/globals.css
```

The design system supports:

- Custom CSS variables.
- Light and dark themes.
- Geist Sans and Geist Mono typography.
- Semantic color tokens.
- Consistent border-radius utilities.
- Reusable component styling.

Dark and light theme management is handled through `next-themes`.

---

## 🧩 UI Components

The project follows a shadcn/ui-inspired component architecture.

Component configuration:

```text
components.json
```

UI primitives:

```text
src/primitives/
```

Import the reusable components using the configured alias:

```tsx
import { Button } from "@/primitives/button"
```

Utilities are centralized in:

```text
src/lib/utils.ts
```

To add additional shadcn components, use:

```bash
pnpm dlx shadcn@latest add button
```

Review the generated files and preserve the project's configured `@/primitives` alias when adding components.

---

## 🎬 Animation System

The starter includes a reusable animation foundation built around GSAP, Lenis, and Motion.

### GSAP

Use GSAP for:

- Timeline-based animations.
- Scroll-triggered reveals.
- Staggered text animations.
- Image parallax.
- Pinned sections.
- Horizontal scrolling experiences.

Centralized GSAP configuration:

```text
src/lib/animations/gsap.ts
```

React integration:

```text
src/hooks/use-gsap.ts
```

### Lenis

Lenis provides optional smooth scrolling and can synchronize with GSAP ScrollTrigger.

The animation provider is located at:

```text
src/provider/animation-provider.tsx
```

It can be enabled or disabled depending on the project:

```tsx
<AnimationProvider smoothScroll={false}>{children}</AnimationProvider>
```

Use `smoothScroll={true}` when a project requires Lenis smooth scrolling.

The provider respects the user's reduced-motion preference.

### Motion

Motion is available for React-based interactions, transitions, gestures, and layout animations.

Import from:

```tsx
import { motion } from "motion/react"
```

**Architecture principle:** Animation libraries should be used where they add value. Smooth scrolling and heavier visual effects should remain optional for lightweight projects.

---

## 🔍 SEO and Metadata

SEO configuration is centralized to make project customization easier.

```text
src/config/metadata.ts
```

The starter includes support for:

- Page metadata.
- OpenGraph metadata.
- Social sharing information.
- Sitemap generation.
- Search-engine-friendly routing.

Update the default website information before deploying your project.

---

## 🧹 Code Quality and Git Workflow

This starter uses a consistent code-quality workflow.

### Biome

Used for JavaScript and TypeScript linting.

```bash
pnpm lint
```

### ESLint

Provides additional Next.js and React-specific rules.

### Prettier

Handles consistent formatting and Tailwind class sorting.

```bash
pnpm format
```

### Husky and lint-staged

Pre-commit hooks automatically run configured checks against staged files.

This helps maintain consistent code quality before changes enter Git history.

### Complete validation

Before committing or deploying, run:

```bash
pnpm validate
```

This performs:

1. TypeScript checking.
2. Biome linting.
3. ESLint validation.
4. Prettier formatting checks.
5. Next.js production build.

---

## 📐 Development Guidelines

- Keep application routes inside `src/app/`.
- Keep application-wide providers inside `src/provider/`.
- Keep reusable UI primitives inside `src/primitives/`.
- Keep custom React hooks inside `src/hooks/`.
- Centralize utilities and animation configuration inside `src/lib/`.
- Maintain global styles and design tokens inside `src/styles/`.
- Keep SEO and application metadata inside `src/config/`.
- Prefer reusable components over duplicated implementation.
- Keep server components as the default and use client components only when interactivity is required.
- Respect accessibility requirements and reduced-motion preferences.
- Run `pnpm validate` before submitting changes.

---

## ⚙️ Customization

### Update website metadata

Modify:

```text
src/config/metadata.ts
```

### Update global styles and theme

Modify:

```text
src/styles/globals.css
```

### Configure application providers

Modify:

```text
src/provider/
```

### Configure GSAP animations

Modify:

```text
src/lib/animations/gsap.ts
```

### Update Next.js settings

Modify:

```text
next.config.ts
```

### Update component aliases

Modify:

```text
components.json
```

---

## 🚀 Deployment

The template is designed to support modern Next.js hosting platforms, including Vercel and other compatible Node.js hosting environments.

Recommended deployment workflow:

1. Customize application metadata and branding.
2. Configure environment variables when required.
3. Run `pnpm validate`.
4. Push your changes to GitHub.
5. Connect the repository to your hosting platform.
6. Configure the production build command as `pnpm build`.

---

## 🤝 Contributing

Suggestions, improvements, and contributions are welcome.

For major architectural changes, please open an issue first to discuss the proposed implementation.

---

## 📄 License

This project is licensed under the MIT License.

See the [LICENSE](LICENSE) file for additional information.

---

**Built by [Aniruddha Yalgudre](https://github.com/aniruddha-yalgudre)**

[GitHub](https://github.com/aniruddha-yalgudre) · [Portfolio](https://aniruddha-design.vercel.app/)
