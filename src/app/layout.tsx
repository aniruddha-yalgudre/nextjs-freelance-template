import { ThemeProvider } from "@/provider/theme-provider"

import "@/styles/globals.css"

import { fonts } from "@/lib/fonts"
import { cn } from "@/lib/utils"

import { createMetadata } from "@/config/metadata"

export const metadata = createMetadata()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        // fonts.soraFont.variable,
        fonts.geistSans.variable,
        fonts.geistMono.variable,
        "font-geistSans",
      )}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <main className="min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
