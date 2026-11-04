import React from 'react'
import Head from 'next/head'

const Metatag = ({ data }) => {
  return (
    <Head>
      <title>{data.title}</title>
      <meta charSet='UTF-8' />
      <meta name='author' content='Kinetic Span' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='robots' content='index, follow' />
      <meta property='og:type' content='website' />
      <meta property='og:locale' content='en_IN' />
      <meta name='description' content={data.desc} />
      <meta name='keywords' content={data.keyword} />
      <meta rel='canonical' href={data.canonical} />
      <meta property='og:title' content={data.ogTitle} />
      <meta
        property='og:image'
        content='https://www.kineticspan.com/kineticSpan.svg'
      />
      <meta
        property='og:image:alt'
        content={'Kinetic Span - Rainwater Harvesting System'}
      />
      <meta property='og:description' content={data.ogDescription} />
      <meta property='og:url' content={data.ogUrl} />
      <meta name='twitter:title' content={data.twittertitle} />
      <meta name='twitter:description' content={data.twitterdescription} />
      <meta property='og:site_name' content='Kinetic Span' />
      <meta
        name='google-site-verification'
        content='mQ-8k3w1nLxr6N4-MwRn5Ekf_iWENjeLb0nT9xCKa1U'
      />
      <link rel='icon' href='/favicon.ico' />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='96x96'
        href='/favicon-96x96.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='192x192'
        href='/android-chrome-192x192.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='512x512'
        href='/android-chrome-512x512.png'
      />
      <link rel='manifest' href='/site.webmanifest' />
      <script
        async
        src='https://www.googletagmanager.com/gtag/js?id=AW-16650006765'
      />
    </Head>
  )
}

export default Metatag
