export function initializeAxe() {
  if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
    // @ts-ignore - @axe-core/react תלות פיתוח
    import('@axe-core/react').then(axe => {
      const React = require('react');
      const ReactDOM = require('react-dom');

      axe.default(React, ReactDOM, 1000, {
        rules: [
          {
            id: 'color-contrast',
            enabled: true
          },
          {
            id: 'document-title',
            enabled: true
          },
          {
            id: 'html-has-lang',
            enabled: true
          },
          {
            id: 'label',
            enabled: true
          },
          {
            id: 'landmark-one-main',
            enabled: true
          },
          {
            id: 'landmark-complementary-is-top-level',
            enabled: true
          },
          {
            id: 'meta-viewport',
            enabled: true
          },
          {
            id: 'region',
            enabled: true
          }
        ]
      });
    });
  }
} 