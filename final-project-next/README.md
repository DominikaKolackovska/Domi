This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
## Component Library Documentation
Welcome to the documentation for your React component library! This library provides a set of reusable, styled, and accessible components for building feature-rich user interfaces.

Table of Contents
1. Introduction
2. Installation
3. Components Overview
        Button
        Label
        SegmentedTabs
        SelectInput
        Tab
        TextArea
        TextInput
        Widget
4. Examples

## Introduction
This component library provides modular and customizable components for building dynamic user interfaces. Each component is styled with CSS modules to ensure scoped and maintainable styles. The library emphasizes accessibility and usability across devices.

## Installation
bash
Copy code
npm install final-project-next
Import the components into your project as needed:

tsx
Copy code
import { Button, TextInput, Widget } from 'your-component-library';
Components Overview

## Button
A customizable button component with support for variants, sizes, and states.

Props:
label: The text displayed inside the button.
variant: Style of the button (primary | secondary).
size: Button size (small | medium | large).
disabled: Whether the button is disabled.
onClick: Callback for button click events.

## Label
A styled label for associating text with form controls.

Props:
text: Label text.
children: Nested components.
className: Additional CSS classes for customization.
htmlFor: ID of the associated input element.

## SegmentedTabs
A tab navigation component for switching between views.

Props:
tabs: Array of tab objects ({ id: string, label: string }).
defaultActiveTab: ID of the default active tab.
onChange: Callback when a tab is switched.
variant: Style variant for the tab (first | middle | last).

## SelectInput
A custom select dropdown for choosing options.

Props:
label: Label text for the select input.
options: Array of options ({ value: string, label: string }).
value: Currently selected value.
state: Visual state (default | selected | success | error).
handleChange: Callback for when an option is selected.
disabled: Whether the dropdown is disabled.


## Tab
A single tab used within the SegmentedTabs component.

Props:
id: Unique ID of the tab.
label: Text label for the tab.
isActive: Whether the tab is currently active.
state: Tab position (first | middle | last).
onClick: Callback for tab click events.


## TextArea
A multi-line text input field.

Props:
value: Current text value.
onChange: Callback for text changes.
placeholder: Placeholder text.
label: Label for the textarea.
error: Error message.
disabled: Whether the textarea is disabled.
rows: Number of rows (default: 3).
cols: Number of columns.

## TextInput
A single-line text input field.

Props:
value: Current text value.
onChange: Callback for text changes.
placeholder: Placeholder text.
type: Input type (e.g., text, password).
label: Label for the input.
error: Error message.
disabled: Whether the input is disabled.

## Widget
A card-like container with a title, description, and optional button.

Props:
title: Title of the widget.
description: Description or content of the widget.
button: Whether to display a button (default: true).
onButtonClick: Callback for button clicks.
buttonLabel: Label for the button.

## Notes
Customize components using the className prop where available.
Ensure accessibility by providing labels and handling keyboard interactions appropriately.
For further customization, refer to the styles in the CSS modules.
