# My E-Commerce

A modern, responsive e-commerce application built with React, Vite, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/UsmanShafeeq/my-ecommerce.git
cd my-ecommerce

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## 📦 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run ESLint
npm run lint

# Preview production build
npm run preview
```

## ✨ Features

### Core Features
- 🛍️ **Product Listing** - Browse products in a responsive grid layout
- 🎠 **Hero Slider** - Animated carousel on homepage
- 🏪 **Promotions** - Showcase special offers and deals
- 💰 **Deals of the Day** - Discounted products with badges
- 📱 **Responsive Navbar** - Mobile-friendly navigation with dropdown
- 💬 **Customer Reviews** - Customer feedback and ratings
- 🌟 **Testimonials** - Customer success stories and testimonials
- ❓ **FAQ Section** - Frequently asked questions
- 🏢 **Featured Brands** - Brand partnerships showcase
- 📧 **Newsletter** - Email subscription for updates
- 🔒 **Trust Indicators** - Security and trust badges
- 📊 **Dashboard** - User dashboard functionality
- ⭐ **Product Details** - Comprehensive product information

### Technical Features
- ⚡ **Vite** - Lightning-fast build tool
- ⚛️ **React 19** - Latest React features
- 🎨 **Tailwind CSS 4** - Utility-first CSS framework
- 🔀 **React Router v7** - Client-side routing
- 🎯 **React Icons** - Icon library

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx                  # Navigation bar with dropdowns
│   ├── Dashboard.jsx               # Dashboard component
│   ├── Products.jsx                # Product listing page
│   ├── ProductDetails.jsx          # Product details display
│   ├── CustomerReviews.jsx         # Customer reviews section
│   ├── Testimonials.jsx            # Testimonials section
│   ├── FAQ.jsx                     # Frequently Asked Questions
│   ├── FeaturedBrands.jsx          # Featured brands showcase
│   ├── Footer.jsx                  # Footer component
│   ├── Newsletter.jsx              # Newsletter subscription
│   ├── PopularTrendingItems.jsx    # Popular trending items
│   ├── Trust.jsx                   # Trust/security section
│   └── HeroSection/
│       ├── HeroSection.jsx         # Main hero container
│       ├── HeroSlider.jsx          # Image carousel
│       ├── Promotions.jsx          # Promotions showcase
│       ├── DealsOfTheDay.jsx       # Daily deals display
│       └── Testimonials.jsx        # Hero testimonials
├── assets/
│   ├── ProductDetails/             # Product images (30+ product images)
│   └── Testimonials/               # Testimonial images
├── styles/
│   └── colors.js                   # Color palette configuration
├── App.jsx                         # Main app component
├── App.css                         # Global styles
├── main.jsx                        # Entry point
└── index.css                       # Tailwind imports
```

## 🎨 Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero slider, promotions, and deals |
| `/products` | Product listing page |
| `/category/:name` | Products by category |
| `*` | 404 Not Found page |

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 19.2.0 | UI library |
| Vite | 7.2.4 | Build tool |
| Tailwind CSS | 4.1.17 | Styling |
| React Router DOM | 7.9.6 | Routing |
| React Icons | 5.5.0 | Icons |
| ESLint | 9.39.1 | Code linting |

## 📝 Configuration Files

- `vite.config.js` - Vite configuration with React and Tailwind
- `tailwind.config.js` - Tailwind CSS configuration
- `eslint.config.js` - ESLint rules
- `package.json` - Dependencies and scripts
- `.env.dev` - Development environment variables
- `.env.staging` - Staging environment variables
- `.env.prod` - Production environment variables

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Deploy to Production

```bash
npm run preview
```

## 🔍 Code Quality

```bash
# Run ESLint to check code quality
npm run lint
```

## 📦 Sample Products

The application includes 30+ product images for various electronics categories:

**Electronics & Gadgets:**
- Smartphone, Laptop, Tablet, Smartwatch
- Camera, Drone, VR Headset, Projector
- Headphones, Earbuds, Gaming Headset, Speaker
- Keyboard, Mouse, Power Bank, Charger
- Mic, Router, Tripod, TV

## 🎯 Future Enhancements

- [ ] Shopping cart functionality
- [ ] User authentication
- [ ] Product details page
- [ ] Search functionality
- [ ] Filter by price range
- [ ] User reviews and ratings
- [ ] Checkout process
- [ ] Payment integration
- [ ] Order history
- [ ] Wishlist

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💼 Author

**Usman Shafeeq**
- GitHub: [@UsmanShafeeq](https://github.com/UsmanShafeeq)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, please open an issue on the GitHub repository.

---

**Last Updated:** November 30, 2025
**Version:** 0.1.0
