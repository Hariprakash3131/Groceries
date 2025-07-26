export const categories = [
  { id: 1, name: "Fruits & Vegetables", icon: "🍎" },
  { id: 2, name: "Meat & Fish", icon: "🥩" },
  { id: 3, name: "Snacks", icon: "🍿" },
  { id: 4, name: "Pet Care", icon: "🐕" },
  { id: 5, name: "Home & Cleaning", icon: "🧽" },
  { id: 6, name: "Dairy", icon: "🥛" },
  { id: 7, name: "Cooking", icon: "🍳" },
  { id: 8, name: "Breakfast", icon: "🥐" },
  { id: 9, name: "Beverage", icon: "🥤" }
];

export const products = [
  // Fruits & Vegetables (Category 1)
  {
    id: 1,
    name: "Apples",
    category: 1,
    price: 1.60,
    oldPrice: 2.00,
    discount: 20,
    weight: "1lb",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&h=300&fit=crop",
    description: "Fresh red apples"
  },
  {
    id: 2,
    name: "Baby Spinach",
    category: 1,
    price: 0.60,
    oldPrice: null,
    discount: 0,
    weight: "2lb",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300&h=300&fit=crop",
    description: "Organic baby spinach leaves"
  },
  {
    id: 3,
    name: "Blueberries",
    category: 1,
    price: 3.00,
    oldPrice: null,
    discount: 0,
    weight: "1lb",
    image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=300&h=300&fit=crop",
    description: "Fresh blueberries"
  },
  {
    id: 4,
    name: "Brussels Sprout",
    category: 1,
    price: 3.00,
    oldPrice: 5.00,
    discount: 40,
    weight: "1lb",
    image: "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?w=300&h=300&fit=crop",
    description: "Fresh Brussels sprouts"
  },
  {
    id: 5,
    name: "Celery Stick",
    category: 1,
    price: 5.00,
    oldPrice: 6.00,
    discount: 17,
    weight: "1lb",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&h=300&fit=crop",
    description: "Fresh celery sticks"
  },
  {
    id: 6,
    name: "Clementines",
    category: 1,
    price: 2.50,
    oldPrice: 3.00,
    discount: 17,
    weight: "1lb",
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=300&h=300&fit=crop",
    description: "Sweet clementines"
  },
  
  {
    id: 8,
    name: "Cucumber",
    category: 1,
    price: 2.50,
    oldPrice: null,
    discount: 0,
    weight: "2.5lb",
    image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=300&h=300&fit=crop",
    description: "Fresh cucumbers"
  },
  {
    id: 9,
    name: "Strawberries",
    category: 1,
    price: 4.50,
    oldPrice: 6.00,
    discount: 25,
    weight: "1lb",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=300&h=300&fit=crop",
    description: "Fresh strawberries"
  },
  {
    id: 10,
    name: "Bananas",
    category: 1,
    price: 1.20,
    oldPrice: null,
    discount: 0,
    weight: "1lb",
    image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=300&h=300&fit=crop",
    description: "Fresh yellow bananas"
  },
  {
    id: 11,
    name: "Tomatoes",
    category: 1,
    price: 2.80,
    oldPrice: 3.50,
    discount: 20,
    weight: "1lb",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=300&h=300&fit=crop",
    description: "Fresh red tomatoes"
  },
  
  {
    id: 14,
    name: "Lettuce",
    category: 1,
    price: 1.50,
    oldPrice: 2.00,
    discount: 25,
    weight: "1 head",
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=300&h=300&fit=crop",
    description: "Fresh green lettuce"
  },

 

  
  {
    id: 22,
    name: "Apple",
    category: 1,
    price: 1.80,
    oldPrice: 2.20,
    discount: 18,
    weight: "1lb",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=300&h=300&fit=crop",
    description: "Crunchy and sweet fresh carrots"
  },
  {
    id: 23,
    name: "Green Beans",
    category: 1,
    price: 2.20,
    oldPrice: 2.80,
    discount: 21,
    weight: "1lb",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=300&h=300&fit=crop",
    description: "Fresh tender green beans"
  },
  {
    id: 24,
    name: "Cauliflower",
    category: 1,
    price: 2.00,
    oldPrice: 2.70,
    discount: 26,
    weight: "1 head",
    image: "https://images.unsplash.com/photo-1582515073490-39981397c445?w=300&h=300&fit=crop",
    description: "Fresh organic cauliflower"
  },
  {
    id: 25,
    name: "Green Peas",
    category: 1,
    price: 1.50,
    oldPrice: 2.00,
    discount: 25,
    weight: "0.5lb",
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=300&h=300&fit=crop",
    description: "Frozen sweet green peas"
  },
  {
    id: 26,
    name: "Red Onions",
    category: 1,
    price: 1.40,
    oldPrice: 1.90,
    discount: 26,
    weight: "1lb",
    image: "https://images.unsplash.com/photo-1590080878068-3c37f9be3f0e?w=300&h=300&fit=crop",
    description: "Fresh red onions"
  },
  {
    id: 27,
    name: "Broccoli",
    category: 1,
    price: 2.70,
    oldPrice: 3.40,
    discount: 21,
    weight: "1lb",
    image: "https://images.unsplash.com/photo-1584270355025-a7d1fda3fdcc?w=300&h=300&fit=crop",
    description: "Green and fresh broccoli florets"
  },
  {
    id: 28,
    name: "Beetroot",
    category: 1,
    price: 2.10,
    oldPrice: 2.60,
    discount: 19,
    weight: "1lb",
    image: "https://images.unsplash.com/photo-1584270354784-d837b0e0e7fa?w=300&h=300&fit=crop",
    description: "Fresh organic beetroots"
  },
  {
    id: 29,
    name: "Zucchini",
    category: 1,
    price: 1.90,
    oldPrice: 2.50,
    discount: 24,
    weight: "1lb",
    image: "https://images.unsplash.com/photo-1601004890301-62f8867b1a2c?w=300&h=300&fit=crop",
    description: "Crisp green zucchinis"
  },
  {
    id: 30,
    name: "Red Bell Pepper",
    category: 1,
    price: 2.60,
    oldPrice: 3.20,
    discount: 19,
    weight: "1lb",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=300&h=300&fit=crop",
    description: "Sweet and crunchy red bell peppers"
  },
  {
    id: 31,
    name: "Eggplant",
    category: 1,
    price: 1.80,
    oldPrice: 2.30,
    discount: 22,
    weight: "1lb",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=300&h=300&fit=crop",
    description: "Fresh and glossy purple eggplants"
  }
  

];

export const banners = [
  {
    id: 1,
    title: "Express Delivery",
    subtitle: "With selected Items",
    buttonText: "Save Now",
 
    image: "https://cdn.create.vista.com/downloads/64a60f52-507b-4cf2-8f73-a07af4d738de_640.jpeg"
  },
  {
    id: 2,
    title: "Cash On Delivery",
    subtitle: "With selected Items",
    buttonText: "Save Now",
  
    image: "https://static.vecteezy.com/system/resources/previews/029/216/699/non_2x/speed-style-cash-on-delivery-banner-label-clipart-vector.jpg"
  },
  {
    id: 3,
    title: "Gift Voucher",
    subtitle: "With personal care items",
    buttonText: "Shop Coupons",
   
    image: "https://img.freepik.com/free-psd/restaurant-template-design_23-2151462688.jpg?semt=ais_hybrid&w=740"
  }
];


// Mock cart data
export const cartItems = [];

// Mock user data
export const user = {
  name: "Guest User",
  email: "guest@example.com"
}; 