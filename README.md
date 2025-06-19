# PrayerMate Landing Page

A modern, responsive landing page for PrayerMate - your automated prayer companion Telegram bot.

## Features

- **Modern Design**: Clean, minimalist design with smooth animations
- **Responsive**: Fully responsive across all device sizes
- **Interactive**: Smooth animations using Framer Motion
- **Performance**: Built with Vite for fast development and optimized builds
- **Accessible**: Semantic HTML and proper accessibility features

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Vite** - Fast build tool and dev server
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Project Structure

```
src/
├── components/
│   ├── HeroSection.tsx      # Hero section with CTA
│   ├── FeaturesSection.tsx  # How it works section
│   ├── StorySection.tsx     # Origin story section
│   └── Footer.tsx           # Footer with links and disclaimer
├── App.tsx                  # Main app component
├── main.tsx                 # React entry point
└── index.css               # Global styles and Tailwind imports
```

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: { /* blue tones */ },
  accent: { /* purple tones */ }
}
```

### Content
Each section component contains its own content that can be easily modified:

- **Hero**: Update title, subtitle, and CTA in `HeroSection.tsx`
- **Features**: Modify the features array in `FeaturesSection.tsx`
- **Story**: Edit the narrative in `StorySection.tsx`
- **Footer**: Update contact info and links in `Footer.tsx`

### Animations
Animations are handled by Framer Motion. Key animation variants are defined in each component and can be customized by modifying the `motion` props.

## Deployment

This project can be deployed to any static hosting service:

- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use the built files in the `dist` directory

## License

This project is open source and available under the [MIT License](LICENSE). 