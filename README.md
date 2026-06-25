# B.L Seeds Website

Welcome to the official website repository for **B.L Seeds**, a premier seed company based in **Uttar Pradesh, India**. This repository contains the complete frontend React application that powers [blseeds.com](https://www.blseeds.com/).

## About B.L Seeds

B.L Seeds is a trusted seed supplier providing high-quality agricultural seeds to farmers and dealers across India. Our commitment to quality, innovation, and farmer welfare drives everything we do. This website serves as our digital platform to showcase our products, share valuable agricultural insights, and connect with our customers.

## Project Overview

This is a modern, responsive React-based frontend application built with the latest web technologies. The website features multiple pages including product information, quality assurance details, dealer enquiry forms, educational content, and more.

### Key Features

- **Multi-page Application**: Home, About, Products, Quality Assurance, Dealer Enquiry, Gallery, Blog, and Contact pages
- **Internationalization (i18n)**: Support for English and Hindi languages with automatic language detection
- **Responsive Design**: Mobile-first approach using Tailwind CSS and Material-UI
- **Material Design System**: Professional UI components with customized theming
- **Contact Forms**: Email integration via EmailJS for seamless communication
- **Analytics**: Vercel Analytics for tracking user engagement
- **Modern Build System**: Vite for fast development and optimized production builds

## Technology Stack

### Frontend Framework & Build Tools
- **React 18.3.1**: Modern UI library with hooks and suspense support
- **TypeScript 5.6.2**: Type-safe JavaScript for better development experience
- **Vite 6.0.5**: Next-generation frontend build tool for lightning-fast development
- **React Router 7.15.1**: Client-side routing for seamless navigation

### Styling & UI
- **Tailwind CSS 4.3.0**: Utility-first CSS framework for rapid UI development
- **Material-UI (MUI) 9.0.1**: Comprehensive React component library
- **Emotion 11.14**: CSS-in-JS solution for styled components
- **MUI Icons 9.0.1**: Professional icon library

### Internationalization
- **i18next 26.3.0**: Powerful internationalization framework
- **i18next-browser-languagedetector 8.2.1**: Automatic browser language detection
- **react-i18next 17.0.8**: React bindings for i18next

### Additional Libraries
- **EmailJS 4.4.1**: Backend-less email service for contact forms
- **Vercel Analytics 2.0.1**: User analytics and monitoring

### Development Tools
- **ESLint 9.17.0**: Code linting and quality
- **TypeScript ESLint**: TypeScript-aware linting rules

## Project Structure

```
website/
├── frontend/                          # Main frontend application
│   ├── src/
│   │   ├── components/
│   │   │   ├── layouts/              # Layout components
│   │   │   │   └── Layout.tsx        # Main application layout
│   │   │   ├── header/               # Header component directory
│   │   │   ├── navbar/               # Navigation bar components
│   │   │   ├── footer/               # Footer components
│   │   │   └── common/               # Reusable common components
│   │   ├── pages/
│   │   │   ├── Home.tsx              # Homepage with hero and product sections
│   │   │   ├── About.tsx             # Company information and history
│   │   │   ├── Products.tsx          # Product showcase
│   │   │   ├── QualityAssurance.tsx  # Quality standards and certifications
│   │   │   ├── DealerEnquiry.tsx     # Dealer registration and enquiry form
│   │   │   ├── Gallery.tsx           # Image gallery
│   │   │   ├── Blog.tsx              # Blog articles and insights
│   │   │   └── Contact.tsx           # Contact form and information
│   │   ├── data/                     # Static data and constants
│   │   ├── hooks/                    # Custom React hooks
│   │   ├── assets/                   # Images, icons, and static files
│   │   ├── locales/                  # i18n translation files
│   │   │   ├── en/
│   │   │   │   └── translation.json  # English translations
│   │   │   └── hi/
│   │   │       └── translation.json  # Hindi translations
│   │   ├── main.tsx                  # React application entry point
│   │   ├── i18n.ts                   # i18next configuration
│   │   ├── theme.ts                  # MUI theme customization
│   │   ├── index.css                 # Global styles
│   │   └── vite-env.d.ts            # Vite environment types
│   ├── index.html                    # HTML template
│   ├── vite.config.ts               # Vite configuration
│   ├── tsconfig.json                # TypeScript configuration
│   ├── tsconfig.app.json            # TypeScript app-specific config
│   ├── tsconfig.node.json           # TypeScript node config
│   ├── eslint.config.js             # ESLint configuration
│   ├── package.json                 # Dependencies and scripts
│   └── .env.example                 # Environment variables template
├── package-lock.json
└── README.md
```

## Key Components

### Pages

1. **Home** - Main landing page with hero section, featured products, and company highlights
2. **About** - Company story, mission, vision, and team information
3. **Products** - Product catalog and detailed product information
4. **Quality Assurance** - Quality standards, certifications, and testing procedures
5. **Dealer Enquiry** - Form for dealers to register and inquire about dealership opportunities
6. **Gallery** - Visual showcase of products and facilities
7. **Blog** - Agricultural tips, farming guides, and company news
8. **Contact** - Contact form and business inquiries

### Theming System

The application uses a sophisticated theming system based on Material-UI with CSS variables that allow dynamic theme switching:

- **Primary Color**: Green (#0b5d1e) - represents agriculture and growth
- **Secondary Color**: Light Green (#3d9b41) - complementary agricultural theme
- **Custom Fonts**: Heading and body fonts configurable via CSS variables
- **Responsive Typography**: Scales automatically across device sizes
- **Dynamic Styling**: MUI components styled with CSS variables for flexibility

### Internationalization (i18n)

The site supports multiple languages with automatic browser language detection:

- **English (en)** - Default language
- **Hindi (hi)** - Regional language support

## Getting Started

### Prerequisites

- **Node.js** 16.x or higher
- **npm** 8.x or higher (or yarn/pnpm)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/blseeds/website.git
   cd website
   ```

2. **Navigate to frontend directory**:
   ```bash
   cd frontend
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   ```
   Update the `.env.local` file with your configuration (EmailJS credentials, API endpoints, etc.)

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/` (Vite default port)

### Building

Create a production build:

```bash
npm run build
```

This runs TypeScript compilation and Vite build optimization for production deployment.

### Linting

Check code quality:

```bash
npm run lint
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Environment Variables

Create a `.env.local` file based on `.env.example`:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# API Endpoints (if needed)
VITE_API_BASE_URL=https://api.blseeds.com

# Analytics
VITE_ENABLE_ANALYTICS=true
```

## Development Guidelines

### Code Quality

- Use TypeScript for type safety
- Follow ESLint rules defined in `eslint.config.js`
- Maintain component organization in appropriate directories
- Use React best practices and hooks

### Styling

- Prefer Tailwind CSS for utility styles
- Use Material-UI components for complex UI elements
- Maintain design consistency with the established theme
- Test responsiveness on multiple screen sizes

### Internationalization

- Add new translation strings to `locales/en/translation.json` and `locales/hi/translation.json`
- Use `useTranslation()` hook from react-i18next in components
- Test both language variants thoroughly

## Deployment

The website is deployed at [blseeds.com](https://www.blseeds.com/). 

### Deployment Steps

1. Build the application:
   ```bash
   npm run build
   ```

2. The optimized build output will be in the `dist/` directory

3. Deploy to your hosting platform (Vercel, Netlify, etc.)

4. Configure environment variables on the hosting platform

5. Set up custom domain and SSL certificate

## Performance Optimization

- **Vite**: Provides instant server start and lightning-fast HMR
- **Code Splitting**: Automatic route-based code splitting with React Router
- **Tree Shaking**: Unused code is removed in production builds
- **Image Optimization**: Consider using responsive images and lazy loading
- **Analytics**: Vercel Analytics helps monitor performance metrics

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance
- Responsive design for all screen sizes

## Contributing

We welcome contributions to improve the website! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your code follows our coding standards and passes linting checks.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact & Support

For questions, bug reports, or feature requests:

- **Website**: [blseeds.com](https://www.blseeds.com/)
- **Contact Form**: Available on the website contact page
- **Repository Issues**: [GitHub Issues](https://github.com/blseeds/website/issues)
- **Business Inquiries**: Use the contact form on the website

## Company Information

**B.L Seeds**  
Uttar Pradesh, India  
[www.blseeds.com](https://www.blseeds.com/)

---

**Last Updated**: June 2026  
**Version**: 1.0.0  
**Repository**: [github.com/blseeds/website](https://github.com/blseeds/website)
