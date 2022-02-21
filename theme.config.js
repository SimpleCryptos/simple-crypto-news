export default {
  github: 'https://github.com/SimpleCryptos/simple-crypto-news',
  docsRepositoryBase:
    'https://github.com/SimpleCryptos/simple-crypto-news/tree/main',
  titleSuffix: ' – Simple Crypto News',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">
        Simple Crypto News
      </span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Real News, Real Simple
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="Simple Crypto News: Real News, Real Simple"
      />
      <meta
        name="og:description"
        content="Simple Crypto News: Real News, Real Simple"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content="https://simple-crypto-news.vercel.app/og.png"
      />
      <meta
        name="twitter:site:domain"
        content="simple-crypto-news.vercel.app"
      />
      <meta
        name="twitter:url"
        content="https://simple-crypto-news.vercel.app"
      />
      <meta
        name="og:title"
        content="Simple Crypto News: Next.js static site generator"
      />
      <meta
        name="og:image"
        content="https://simple-crypto-news.vercel.app/og.png"
      />
      <meta name="apple-mobile-web-app-title" content="Simple Crypto News" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-chrome-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'ga', text: 'Gaeilge' },
  ],
  defaultMenuCollapsed: true,
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © Simple Crypto News.</>,
}
