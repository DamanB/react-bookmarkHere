import NextHead from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Head = ({ title }) => {
  return (
      <NextHead>
        <title>{title}</title>
        <meta name="description" content="All your bookmarks in one place!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Font */}
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat"
          rel="stylesheet"
        />
        {/* Logo */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,300,0,0" />
      </NextHead>
  )
}

export default Head;
