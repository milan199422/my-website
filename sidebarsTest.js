// sidebarsTest.js

// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  testSidebar: [
    {
      type: 'category',
      label: 'Schwachstellenanalyse',
      link: {
        type: 'generated-index',
        title: 'Übersicht: ',
        description: 'Hier findest du alle Seiten von Category 1 als Links.',
        slug: '/schwachstellenanalyse/', // Optional, legt den URL-Pfad fest
      },
      items: [
        'schwachstellenanalyse/page1', // entspricht test/category1/page1.md
        'schwachstellenanalyse/page2', // entspricht test/category1/page2.md
      ],
    },
    {
      type: 'category',
      label: 'Schulungen',
      link: {
        type: 'generated-index',
        title: 'Übersicht: Category 2',
        description: 'Hier findest du alle Seiten von Category 2 als Links.',
        slug: '/schulungen/',
      },
      items: [
        'schulungen/page3', // entspricht test/category2/page3.md
        'schulungen/page4', // entspricht test/category2/page4.md
      ],
    },
  ],
};

module.exports = sidebars;
