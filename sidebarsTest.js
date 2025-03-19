// sidebarsTest.js

// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  testSidebar: [
    {
      type: 'category',
      label: 'Category 1',
      link: {
        type: 'generated-index',
        title: 'Übersicht: Category 1',
        description: 'Hier findest du alle Seiten von Category 1 als Links.',
        slug: '/category1/', // Optional, legt den URL-Pfad fest
      },
      items: [
        'category1/page1', // entspricht test/category1/page1.md
        'category1/page2', // entspricht test/category1/page2.md
      ],
    },
    {
      type: 'category',
      label: 'Category 2',
      link: {
        type: 'generated-index',
        title: 'Übersicht: Category 2',
        description: 'Hier findest du alle Seiten von Category 2 als Links.',
        slug: '/category2/',
      },
      items: [
        'category2/page3', // entspricht test/category2/page3.md
        'category2/page4', // entspricht test/category2/page4.md
      ],
    },
  ],
};

module.exports = sidebars;
