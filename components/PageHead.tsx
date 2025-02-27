import Head from 'next/head'
import * as React from 'react'

import * as types from 'lib/types'
import * as config from 'lib/config'

export const PageHead: React.FC<
  types.PageProps & {
    title?: string
    description?: string
    image?: string
    url?: string
  }
> = ({ site, title, description, url }) => {
  const rssFeedUrl = `${config.host}/feed`

  title = title ?? site?.name
  description = description ?? site?.description

  return (
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />

      <meta name='robots' content='index,follow' />
      <meta property='og:type' content='website' />
      <meta property='og:image' content={config.ogImageUrl} />

      <meta name="naver-site-verification" content="62308c3233230b99cab7e1009fd92f2b7172605e" />
      <meta name="google-site-verification" content="_a3ncaYY7vm5zkquRP8wmax6yCRkIwpQ48WlQ3bKCp8" />

      {site && (
        <>
          <meta property='og:site_name' content={site.name} />
          <meta property='twitter:domain' content={site.domain} />
        </>
      )}

      {config.twitter && (
        <meta name='twitter:creator' content={`@${config.twitter}`} />
      )}

      {description && (
        <>
          <meta name='description' content={description} />
          <meta property='og:description' content={description} />
          <meta name='twitter:description' content={description} />
        </>
      )}

      {url && (
        <>
          <link rel='canonical' href={url} />
          <meta property='og:url' content={url} />
          <meta property='twitter:url' content={url} />
        </>
      )}

      <link
        rel='alternate'
        type='application/rss+xml'
        href={rssFeedUrl}
        title={site?.name}
      />

      <meta property='og:title' content={title} />
      <meta name='twitter:title' content={title} />
      <title>{title}</title>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-YVHGE4852W"
      />
      <script
        dangerouslySetInnerHTML={{
          __html:
            "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-YVHGE4852W')"
        }}
      />
    </Head>
  )
}
