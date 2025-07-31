const deals =  [
    {
      id: 1,
      name: "Apple",
      category: "fruit",
      oldPrice:3.50,
      price: 1.99,
      weight: "1lb",
      description: "Fresh and crispy red apples",
      image: "https://www.applesfromny.com/wp-content/uploads/2020/06/SnapdragonNEW.png",
      rating: 4.3
    },
    {
      id: 2,
      name: "Banana",
      category: "fruit",
      oldPrice:2.00,
      price: 0.59,
      weight: "1lb",
      description: "Ripe yellow bananas",
      image: "https://www.bobtailfruit.co.uk/media/mageplaza/blog/post/4/2/42e9as7nataai4a6jcufwg.jpeg",
      rating: 3.9
    },
    {
      id: 3,
      name: "Orange",
      category: "fruit",
      oldPrice:2.00 ,
      price: 1.29,
      weight: "1lb",
      description: "Juicy sweet oranges",
      image: "https://www.quanta.org/orange/orange.jpg",
      rating: 4.1
    },
    {
      id: 4,
      name: "Strawberry",
      category: "fruit",
      oldPrice:4.50,
      price: 3.99,
      weight: "1lb",
      description: "Sweet organic strawberries",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs6173sNtUJpDqhCAJXuxYcRYxhRtuGiPDFw&s",
      rating: 4.7
    },
    {
      id: 5,
      name: "Grapes",
      category: "fruit",
      oldPrice:4.50,
      price: 2.49,
      weight: "1lb",
      description: "Seedless green grapes",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTltPkn-aasgobd2r2EbfCuNm98N1Xvtqt3dA&s",
      rating: 3.8
    },
    {
      id: 6,
      name: "Watermelon",
      category: "fruit",
      oldPrice:6.00,
      price: 4.99,
      weight: "5lb",
      description: "Sweet and refreshing watermelon",
      image: "https://www.watermelon.org/wp-content/uploads/2020/07/Seeded-Wedge-scaled.jpg",
      rating: 4.5
    },
    {
      id: 7,
      name: "Pineapple",
      category: "fruit",
      oldPrice:3.50,
      price: 2.99,
      weight: "3lb",
      description: "Tropical sweet pineapple",
      image: "https://organicmandya.com/cdn/shop/files/Pineapple.jpg?v=1721375225&width=1000",
      rating: 3.6
    },
    {
      id: 8,
      name: "Mango",
      category: "fruit",
      oldPrice:2.50,
      price: 1.89,
      weight: "1lb",
      description: "Juicy ripe mangoes",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpRNEYxLc84WINOIz3wOMxkc0sg85Qy3qWew&s",
      rating: 4.4
    },
    {
      id: 9,
      name: "Blueberry",
      category: "fruit",
      oldPrice:6.55,
      price: 4.49,
      weight: "0.5lb",
      description: "Antioxidant-rich blueberries",
      image: "https://cdn.mafrservices.com/sys-master-root/hb0/h0d/16872196767774/80805_1.jpg?im=Resize=170080",
      rating: 4.0
    },
    {
      id: 10,
      name: "Carrot",
      category: "vegetable",
      oldPrice:2.20,
      price: 0.99,
      weight: "1lb",
      description: "Fresh crunchy carrots",
      image: "https://harvestmarkets.com.au/cdn/shop/products/ResizerImage2048X1535_1024x1024.jpg?v=1585620612",
      rating: 3.5
    },
    {
      id: 11,
      name: "Broccoli",
      category: "vegetable",
      oldPrice:2.00,
      price: 1.49,
      weight: "1lb",
      description: "Nutritious green broccoli",
      image: "https://www.healthyfood.com/wp-content/uploads/2017/03/What_to_do_with_broccoli-1-1024x768.jpg",
      rating: 4.6
    },
    {
      id: 12,
      name: "Tomato",
      category: "vegetable",
      oldPrice:2.00,
      price: 1.19,
      weight: "1lb",
      description: "Juicy red tomatoes",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg",
      rating: 4.2
    },
    {
      id: 13,
      name: "Cucumber",
      category: "vegetable",
      oldPrice:1.20,
      price: 0.79,
      weight: "1lb",
      description: "Fresh and hydrating cucumbers",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT19UUTLodCwKT1sEjgfdbWn8WLfiJ3D2d4Q&s",
      rating: 3.7
    },
    {
      id: 14,
      name: "Spinach",
      category: "vegetable",
      oldPrice:2.60,
      price: 1.99,
      weight: "1lb",
      description: "Iron-rich spinach leaves",
      image: "https://lettuceinfo.org/wp-content/uploads/2020/09/Spinach.jpg",
      rating: 4.8
    },
    {
      id: 15,
      name: "Potato",
      category: "vegetable",
      oldPrice:1.75,
      price: 0.69,
      weight: "1lb",
      description: "Versatile and starchy potatoes",
      image: "https://m.media-amazon.com/images/I/41QKCkQ2A5L.jpg",
      rating: 4.1
    },
    {
      id: 16,
      name: "Onion",
      category: "vegetable",
      oldPrice:1.30,
      price: 0.49,
      weight: "1lb",
      description: "Sharp and flavorful onions",
      image: "https://www.veggycation.com.au/siteassets/veggycationvegetable/onion.jpg",
      rating: 3.4
    },
    {
      id: 17,
      name: "Garlic",
      category: "vegetable",
      oldPrice:2.65,
      price: 0.89,
      weight: "0.5lb",
      description: "Aromatic garlic bulbs",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN_uhM0eWP8vpC5ZYQWJtX7OWWji_2u0-g2Q&s",
      rating: 4.0
    },
    {
      id: 18,
      name: "Bell Pepper",
      category: "vegetable",
      oldPrice:2.00,
      price: 1.29,
      weight: "1lb",
      description: "Colorful sweet bell peppers",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxWdlKgytO_diyJkMxhaphD_xcJmLzNwhjGg&s",
      rating: 4.5
    },
    {
      id: 19,
      name: "Eggplant",
      category: "vegetable",
      oldPrice:2.00,
      price: 1.39,
      weight: "1lb",
      description: "Glossy purple eggplants",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUTCxPdBArv3B03wjrUg3B0k1L_xfC-b2EKA&s",
      rating: 3.6
    },
    {
      id: 20,
      name: "Zucchini",
      category: "vegetable",
      oldPrice:2.35,
      price: 1.09,
      weight: "1lb",
      description: "Tender green zucchini",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNZ2hJYtaYVZYq1AdkzdUAK3kPZ8hUjFkz7A&s",
      rating: 3.9
    },
    {
      id: 21,
      name: "Avocado",
      category: "fruit",
      oldPrice:3.00,
      price: 2.49,
      weight: "1lb",
      description: "Creamy ripe avocados",
      image: "https://cdn.britannica.com/72/170772-050-D52BF8C2/Avocado-fruits.jpg",
      rating: 4.7
    },
    {
      id: 22,
      name: "Kiwi",
      category: "fruit",
      oldPrice:3.20,
      price: 2.99,
      weight: "0.5lb",
      description: "Tangy green kiwifruit",
      image: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg",
      rating: 4.4
    },
    {
      id: 23,
      name: "Peach",
      category: "fruit",
      oldPrice:2.15,
      price: 1.79,
      weight: "1lb",
      description: "Sweet fuzzy peaches",
      image: "https://www.kroger.com/product/images/large/front/0000000003117",
      rating: 4.2
    },
    {
      id: 24,
      name: "Pear",
      category: "fruit",
      oldPrice:3.20,
      price: 1.69,
      weight: "1lb",
      description: "Juicy green pears",
      image: "https://aramgarhorchards.com/wp-content/uploads/2018/08/pear-1.jpg",
      rating: 3.8
    },
    {
      id: 25,
      name: "Cherry",
      category: "fruit",
      oldPrice:5.30,
      price: 4.99,
      weight: "1lb",
      description: "Sweet dark cherries",
      image: "https://www.dole.com/sites/default/files/media/2025-01/cherries.png",
      rating: 4.9
    }
  ];

  export default deals