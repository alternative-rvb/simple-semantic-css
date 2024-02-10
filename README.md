# Simple Semantic CSS
g
![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/alternative-rvb/Simple-Semantic-CSS?label=version) ![License](https://img.shields.io/badge/license-MIT-green.svg)

Simple Semantic CSS is a lightweight, from-scratch CSS framework designed to empower web developers with semantic HTML5 integrations, dark and light mode support, and responsive design capabilities. By focusing on semantic HTML tags and offering utility classes for Flexbox properties, Simple Semantic CSS facilitates the creation of responsive, efficient, and semantically rich web pages.

## Features

- **Semantic HTML5 Integration**: Enhances semantic HTML tags with informative styles, making it easier to understand and integrate the structure of web pages.
- **Dark and Light Mode**: Natively supports dark and light themes using `@media (prefers-color-scheme: dark)` and `@media (prefers-color-scheme: light)`, adapting to users' system preferences seamlessly.
- **Flexbox Utilities**: Offers utility classes for Flexbox, such as `.d-flex {display: flex;}`, simplifying the creation of flexible and responsive layouts.
- **CSS Reboot**: Applies a default style for most HTML elements based on a dark theme, providing a consistent and modern look across all web pages.
- **Layered Architecture**: Utilizes `@layer` to organize and prioritize CSS rules, ensuring a structured and efficient stylesheet.
- **Responsive Design**: Makes it easy to build responsive websites with minimal effort, enhancing the mobile and desktop viewing experience.

## Getting Started

To use Simple Semantic CSS in your project, you can load the stylesheets directly from GitHub via CDN.

### CDN Link

```
https://cdn.jsdelivr.net/gh/alternative-rvb/simple-semantic-css/css/v{version}/main.css
```

## Integration

**In html file:**

```html
<!-- Simple Semantic CSS CDN -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/alternative-rvb/Simple-Semantic-CSS/css/v{version}/main.css">
`
```

**In stylesheet:**

```css
/* Simple Semantic CSS CDN */
@import 'https://cdn.jsdelivr.net/gh/alternative-rvb/Simple-Semantic-CSS/css/v{version}/main.css';
```

To activate information styles for semantic HTML tags, add `class="info"` to your `<body>` tag.

**Example:**

```html
<body class="info">
```

## Assets

## Assets

Simple Semantic CSS incorporates the following resources:

- **Google Fonts**: Uses Nunito font family from Google Fonts CDN.
- **Bootstrap Icons**: Integrates Bootstrap Icons for enriched graphical elements.

