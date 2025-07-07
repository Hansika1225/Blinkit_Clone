 const itemsData = [
  // Milk
  {
    category: 'Milk',
    name: 'Amul Gold Milk',
    image: 'https://tse3.mm.bing.net/th?id=OIP.mHfrWuu15w27zU2wIc6pwwHaHa&pid=Api&P=0&h=180',
    quantity: '1L',
    cost: '₹65',
    description: 'Rich and creamy full cream milk from Amul.'
  },
  {
    category: 'Milk',
    name: 'Mother Dairy Milk',
    image: 'https://tse3.mm.bing.net/th?id=OIP.e6FVGW5CNc9sAPgP83ZieAHaHa&pid=Api&P=0&h=180',
    quantity: '500ml',
    cost: '₹30',
    description: 'Toned milk with essential nutrients for everyday health.'
  },
  {
    category: 'Milk',
    name: 'Nestle A+ Milk',
    image: 'https://tse4.mm.bing.net/th?id=OIP.YwF2wNYlFIhxz_-UwQFrfQHaHa&pid=Api&P=0&h=180',
    quantity: '1L',
    cost: '₹70',
    description: 'Premium quality milk enriched with protein and calcium.'
  },
  {
    category: 'Milk',
    name: 'Heritage Milk',
    image: 'https://tse4.mm.bing.net/th?id=OIP.POrD_vlWnRt-4mW7J4QwyQHaEH&pid=Api&P=0&h=180',
    quantity: '1L',
    cost: '₹62',
    description: 'Fresh milk with balanced fat content from Heritage.'
  },
  {
    category: 'Milk',
    name: 'Aavin Toned Milk',
    image: 'https://tse1.mm.bing.net/th?id=OIP.TbzhbnLSdiYZ5WlhC7HjtwHaHa&pid=Api&P=0&h=180',
    quantity: '500ml',
    cost: '₹28',
    description: 'Toned milk with great taste and nutritional value.'
  },

  // Soft Drinks & Juices
  {
    category: 'Soft Drinks & Juices',
    name: 'Coca-Cola',
    image: 'https://tse3.mm.bing.net/th?id=OIP.IE6GqVYdCG690QuRaqCo5QAAAA&pid=Api&P=0&h=180',
    quantity: '750ml',
    cost: '₹40',
    description: 'Classic Coca-Cola with refreshing taste and fizz.'
  },
  {
    category: 'Soft Drinks & Juices',
    name: 'Pepsi',
    image: 'https://tse1.mm.bing.net/th?id=OIP.LTL1wZA7BXUNzvOap8zMCwHaHa&pid=Api&P=0&h=180',
    quantity: '750ml',
    cost: '₹38',
    description: 'Cool and refreshing Pepsi, perfect for any occasion.'
  },
  {
    category: 'Soft Drinks & Juices',
    name: 'Minute Maid Orange',
    image: 'https://tse1.mm.bing.net/th?id=OIP.oxPR2m3nMm_GSbHwaNpjSQHaHa&pid=Api&P=0&h=180',
    quantity: '1L',
    cost: '₹85',
    description: 'Delicious orange juice made from real fruit pulp.'
  },
  {
    category: 'Soft Drinks & Juices',
    name: 'Tropicana Apple',
    image: 'https://tse2.mm.bing.net/th?id=OIP.JRE1Xb_oYITHmsIwLHeSRgHaHa&pid=Api&P=0&h=180',
    quantity: '1L',
    cost: '₹90',
    description: 'Natural apple juice with no added preservatives.'
  },
  {
    category: 'Soft Drinks & Juices',
    name: 'Real Mixed Fruit',
    image: 'https://tse1.mm.bing.net/th?id=OIP.yLubv9csYFTuYplcU4joJgHaHa&pid=Api&P=0&h=180',
    quantity: '1L',
    cost: '₹95',
    description: 'A tasty blend of real fruit juices to refresh you.'
  },

  // Cleansing Essentials
  {
    category: 'Cleansing Essentials',
    name: 'Dettol Liquid',
    image: 'https://sp.yimg.com/ib/th?id=OPAC.h9ulumjaDCRbjA474C474&o=5&pid=21.1&w=160&h=105',
    quantity: '250ml',
    cost: '₹60',
    description: 'Antiseptic liquid for effective protection against germs.'
  },
  {
    category: 'Cleansing Essentials',
    name: 'Lifebuoy Handwash',
    image: 'https://tse2.mm.bing.net/th?id=OIP.2P68NwTHyNh0SU7yx-OsMAHaHa&pid=Api&P=0&h=180',
    quantity: '215ml',
    cost: '₹55',
    description: 'Liquid handwash that kills 99.9% germs instantly.'
  },
  {
    category: 'Cleansing Essentials',
    name: 'Savlon Hand Sanitizer',
    image: 'https://tse2.mm.bing.net/th?id=OIP.asEvaHlbt7-h7qdvpIJhawHaHa&pid=Api&P=0&h=180',
    quantity: '100ml',
    cost: '₹50',
    description: 'Trusted sanitizer with instant protection.'
  },
  {
    category: 'Cleansing Essentials',
    name: 'Harpic Toilet Cleaner',
    image: 'https://tse4.mm.bing.net/th?id=OIP.2yNhNYkqWVu6YSbRNTTbhwHaHa&pid=Api&P=0&h=180',
    quantity: '500ml',
    cost: '₹80',
    description: 'Powerful toilet cleaner for hygiene and freshness.'
  },
  {
    category: 'Cleansing Essentials',
    name: 'Colin Glass Cleaner',
    image: 'https://tse3.mm.bing.net/th?id=OIP._1AtqitFJquTQgQDFsP0FQHaHa&pid=Api&P=0&h=180',
    quantity: '500ml',
    cost: '₹85',
    description: 'Streak-free glass cleaner for sparkling shine.'
  },

  // Snacks
  {
    category: 'Snacks',
    name: 'Lays Classic Salted',
    image: 'https://tse4.mm.bing.net/th?id=OIP.FXwtyEmVA8Q2eOxLWlJOBgHaHa&pid=Api&P=0&h=180',
    quantity: '90g',
    cost: '₹20',
    description: 'Crispy potato chips with light salted flavor.'
  },
  {
    category: 'Snacks',
    name: 'Kurkure Masala',
    image: 'https://tse2.mm.bing.net/th?id=OIP.4hVkYm4fo5ip8oS1CNR9DwHaKE&pid=Api&P=0&h=180',
    quantity: '90g',
    cost: '₹20',
    description: 'Spicy and crunchy snack packed with flavor.'
  },
  {
    category: 'Snacks',
    name: 'Uncle Chipps',
    image: 'https://tse3.mm.bing.net/th?id=OIP.WYJkY7yA8vM77rn9yuIxogHaHa&pid=Api&P=0&h=180',
    quantity: '60g',
    cost: '₹18',
    description: 'Classic Indian-style potato chips loved by all.'
  },
  {
    category: 'Snacks',
    name: 'Bingo Mad Angles',
    image: 'https://tse2.mm.bing.net/th?id=OIP.SOY9IFlGBV249gAmXi87FgHaHa&pid=Api&P=0&h=180',
    quantity: '90g',
    cost: '₹22',
    description: 'Triangle-shaped crispy chips with tangy masala.'
  },
  {
    category: 'Snacks',
    name: 'Haldiram Bhujia',
    image: 'https://tse2.mm.bing.net/th?id=OIP.hkUF3ED6F9UdjW6wJ9GTXwHaKN&pid=Api&P=0&h=180',
    quantity: '200g',
    cost: '₹48',
    description: 'Spicy and crunchy Indian snack made from besan.'
  },

  // Noodles
  {
    category: 'Noodles',
    name: 'Maggi Masala',
    image: 'https://tse1.mm.bing.net/th?id=OIP.YlCrzPhIVtJ5uHUF0sH-eAHaHa&pid=Api&P=0&h=180',
    quantity: '70g',
    cost: '₹14',
    description: 'India’s favorite instant masala noodles.'
  },
  {
    category: 'Noodles',
    name: 'Top Ramen Curry',
    image: 'https://tse4.mm.bing.net/th?id=OIP.IgdYENlugH4AsklyH8PbbAHaKx&pid=Api&P=0&h=180',
    quantity: '70g',
    cost: '₹12',
    description: 'Instant noodles with unique curry flavor.'
  },
  {
    category: 'Noodles',
    name: 'Yippee Magic Masala',
    image: 'https://tse1.mm.bing.net/th?id=OIP._0gcF5Qauyu_pcVW5sg-zwHaIi&pid=Api&P=0&h=180',
    quantity: '65g',
    cost: '₹15',
    description: 'Long and non-sticky noodles with magical masala.'
  },
  {
    category: 'Noodles',
    name: 'Knorr Soupy Noodles',
    image: 'https://tse3.mm.bing.net/th?id=OIP.emw3Elh4UwcD-7Q755LVuwHaHa&pid=Api&P=0&h=180',
    quantity: '70g',
    cost: '₹20',
    description: 'Soupy twist to regular noodles with rich flavor.'
  },
  {
    category: 'Noodles',
    name: 'Patanjali Atta Noodles',
    image: 'https://tse1.mm.bing.net/th?id=OIP.-R-EUBDnVoWhxzK9tYBhjgHaHa&pid=Api&P=0&h=180',
    quantity: '60g',
    cost: '₹12',
    description: 'Healthy noodles made with whole wheat atta.'
  }
];
  


module.exports = itemsData;