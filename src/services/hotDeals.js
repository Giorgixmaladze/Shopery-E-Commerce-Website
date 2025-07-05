const deals = [
  {
    name: "Carrot",
    description: "A root vegetable, usually orange in color, known for its sweetness and crunch.",
    nutrients: ["Vitamin A", "Beta-carotene", "Fiber"],
    image: "https://harvestmarkets.com.au/cdn/shop/products/ResizerImage2048X1535_1024x1024.jpg?v=1585620612"
  },
  {
    name: "Broccoli",
    description: "A green cruciferous vegetable with dense flowering heads.",
    nutrients: ["Vitamin C", "Vitamin K", "Fiber"],
    image: "https://www.healthyfood.com/wp-content/uploads/2017/03/What_to_do_with_broccoli-1-1024x768.jpg"
  },
  {
    name: "Spinach",
    description: "A leafy green vegetable popular in salads and cooking.",
    nutrients: ["Iron", "Vitamin K", "Folate"],
    image:"https://gofresh.com.kw/wp-content/uploads/2023/10/spinach-1-600x600.jpg"
  },
  {
    name: "Tomato",
    description: "Technically a fruit but used as a vegetable in cooking, juicy and red.",
    nutrients: ["Vitamin C", "Lycopene", "Potassium"],
    image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg"
  },
  {
    name: "Potato",
    description: "A starchy tuber widely used in many cuisines.",
    nutrients: ["Carbohydrates", "Vitamin C", "Potassium"],
    image: "https://m.media-amazon.com/images/I/41QKCkQ2A5L.jpg"
  },
  {
    name: "Bell Pepper",
    description: "Sweet peppers in various colors: red, yellow, green.",
    nutrients: ["Vitamin C", "Vitamin A", "Fiber"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxWdlKgytO_diyJkMxhaphD_xcJmLzNwhjGg&s"
  },
  {
    name: "Cucumber",
    description: "A cool, crisp vegetable often used in salads.",
    nutrients: ["Vitamin K", "Water", "Fiber"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT19UUTLodCwKT1sEjgfdbWn8WLfiJ3D2d4Q&s"
  },
  {
    name: "Eggplant",
    description: "A purple-skinned vegetable with spongy flesh.",
    nutrients: ["Fiber", "Antioxidants", "Manganese"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUTCxPdBArv3B03wjrUg3B0k1L_xfC-b2EKA&s"
  },
  {
    name: "Zucchini",
    description: "A type of summer squash, green and mild in flavor.",
    nutrients: ["Vitamin C", "Potassium", "Fiber"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNZ2hJYtaYVZYq1AdkzdUAK3kPZ8hUjFkz7A&s"
  },
  {
    name: "Onion",
    description: "A bulb vegetable with strong flavor, used in many dishes.",
    nutrients: ["Vitamin C", "Antioxidants", "Fiber"],
    image: "https://www.veggycation.com.au/siteassets/veggycationvegetable/onion.jpg"
  },
  {
    name: "Garlic",
    description: "A pungent bulb used as a spice or seasoning.",
    nutrients: ["Allicin", "Vitamin B6", "Manganese"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN_uhM0eWP8vpC5ZYQWJtX7OWWji_2u0-g2Q&s"
  },
  {
    name: "Cabbage",
    description: "A leafy green or purple vegetable with dense heads.",
    nutrients: ["Vitamin C", "Vitamin K", "Fiber"],
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/plant-seed/o/u/o/50-nidva136-50-seeds-top-quality-round-cabbage-vegetable-original-imagvy2m56pkzreg.jpeg?q=90&crop=false"
  },
  {
    name: "Cauliflower",
    description: "A white cruciferous vegetable with compact florets.",
    nutrients: ["Vitamin C", "Folate", "Fiber"],
    image: "https://www.seedway.com/app/uploads/2019/05/Amazing-Iso-21.png"
  },
  {
    name: "Peas",
    description: "Small green seeds in a pod, sweet and tender.",
    nutrients: ["Protein", "Fiber", "Vitamin K"],
    image: "https://www.melissas.com/cdn/shop/products/4-pounds-image-of-english-peas-vegetables-33507978706988.jpg?v=1678716114"
  },
  {
    name: "Sweet Corn",
    description: "Yellow kernels on a cob, sweet and starchy.",
    nutrients: ["Carbohydrates", "Vitamin B", "Fiber"],
    image: "https://organicmandya.com/cdn/shop/files/SweetCorn.jpg?v=1721375516&width=1000"
  },
  {
    name: "Lettuce",
    description: "A leafy green commonly used in salads.",
    nutrients: ["Vitamin A", "Vitamin K", "Folate"],
    image: "https://www.100daysofrealfood.com/wp-content/uploads/2023/11/vecteezy_lettuce-salad-leaf-isolated-on-white-background-with_5582269-scaled.jpg"
  },
  {
    name: "Celery",
    description: "A crunchy green vegetable with long fibrous stalks.",
    nutrients: ["Vitamin K", "Potassium", "Fiber"],
    image: "https://kidseatincolor.com/wp-content/uploads/2021/09/Celery-1024x683.jpg"
  },
  {
    name: "Radish",
    description: "A small root vegetable with a peppery flavor.",
    nutrients: ["Vitamin C", "Fiber", "Potassium"],
    image: "https://www.veggycation.com.au/siteassets/veggycationvegetable/radish-red.jpg"
  },
  {
    name: "Pumpkin",
    description: "A large orange squash with sweet flesh.",
    nutrients: ["Vitamin A", "Fiber", "Potassium"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz3Xxs-Oh-n6Csgg3VR_yybK_N7sBThmtA1A&s"
  },
  {
    name: "Beetroot",
    description: "A deep red root vegetable with earthy taste.",
    nutrients: ["Folate", "Manganese", "Fiber"],
    image: "https://www.veggycation.com.au/siteassets/veggycationvegetable/beetroot.jpg"
  },
  {
    name: "Kale",
    description: "A dark green leafy vegetable, highly nutritious.",
    nutrients: ["Vitamin K", "Vitamin C", "Calcium"],
    image: "https://www.veggycation.com.au/siteassets/veggycationvegetable/kale.jpg"
  },
  {
    name: "Green Beans",
    description: "Long, slender pods with small seeds inside.",
    nutrients: ["Vitamin K", "Vitamin C", "Fiber"],
    image: "https://i.ebayimg.com/images/g/18AAAOSw3sVoC6Jv/s-l1600.webp"
  },
  {
    name: "Okra",
    description: "A green pod vegetable with mucilaginous texture.",
    nutrients: ["Vitamin C", "Folate", "Fiber"],
    image: "https://cdn.britannica.com/60/157660-050-99656755/Okra-fruits-section.jpg"
  },
  {
    name: "Turnip",
    description: "A round root vegetable with white flesh.",
    nutrients: ["Vitamin C", "Fiber", "Potassium"],
    image: "https://www.veggycation.com.au/siteassets/veggycationvegetable/turnip.jpg"
  },
  {
    name: "Swiss Chard",
    description: "Leafy green with colorful stems.",
    nutrients: ["Vitamin K", "Vitamin A", "Magnesium"],
    image: "https://cdn-prod.medicalnewstoday.com/content/images/articles/284/284103/swiss-chard.jpg"
  },
  {
    name: "Apple",
    description: "A sweet, crisp fruit often eaten raw or used in desserts.",
    nutrients: ["Vitamin C", "Fiber", "Potassium"],
    image: "https://www.applesfromny.com/wp-content/uploads/2020/06/SnapdragonNEW.png"
  },
  {
    name: "Banana",
    description: "A soft, sweet fruit with a yellow peel.",
    nutrients: ["Potassium", "Vitamin B6", "Vitamin C"],
    image:  "https://www.bobtailfruit.co.uk/media/mageplaza/blog/post/4/2/42e9as7nataai4a6jcufwg.jpeg"
  },
  {
    name: "Orange",
    description: "A citrus fruit known for its juicy, sweet-tart flavor.",
    nutrients: ["Vitamin C", "Fiber", "Folate"],
    image: "https://www.quanta.org/orange/orange.jpg"

  },
  {
    name: "Strawberry",
    description: "A bright red, juicy berry with seeds on its surface.",
    nutrients: ["Vitamin C", "Manganese", "Fiber"],
    image:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs6173sNtUJpDqhCAJXuxYcRYxhRtuGiPDFw&s"
  },
  {
    name: "Grapes",
    description: "Small, juicy berries that grow in clusters.",
    nutrients: ["Vitamin C", "Vitamin K", "Antioxidants"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTltPkn-aasgobd2r2EbfCuNm98N1Xvtqt3dA&s"
  },
  {
    name: "Watermelon",
    description: "A large, sweet fruit with juicy red flesh.",
    nutrients: ["Vitamin C", "Lycopene", "Water"],
    image: "https://www.watermelon.org/wp-content/uploads/2020/07/Seeded-Wedge-scaled.jpg"
  },
  {
    name: "Pineapple",
    description: "A tropical fruit with spiky skin and sweet, tart flesh.",
    nutrients: ["Vitamin C", "Manganese", "Bromelain"],
    image: "https://organicmandya.com/cdn/shop/files/Pineapple.jpg?v=1721375225&width=1000"
  },
  {
    name: "Mango",
    description: "A tropical stone fruit with juicy, sweet orange flesh.",
    nutrients: ["Vitamin C", "Vitamin A", "Fiber"],
    image:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpRNEYxLc84WINOIz3wOMxkc0sg85Qy3qWew&s"
  },
  {
    name: "Peach",
    description: "A soft, sweet fruit with fuzzy skin and a large pit.",
    nutrients: ["Vitamin C", "Vitamin A", "Fiber"],
    image:"https://www.kroger.com/product/images/large/front/0000000003117"
  },
  {
    name: "Pear",
    description: "A juicy fruit with a soft, grainy texture.",
    nutrients: ["Fiber", "Vitamin C", "Potassium"],
    image: "https://aramgarhorchards.com/wp-content/uploads/2018/08/pear-1.jpg"
  },
  {
    name: "Blueberry",
    description: "A small, round berry with deep blue color.",
    nutrients: ["Vitamin C", "Antioxidants", "Fiber"],
    image: "https://cdn.mafrservices.com/sys-master-root/hb0/h0d/16872196767774/80805_1.jpg?im=Resize=170080"
  },
  {
    name: "Kiwi",
    description: "A small brown fruit with bright green, tangy flesh.",
    nutrients: ["Vitamin C", "Vitamin K", "Fiber"],
    image:  "https://upload.wikimedia.org/wikipedia/commons/b/b8/Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg"
  },
  {
    name: "Papaya",
    description: "A tropical fruit with orange flesh and black seeds.",
    nutrients: ["Vitamin C", "Vitamin A", "Folate"],
    image: "https://www.dole.com/sites/default/files/media/2025-01/papayas.png"
  },
  {
    name: "Lemon",
    description: "A bright yellow citrus fruit with sour juice.",
    nutrients: ["Vitamin C", "Citric Acid", "Fiber"],
    image: "https://fruits.today/image/cache/catalog/product/8/Cytryna_ES_05kg-800x800.jpg"
  },
  {
    name: "Lime",
    description: "A small green citrus fruit with tart flavor.",
    nutrients: ["Vitamin C", "Citric Acid", "Antioxidants"],
    image: "https://resources.markon.com/sites/default/files/styles/large/public/pi_photos/Citrus_Limes_Hero.jpg"
  },
  {
    name: "Cherry",
    description: "A small, round, sweet or tart stone fruit.",
    nutrients: ["Vitamin C", "Potassium", "Antioxidants"],
    image: "https://www.dole.com/sites/default/files/media/2025-01/cherries.png"
  },
  {
    name: "Plum",
    description: "A juicy, sweet fruit with smooth skin and a single pit.",
    nutrients: ["Vitamin C", "Vitamin K", "Fiber"],
    image: "https://fruitique.in/cdn/shop/products/IndianPlum_1_1024x1024.jpg?v=1631522701"
  },
  {
    name: "Pomegranate",
    description: "A round fruit with thick skin and many juicy seeds.",
    nutrients: ["Vitamin C", "Potassium", "Antioxidants"],
    image: "https://ucanr.edu/blogs/CCMGBlog/blogfiles/25690_original.jpg"
  },
  {
    name: "Avocado",
    description: "A creamy green fruit with a large pit, often used in savory dishes.",
    nutrients: ["Healthy fats", "Vitamin K", "Folate"],
    image:  "https://cdn.britannica.com/72/170772-050-D52BF8C2/Avocado-fruits.jpg"
  },
  {
    name: "Raspberry",
    description: "A small, soft, red berry with a sweet-tart flavor.",
    nutrients: ["Vitamin C", "Fiber", "Antioxidants"],
    image: "https://img.pikbest.com/png-images/20240626/red-raspberries-juicy-fresh-raspberry-closeup_10638087.png!w700wp"
  },
  {
    name: "Blackberry",
    description: "A dark purple-black aggregate fruit with sweet-tart taste.",
    nutrients: ["Vitamin C", "Fiber", "Manganese"],
    image: "https://media.barakatfresh.ae/media/catalog/product/cache/991eeaa3837399618b43d1cd04e346f4/b/l/blackberry-125g.jpg"
  },
  {
    name: "Fig",
    description: "A soft, sweet fruit with a unique texture and tiny seeds.",
    nutrients: ["Fiber", "Calcium", "Potassium"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUPt4sMJQi5zIBgz1HEXF83HbgYd1SoUrkow&s"
  },
  {
    name: "Guava",
    description: "A tropical fruit with sweet, fragrant flesh.",
    nutrients: ["Vitamin C", "Fiber", "Folate"],
    image: "https://fiercefruit.com/cdn/shop/articles/Whole-and-cut-pink-guava-fruits_5173x.jpg?v=1633970138"
  }
]



export default deals