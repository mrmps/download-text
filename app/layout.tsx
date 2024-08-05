import type { Metadata } from 'next'
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Text to File Downloader - Convert Text to .txt File Instantly',
  description: 'Easily convert and download any text as a .txt file with our free online tool. No sign-up required, instant download.',
  keywords: 'text to file, download text, convert text, txt file, online tool',
  openGraph: {
    title: 'Text to File Downloader',
    description: 'Convert any text to a downloadable .txt file in seconds',
    type: 'website',
    url: 'https://download-text.vercel.app',
    images: [
      {
        url: 'https://download-text.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Text to File Downloader',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Text to File Downloader',
    description: 'Convert any text to a downloadable .txt file in seconds',
    images: ['download-text.vercel.app/og-image.png'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}