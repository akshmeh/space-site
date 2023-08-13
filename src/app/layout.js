import './globals.css'
import { Barlow, Inter } from 'next/font/google'
import Head from './Head.js';

// const inter = Inter({ subsets: ['latin'] })
const barlow = Barlow({weight:'400',subsets: ['latin']})


// export const metadata = {
//   title: 'Space Site',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head name={"Space Site"}/>
      <body className={barlow.className}>{children}</body>
    </html>
  )
}
