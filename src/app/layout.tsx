import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.abdisileshi.dev"),
  title: {
    default: "Abdi Sileshi | Full-Stack Software Engineer & AI Builder",
    template: "%s | Abdi Sileshi",
  },
  description:
    "Portfolio of Abdi Sileshi Worku, a product-focused Software Engineer specializing in Next.js, React, Node.js, databases, and LLM/AI workflows.",
  keywords: [
    "Abdi Sileshi",
    "Abdi Sileshi Worku",
    "Software Engineer Portfolio",
    "Full-Stack Developer",
    "Next.js Developer",
    "AI Engineer",
    "React Developer",
    "Ethiopian Software Engineer",
    "ASTU Software Engineering",
  ],
  authors: [{ name: "Abdi Sileshi", url: "https://www.abdisileshi.dev" }],
  creator: "Abdi Sileshi",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Abdi Sileshi | Full-Stack Software Engineer",
    description:
      "Graduating Software Engineering student building production-ready, beautiful web applications and practical AI systems.",
    url: "https://www.abdisileshi.dev",
    siteName: "Abdi Sileshi Portfolio",
    images: [
      {
        url: "/hero-profile.png",
        width: 1200,
        height: 630,
        alt: "Abdi Sileshi - Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdi Sileshi | Full-Stack Software Engineer",
    description:
      "Graduating Software Engineering student building production-ready, beautiful web applications and practical AI systems.",
    images: ["/hero-profile.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased noise-overlay`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="bottom-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
