import type { Metadata } from "next"

export const SITE_CONFIG = {
  name: "Aniruddha Yalgudre",
  title: "Aniruddha Yalgudre | Frontend Developer: Portfolio & Projects",
  description:
    "Aniruddha Yalgudre is a freelance developer specializing in high-quality frontend, full-stack, and UI/UX solutions for businesses and startups. Explore portfolio, projects, skills, and contact information.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://aniruddha-design.vercel.app",
  ogImage:
    "https://o2a0p1u8mrgj3pm2.public.blob.vercel-storage.com/Artboard%204%20copy%40500x.png",
  keywords: [
    "Aniruddha Yalgudre",
    "Freelance Developer",
    "Web Developer Portfolio",
    "Creative Frontend Developer",
    "Full Stack Developer",
    "UI/UX Developer",
    "Next.js Developer",
    "React Developer",
    "MERN Stack Developer",
    "Hire Developer",
    "Web App Development",
    "Frontend Portfolio",
  ],
  author: "Aniruddha Yalgudre",
  twitter: "@AniruddhaY83682",
  // Remove 'language' (not used in Metadata object, see error)
  type: "website",
  // Remove themeColor from SITE_CONFIG metadata, see Next.js warning (move to viewport export)
  // themeColor: "#0f172a",
  robots: "index, follow",
}

// NOTE: themeColor has been removed from the returned metadata object—move to viewport export per Next.js docs
export function createMetadata({
  title,
  description,
  image,
  keywords,
  canonical,
  robots,
}: {
  title?: string
  description?: string
  image?: string
  keywords?: string[]
  canonical?: string
  robots?: string
} = {}): Metadata {
  const finalTitle = title
    ? `${title} | ${SITE_CONFIG.name}`
    : SITE_CONFIG.title

  return {
    title: finalTitle,
    description: description || SITE_CONFIG.description,
    keywords: keywords || SITE_CONFIG.keywords,
    applicationName: SITE_CONFIG.name,
    authors: [{ name: SITE_CONFIG.author, url: SITE_CONFIG.url }],
    creator: SITE_CONFIG.author,
    publisher: SITE_CONFIG.author,
    icons: {
      icon: SITE_CONFIG.ogImage,
      shortcut: SITE_CONFIG.ogImage,
      apple: SITE_CONFIG.ogImage,
      other: [
        {
          rel: "mask-icon",
          url: SITE_CONFIG.ogImage,
          color: "#0f172a",
        },
      ],
    },
    // themeColor: SITE_CONFIG.themeColor, // Removed per Next.js warning; add to viewport export instead
    robots: robots || SITE_CONFIG.robots,
    alternates: {
      canonical: canonical || SITE_CONFIG.url,
      languages: {
        en: SITE_CONFIG.url,
      },
    },
    openGraph: {
      title: finalTitle,
      description: description || SITE_CONFIG.description,
      url: canonical || SITE_CONFIG.url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: image || SITE_CONFIG.ogImage,
          width: 1200,
          height: 630,
          alt: SITE_CONFIG.title,
          type: "image/png",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: SITE_CONFIG.twitter,
      creator: SITE_CONFIG.twitter,
      title: finalTitle,
      description: description || SITE_CONFIG.description,
      images: [image || SITE_CONFIG.ogImage],
    },
    metadataBase: new URL(SITE_CONFIG.url),
    category: "technology",
    // Remove 'language' (no such property in Metadata)
  }
}
