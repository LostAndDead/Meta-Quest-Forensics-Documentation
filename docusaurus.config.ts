import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import dotenv from 'dotenv';
import { themes as prismThemes } from 'prism-react-renderer';
dotenv.config();  // Load environment variables from .env file 

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Quest Forensics Documentation',
  tagline: 'Dissecting the Meta Quest platform for Digital Forensics',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://quest-forensics.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lostanddead', // Usually your GitHub org/user name.
  projectName: 'quest-forensics', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/LostAndDead/Meta-Quest-Forensics-Documentation/blob/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        href: "static/fonts/NeuePlak-Regular.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: "anonymous",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        href: "NeuePlak-ExtraBlack.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: "anonymous",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        href: "static/fonts/NeuePlak-SemiBold.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: "anonymous",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        href: "static/fonts/NeuePlakText-Regular.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: "anonymous",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        href: "static/fonts/FiraCode-Regular.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: "anonymous",
      },
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo.png',
    algolia: {
      // The application ID provided by Algolia
      appId: process.env.ALGOLIA_APP_ID,

      // Public API key: it is safe to commit it
      apiKey: process.env.ALGOLIA_SEARCH_API_KEY,

      indexName: process.env.ALGOLIA_INDEX_NAME,

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,
    },
    navbar: {
      title: 'Quest Forensics',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'autoSidebar',
          position: 'left',
          label: 'Introduction',
          to: '/intro',
        },
        {
          type: 'dropdown',
          label: 'Extraction',
          position: 'left',
          to: '/extraction/intro',
          items: [
            {
              label: 'MTP',
              to: '/extraction/mtp',
            },
            {
              label: 'ADB',
              to: '/extraction/adb/adb_extraction',
            },
            {
              label: 'Cloud',
              to: '/extraction/cloud',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'Analysis',
          position: 'left',
          to: '/analysis/intro',
          items: [
            {
              label: 'Artifacts',
              to: '/analysis/artifacts/',
            },
            {
              label: 'List of Artifacts',
              to: '/analysis/artifacts/artifacts_table',
            },
            {
              label: 'Tools',
              to: '/analysis/tools',
            }
          ],
        },
        {
          href: 'https://github.com/LostAndDead/Meta-Quest-Forensics-Documentation/',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Extraction',
              to: '/extraction/intro',
            },
            {
              label: 'Analysis',
              to: '/analysis/intro',
            },
            {
              label: 'Glossary',
              to: '/glossary',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              to: 'https://github.com/LostAndDead/Meta-Quest-Forensics-Documentation/'
            },
            {
              label: 'Contributing',
              to: '/contributing',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} LostAndDead. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
