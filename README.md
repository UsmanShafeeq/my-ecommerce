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
│   ├── Navbar.jsx              # Navigation bar with dropdowns
│   ├── ProductListing.jsx      # Product grid display
│   └── HeroSection/
│       ├── HeroSection.jsx     # Main hero container
│       ├── HeroSlider.jsx      # Image carousel
│       ├── Promotions.jsx      # Promotions showcase
│       └── DealsOfTheDay.jsx   # Daily deals display
├── App.jsx                     # Main app component
├── App.css                     # Global styles
├── main.jsx                    # Entry point
└── index.css                   # Tailwind imports
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

The application includes 10 sample products across different categories:

- **Electronics**: Smartphone, Laptop, Headphones, Camera
- **Fashion**: T-Shirt, Sneakers, Jacket
- **Home Appliances**: Blender, Microwave, Coffee Maker

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

**Last Updated:** November 27, 2025
**Version:** 0.0.0
