# Simple Semantic CSS

<!-- ![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/alternative-rvb/Simple-Semantic-CSS?label=version) ![License](https://img.shields.io/badge/license-MIT-green.svg) -->

Simple Semantic CSS is a lightweight, from-scratch CSS framework designed to empower web developers with semantic HTML5 integrations, dark and light mode support, and responsive design capabilities. By focusing on semantic HTML tags and offering utility classes for Flexbox properties, Simple Semantic CSS facilitates the creation of responsive, efficient, and semantically rich web pages.

![Demo]( /images/sscss.gif "Demo")

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [CDN Link](#cdn-link)
- [Integration](#integration)
  - [In HTML File](#in-html-file)
  - [In Stylesheet](#in-stylesheet)
- [Assets](#assets)
- [Author](#about-the-author)

## Features

- **NEW**: Ajout Release Note
- **Semantic HTML5 Integration**: Enhances semantic HTML tags with informative styles, making it easier to understand and integrate the structure of web pages.
- **Dark and Light Mode**: Natively supports dark and light themes using `@media (prefers-color-scheme: dark)` and `@media (prefers-color-scheme: light)`, adapting to users' system preferences seamlessly.
- **Flexbox Utilities**: Offers utility classes for Flexbox, such as `.d-flex {display: flex;}`, simplifying the creation of flexible and responsive layouts.
- **CSS Reboot**: Applies a default style for most HTML elements based on a dark theme, providing a consistent and modern look across all web pages.
- **Layered Architecture**: Utilizes `@layer` to organize and prioritize CSS rules, ensuring a structured and efficient stylesheet.
- **Responsive Design**: Makes it easy to build responsive websites with minimal effort, enhancing the mobile and desktop viewing experience.
- **NEW** : Possibilité d'ajouter une menu responsive

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

[See example here](https://simple-semantic-css.vercel.app/info.html)

## Assets

Simple Semantic CSS incorporates the following resources:

- **Google Fonts**: Uses Nunito font family from Google Fonts CDN.
- **Bootstrap Icons**: Integrates Bootstrap Icons for enriched graphical elements.

## About the Author

**Nicolas Malet**

I'm Nicolas Malet, the creator of Simple Semantic CSS. Passionate about web development, I focus on creating tools that empower developers to build more intuitive, efficient, and accessible web applications.

- **GitHub**: [Alternative RVB](https://github.com/alternative-rvb)
- **LinkedIn**: [Nicolas Malet](https://www.linkedin.com/in/nicolas-malet/)
- **Website**: [www.alternative-rvb.com](http://www.alternative-rvb.com)
- **Contact Me**: [alternative.rvb@gmail.com](mailto:alternative.rvb@gmail.com)

I'm always interested in collaborating on projects, sharing knowledge, and contributing to the open-source community. Feel free to reach out if you have any questions, suggestions, or just want to connect!

## test 1

## test 2

## test 3