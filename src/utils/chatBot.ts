export interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  eventType?: string;
  products?: Product[];
  items?: EventItem[];
  budget?: BudgetBreakdown;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  link: string;
  image: string;
  category: string;
  rating?: number;
  reviews?: number;
  inStock?: boolean;
  prime?: boolean;
}

export interface EventItem {
  id: string;
  name: string;
  category: string;
  essential: boolean;
  price: string;
  quantity: string;
  description: string;
  alternatives?: string[];
  diyOption?: string;
  link?: string;
  image?: string;
}

export interface BudgetBreakdown {
  total: number;
  categories: {
    [key: string]: {
      allocated: number;
      spent: number;
      items: string[];
    };
  };
}

// Comprehensive Event Items Database
const eventItemsDatabase = {
  birthday: {
    decorations: [
      {
        id: 'bd_dec_1',
        name: 'Birthday Balloons (Pack of 50)',
        category: 'Decorations',
        essential: true,
        price: '₹299',
        quantity: '1 pack',
        description: 'Colorful latex balloons with "Happy Birthday" print',
        alternatives: ['DIY paper balloons', 'Foil balloons'],
        diyOption: 'Make paper balloons using colored paper',
        link: 'https://www.amazon.in/birthday-balloons-pack',
        image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=300'
      },
      {
        id: 'bd_dec_2',
        name: 'Happy Birthday Banner',
        category: 'Decorations',
        essential: true,
        price: '₹149',
        quantity: '1 piece',
        description: 'Colorful "Happy Birthday" banner with letters',
        alternatives: ['DIY paper banner', 'Fabric banner'],
        diyOption: 'Create banner using colored paper and string',
        link: 'https://www.flipkart.com/birthday-banner',
        image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=300'
      },
      {
        id: 'bd_dec_3',
        name: 'Party Streamers (5 rolls)',
        category: 'Decorations',
        essential: false,
        price: '₹99',
        quantity: '5 rolls',
        description: 'Crepe paper streamers in assorted colors',
        alternatives: ['Ribbon streamers', 'Fabric strips'],
        diyOption: 'Cut colorful paper into strips',
        link: 'https://www.amazon.in/party-streamers',
        image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300'
      }
    ],
    tableware: [
      {
        id: 'bd_tab_1',
        name: 'Disposable Paper Plates (50 pcs)',
        category: 'Tableware',
        essential: true,
        price: '₹199',
        quantity: '50 pieces',
        description: 'Colorful disposable plates for party',
        alternatives: ['Reusable plastic plates', 'Banana leaves'],
        link: 'https://www.amazon.in/disposable-plates',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300'
      },
      {
        id: 'bd_tab_2',
        name: 'Party Cups (50 pcs)',
        category: 'Tableware',
        essential: true,
        price: '₹149',
        quantity: '50 pieces',
        description: 'Colorful disposable cups',
        alternatives: ['Reusable cups', 'Glass tumblers'],
        link: 'https://www.flipkart.com/party-cups',
        image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=300'
      },
      {
        id: 'bd_tab_3',
        name: 'Paper Napkins (100 pcs)',
        category: 'Tableware',
        essential: true,
        price: '₹89',
        quantity: '100 pieces',
        description: 'Colorful paper napkins with birthday theme',
        alternatives: ['Cloth napkins', 'Tissue papers'],
        link: 'https://www.amazon.in/party-napkins',
        image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=300'
      }
    ],
    food: [
      {
        id: 'bd_food_1',
        name: 'Birthday Cake (1kg)',
        category: 'Food',
        essential: true,
        price: '₹599',
        quantity: '1 kg',
        description: 'Chocolate birthday cake with decorations',
        alternatives: ['Homemade cake', 'Cupcakes', 'Ice cream cake'],
        diyOption: 'Bake at home using flour, eggs, sugar, cocoa powder',
        link: 'https://www.zomato.com/cake-delivery',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300'
      },
      {
        id: 'bd_food_2',
        name: 'Party Snacks Combo',
        category: 'Food',
        essential: false,
        price: '₹399',
        quantity: 'For 10 people',
        description: 'Chips, namkeen, cookies combo pack',
        alternatives: ['Homemade snacks', 'Fruits', 'Sandwiches'],
        diyOption: 'Make popcorn, sandwiches, fruit salad at home',
        link: 'https://www.bigbasket.com/party-snacks',
        image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=300'
      },
      {
        id: 'bd_food_3',
        name: 'Juice Boxes (12 pack)',
        category: 'Food',
        essential: true,
        price: '₹240',
        quantity: '12 pieces',
        description: 'Mixed fruit juice boxes for kids',
        alternatives: ['Fresh juice', 'Soft drinks', 'Water'],
        diyOption: 'Make fresh juice at home',
        link: 'https://www.bigbasket.com/juice-boxes',
        image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=300'
      }
    ],
    entertainment: [
      {
        id: 'bd_ent_1',
        name: 'Party Games Kit',
        category: 'Entertainment',
        essential: false,
        price: '₹299',
        quantity: '1 set',
        description: 'Musical chairs, pass the parcel, treasure hunt kit',
        alternatives: ['DIY games', 'Mobile games', 'Dance competition'],
        diyOption: 'Create games using household items',
        link: 'https://www.amazon.in/party-games-kit',
        image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a8e?w=300'
      },
      {
        id: 'bd_ent_2',
        name: 'Bluetooth Speaker',
        category: 'Entertainment',
        essential: false,
        price: '₹1,299',
        quantity: '1 piece',
        description: 'Portable speaker for party music',
        alternatives: ['Phone speaker', 'Home stereo'],
        link: 'https://www.amazon.in/bluetooth-speaker',
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300'
      }
    ],
    returnGifts: [
      {
        id: 'bd_gift_1',
        name: 'Return Gift Bags (10 pcs)',
        category: 'Return Gifts',
        essential: false,
        price: '₹499',
        quantity: '10 pieces',
        description: 'Small toys, chocolates, stickers combo',
        alternatives: ['Homemade treats', 'Books', 'Art supplies'],
        diyOption: 'Pack homemade cookies or crafts',
        link: 'https://www.amazon.in/return-gifts',
        image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300'
      }
    ]
  },
  
  wedding: {
    decorations: [
      {
        id: 'wd_dec_1',
        name: 'Marigold Flower Garlands (10 pcs)',
        category: 'Decorations',
        essential: true,
        price: '₹1,999',
        quantity: '10 pieces',
        description: 'Fresh marigold garlands for mandap decoration',
        alternatives: ['Artificial flowers', 'Rose garlands', 'Jasmine garlands'],
        link: 'https://www.floweraura.com/marigold-garlands',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=300'
      },
      {
        id: 'wd_dec_2',
        name: 'Wedding Backdrop Curtains',
        category: 'Decorations',
        essential: true,
        price: '₹2,499',
        quantity: '1 set',
        description: 'Elegant backdrop curtains for stage decoration',
        alternatives: ['Fabric draping', 'Balloon backdrop', 'Flower wall'],
        link: 'https://www.amazon.in/wedding-backdrop',
        image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=300'
      },
      {
        id: 'wd_dec_3',
        name: 'Wedding Mandap Decoration Kit',
        category: 'Decorations',
        essential: true,
        price: '₹4,999',
        quantity: '1 complete set',
        description: 'Complete mandap decoration with flowers and drapes',
        alternatives: ['DIY mandap', 'Rental mandap'],
        link: 'https://www.amazon.in/mandap-decoration',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=300'
      }
    ],
    lighting: [
      {
        id: 'wd_light_1',
        name: 'String Lights (100 LED)',
        category: 'Lighting',
        essential: true,
        price: '₹799',
        quantity: '10 meters',
        description: 'Warm white LED string lights for decoration',
        alternatives: ['Fairy lights', 'Lanterns', 'Candles'],
        link: 'https://www.amazon.in/led-string-lights',
        image: 'https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=300'
      },
      {
        id: 'wd_light_2',
        name: 'Paper Lanterns (20 pcs)',
        category: 'Lighting',
        essential: false,
        price: '₹599',
        quantity: '20 pieces',
        description: 'Colorful paper lanterns for ambient lighting',
        alternatives: ['Electric lanterns', 'Candles'],
        link: 'https://www.amazon.in/paper-lanterns',
        image: 'https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=300'
      }
    ],
    catering: [
      {
        id: 'wd_cat_1',
        name: 'Wedding Catering Package',
        category: 'Catering',
        essential: true,
        price: '₹350/person',
        quantity: 'Per guest',
        description: 'Complete meal with appetizers, main course, dessert',
        alternatives: ['Home cooking', 'Buffet style'],
        link: 'https://www.zomato.com/wedding-catering',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300'
      }
    ]
  },

  kittyParty: {
    decorations: [
      {
        id: 'kp_dec_1',
        name: 'Elegant Table Centerpieces (5 pcs)',
        category: 'Decorations',
        essential: true,
        price: '₹899',
        quantity: '5 pieces',
        description: 'Beautiful floral centerpieces for tables',
        alternatives: ['DIY flower arrangements', 'Candle centerpieces'],
        diyOption: 'Arrange fresh flowers in glass vases',
        link: 'https://www.amazon.in/table-centerpieces',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=300'
      },
      {
        id: 'kp_dec_2',
        name: 'Fairy Lights for Ambiance',
        category: 'Decorations',
        essential: false,
        price: '₹399',
        quantity: '5 meters',
        description: 'Warm fairy lights for cozy atmosphere',
        alternatives: ['Candles', 'Table lamps'],
        link: 'https://www.amazon.in/fairy-lights',
        image: 'https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=300'
      }
    ],
    food: [
      {
        id: 'kp_food_1',
        name: 'High Tea Snacks Platter',
        category: 'Food',
        essential: true,
        price: '₹1,299',
        quantity: 'For 15 people',
        description: 'Sandwiches, pastries, cookies, tea cakes',
        alternatives: ['Homemade snacks', 'Catered meal'],
        diyOption: 'Prepare sandwiches, bake cookies at home',
        link: 'https://www.zomato.com/high-tea-catering',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300'
      },
      {
        id: 'kp_food_2',
        name: 'Tea & Coffee Setup',
        category: 'Food',
        essential: true,
        price: '₹499',
        quantity: 'For 15 people',
        description: 'Premium tea, coffee, milk, sugar setup',
        alternatives: ['Home brewing', 'Instant options'],
        link: 'https://www.bigbasket.com/tea-coffee',
        image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=300'
      }
    ],
    tableware: [
      {
        id: 'kp_tab_1',
        name: 'Elegant Tea Set (15 cups)',
        category: 'Tableware',
        essential: true,
        price: '₹799',
        quantity: '15 pieces',
        description: 'Beautiful ceramic tea cups and saucers',
        alternatives: ['Regular cups', 'Disposable cups'],
        link: 'https://www.amazon.in/tea-set',
        image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=300'
      }
    ]
  },

  trip: {
    essentials: [
      {
        id: 'tr_ess_1',
        name: 'Travel Backpack (60L)',
        category: 'Travel Essentials',
        essential: true,
        price: '₹2,499',
        quantity: '1 piece',
        description: 'Large capacity backpack for trekking/travel',
        alternatives: ['Suitcase', 'Duffel bag'],
        link: 'https://www.amazon.in/travel-backpack',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300'
      },
      {
        id: 'tr_ess_2',
        name: 'First Aid Kit',
        category: 'Travel Essentials',
        essential: true,
        price: '₹399',
        quantity: '1 kit',
        description: 'Complete first aid kit for emergencies',
        alternatives: ['Basic medicines', 'Hospital nearby'],
        link: 'https://www.amazon.in/first-aid-kit',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300'
      },
      {
        id: 'tr_ess_3',
        name: 'Power Bank (20000mAh)',
        category: 'Travel Essentials',
        essential: true,
        price: '₹1,299',
        quantity: '1 piece',
        description: 'High capacity power bank for devices',
        alternatives: ['Multiple chargers', 'Car charger'],
        link: 'https://www.amazon.in/power-bank',
        image: 'https://images.unsplash.com/photo-1609592806596-4d8b5b1d7e0e?w=300'
      }
    ],
    clothing: [
      {
        id: 'tr_cloth_1',
        name: 'Quick Dry T-Shirts (3 pcs)',
        category: 'Clothing',
        essential: true,
        price: '₹899',
        quantity: '3 pieces',
        description: 'Moisture-wicking t-shirts for travel',
        alternatives: ['Cotton t-shirts', 'Polo shirts'],
        link: 'https://www.myntra.com/quick-dry-tshirts',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300'
      },
      {
        id: 'tr_cloth_2',
        name: 'Comfortable Jeans (2 pcs)',
        category: 'Clothing',
        essential: true,
        price: '₹1,599',
        quantity: '2 pieces',
        description: 'Stretchable jeans for comfortable travel',
        alternatives: ['Cargo pants', 'Shorts'],
        link: 'https://www.myntra.com/travel-jeans',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300'
      }
    ],
    accessories: [
      {
        id: 'tr_acc_1',
        name: 'Travel Pillow',
        category: 'Accessories',
        essential: false,
        price: '₹599',
        quantity: '1 piece',
        description: 'Memory foam travel pillow for comfort',
        alternatives: ['Regular pillow', 'Inflatable pillow'],
        link: 'https://www.amazon.in/travel-pillow',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300'
      }
    ]
  },

  getTogether: {
    decorations: [
      {
        id: 'gt_dec_1',
        name: 'Family Photo Display Board',
        category: 'Decorations',
        essential: false,
        price: '₹799',
        quantity: '1 piece',
        description: 'Display board for family memories',
        alternatives: ['Digital photo frame', 'Wall collage'],
        diyOption: 'Create photo collage on wall',
        link: 'https://www.amazon.in/photo-display-board',
        image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=300'
      }
    ],
    food: [
      {
        id: 'gt_food_1',
        name: 'Family Feast Catering',
        category: 'Food',
        essential: true,
        price: '₹250/person',
        quantity: 'Per guest',
        description: 'Traditional home-style meal for family gathering',
        alternatives: ['Potluck style', 'Home cooking'],
        link: 'https://www.zomato.com/family-catering',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300'
      }
    ]
  }
};

// Enhanced product database with real items
const enhancedProducts = {
  birthday: [
    {
      id: 'bd_prod_1',
      name: 'Superhero Theme Decoration Kit',
      price: '₹599',
      originalPrice: '₹899',
      discount: '33% off',
      link: 'https://www.amazon.in/superhero-decoration-kit',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=300',
      category: 'decorations',
      rating: 4.3,
      reviews: 1247,
      inStock: true,
      prime: true
    },
    {
      id: 'bd_prod_2',
      name: 'Princess Theme Party Set',
      price: '₹749',
      originalPrice: '₹999',
      discount: '25% off',
      link: 'https://www.flipkart.com/princess-party-set',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=300',
      category: 'decorations',
      rating: 4.5,
      reviews: 892,
      inStock: true,
      prime: false
    },
    {
      id: 'bd_prod_3',
      name: 'Chocolate Birthday Cake (1kg)',
      price: '₹599',
      link: 'https://www.swiggy.com/cake-delivery',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300',
      category: 'cake',
      rating: 4.7,
      reviews: 2156,
      inStock: true,
      prime: false
    },
    {
      id: 'bd_prod_4',
      name: 'Party Tableware Set (50 pcs)',
      price: '₹399',
      originalPrice: '₹599',
      discount: '33% off',
      link: 'https://www.amazon.in/party-tableware',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300',
      category: 'tableware',
      rating: 4.2,
      reviews: 756,
      inStock: true,
      prime: true
    }
  ],
  wedding: [
    {
      id: 'wd_prod_1',
      name: 'Marigold Flower Decoration Set',
      price: '₹2,999',
      link: 'https://www.floweraura.com/wedding-flowers',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=300',
      category: 'flowers',
      rating: 4.6,
      reviews: 543,
      inStock: true,
      prime: false
    },
    {
      id: 'wd_prod_2',
      name: 'Wedding Photography Package',
      price: '₹25,000',
      link: 'https://www.weddingz.in/photography',
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=300',
      category: 'photography',
      rating: 4.8,
      reviews: 234,
      inStock: true,
      prime: false
    }
  ],
  trip: [
    {
      id: 'tr_prod_1',
      name: 'Travel Backpack 60L',
      price: '₹2,499',
      originalPrice: '₹3,999',
      discount: '38% off',
      link: 'https://www.amazon.in/travel-backpack',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300',
      category: 'travel-gear',
      rating: 4.4,
      reviews: 1876,
      inStock: true,
      prime: true
    },
    {
      id: 'tr_prod_2',
      name: 'Travel Insurance (Group)',
      price: '₹299/person',
      link: 'https://www.policybazaar.com/travel-insurance',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300',
      category: 'insurance',
      rating: 4.5,
      reviews: 892,
      inStock: true,
      prime: false
    }
  ],
  kittyParty: [
    {
      id: 'kp_prod_1',
      name: 'High Tea Catering Package',
      price: '₹1,299',
      link: 'https://www.zomato.com/high-tea',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300',
      category: 'catering',
      rating: 4.4,
      reviews: 567,
      inStock: true,
      prime: false
    }
  ]
};

export class YOJOChatBot {
  private currentEventType: string | null = null;
  private currentBudget: number = 0;
  private currentGuests: number = 0;
  private userInventory: string[] = [];
  private selectedItems: string[] = [];

  detectEventAndExtractInfo(message: string): {
    eventType: string | null;
    budget: number;
    guests: number;
    location?: string;
    duration?: string;
    theme?: string;
    age?: number;
    inventory: string[];
  } {
    const lowerMessage = message.toLowerCase();
    
    // Event type detection
    let eventType = null;
    const eventKeywords = {
      birthday: ['birthday', 'bday', 'birth day', 'turning', 'age'],
      wedding: ['wedding', 'marriage', 'bride', 'groom', 'ceremony', 'reception', 'shaadi'],
      kittyParty: ['kitty party', 'kitty', 'ladies party', 'high tea', 'ladies gathering'],
      trip: ['trip', 'travel', 'vacation', 'tour', 'visit', 'holiday', 'journey'],
      getTogether: ['get together', 'reunion', 'family function', 'gathering'],
      corporate: ['corporate', 'office party', 'team building', 'company event']
    };

    for (const [type, keywords] of Object.entries(eventKeywords)) {
      if (keywords.some(keyword => lowerMessage.includes(keyword))) {
        eventType = type;
        break;
      }
    }

    // Budget extraction
    const budgetMatch = message.match(/₹\s*(\d+(?:,\d+)*(?:\.\d+)?)\s*(?:k|thousand|lakh|lakhs)?/i) ||
                       message.match(/budget\s*:?\s*₹?\s*(\d+(?:,\d+)*)/i) ||
                       message.match(/(\d+(?:,\d+)*)\s*(?:rupees|rs|₹)/i);
    
    let budget = 0;
    if (budgetMatch) {
      let amount = parseInt(budgetMatch[1].replace(/,/g, ''));
      if (lowerMessage.includes('k') || lowerMessage.includes('thousand')) {
        amount *= 1000;
      } else if (lowerMessage.includes('lakh')) {
        amount *= 100000;
      }
      budget = amount;
    }

    // Guest count extraction
    const guestMatch = message.match(/(\d+)\s*(?:people|guests|persons|friends|kids|children)/i);
    const guests = guestMatch ? parseInt(guestMatch[1]) : 0;

    // Age extraction
    const ageMatch = message.match(/(\d+)[-\s]*year[-\s]*old/i);
    const age = ageMatch ? parseInt(ageMatch[1]) : 0;

    // Location extraction
    const locationMatch = message.match(/(?:in|at|to)\s+([A-Za-z\s]+?)(?:\s|,|$)/i);
    const location = locationMatch ? locationMatch[1].trim() : '';

    // Duration extraction for trips
    const durationMatch = message.match(/(\d+)\s*(?:days?|nights?)/i);
    const duration = durationMatch ? durationMatch[0] : '';

    // Theme extraction
    const themeKeywords = ['superhero', 'princess', 'frozen', 'unicorn', 'jungle', 'space', 'traditional', 'modern'];
    const theme = themeKeywords.find(t => lowerMessage.includes(t)) || '';

    // Inventory extraction
    const inventoryMatch = message.match(/(?:i have|already have|i own)\s+([^.!?]+)/i);
    const inventory = inventoryMatch ? 
      inventoryMatch[1].split(/,|\sand\s/).map(item => item.trim()) : [];

    return {
      eventType,
      budget,
      guests,
      location,
      duration,
      theme,
      age,
      inventory
    };
  }

  generateResponse(userMessage: string, isFirstMessage: boolean = false): ChatMessage {
    if (isFirstMessage) {
      return {
        id: Date.now().toString(),
        text: `🎉 Hello! I'm YOJO - Your Joy Organiser! 

I help you plan events and trips with complete item lists, real prices, and shopping links.

✨ I can help with:
🎂 Birthday parties (all ages & themes)
💒 Weddings & ceremonies  
🍵 Kitty parties & high tea
✈️ Trips & travel planning
👨‍👩‍👧‍👦 Family functions & get-togethers
🏢 Corporate events

Just tell me what you're planning! For example:
"Plan a superhero birthday party for my 6-year-old son, 15 guests, ₹5000 budget. I already have plates and cups."`,
        isUser: false,
        timestamp: new Date()
      };
    }

    const extracted = this.detectEventAndExtractInfo(userMessage);
    
    if (!extracted.eventType) {
      return {
        id: Date.now().toString(),
        text: `🤔 I'd love to help you plan something amazing! 

Could you please tell me:
• What type of event? (birthday, wedding, trip, kitty party, etc.)
• How many people?
• Your budget?

For example: "Plan a birthday party for 10 people, budget ₹3000"`,
        isUser: false,
        timestamp: new Date()
      };
    }

    // Update bot state
    this.currentEventType = extracted.eventType;
    this.currentBudget = extracted.budget;
    this.currentGuests = extracted.guests;
    this.userInventory = extracted.inventory;

    // Generate comprehensive response based on event type
    return this.generateEventPlan(extracted);
  }

  private generateEventPlan(extracted: any): ChatMessage {
    const { eventType, budget, guests, theme, age, inventory, location, duration } = extracted;
    
    let responseText = '';
    let items: EventItem[] = [];
    let products: Product[] = [];
    let budgetBreakdown: BudgetBreakdown | undefined;

    switch (eventType) {
      case 'birthday':
        responseText = this.generateBirthdayPlan(extracted);
        items = this.getBirthdayItems(theme, age, guests);
        products = enhancedProducts.birthday;
        budgetBreakdown = this.calculateBudget(budget, 'birthday', guests);
        break;
        
      case 'wedding':
        responseText = this.generateWeddingPlan(extracted);
        items = this.getWeddingItems(guests);
        products = enhancedProducts.wedding;
        budgetBreakdown = this.calculateBudget(budget, 'wedding', guests);
        break;
        
      case 'trip':
        responseText = this.generateTripPlan(extracted);
        items = this.getTripItems(location, duration, guests);
        products = enhancedProducts.trip;
        break;
        
      case 'kittyParty':
        responseText = this.generateKittyPartyPlan(extracted);
        items = this.getKittyPartyItems(guests);
        products = enhancedProducts.kittyParty;
        break;
        
      default:
        responseText = this.generateGeneralEventPlan(extracted);
        items = this.getGeneralEventItems(eventType, guests);
    }

    return {
      id: Date.now().toString(),
      text: responseText,
      isUser: false,
      timestamp: new Date(),
      eventType,
      items,
      products,
      budget: budgetBreakdown
    };
  }

  private generateBirthdayPlan(extracted: any): string {
    const { budget, guests, theme, age, inventory } = extracted;
    
    let plan = `🎂 BIRTHDAY PARTY PLAN\n`;
    plan += `👶 Age: ${age} years | 👥 Guests: ${guests} | 💰 Budget: ₹${budget.toLocaleString()}\n`;
    if (theme) plan += `🎨 Theme: ${theme.charAt(0).toUpperCase() + theme.slice(1)}\n`;
    
    if (inventory.length > 0) {
      plan += `\n✅ You already have: ${inventory.join(', ')}\n`;
    }
    
    plan += `\n🛍️ ESSENTIAL ITEMS TO BUY:\n`;
    plan += `🎈 Decorations: Balloons, banners, streamers\n`;
    plan += `🍰 Food: Birthday cake, snacks, drinks\n`;
    plan += `🍽️ Tableware: Plates, cups, napkins\n`;
    plan += `🎁 Return gifts: Age-appropriate items\n`;
    plan += `🎮 Entertainment: Games, music, activities\n`;
    
    plan += `\n💡 BUDGET BREAKDOWN:\n`;
    plan += `• Decorations: ₹${Math.round(budget * 0.25).toLocaleString()}\n`;
    plan += `• Food & Cake: ₹${Math.round(budget * 0.40).toLocaleString()}\n`;
    plan += `• Return Gifts: ₹${Math.round(budget * 0.20).toLocaleString()}\n`;
    plan += `• Entertainment: ₹${Math.round(budget * 0.15).toLocaleString()}\n`;
    
    return plan;
  }

  private generateTripPlan(extracted: any): string {
    const { budget, guests, location, duration } = extracted;
    
    let plan = `✈️ TRIP PLAN: ${location?.toUpperCase()}\n`;
    plan += `👥 Group: ${guests} people | 📅 Duration: ${duration} | 💰 Budget: ₹${budget.toLocaleString()}\n\n`;
    
    plan += `🚍 TRAVEL OPTIONS:\n`;
    plan += `• Bus: ₹1,200/person (12-14 hours)\n`;
    plan += `• Train: ₹800/person (10-12 hours)\n`;
    plan += `• Flight: ₹4,500/person (2-3 hours)\n\n`;
    
    plan += `🏨 ACCOMMODATION:\n`;
    plan += `• Budget hotel: ₹1,000/night per room\n`;
    plan += `• Mid-range: ₹2,500/night per room\n\n`;
    
    plan += `🎒 PACKING ESSENTIALS:\n`;
    plan += `• Clothes for ${duration}\n`;
    plan += `• Travel documents\n`;
    plan += `• First aid kit\n`;
    plan += `• Power bank & chargers\n`;
    
    return plan;
  }

  private generateWeddingPlan(extracted: any): string {
    const { budget, guests } = extracted;
    
    let plan = `💒 WEDDING PLAN\n`;
    plan += `👥 Guests: ${guests} | 💰 Budget: ₹${budget.toLocaleString()}\n\n`;
    
    plan += `🛍️ ESSENTIAL ITEMS:\n`;
    plan += `🌸 Decorations: Flowers, mandap, backdrop\n`;
    plan += `💡 Lighting: String lights, lanterns\n`;
    plan += `🍽️ Catering: Complete meal service\n`;
    plan += `📸 Photography: Professional services\n`;
    
    return plan;
  }

  private generateKittyPartyPlan(extracted: any): string {
    const { budget, guests } = extracted;
    
    let plan = `🍵 KITTY PARTY PLAN\n`;
    plan += `👥 Ladies: ${guests} | 💰 Budget: ₹${budget.toLocaleString()}\n\n`;
    
    plan += `🛍️ ESSENTIAL ITEMS:\n`;
    plan += `🌸 Decorations: Table centerpieces, ambiance\n`;
    plan += `☕ High Tea: Snacks, tea, coffee\n`;
    plan += `🍽️ Tableware: Elegant tea sets\n`;
    
    return plan;
  }

  private generateGeneralEventPlan(extracted: any): string {
    const { eventType, budget, guests } = extracted;
    
    let plan = `🎉 ${eventType.toUpperCase()} PLAN\n`;
    plan += `👥 Guests: ${guests} | 💰 Budget: ₹${budget.toLocaleString()}\n\n`;
    
    plan += `I'll help you plan this event with complete item lists and shopping links!`;
    
    return plan;
  }

  private getBirthdayItems(theme: string, age: number, guests: number): EventItem[] {
    const items = eventItemsDatabase.birthday;
    let allItems: EventItem[] = [];
    
    // Add all categories
    allItems = allItems.concat(items.decorations);
    allItems = allItems.concat(items.tableware);
    allItems = allItems.concat(items.food);
    allItems = allItems.concat(items.entertainment);
    allItems = allItems.concat(items.returnGifts);
    
    return allItems;
  }

  private getWeddingItems(guests: number): EventItem[] {
    const items = eventItemsDatabase.wedding;
    let allItems: EventItem[] = [];
    
    allItems = allItems.concat(items.decorations);
    allItems = allItems.concat(items.lighting);
    allItems = allItems.concat(items.catering);
    
    return allItems;
  }

  private getTripItems(location: string, duration: string, guests: number): EventItem[] {
    const items = eventItemsDatabase.trip;
    let allItems: EventItem[] = [];
    
    allItems = allItems.concat(items.essentials);
    allItems = allItems.concat(items.clothing);
    allItems = allItems.concat(items.accessories);
    
    return allItems;
  }

  private getKittyPartyItems(guests: number): EventItem[] {
    const items = eventItemsDatabase.kittyParty;
    let allItems: EventItem[] = [];
    
    allItems = allItems.concat(items.decorations);
    allItems = allItems.concat(items.food);
    allItems = allItems.concat(items.tableware);
    
    return allItems;
  }

  private getGeneralEventItems(eventType: string, guests: number): EventItem[] {
    // Return items from get-together or default items
    if (eventItemsDatabase.getTogether) {
      const items = eventItemsDatabase.getTogether;
      let allItems: EventItem[] = [];
      allItems = allItems.concat(items.decorations || []);
      allItems = allItems.concat(items.food || []);
      return allItems;
    }
    return [];
  }

  private calculateBudget(totalBudget: number, eventType: string, guests: number): BudgetBreakdown {
    const breakdown: BudgetBreakdown = {
      total: totalBudget,
      categories: {}
    };

    switch (eventType) {
      case 'birthday':
        breakdown.categories = {
          decorations: { allocated: Math.round(totalBudget * 0.25), spent: 0, items: [] },
          food: { allocated: Math.round(totalBudget * 0.40), spent: 0, items: [] },
          returnGifts: { allocated: Math.round(totalBudget * 0.20), spent: 0, items: [] },
          entertainment: { allocated: Math.round(totalBudget * 0.15), spent: 0, items: [] }
        };
        break;
      case 'wedding':
        breakdown.categories = {
          decorations: { allocated: Math.round(totalBudget * 0.30), spent: 0, items: [] },
          catering: { allocated: Math.round(totalBudget * 0.40), spent: 0, items: [] },
          photography: { allocated: Math.round(totalBudget * 0.15), spent: 0, items: [] },
          miscellaneous: { allocated: Math.round(totalBudget * 0.15), spent: 0, items: [] }
        };
        break;
      default:
        breakdown.categories = {
          main: { allocated: totalBudget, spent: 0, items: [] }
        };
    }

    return breakdown;
  }

  resetConversation(): void {
    this.currentEventType = null;
    this.currentBudget = 0;
    this.currentGuests = 0;
    this.userInventory = [];
    this.selectedItems = [];
  }

  getCurrentEventType(): string | null {
    return this.currentEventType;
  }
}

// Export a singleton instance
export const yojoChatBot = new YOJOChatBot();