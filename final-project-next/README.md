## Component Library Documentation
Welcome to the documentation for your React component library! This library provides a set of reusable, styled, and accessible components for building feature-rich user interfaces.

Table of Contents
1. Introduction
2. Installation
3. Components Overview:
  - Button
  - Label
  - SegmentedTabs
  - SelectInput
  - Tab
  - TextArea
  - TextInput
  - Widget
4. Pages Overview
  - Homepage
  - Components Page
  - Showcase Page
  - Text Input Page
  - Select Input Page
  - Tabs Page
5. Running the App
6. Technologies Used
7. License

## Introduction
This component library provides modular and customizable components for building dynamic user interfaces. 
Each component is styled with CSS modules to ensure scoped and maintainable styles. 
The library emphasizes accessibility and usability across devices.

This web app demonstrates various reusable UI components built with React. 
The components are organized into different pages that showcase their functionality and allow users to interact with them directly.

## The features:

A selection of UI components such as buttons, text inputs, select inputs, and tabs.
Interactive forms and showcases where users can try out different component states.
A simple, clean design with responsive UI.

  - Component Showcase: A page where users can explore different UI components like buttons, select inputs, and tabs.
  - Interactive Demo: Pages that let users interact with components in different states (e.g., default, success, error).
  - Form Validation: Interactive forms that include input validation, including error handling for text input fields.
  - Tabs: A segmented tabs component that switches content based on the active tab.

## Installation

```bash
npm install final-project-next
```

Import the components into your project as needed:

```
import { Button, TextInput, Widget } from 'your-component-library'
```

# Components Overview

## Button
A customizable button component with support for variants, sizes, and states.

Props:
  - label: The text displayed inside the button.
  - variant: Style of the button (primary | secondary).
  - size: Button size (small | medium | large).
  - disabled: Whether the button is disabled.
  - onClick: Callback for button click events.

## Label
A styled label for associating text with form controls.

Props:
  - text: Label text.
  - children: Nested components.
  - className: Additional CSS classes for customization.
  - htmlFor: ID of the associated input element.

## SegmentedTabs
A tab navigation component for switching between views.

Props:
  - tabs: Array of tab objects ({ id: string, label: string }).
  - defaultActiveTab: ID of the default active tab.
  - onChange: Callback when a tab is switched.
  - variant: Style variant for the tab (first | middle | last).

## SelectInput
A custom select dropdown for choosing options.

Props:
  - label: Label text for the select input.
  - options: Array of options ({ value: string, label: string }).
  - value: Currently selected value.
  - state: Visual state (default | selected | success | error).
  - handleChange: Callback for when an option is selected.
  - disabled: Whether the dropdown is disabled.


## Tab
A single tab used within the SegmentedTabs component.

Props:
  - id: Unique ID of the tab.
  - label: Text label for the tab.
  - isActive: Whether the tab is currently active.
  - state: Tab position (first | middle | last).
  - onClick: Callback for tab click events.


## TextArea
A multi-line text input field.

Props:
  - value: Current text value.
  - onChange: Callback for text changes.
  - placeholder: Placeholder text.
  - label: Label for the textarea.
  - error: Error message.
  - disabled: Whether the textarea is disabled.
  - rows: Number of rows (default: 3).
  - cols: Number of columns.

## TextInput
A single-line text input field.

Props:
  - value: Current text value.
  - onChange: Callback for text changes.
  - placeholder: Placeholder text.
  - type: Input type (e.g., text, password).
  - label: Label for the input.
  - error: Error message.
  - disabled: Whether the input is disabled.

## Widget
A card-like container with a title, description, and optional button.

Props:
  - title: Title of the widget.
  - description: Description or content of the widget.
  - button: Whether to display a button (default: true).
  - onButtonClick: Callback for button clicks.
  - buttonLabel: Label for the button.

# Notes
Customize components using the className prop where available.
Ensure accessibility by providing labels and handling keyboard interactions appropriately.
For further customization, refer to the styles in the CSS modules.

# Pages Overview
## Homepage
The Homepage serves as the landing page for the app, providing an introduction to the web app with options to explore components or start the showcase demos.
### It features two widgets:
  - "Explore Components" — directs users to the components page.
  - "Showcase Demo" — lets users start the interactive demo with real-time components.

## Components Page
  - The Components Page displays a segmented tab interface that allows users to explore various components: Button, Select Input, and Tabs.
  - Each tab links to its respective page, which explains and lets users interact with the components.
  - The component state can be controlled via the segmented tab selection.

## Showcase Page
  - The Showcase Page is an interactive page where users can try out different UI components like TextInput, SelectInput, and Button.
  - Users can submit feedback or interact with components based on their state, triggering form submissions or actions.

## Text Input Page
  - The Text Input Page lets users interact with the TextInput component, showing real-time validation of text input values.
  - It includes error handling and provides feedback if the input length is below the minimum threshold.

## Select Input Page
  - The Select Input Page lets users interact with the SelectInput component in different states (e.g., success, error, disabled).
  - Users can change the state of the SelectInput using dropdowns and see how it behaves in real-time.

## Tabs Page
  - The Tabs Page showcases the Tab component in an interactive demo.
  - Users can toggle between different variants (e.g., first, middle, last) and see how the tabs react to the isActive state.


## Styling

### Global Styling

This project uses CSS custom properties (CSS variables) for a consistent and scalable design. The variables are defined in `:root` for easy customization across the app.

#### **Colors**

The color palette is defined with the following variables:

- `--primary-color`: The main text color, a dark shade of gray (`#191919`).
- `--primary-color-inverted`: The inverted color of the primary color, used for light text on dark backgrounds (`#FFFFFF`).
- `--secondary-color`: Light gray (`#F1F1F1`), used for background sections.
- `--tertiary-color`: A medium gray (`#8F8A8A`), used for borders and subtle text.
- `--accent-color`: An orange shade (`#FF8B4A`), used for buttons, highlights, and other accent elements.
- `--accent-color-secondary`: A lighter orange (`#FFE8DB`), used for lighter background highlights.
- `--background-color`: Light grayish background color for the page (`#F7F7F7`).
- `--border-color`: Soft border color (`#EFEFEF`).
- `--hover-color`: A semi-transparent hover color (`#F7F7F780`), applied to elements when hovered.
- `--hover-color-accent`: A darker hover color for accent elements (`#EF742D`).
- `--hover-color-secondary`: A light hover effect for secondary elements (`#E9E9E9`).
- `--selection-color`: A teal selection color for text and components (`#277D7E`).
- `--error-color`: A bright red for error messages and inputs (`#dd2222`).

#### **Fonts**

- `--font-family`: Uses the 'Inter' sans-serif font family, which is modern and clean, ideal for UI components.
  
#### **Font Sizes**

Font sizes are scaled using the following variables, which provide consistency across the app:

- `--font-size-xxl`: 140px
- `--font-size-xl`: 72px
- `--font-size-l`: 56px
- `--font-size-mll`: 32px
- `--font-size-ml`: 20px
- `--font-size-m`: 16px
- `--font-size-s`: 14px
- `--font-size-xs`: 12px

These variables help maintain consistency in font sizes across components such as headings, subtitles, and form elements.

#### **Spacing**

The spacing variables are used to create uniform spacing throughout the layout:

- `--padding-xl`: 80px (used for large padding, e.g., around sections or content).
- `--padding-l`: 48px
- `--padding-m`: 24px
- `--padding-s`: 16px
- `--padding-xs`: 8px
- `--padding-xxs`: 4px

These variables help with margin and padding adjustments to ensure consistency across the design.

#### **Border Radius**

These variables define the radius of corners for elements, contributing to the rounded look of buttons, inputs, and other UI elements:

- `--border-radius-lg`: 24px
- `--border-radius-sm`: 8px

### Body Styling

The body of the app is centered both vertically and horizontally with the following style:

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--padding-xl);
  background-color: var(--background-color);
  font-family: var(--font-family);
  min-height: 100vh;
}
```

## Running the App
To run the app locally, follow these steps:

###  1. Clone the repository:

```bash
git clone https://github.com/DominikaKolackovska/domi.git
cd domi
```

### 2. Install dependencies:

```bash
npm install 
```
### Used
  - React: A JavaScript library for building user interfaces.
  - Next.js: A React framework for server-side rendering and static website generation.
  - CSS Modules: For scoped and modular styling.
  - EmailJS: For handling form submissions via email.

### 3. Start the development server:

```bash
npm run dev
```
### 4. Open the app in your browser at http://localhost:3000.

# License
This project is licensed under the MIT License.

Feel free to adjust the sections or add more details as necessary to match your specific app setup.
