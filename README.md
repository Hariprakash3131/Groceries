<<<<<<< HEAD
# PickBazar - Online Grocery Store

A modern e-commerce website for groceries and fresh produce, built with React, Vite, and Bootstrap 5.

## Features

- 🛒 **Shopping Cart**: Add products to cart with quantity management
- 🏷️ **Product Categories**: Browse by categories (Fruits & Vegetables, Meat & Fish, etc.)
- 🔍 **Search Functionality**: Search for products
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile
- 💳 **Mock API**: Simulated product data and categories
- 🎨 **Modern UI**: Clean and intuitive user interface
- ⚡ **Fast Performance**: Built with Vite for optimal development experience

## Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Bootstrap 5 + Custom CSS
- **Icons**: FontAwesome
- **Routing**: React Router DOM
- **State Management**: React Hooks

## Project Structure

```
my-ecommerce-app/
├── public/
│   └── images/           # Product/category images
├── src/
│   ├── api/
│   │   └── mockApi.js    # Mock API for products/categories
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── CategorySidebar.jsx
│   │   ├── ProductCard.jsx
│   │   ├── Banner.jsx
│   │   ├── Cart.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   cd my-ecommerce-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features Overview

### 🛍️ Product Catalog
- Browse products by category
- View product details, prices, and discounts
- Add products to shopping cart

### 🛒 Shopping Cart
- Add/remove items
- Quantity management
- Cart total calculation
- Mobile-friendly cart modal

### 🏷️ Categories
- Fruits & Vegetables
- Meat & Fish
- Snacks
- Pet Care
- Home & Cleaning
- Dairy
- Cooking
- Breakfast
- Beverage

### 📱 Responsive Design
- Desktop: Full layout with sidebar
- Tablet: Responsive grid
- Mobile: Optimized for touch interaction

## Customization

### Adding New Products
Edit `src/api/mockApi.js` to add new products:

```javascript
{
  id: 13,
  name: "New Product",
  category: 1,
  price: 2.99,
  oldPrice: 3.99,
  discount: 25,
  weight: "1lb",
  image: "product-image-url",
  description: "Product description"
}
```

### Styling
- Main styles: `src/index.css`
- Bootstrap classes for layout
- Custom CSS classes for specific components

### Mock API
The `src/api/mockApi.js` file contains:
- Product data
- Category information
- Promotional banners
- Cart and user data

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support or questions, please open an issue in the repository.

---

**Happy Shopping! 🛒**
=======
# Groceries
>>>>>>> 9065854cfb9064e44da324e64b51ada9b6b52603
