const SHOP_DATA = [
  {
    id: 1,
    title: 'Easy Care',
    routeName: 'easy-care',
    items: [
      {
        id: 1,
        name: 'Prayer Plant',
        imageUrl:
          'https://cdn.shopify.com/s/files/1/0105/6833/5411/products/Marantha_1200x1200.jpg?v=1611329554',
        price: 15,
      },
      {
        id: 2,
        name: 'Golden Pothos',
        imageUrl:
          'https://balconygardenweb-lhnfx0beomqvnhspx.netdna-ssl.com/wp-content/uploads/2018/10/18.-Pothos.jpg',
        price: 12,
      },
      {
        id: 3,
        name: 'Moon Cactus',
        imageUrl:
          'https://www.thespruce.com/thmb/iRVUHcJUa_QdnTn_Qh5boAXRJ_Y=/1536x1536/smart/filters:no_upscale()/grow-grafted-ruby-ball-cactus-1902604-HERO-6077451839534c4385d6db0ebe47d640.jpg',
        price: 6,
      },
      {
        id: 4,
        name: 'Rubber Plant',
        imageUrl:
          'https://www.gardenersdream.co.uk/images/ficus-robusta-rubber-plant-p4799-37878_image.jpg',
        price: 8,
      },
      {
        id: 5,
        name: 'Monstera',
        imageUrl:
          'https://m.media-amazon.com/images/I/81Bk7QKpiDL._AC_SL1500_.jpg',
        price: 15,
      },
    ],
  },
  {
    id: 2,
    title: 'Pet Friendly',
    routeName: 'pet-friendly',
    items: [
      {
        id: 1,
        name: 'String of Hearts',
        imageUrl:
          'https://i.etsystatic.com/24118283/r/il/81cb94/2460674536/il_570xN.2460674536_39dw.jpg',
        price: 11,
      },
      {
        id: 2,
        name: 'Calathea Makoyana',
        imageUrl:
          'https://m.media-amazon.com/images/I/81nSgvRCD2S._AC_SX466_.jpg',
        price: 24,
      },
      {
        id: 3,
        name: 'Boston Fern',
        imageUrl:
          'https://thelittlebotanical.com/wp-content/uploads/2019/03/07_JT_006_1000x1000.jpg',
        price: 18,
      },
      {
        id: 4,
        name: 'Cast Iron Plant',
        imageUrl:
          'https://cdn.shopify.com/s/files/1/1706/1307/products/Aspidistra-Cast-Iron-Plant-90cm-Hortology.jpg?v=1587912852',
        price: 16,
      },
      {
        id: 5,
        name: 'Hoya Heart Leaf',
        imageUrl:
          'https://i.etsystatic.com/10494852/r/il/783855/2029326287/il_fullxfull.2029326287_897x.jpg',
        price: 7,
      },
      {
        id: 6,
        name: 'Kentia Palm',
        imageUrl:
          'https://www.gardeningknowhow.com/wp-content/uploads/2007/05/kentia-palm1.jpg',
        price: 35,
      },
      {
        id: 7,
        name: 'Money tree',
        imageUrl:
          'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1619636690-41fifZkP1ML._SL500_.jpg',
        price: 35,
      },
      {
        id: 8,
        name: 'Maranta',
        imageUrl:
          'https://i.etsystatic.com/14339179/r/il/a8823f/2359005661/il_fullxfull.2359005661_8u10.jpg',
        price: 14,
      },
    ],
  },
  {
    id: 3,
    title: 'Low Light',
    routeName: 'low-light',
    items: [
      {
        id: 1,
        name: 'Asparagus Fern',
        imageUrl:
          'https://thelittlebotanical.com/wp-content/uploads/2020/09/21_JT_020_1000x1000.jpg',
        price: 10,
      },
      {
        id: 2,
        name: 'Jewel Orchid',
        imageUrl:
          'https://cdn.shopify.com/s/files/1/1807/1961/products/IMG_0783_2048x.jpg?v=1586118449',
        price: 9,
      },
      {
        id: 3,
        name: 'Alocasia',
        imageUrl:
          'https://cdn.shopify.com/s/files/1/1706/1307/products/Alocasia-portodora.jpg?v=1604245648',
        price: 9,
      },
      {
        id: 4,
        name: 'Happy Leaf',
        imageUrl:
          'https://res.cloudinary.com/alexflorisca/image/fetch/q_auto,f_auto/https://cdn.shopify.com/s/files/1/0086/5429/1040/products/twig-plants-happy-leaf-pothos-4-2_large.jpg%3Fv%3D1623246976',
        price: 15,
      },
      {
        id: 5,
        name: 'Calathea White Fusion',
        imageUrl:
          'https://cdn.shopify.com/s/files/1/0045/4613/4065/products/fusion_900x.jpg?v=1633008943',
        price: 18,
      },
    ],
  },
  {
    id: 4,
    title: 'Air Purifying',
    routeName: 'air-purifying',
    items: [
      {
        id: 1,
        name: 'Snake Plant',
        imageUrl:
          'https://thelittlebotanical.com/wp-content/uploads/2021/02/24_JT_024_1000x1000-600x600.jpg',
        price: 25,
      },
      {
        id: 2,
        name: 'Fiddle Leaf Fig',
        imageUrl:
          'https://cdn.shopify.com/s/files/1/1706/1307/products/Ficus-lyrata-Fiddle-Leaf-Fig-Scandi-Woven-Basket-White-Weave_1200x.jpg?v=1618919248',
        price: 20,
      },
      {
        id: 3,
        name: 'English Ivy',
        imageUrl:
          'https://blog.omysa.com/wp-content/uploads/2020/08/How-to-Care-for-Your-English-Ivy-Plant.jpg',
        price: 80,
      },
      {
        id: 4,
        name: 'Spider Plant',
        imageUrl:
          'https://cdn.shopify.com/s/files/1/1706/1307/products/Chlorophytum-Bonnie-Curly-Spider-Plant-Mini-Bucket-Plant-Pot-Grey-Washed_44eb0987-37e1-43bb-8493-fcf4ddb826e4_1200x.jpg?v=1620212325',
        price: 80,
      },
      {
        id: 5,
        name: 'Aloe Vera',
        imageUrl:
          'https://cdn.shopify.com/s/files/1/1706/1307/products/Aloe-vera-Thies-Plant-Pot-Mustard_1200x.jpg?v=1615971339',
        price: 45,
      },
      {
        id: 6,
        name: 'Broadleaf Lady Palm',
        imageUrl:
          'https://www.epicgardening.com/wp-content/uploads/2017/02/broadleaf-lady-palm-tree.jpg',
        price: 13,
      },
      {
        id: 7,
        name: 'Weeping Fig',
        imageUrl:
          'https://www.houseplantsexpert.com/image-files/ficus-benjamina.jpg',
        price: 20,
      },
    ],
  },
  {
    id: 5,
    title: 'Succulents',
    routeName: 'succulents',
    items: [
      {
        id: 1,
        name: 'String of Pearls',
        imageUrl:
          'https://www.gardenersdream.co.uk/images/senecio-rowleyanus-string-of-pearls-p4825-37973_image.jpg',
        price: 14,
      },
      {
        id: 2,
        name: 'Shark Fin',
        imageUrl:
          'https://cdn.shopify.com/s/files/1/0568/7282/9080/products/SharkFin-12cm-BengalBrown.jpg?v=1631171488',
        price: 20,
      },
      {
        id: 3,
        name: 'Mistletoe Cactus',
        imageUrl:
          'https://m.media-amazon.com/images/I/7119DlRV5vL._AC_SL1500_.jpg',
        price: 25,
      },
      {
        id: 4,
        name: 'Candelabra Cactus',
        imageUrl:
          'https://www.botanicly.com/media/0e/c8/d4/1612534976/321e32ae17b3bb14ef043ff761fde773.png',
        price: 25,
      },
      {
        id: 5,
        name: 'Chinese Money plant',
        imageUrl:
          'https://cdn.shopify.com/s/files/1/1706/1307/products/Pilea-peperomioides-Chinese-Money-Plant-Stemmed_1200x.jpg?v=1581952996',
        price: 40,
      },
      {
        id: 6,
        name: 'Watermelon Peperomia',
        imageUrl:
          'https://cdn.diys.com/wp-content/uploads/2020/10/Watermelon-Peperomia-Peperomia-argyreia.jpg',
        price: 25,
      },
    ],
  },
];

export default SHOP_DATA;
