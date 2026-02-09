# Dhesi Meat - E-Commerce Platform

A modern, feature-rich e-commerce application for premium meat products, built with Next.js 16, React 19, and Tailwind CSS 4. The platform delivers an elegant user experience with smooth animations, responsive design, and comprehensive product management.

![Website Preview](./public/images/website-preview.png)

> _Note: Please add a screenshot of the website to `public/images/website-preview.png`._

## 🎯 Overview

Dhesi Meat is a sophisticated online marketplace specializing in high-quality meat products. The application features a beautiful, performance-optimized interface with dynamic product catalogs, enhanced user engagement through animations, and a seamless mobile experience.

## ✨ Features

### Core Functionality

- **Multi-Page Application**:
  - **Home**: Landing page with featured products, testimonials, and value propositions.
  - **Menu**: Comprehensive product catalog with categorized meat selections (Chicken, Lamb, Goat, Fish, Sausage, Soup, Sauce, Soya, Vegetables).
  - **About Us**: Company information and operational approach.
  - **Blog**: Articles and industry news.
  - **Contact**: Contact form with email integration.

### User Experience

- **Advanced Animations**: Smooth GSAP-powered transitions and interactions on hero sections, buttons, and product displays.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices with dedicated Mobile Bottom Bar navigation.
- **Testimonials Section**: Customer reviews and ratings to build trust.
- **Product Categories**: Multiple meat types with detailed descriptions and images.
- **Best Sellers & Premium Selection**: Highlighted featured products for quick discovery.

### Technical Features

- **Type Safety**: 100% TypeScript implementation with strict mode enabled.
- **Modern Styling**: Tailwind CSS v4 with custom animations and responsive utilities.
- **Email Integration**: Contact form powered by Nodemailer for direct communication.
- **App Router**: Next.js 16 App Router for optimized performance and SEO.
- **Code Quality**: ESLint configuration for consistent code standards.

## 🛠 Tech Stack

| Layer           | Technology                                    | Version |
| --------------- | --------------------------------------------- | ------- |
| **Framework**   | [Next.js](https://nextjs.org/)                | 16.1.1  |
| **UI Library**  | [React](https://react.dev/)                   | 19.2.3  |
| **Styling**     | [Tailwind CSS](https://tailwindcss.com/)      | 4       |
| **Animations**  | [GSAP](https://gsap.com/)                     | 3.14.2  |
| **Email**       | [Nodemailer](https://nodemailer.com/)         | 8.0.0   |
| **Language**    | [TypeScript](https://www.typescriptlang.org/) | 5       |
| **Development** | [ESLint](https://eslint.org/)                 | 9       |

## 📁 Project Structure

```
desi-meat/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts              # Contact form API endpoint
│   ├── components/
│   │   ├── ui/                        # Reusable UI components
│   │   │   ├── article-card.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── primary-button.tsx
│   │   │   └── yellow-glow.tsx
│   │   ├── about-us-approach.tsx       # About page section
│   │   ├── best-seller.tsx            # Featured products display
│   │   ├── mobile-bottombar.tsx       # Mobile navigation
│   │   ├── navbar.tsx                 # Main navigation
│   │   ├── order.tsx                  # Order section
│   │   ├── premium-selection.tsx      # Premium products showcase
│   │   ├── series-selector.tsx        # Product filtering
│   │   ├── sub-footers.tsx            # Footer sections
│   │   ├── testimonials.tsx           # Customer reviews
│   │   ├── upper-navbar.tsx           # Top navigation
│   │   └── why-choose-us.tsx          # Value proposition
│   ├── pages/
│   │   ├── home/
│   │   │   └── page.tsx               # Home page
│   │   ├── menu/
│   │   │   └── page.tsx               # Menu/Catalog page
│   │   ├── about-us/
│   │   │   └── page.tsx               # About Us page
│   │   ├── blog/
│   │   │   └── page.tsx               # Blog page
│   │   └── contact-us/
│   │       └── page.tsx               # Contact Us page
│   ├── json-data/
│   │   ├── menu-data.ts               # Product catalog data
│   │   ├── best-seller.ts             # Featured products
│   │   ├── premium-selection.ts       # Premium items
│   │   ├── articles-data.ts           # Blog articles
│   │   ├── about-us-approach.ts       # Company info
│   │   ├── series-selector.ts         # Product types
│   │   ├── order.ts                   # Order data
│   │   └── contact.json               # Contact information
│   ├── font.ts                         # Custom font imports
│   ├── globals.css                    # Global styles
│   ├── layout.tsx                     # Root layout
│   └── page.tsx                       # Home route
├── public/
│   ├── fonts/                          # Custom fonts (Satoshi, ITC Clearface)
│   ├── icons/                          # SVG icons for categories
│   └── images/
│       └── menu/                       # Product images by category
│           ├── chicken/
│           ├── fish/
│           ├── goat/
│           ├── lamb/
│           ├── sauce/
│           ├── sausage/
│           ├── soup/
│           ├── soya/
│           └── veg/
├── eslint.config.mjs
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ (includes npm)
- Git for version control

### Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd desi-meat
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables (if needed)**:
   ```bash
   # Create a .env.local file for any environment-specific variables
   # Example: NEXT_PUBLIC_API_URL=http://localhost:3000
   ```

### Running Locally

**Development Server**:

```bash
npm run dev
```

- Open [http://localhost:3000](http://localhost:3000) in your browser
- The app will automatically reload as you make changes

**Production Build**:

```bash
npm run build
npm start
```

**Linting**:

```bash
npm run lint
```

## 📊 Available Scripts

| Script          | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start development server with hot reload |
| `npm run build` | Create optimized production build        |
| `npm start`     | Start production server                  |
| `npm run lint`  | Run ESLint to check code quality         |

## 🎨 Key Components

- **NavBar & UpperNavbar**: Navigation header with responsive design
- **BestSeller**: Showcase for top-selling meat products
- **PremiumSelection**: Curated premium product collection
- **SeriesSelector**: Category/type filtering for products
- **Order**: Order placement interface
- **Testimonials**: Customer feedback section
- **MobileBottomBar**: Bottom navigation for mobile devices
- **WhyChooseUs**: Value proposition messaging
- **AboutUsApproach**: Company information and mission

## 📚 Data Structure

### Menu Data

The menu is structured hierarchically:

- **Categories** (Chicken, Lamb, Goat, Fish, etc.)
  - **Types** (Raw cuts, prepared items, etc.)
    - **Items** (Individual products with name, description, images)

### Product Properties

Each product includes:

- `id`: Unique identifier
- `name`: Product name
- `description`: Detailed description
- `image_url`: Primary product image
- `images`: Array of additional images

## 🔗 Routing

- `/` → Home page with featured sections
- `/menu` → Complete product catalog
- `/about-us` → Company information
- `/blog` → Articles and news
- `/contact-us` → Contact form
- `/api/contact` → Contact form submission endpoint

## 📧 Contact Form Integration

The contact form is powered by Nodemailer. Configure your email service:

1. Update the API route with your email credentials
2. Environment variables should include SMTP configuration
3. Currently set up for form submission handling

## 🔧 Configuration Files

- **next.config.ts**: Next.js configuration
- **tsconfig.json**: TypeScript compiler options (strict mode enabled)
- **tailwind.config.ts**: Tailwind CSS customization (managed by v4)
- **postcss.config.mjs**: PostCSS and Tailwind processing
- **eslint.config.mjs**: ESLint rules and configuration

## 📖 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/learn)
- [Tailwind CSS Guide](https://tailwindcss.com/docs)
- [GSAP Animation Guide](https://gsap.com/docs/v3/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📄 License

This project is proprietary software. All rights reserved.

## 👨‍💼 Support

For issues or questions, please contact the development team or open an issue in the repository.
