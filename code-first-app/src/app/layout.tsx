import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Auth from '@/components/auth/Auth' 
import NavBar from "@/components/NavBar";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Title Listing',
  description: 'List all titles and comments app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavBar isSignedIn={false} />
        <Auth>{children}</Auth>
      </body>
    </html>
  )
}