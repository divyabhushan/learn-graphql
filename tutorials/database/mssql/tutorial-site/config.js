const config = {
    gatsby: {
      pathPrefix: "/learn/database/microsoft-sql-server",
      siteUrl: "https://hasura.io",
      gaTrackingId: "GTM-WBBW2LN",
      trailingSlash: true,
    },
    header: {
      logo: "",
      logoLink: "https://hasura.io/learn/",
      title:
        "learn <a href='https://hasura.io/learn/'>/ database </a><a href='https://hasura.io/learn/database/microsoft-sql-server/introduction/'>/ mssql</a>",
      githubUrl: "https://github.com/hasura/learn-graphql",
      helpUrl: "https://discord.com/invite/hasura",
      tweetText:
        "Check out this MSSQL course for developers by @HasuraHQ https://hasura.io/learn/database/microsoft-sql-server/introduction/",
      links: [
        {
          text: "",
          link: "",
        },
      ],
      search: {
        enabled: true,
        indexName: "learn-database-mssql",
        algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
        algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
        algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
      },
    },
    sidebar: {
      forcedNavOrder: [
        "/introduction/",
        "/what-is-mssql/",
        "/installation/",
      ],
      links: [
        {
          text: "Hasura Docs",
          link: "https://hasura.io/docs/latest/graphql/core/index.html",
        },
        {
          text: "GraphQL API",
          link: "https://hasura.io/graphql/",
        },
      ],
    },
    siteMetadata: {
      title: "Introduction to MSSQL database for developers | Hasura",
      description:
        "A concise and powerful tutorial that covers fundamental concepts of MSSQL instantly and how to leverage it with Hasura",
      ogImage:
        "",
      docsLocation:
        "https://github.com/hasura/learn-graphql/tree/master/tutorials/database/mssql/tutorial-site/content",
      favicon:
        "https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/hasura-favicon.png",
    },
  };
  
  module.exports = config;
  