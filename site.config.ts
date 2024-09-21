import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '101cc9815b6f8088bee4d44201d385df',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'fiilit',
  domain: 'fiilit.co.kr',
  author: 'parksisi',
  seotitle: '리뷰를 한 눈에, fiilit',

  // open graph metadata (optional)
  description: '쿠팡, 알리 등 이커머스 사이트 리뷰를 요약해 보여주고 제휴 링크를 제공하는 제휴마케팅 사이트 입니다.',

  // social usernames (optional)
  // twitter: 'jotzilla',
  // github: 'verfasor',
  // linkedin: 'mighil',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://www.fiilit.co.kr/page-icon.png',
  defaultPageCover: 'https://www.fiilit.co.kr/page-cover.jpg',
  defaultPageCoverPosition: 0.5,

  // og img
  ogImageUrl: 'https://www.fiilit.co.kr/og_img.png',

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: '운동',
      pageId: 'f58359830f804d7dbcc65256e9adaa11'
    },
  ]
})
