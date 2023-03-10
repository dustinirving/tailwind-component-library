import { create } from '@storybook/theming';
import './tailwind.css';
/**
 * Read https://storybook.js.org/docs/react/configure/overview#configure-story-rendering
 * for more information about the purpose of this file.
 *
 * Use preview.js for global code (such as CSS imports or JavaScript mocks)
 * that applies to all stories. For example, `import thirdPartyCss.css`.
 *
 * This file can have three exports:
 * - decorators - an array of global decorators
 * - parameters - an object of global parameters
 * - globalTypes - definition of globalTypes
 */

/**
 * Decorators
 *
 * A decorator is a way to wrap a story in extra “rendering” functionality.
 *
 * Example:
 *
 * import React from 'react';
 * export const decorators = [(Story) => <div style={{ margin: '3em' }}><Story/></div>];
 *
 * Each story throughout the library will be wrapped in a div with a margin of 3
 */

/**
 * Parameters
 *
 * Most Storybook addons are configured via a parameter-based API.
 * You can set global parameters in this file
 *
 * export const parameters = {
 *   backgrounds: {
 *     values: [
 *       { name: 'red', value: '#f00' },
 *       { name: 'green', value: '#0f0' },
 *     ],
 *   },
 * };
 *
 * With backgrounds, you configure the list of backgrounds that every story can render in.
 */

// base: "light" | "dark";
//     colorPrimary?: string;
//     colorSecondary?: string;
//     appBg?: string;
//     appContentBg?: string;
//     appBorderColor?: string;
//     appBorderRadius?: number;
//     fontBase?: string;
//     fontCode?: string;
//     textColor?: string;
//     textInverseColor?: string;
//     textMutedColor?: string;
//     barTextColor?: string;
//     barSelectedColor?: string;
//     barBg?: string;
//     inputBg?: string;
//     inputBorder?: string;
//     inputTextColor?: string;
//     inputBorderRadius?: number;
//     brandTitle?: string;
//     brandUrl?: string;
//     brandImage?: string;
//     brandTarget?: string;
//     gridCellSize?: number;

const lightTheme = create({
  base: 'light',
  appBg: '#f9fafb',
  colorPrimary: 'red',
  colorSecondary: '#0369a1',
  appContentBg: '#ffffff',
  barBg: '#ffffff',
  brandTitle: 'Tailwind Components',
});
const darkTheme = create({
  base: 'dark',
  appBg: '#111827',
  colorSecondary: '#0ea5e9',
  colorPrimary: 'red',
  appContentBg: '#1f2937',
  barBg: '#1f2937',
  brandTitle: 'Tailwind Components',
});

export const parameters = {
  darkMode: {
    dark: darkTheme,
    light: lightTheme,
    stylePreview: true,
  },
};

/**
 * Global Types
 *
 * Global Types allow you to add your own toolbars by creating
 * globalTypes with a toolbar annotation:
 *
 * For example:
 *
 * export const globalTypes = {
 *   theme: {
 *     name: 'Theme',
 *     description: 'Global theme for components',
 *     defaultValue: 'light',
 *     toolbar: {
 *       icon: 'circlehollow',
 *       // array of plain string values or MenuItem shape
 *       items: ['light', 'dark'],
 *       },
 *     },
 *   };
 *
 * Will add a new dropdown in your toolbar with options light and dark.
 **/
