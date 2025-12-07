# Next.js Freelance Template

[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-blue)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.1.17-teal)](https://tailwindcss.com/)
[![Biome](https://img.shields.io/badge/Biome-Lint%2FFormat-orange)](https://biomejs.dev/)

A **production-ready Next.js 16 template** for freelance projects, fully configured with:

- **Tailwind CSS**
- **Biome + Prettier** for linting & formatting
- **Custom Fonts**: Geist Sans, Geist Mono
- **Theme Support**: Light/Dark mode (`next-themes`)
- **SEO Ready**: Metadata, OpenGraph, robots.txt, sitemap
- **Reusable Components**: Navbar, Footer, Container, Hero

> Live Template Repo: [Next.js Freelance Template](https://github.com/aniruddha-yalgudre/nextjs-freelance-template)

---

## 🚀 Features

- Modern **Next.js 16 App Router**
- **Tailwind CSS** with sorted classes
- **Custom fonts & typography**
- **Light/Dark theme support**
- **Biome linting + formatting**
- **Husky pre-commit hooks**
- **SEO-ready** metadata
- **Navbar, Footer, Container, Hero components**
- External image support configured

---

## 📂 Project Structure

```
nextjs-template/

├─ public/                     # Static files
│   ├─ favicon.ico
│   ├─ images/                 # Store static images here
│   └─ fonts/                  # Add custom fonts here
├─ src/
|   ├─ app/                    # Next.js 16 App Router directory
│   |    ├─ layout.tsx              # Root layout: wraps ThemeProvider, includes Navbar & Footer
│   |    ├─ page.tsx                # Home page component
│   |    └─ ...                     # Other route segments or pages
|   ├─ components/                  # Shared UI components
|   │   ├─ Navbar.tsx
|   │   ├─ Container.tsx
|   │   ├─ Hero.tsx
|   │   └─ ...                        # More reusable components
|   |
|   ├─ provider/                       # Application-wide providers
|   │   └─ theme-provider.tsx          # Wrapper for next-themes
|   │   └─ container-provider.tsx      # Provides default container width context
|   |
|   ├─ config/                 # SEO metadata and app config
|   ├─ constant/               # Project-wide constants
|   ├─ hooks/                  # Custom and reusable React hooks
|   ├─ lib/                    # Helper utilities (e.g. cn.ts, etc.)
|   ├─ primitives/             # Low-level UI primitives (e.g. Button and shad-cn components)
|   ├─ types/                  # TypeScript types and interfaces
|   ├─ styles/                 # Styles
|      └─ globals.css         # Tailwind base & global styles
├─ .gitignore                  # Ignored files and directories
├─ biome.json                  # Biome configuration
├─ tailwind.config.ts          # Tailwind CSS config
├─ postcss.config.cjs          # PostCSS config
├─ next.config.ts              # Next.js config
├─ package.json                # NPM scripts & dependencies
├─ tsconfig.json               # TypeScript config
├─ LICENSE                     # MIT License
└─ README.md                   # Project documentation
```

## Getting Started

To get started with the Next Essential project, follow these steps:

1. Clone the repository
2. Install dependencies: `npm install` or `pnpm install` or `yarn install`
3. Run the development server: `npm run dev` or `pnpm run dev` or `yarn run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Guidelines

- Keep reusable components in the `components/` folder
- Place primitive components like buttons, inputs, etc., in the `primitives/` folder
- Store hooks in the `hooks/` folder to make them easily reusable
- Define all interfaces in the `types/` folder
- Store helpers, utilities, and configurations in the `lib/` folder
- Use context and global state management with the `providers/` folder
- Follow the TypeScript and Biome.js linting rules
- Use Husky pre-commit hooks to ensure code quality

## Customization

- Modify the theme in `styles/globals.css`
- Configure Next.js settings in `next.config.ts`

For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
