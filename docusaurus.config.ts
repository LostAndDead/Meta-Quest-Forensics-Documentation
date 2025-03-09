import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Meta Quest Forensic Documentation',
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
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Quest Forensics',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'autoSidebar',
          position: 'left',
          label: 'Extraction',
          href: '/extraction/intro',
        },
        {
          type: 'docSidebar',
          sidebarId: 'autoSidebar',
          position: 'left',
          label: 'Analysis',
          href: '/analysis/intro',
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
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Dyslexia Friendly Font',
              to: '/?docusaurus-data-dyslexic',
            },
            {
              label: 'GitHub',
              to: 'https://github.com/LostAndDead/Meta-Quest-Forensics-Documentation/'
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
