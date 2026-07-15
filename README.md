# Beach Resort

A beach resort web app built with **React** and **Contentful** for browsing rooms and resort information.

## Description

This project is a front-end application for a beach resort website.  
It focuses on presenting rooms, filtering options, and general resort content in a clean and responsive UI.

## Tech Stack

- **React** (JavaScript)
- **Contentful** (headless CMS)
- **HTML**
- **CSS**

## Features

- Browse resort rooms
- Filter rooms by criteria (e.g., type, size, price, extras)
- View room details
- Responsive layout for desktop and mobile
- CMS-driven content via Contentful

## Project Structure (typical)

- `src/components` — reusable UI components
- `src/pages` — route/page-level views
- `src/context` — global state/context logic
- `src/images` — static image assets
- `src/utils` — helper functions

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm or yarn
- A Contentful space and API credentials

### Installation

```bash
git clone https://github.com/catatwork217/beach-resort.git
cd beach-resort
npm install
```

### Environment Variables

Create a `.env` file in the project root and add your Contentful credentials:

```bash
REACT_APP_CONTENTFUL_SPACE_ID=your_space_id
REACT_APP_CONTENTFUL_ACCESS_TOKEN=your_access_token
```

> If your project uses different variable names, update these accordingly.

### Run Locally

```bash
npm start
```

App runs at `http://localhost:3000`.

### Build for Production

```bash
npm run build
```

## Scripts

- `npm start` — run development server
- `npm run build` — create production build
- `npm test` — run tests (if configured)

## Deployment

You can deploy this app to platforms like:

- Netlify
- Vercel
- GitHub Pages (with appropriate React routing setup)

## Contributing

1. Fork the repository
2. Create a new branch (`feature/your-feature`)
3. Commit changes
4. Open a pull request

## License

Add your preferred license (e.g., MIT) in a `LICENSE` file.
