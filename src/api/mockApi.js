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
  },
  
  {
    id: 101,
    name: "Gala Apples",
    category: 1,
    price: 2.20,
    oldPrice: 2.80,
    discount: 21,
    weight: "1lb",
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=300&h=300&fit=crop",
    description: "Crisp and sweet Gala apples, perfect for snacking."
  },
  {
    id: 102,
    name: "Organic Carrots",
    category: 1,
    price: 1.50,
    oldPrice: 2.00,
    discount: 25,
    weight: "1lb",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=300&h=300&fit=crop",
    description: "Fresh organic carrots, rich in vitamins and flavor."
  },
  {
    id: 103,
    name: "Red Grapes",
    category: 1,
    price: 3.00,
    oldPrice: 3.50,
    discount: 14,
    weight: "1lb",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=300&fit=crop",
    description: "Juicy red grapes, perfect for a healthy snack."
  },
  
  {
    id: 105,
    name: "Avocado",
    category: 1,
    price: 2.50,
    oldPrice: 3.00,
    discount: 17,
    weight: "1 piece",
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=300&h=300&fit=crop",
    description: "Creamy avocado, great for toast and salads."
  },

 

  
  {
    id: 201,
    name: "Chicken Breast",
    category: 2,
    price: 5.50,
    oldPrice: 6.50,
    discount: 15,
    weight: "1lb",
    image: "https://tse3.mm.bing.net/th/id/OIP.5qLiXQ-8cLKIANTRq3hZcQHaFp?r=0&w=361&h=361&c=7",
    description: "Lean and tender chicken breast, perfect for grilling."
  },
  {
    id: 202,
    name: "Salmon Fillet",
    category: 2,
    price: 8.00,
    oldPrice: 9.50,
    discount: 16,
    weight: "1lb",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=300&fit=crop",
    description: "Fresh Atlantic salmon fillet, rich in omega-3."
  },
  {
    id: 203,
    name: "Pork Chops",
    category: 2,
    price: 6.00,
    oldPrice: 7.00,
    discount: 14,
    weight: "1lb",
    image: "https://tse1.mm.bing.net/th/id/OIP.Ly2jAWa1c_y0V_0CQjfRnQHaE8?w=316&h=316&c=7",
    description: "Juicy pork chops, great for pan-frying."
  },
  {
    id: 204,
    name: "Shrimp",
    category: 2,
    price: 7.50,
    oldPrice: 8.50,
    discount: 12,
    weight: "1lb",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=300&fit=crop",
    description: "Fresh shrimp, perfect for pasta and stir-fry."
  },
  {
    id: 205,
    name: "Beef Steak",
    category: 2,
    price: 10.00,
    oldPrice: 12.00,
    discount: 17,
    weight: "1lb",
    image: "https://tse2.mm.bing.net/th/id/OIP.5QRSVnQXguLeX1DimHedsQHaFc?r=0&w=348&h=348&c=7",
    description: "Premium beef steak, ideal for grilling."
  },

 

  
  {
    id: 301,
    name: "Potato Chips",
    category: 3,
    price: 1.20,
    oldPrice: 1.50,
    discount: 20,
    weight: "150g",
    image: "https://tse4.mm.bing.net/th/id/OIP.ZoKoSvO74vlFKuc8lrozwQHaFP?r=0&w=335&h=335&c=7",
    description: "Crispy potato chips, lightly salted."
  },
  {
    id: 302,
    name: "Granola Bars",
    category: 3,
    price: 2.50,
    oldPrice: 3.00,
    discount: 17,
    weight: "6 bars",
    image: "https://tse2.mm.bing.net/th/id/OIP.x0hQpGc0xPitKZxEFFYKWgHaH6?r=0&w=474&h=474&c=7",
    description: "Healthy granola bars, perfect for on-the-go."
  },
  {
    id: 303,
    name: "Pretzels",
    category: 3,
    price: 1.80,
    oldPrice: 2.20,
    discount: 18,
    weight: "200g",
    image: "https://tse3.mm.bing.net/th/id/OIP.8vB3mPHqZJi2ntwnC5WksQHaJN?r=0&w=474&h=474&c=7",
    description: "Crunchy pretzels, a classic snack."
  },
  {
    id: 304,
    name: "Mixed Nuts",
    category: 3,
    price: 3.50,
    oldPrice: 4.00,
    discount: 13,
    weight: "150g",
    image: "https://tse1.mm.bing.net/th/id/OIP.uyRULIdjgwWKHQzfraYqOwHaHa?w=474&h=474&c=7",
    description: "A healthy mix of roasted nuts."
  },
  {
    id: 305,
    name: "Popcorn",
    category: 3,
    price: 1.00,
    oldPrice: 1.30,
    discount: 23,
    weight: "100g",
    image: "https://tse2.mm.bing.net/th/id/OIP.h1tifceAwzQ__5lUbSUlfgHaEK?w=266&h=266&c=7",
    description: "Buttery popcorn, perfect for movie nights."
  },

 

  
  {
    id: 401,
    name: "Dog Food",
    category: 4,
    price: 8.00,
    oldPrice: 9.00,
    discount: 11,
    weight: "2kg",
    image: "https://sdmntprwestus.oaiusercontent.com/files/00000000-9ec0-6230-8d85-e7e989c3ccf3/raw?se=2025-07-28T09%3A14%3A36Z&sp=r&sv=2024-08-04&sr=b&scid=f8f76680-a240-537e-9276-ddcf1fe5d6aa&skoid=b64a43d9-3512-45c2-98b4-dea55d094240&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-27T18%3A52%3A26Z&ske=2025-07-28T18%3A52%3A26Z&sks=b&skv=2024-08-04&sig=RKPn/vMsjHWGvwkOHICg6jTGo3459l8Uc6wj58t0RsY%3D",
    description: "Nutritious dry dog food for all breeds."
  },
  
  {
    id: 403,
    name: "Bird Seed",
    category: 4,
    price: 3.00,
    oldPrice: 3.50,
    discount: 14,
    weight: "1kg",
    image: "https://media.istockphoto.com/id/1461912210/photo/birds-seeds-mix-closeup-view.webp?s=1024x1024&w=is&k=20&c=10eEvSGPwFc5LSDdFXtkH46b1oDsTf4gJP1FOGFEMI8=",
    description: "Premium bird seed mix for healthy birds."
  },
  {
    id: 404,
    name: "Dog Chew Toy",
    category: 4,
    price: 2.50,
    oldPrice: 3.00,
    discount: 17,
    weight: "1 piece",
    image: "https://plus.unsplash.com/premium_photo-1676479611740-df6ddecf8b5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nJTIwY2hld2luZ3xlbnwwfHwwfHx8MA%3D%3D",
    description: "Durable chew toy for playful dogs."
  },
  {
    id: 405,
    name: "Cat Treats",
    category: 4,
    price: 2.00,
    oldPrice: 2.50,
    discount: 20,
    weight: "100g",
    image: "https://images.unsplash.com/photo-1726534659704-152c341d63b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2F0JTIwVHJlYXRzfGVufDB8fDB8fHww",
    description: "Tasty treats for your feline friend."
  },

 

  
  {
    id: 501,
    name: "Laundry Detergent",
    category: 5,
    price: 6.00,
    oldPrice: 7.00,
    discount: 14,
    weight: "2L",
    image: "https://images.unsplash.com/photo-1624372635282-b324bcdd4907?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TGF1bmRyeSUyMERldGVyZ2VudHxlbnwwfHwwfHx8MA%3D%3D",
    description: "Powerful liquid detergent for clean clothes."
  },
  {
    id: 502,
    name: "Dish Soap",
    category: 5,
    price: 2.50,
    oldPrice: 3.00,
    discount: 17,
    weight: "500ml",
    image: "https://images.unsplash.com/photo-1585145868057-135bf14b0503?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29hcCUyMGJhcnxlbnwwfHwwfHx8MA%3D%3D",
    description: "Gentle yet effective dish soap."
  },
  {
    id: 503,
    name: "Glass Cleaner",
    category: 5,
    price: 3.00,
    oldPrice: 3.50,
    discount: 14,
    weight: "500ml",
    image: "https://images.unsplash.com/photo-1716625300720-b34970a2d890?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEdsYXNzJTIwQ2xlYW5lcnxlbnwwfHwwfHx8MA%3D%3D",
    description: "Streak-free glass cleaner for sparkling windows."
  },
  {
    id: 504,
    name: "Floor Cleaner",
    category: 5,
    price: 4.00,
    oldPrice: 5.00,
    discount: 20,
    weight: "1L",
    image: "https://images.unsplash.com/photo-1648735256925-37dcc69bfdde?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Effective floor cleaner for all surfaces."
  },
  {
    id: 505,
    name: "Air Freshener",
    category: 5,
    price: 2.00,
    oldPrice: 2.50,
    discount: 20,
    weight: "300ml",
    image: "https://images.unsplash.com/photo-1699528136773-16d8d93f11a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEFpciUyMEZyZXNoZW5lcnxlbnwwfHwwfHx8MA%3D%3D",
    description: "Long-lasting air freshener for your home."
  },

 

  
  {
    id: 601,
    name: "Whole Milk",
    category: 6,
    price: 2.00,
    oldPrice: 2.50,
    discount: 20,
    weight: "1L",
    image: "https://plus.unsplash.com/premium_photo-1694481100261-ab16523c4093?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V2hvbGUlMjBNaWxrfGVufDB8fDB8fHww",
    description: "Fresh whole milk, rich in calcium."
  },
  {
    id: 602,
    name: "Cheddar Cheese",
    category: 6,
    price: 3.50,
    oldPrice: 4.00,
    discount: 13,
    weight: "200g",
    image: "https://plus.unsplash.com/premium_photo-1700612685460-c2c14754ac5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2hlZGRhciUyMENoZWVzZXxlbnwwfHwwfHx8MA%3D%3D",
    description: "Sharp cheddar cheese, perfect for sandwiches."
  },
  {
    id: 603,
    name: "Greek Yogurt",
    category: 6,
    price: 2.20,
    oldPrice: 2.80,
    discount: 21,
    weight: "150g",
    image: "https://images.unsplash.com/photo-1571212515416-fef01fc43637?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R3JlZWslMjBZb2d1cnR8ZW58MHx8MHx8fDA%3D",
    description: "Creamy Greek yogurt, high in protein."
  },
  {
    id: 604,
    name: "Butter",
    category: 6,
    price: 2.80,
    oldPrice: 3.20,
    discount: 13,
    weight: "200g",
    image: "https://images.unsplash.com/photo-1603596310923-dbb12732f9c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QnV0dGVyfGVufDB8fDB8fHww",
    description: "Rich and creamy butter for baking and cooking."
  },
  {
    id: 605,
    name: "Cottage Cheese",
    category: 6,
    price: 2.50,
    oldPrice: 3.00,
    discount: 17,
    weight: "200g",
    image: "https://images.unsplash.com/photo-1714973790516-9900bdf6ab90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fENvdHRhZ2UlMjBDaGVlc2V8ZW58MHx8MHx8fDA%3D",
    description: "Fresh cottage cheese, great for salads."
  },

 

  
  {
    id: 701,
    name: "Olive Oil",
    category: 7,
    price: 5.00,
    oldPrice: 6.00,
    discount: 17,
    weight: "500ml",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T2xpdmUlMjBPaWx8ZW58MHx8MHx8fDA%3D",
    description: "Extra virgin olive oil for healthy cooking."
  },
  {
    id: 702,
    name: "Basmati Rice",
    category: 7,
    price: 3.00,
    oldPrice: 3.50,
    discount: 14,
    weight: "1kg",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmFzbWF0aSUyMFJpY2V8ZW58MHx8MHx8fDA%3D",
    description: "Long-grain basmati rice, aromatic and fluffy."
  },
  {
    id: 703,
    name: "Black Pepper",
    category: 7,
    price: 1.50,
    oldPrice: 2.00,
    discount: 25,
    weight: "100g",
    image: "https://plus.unsplash.com/premium_photo-1668446314011-301c7a98b6a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmxhY2slMjBQZXBwZXJ8ZW58MHx8MHx8fDA%3D",
    description: "Freshly ground black pepper for seasoning."
  },
  {
    id: 704,
    name: "Sea Salt",
    category: 7,
    price: 1.20,
    oldPrice: 1.50,
    discount: 20,
    weight: "200g",
    image: "https://images.unsplash.com/photo-1606791450998-d3859ac80814?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U2VhJTIwU2FsdHxlbnwwfHwwfHx8MA%3D%3D",
    description: "Natural sea salt for all your recipes."
  },
  {
    id: 705,
    name: "Sunflower Oil",
    category: 7,
    price: 3.50,
    oldPrice: 4.00,
    discount: 13,
    weight: "1L",
    image: "https://images.unsplash.com/photo-1642140027864-07cb8cb59cd9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFN1bmZsb3dlciUyME9pbHxlbnwwfHwwfHx8MA%3D%3D",
    description: "Light sunflower oil, ideal for frying."
  },

 

  
  {
    id: 801,
    name: "Oatmeal",
    category: 8,
    price: 2.00,
    oldPrice: 2.50,
    discount: 20,
    weight: "500g",
    image: "https://images.unsplash.com/photo-1614373532018-92a75430a0da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8T2F0bWVhbHxlbnwwfHwwfHx8MA%3D%3D",
    description: "Healthy oatmeal for a nutritious breakfast."
  },
  {
    id: 802,
    name: "Pancake Mix",
    category: 8,
    price: 2.50,
    oldPrice: 3.00,
    discount: 17,
    weight: "400g",
    image: "https://images.unsplash.com/photo-1489489993638-b9e1eff5cd6d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFBhbmNha2UlMjBNaXh8ZW58MHx8MHx8fDA%3D",
    description: "Easy-to-make pancake mix for quick breakfasts."
  },
  {
    id: 803,
    name: "Cornflakes",
    category: 8,
    price: 1.80,
    oldPrice: 2.20,
    discount: 18,
    weight: "300g",
    image: "https://images.unsplash.com/photo-1714686650962-c5c4d33213b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q29ybmZsYWtlc3xlbnwwfHwwfHx8MA%3D%3D",
    description: "Crunchy cornflakes, a classic breakfast choice."
  },
  {
    id: 804,
    name: "Honey",
    category: 8,
    price: 3.00,
    oldPrice: 3.50,
    discount: 14,
    weight: "250g",
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SG9uZXl8ZW58MHx8MHx8fDA%3D",
    description: "Pure natural honey, perfect for toast and tea."
  },
  {
    id: 805,
    name: "Peanut Butter",
    category: 8,
    price: 2.20,
    oldPrice: 2.80,
    discount: 21,
    weight: "200g",
    image: "https://images.unsplash.com/photo-1624684244440-1130c3b65783?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UGVhbnV0JTIwQnV0dGVyfGVufDB8fDB8fHww",
    description: "Creamy peanut butter, great for sandwiches."
  },

 

  
  {
    id: 901,
    name: "Orange Juice",
    category: 9,
    price: 2.50,
    oldPrice: 3.00,
    discount: 17,
    weight: "1L",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T3JhbmdlJTIwSnVpY2V8ZW58MHx8MHx8fDA%3D",
    description: "Fresh orange juice, rich in vitamin C."
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


// Utility to get limited products per category
export function getProductsByCategory(categoryId, limit = 5) {
  return products.filter(p => p.category === categoryId).slice(0, limit);
}