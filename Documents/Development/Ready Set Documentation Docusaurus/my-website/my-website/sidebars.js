// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // Ready Set User Manual Sidebar
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/creating-account',
        'getting-started/website-navigation',
      ],
    },
    {
      type: 'category',
      label: 'For Clients',
      items: [
        'for-clients/placing-first-order',
        'for-clients/tracking-orders',
        'for-clients/managing-addresses',
      ],
    },
    {
      type: 'category',
      label: 'For Drivers',
      items: [
        'for-drivers/becoming-driver',
        'for-drivers/using-driver-app',
      ],
    },
    {
      type: 'category',
      label: 'For Vendors',
      items: [
        'for-vendors/vendor-partnership',
      ],
    },
    {
      type: 'category',
      label: 'Special Services',
      items: [
        'special-services/catering-services',
        'special-services/on-demand-deliveries',
      ],
    },
    {
      type: 'category',
      label: 'Account Management',
      items: [
        'account-management/profile-settings',
        'account-management/payment-methods',
      ],
    },
    {
      type: 'category',
      label: 'Support',
      items: [
        'support/contact-support',
        'support/faq',
      ],
    },
  ],
};

export default sidebars;