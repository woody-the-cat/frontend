export const metadata = {
  title: 'woody',
  description: 'woody the little terro- cutie pie',
}
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      </head>
      <body className="bg-gray-700">
        {children}
        <Analytics />
        </body>
    </html>
  )
}
