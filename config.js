const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://wiki.nk-tran.com',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '/logos/crest-logo.png',
    logoLink: 'https://wiki.nk-tran.com',
    title:
      "Wiki",
    githubUrl: 'https://github.com/CREST-Adelaide/CREST-Wiki',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: '', link: '' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "CREST Wiki",
  },
  siteMetadata: {
    title: 'Wiki | CREST',
    description: 'Wiki of CREST for internal reference and collaboration ',
    ogImage: null,
    docsLocation: 'https://github.com/CREST-Adelaide/CREST-Wiki/tree/master/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
