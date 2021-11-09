module.exports = {
  title: 'zustand-rx',
  tagline: 'The tagline of my site',
  url: 'https://zustand-rx.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'patdx', // Usually your GitHub org/user name.
  projectName: 'zustand-rx', // Usually your repo name.
  plugins: [
    [
      'docusaurus-plugin-typedoc',

      // Plugin / TypeDoc options
      {
        entryPoints: ['libs/zustand-rx/src/index.ts'],
        tsconfig: 'libs/zustand-rx/tsconfig.lib.json',
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'zustand-rx',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/api/', // 'api' is the 'out' directory
          activeBasePath: 'docs',
          label: 'API',
          position: 'left',
        },
        // {
        //   to: 'docs/',
        //   activeBasePath: 'docs',
        //   label: 'Docs',
        //   position: 'left',
        // },
        // { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    // footer: {
    //   style: 'dark',
    //   links: [
    //     // {
    //     //   title: 'Docs',
    //     //   items: [
    //     //     {
    //     //       label: 'Style Guide',
    //     //       to: 'docs/',
    //     //     },
    //     //     {
    //     //       label: 'Second Doc',
    //     //       to: 'docs/doc2/',
    //     //     },
    //     //   ],
    //     // },
    //     // {
    //     //   title: 'Community',
    //     //   items: [
    //     //     {
    //     //       label: 'Stack Overflow',
    //     //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
    //     //     },
    //     //     {
    //     //       label: 'Discord',
    //     //       href: 'https://discordapp.com/invite/docusaurus',
    //     //     },
    //     //     {
    //     //       label: 'Twitter',
    //     //       href: 'https://twitter.com/docusaurus',
    //     //     },
    //     //   ],
    //     // },
    //     {
    //       title: 'More',
    //       items: [
    //         // {
    //         //   label: 'Blog',
    //         //   to: 'blog',
    //         // },
    //         {
    //           label: 'GitHub',
    //           href: 'https://github.com/facebook/docusaurus',
    //         },
    //       ],
    //     },
    //   ],
    //   // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    // },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // routeBasePath: '/',
          // sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        // },
        // theme: {
        //   customCss: require.resolve('./src/css/custom.css'),
        // },
      },
    ],
  ],
};
