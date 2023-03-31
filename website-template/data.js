const testimonials = [
    {
        name: 'Juan Pérez',
        text: 'El mejor restaurante de la ciudad, sin duda alguna.',
        image: 'img/user_1.jpg'
    },
    {
        name: 'María García',
        text: 'La comida es deliciosa y el servicio es excelente.',
        image: 'img/user_2.jpg'
    },
    {
        name: 'Zoe Joe',
        text: '"El restaurante es increíble, la comida es deliciosa y el ambiente es acogedor. ¡Definitivamente volveré!"',
        image: 'img/user_3.jpg'
    }
];

const menus = [
    {
        id: 1,
        name: 'Alitas a la Huanca',
        price: 10,
        category: 'piqueos',
        image: 'img/img_piqueos.png'
    },
    {
        id: 2,
        name: 'Búfalo Wings',
        price: 18,
        category: 'piqueos',
        image: 'img/img_piqueos.png'
    },
    {
        id: 3,
        name: 'Alitas Acevichadas',
        price: 15,
        category: 'piqueos',
        image: 'img/img_piqueos.png'
    },
    {
        id: 4,
        name: 'Alitas en Salsa de Maracuyá',
        price: 15,
        category: 'piqueos',
        image: 'img/img_piqueos.png'
    },
    {
        id: 5,
        name: 'Alitas a la BBQ',
        price: 16,
        category: 'piqueos',
        image: 'img/img_piqueos.png'
    },
    {
        id: 6,
        name: 'Alitas Teriyaqui',
        price: 18,
        category: 'piqueos',
        image: 'img/img_piqueos.png'
    },
    {
        id: 7,
        name: 'Festival de Alitas y Piernitas',
        price: 25,
        category: 'piqueos',
        image: 'img/img_piqueos.png'
    },
    {
        id: 8,
        name: 'Mega Festival de Alitas',
        price: 46,
        category: 'piqueos',
        image: 'img/img_piqueos.png'
    },
    {
        id: 9,
        name: 'Festi Familiar de Alitas y Piernitas',
        price: 65,
        category: 'piqueos',
        image: 'img/img_piqueos.png'
    },
    {
        id: 10,
        name: 'Broaster',
        price: 10,
        category: 'piqueos',
        image: 'img/img_piqueos.png'
    },
    {
        id: 11,
        name: 'Salchipapa Clásica',
        price: 10,
        category: 'piqueos',
        image: 'img/img_piqueos.png'
    },
    {
        id: 12,
        name: 'Salchipapa Arrebozada',
        price: 12,
        category: 'piqueos',
        image: 'img/img_piqueos.png'
    },
    {
        id: 13,
        name: 'Salchiqueso',
        price: 13,
        category: 'piqueos',
        image: 'img/img_piqueos.png'
    },
    {
        id: 14,
        name: 'SalchiDnofox',
        price: 19,
        category: 'piqueos',
        image: 'img/img_piqueos.png'
    },
    {
        id: 15,
        name: 'Tequeños de Queso',
        price: 16,
        category: 'piqueos',
        image: 'img/img_piqueos.png'
    },
    {
        id: 16,
        name: 'Banderilla Tradicional',
        price: 7,
        category: 'piqueos',
        image: 'img/img_piqueos.png'
    },
    {
        id: 17,
        name: 'Bancerilla Ramen',
        price: 9,
        category: 'piqueos',
        image: 'img/img_piqueos.png'
    },
    {
        id: 18,
        name: 'Banderilla Suprema',
        price: 10,
        category: 'piqueos',
        image: 'img/img_piqueos.png'
    },
    {
        id: 19,
        name: 'Hamburguesa de Carne Clásica',
        price: 7,
        category: 'piqueos',
        image: 'img/img_piqueos.png'
    },
    {
        id: 20,
        name: 'Hamburguesa Hawaiana',
        price: 11,
        category: 'piqueos',
        image: 'img/img_piqueos.png'
    },
    {
        id: 21,
        name: 'Hamburguesa Americana',
        price: 12,
        category: 'piqueos',
        image: 'img/img_piqueos.png'
    },
    {
        id: 22,
        name: 'Hamburguesa la Peruana',
        price: 14,
        category: 'piqueos',
        image: 'img/img_piqueos.png'
    },
    {
        id: 23,
        name: 'Porción de Arroz Chaufa',
        price: 6,
        category: 'piqueos',
        image: 'img/img_piqueos.png'
    },
    {
        id: 24,
        name: 'Porción de Papas Fritas',
        price: 5,
        category: 'piqueos',
        image: 'img/img_piqueos.png'
    },
    {
        id: 25,
        name: 'Un Huevo Frito',
        price: 2,
        category: 'piqueos',
        image: 'img/img_piqueos.png'
    },
    {
        id: 26,
        name: 'Durazno al jugo',
        price: 5,
        category: 'postres',
        image: 'img/img_piqueos.png'
    },
    {
        id: 27,
        name: 'Ensalada de Frutas',
        price: 7,
        category: 'postres',
        image: 'img/img_piqueos.png'
    },
    {
        id: 28,
        name: 'Fresa con Leche Condensada',
        price: 8,
        category: 'postres',
        image: 'img/img_piqueos.png'
    },
    {
        id: 29,
        name: 'Waffle Clásico',
        price: 10,
        category: 'wafles',
        image: 'img/img_piqueos.png'
    },
    {
        id: 30,
        name: 'Waffle Ice Cream',
        price: 12,
        category: 'wafles',
        image: 'img/img_piqueos.png'
    },
    {
        id: 31,
        name: 'Waffle Frutado',
        price: 16,
        category: 'wafles',
        image: 'img/img_piqueos.png'
    },
    {
        id: 32,
        name: 'Waffle Dulzura Premium',
        price: 18,
        category: 'wafles',
        image: 'img/img_piqueos.png'
    },
    {
        id: 33,
        name: 'Bobadino Brow Sugar',
        price: 8,
        category: 'bobadinos',
        image: 'img/img_piqueos.png'
    },
    {
        id: 34,
        name: 'Bobadino Mango Plátano',
        price: 7,
        category: 'bobadinos',
        image: 'img/img_piqueos.png'
    },
    {
        id: 35,
        name: 'Bobadino Chocolate',
        price: 8,
        category: 'bobadinos',
        image: 'img/img_piqueos.png'
    },
    {
        id: 36,
        name: 'Bobadino Matcha Milk',
        price: 9,
        category: 'bobadinos',
        image: 'img/img_piqueos.png'
    },
    {
        id: 37,
        name: 'Ice Mocachino Latte',
        price: 7,
        category: 'bebidas frias no licuadas',
        image: 'img/img_piqueos.png'
    },
    {
        id: 38,
        name: 'Latte Ice',
        price: 7,
        category: 'bebidas frias no licuadas',
        image: 'img/img_piqueos.png'
    },
    {
        id: 39,
        name: 'Ice Caramel Machiato',
        price: 8,
        category: 'bebidas frias no licuadas',
        image: 'img/img_piqueos.png'
    },
    {
        id: 40,
        name: 'Ice Dragon Fruit',
        price: 9,
        category: 'bebidas frias no licuadas',
        image: 'img/img_piqueos.png'
    },
    {
        id: 41,
        name: 'Frappe Dnofox',
        price: 8,
        category: 'Frappes',
        image: 'img/img_piqueos.png'
    },
    {
        id: 42,
        name: 'Frappe Clásico',
        price: 5,
        category: 'Frappes',
        image: 'img/img_piqueos.png'
    },
    {
        id: 43,
        name: 'Frappe Mocca',
        price: 7,
        category: 'Frappes',
        image: 'img/img_piqueos.png'
    },
    {
        id: 44,
        name: 'Frappe Caramelo',
        price: 7,
        category: 'Frappes',
        image: 'img/img_piqueos.png'
    },
    {
        id: 45,
        name: 'Frappe Maracuyá',
        price: 7,
        category: 'Frappes',
        image: 'img/img_piqueos.png'
    },
    {
        id: 46,
        name: 'Frappe Frutillada',
        price: 7,
        category: 'Frappes',
        image: 'img/img_piqueos.png'
    },
    {
        id: 47,
        name: 'Frappe Oreo',
        price: 8,
        category: 'Frappes',
        image: 'img/img_piqueos.png'
    },
    {
        id: 48,
        name: 'Frappe Lúcuma',
        price: 8,
        category: 'Frappes',
        image: 'img/img_piqueos.png'
    },
    {
        id: 49,
        name: 'Frappe Princesa',
        price: 9,
        category: 'Frappes',
        image: 'img/img_piqueos.png'
    },
    {
        id: 50,
        name: 'Frappe Vainilla',
        price: 10,
        category: 'Frappes',
        image: 'img/img_piqueos.png'
    },
    {
        id: 51,
        name: 'Blends Dnofox',
        price: 10,
        category: 'Bebidas Calientes',
        image: 'img/img_piqueos.png'
    },
    {
        id: 52,
        name: 'Hibiscus Dnofox',
        price: 14,
        category: 'Bebidas Calientes',
        image: 'img/img_piqueos.png'
    },
    {
        id: 53,
        name: 'Expresso',
        price: 7,
        category: 'Bebidas Calientes',
        image: 'img/img_piqueos.png'
    },
    {
        id: 54,
        name: 'Americano',
        price: 8,
        category: 'Bebidas Calientes',
        image: 'img/img_piqueos.png'
    },
    {
        id: 55,
        name: 'Capuccino',
        price: 10,
        category: 'Bebidas Calientes',
        image: 'img/img_piqueos.png'
    },
    {
        id: 56,
        name: 'Mocachino Dnofox',
        price: 12,
        category: 'Bebidas Calientes',
        image: 'img/img_piqueos.png'
    },
    {
        id: 57,
        name: 'CApuoreo',
        price: 11,
        category: 'Bebidas Calientes',
        image: 'img/img_piqueos.png'
    },
    {
        id: 58,
        name: 'Caramel Machiato',
        price: 12,
        category: 'Bebidas Calientes',
        image: 'img/img_piqueos.png'
    },
    {
        id: 59,
        name: 'Affogato Baileys',
        price: 14,
        category: 'Bebidas Calientes',
        image: 'img/img_piqueos.png'
    },
    {
        id: 60,
        name: 'Infusión del día',
        price: 3,
        category: 'Bebidas Calientes',
        image: 'img/img_piqueos.png'
    },
    {
        id: 61,
        name: 'Blend Dnofox - personal',
        price: 15,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 62,
        name: 'Jugo Dnofox - personal',
        price: 14,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 63,
        name: 'Té volviste Frio - personal',
        price: 14,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 64,
        name: 'Limonada Frozen 1Lt',
        price: 12,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 65,
        name: 'Limonada de Maracuyá 1Lt',
        price: 12,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 66,
        name: 'Limonada de Maracumango 1Lt',
        price: 15,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 67,
        name: 'Jugo de Papaya con Leche - personal',
        price: 7,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 68,
        name: 'Jugo de Piña - personal',
        price: 5,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 69,
        name: 'Jugo de Mango - personal',
        price: 5,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 70,
        name: 'Jugo de Naranja - personal',
        price: 4,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 71,
        name: 'Gaseosa Coca Cola 1Lt',
        price: 8,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 72,
        name: 'Gaseosa 1/2Lt',
        price: 5,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 73,
        name: 'Gaseosa Coca Cola 300ml',
        price: 3,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 74,
        name: 'Cuzqueña 620ml',
        price: 11,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 75,
        name: 'Cuzqueña 312ml',
        price: 7,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 76,
        name: 'Heineken 355ml',
        price: 7.5,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 77,
        name: 'Pilsen en lata 355ml',
        price: 6.5,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 78,
        name: 'Cristal Botella 650ml',
        price: 9,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 79,
        name: 'Cerveza Corona Lata',
        price: 10,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 80,
        name: 'Hit',
        price: 9.5,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 81,
        name: 'Wild',
        price: 9.5,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 82,
        name: 'Four Loko',
        price: 15,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 83,
        name: 'Whisky Red Old Times 750ml',
        price: 60,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 84,
        name: 'Botella de Vino Borgoña 750ml',
        price: 28,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 85,
        name: 'Botella de Vino Higos 750ml',
        price: 23,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 86,
        name: 'Machu Picchu',
        price: 24,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 87,
        name: 'Sacsay Huaman',
        price: 20,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 88,
        name: 'Martini',
        price: 21,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 89,
        name: 'Manhatan',
        price: 22,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 90,
        name: 'Old Fashion',
        price: 21,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 91,
        name: 'Mojito',
        price: 15,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 92,
        name: 'Mojito Grape',
        price: 16,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 93,
        name: 'Mojito Black',
        price: 17,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 94,
        name: 'Mojito Blue',
        price: 16,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 95,
        name: 'Mojito Pineapple',
        price: 19,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 96,
        name: 'Mojito Strawberry',
        price: 21,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 97,
        name: 'Mojito Passion Fruit',
        price: 22,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 98,
        name: 'Chilcano',
        price: 22,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 99,
        name: 'Cuba Libre',
        price: 20,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 100,
        name: 'Piña Colada',
        price: 19,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 101,
        name: 'Margarita',
        price: 22,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 102,
        name: 'Margarita Love',
        price: 25,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 103,
        name: 'Margarita Fresa',
        price: 17,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 104,
        name: 'Margarita Blue',
        price: 18,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 105,
        name: 'Limonada Cold',
        price: 17,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 106,
        name: 'Dai quiri',
        price: 16,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 107,
        name: 'Dai quiri de Durazno',
        price: 19,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 108,
        name: 'Dai quiri de Piña',
        price: 19,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 109,
        name: 'Dai quiri de Naranja',
        price: 18,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 110,
        name: 'Dai quiri de Fresa',
        price: 17,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 111,
        name: 'Primavera',
        price: 23,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 112,
        name: 'Tequila Sunrise',
        price: 22,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 113,
        name: 'Satanás',
        price: 25,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 114,
        name: 'Laguna Azul',
        price: 19,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 115,
        name: 'Pisco Sour',
        price: 20,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 116,
        name: 'Poseidón',
        price: 22,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 117,
        name: 'Charro Negro',
        price: 19,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 118,
        name: 'Paloma',
        price: 24,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 118,
        name: 'El Matador',
        price: 23,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 119,
        name: 'El Vampiro',
        price: 20,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 120,
        name: 'Blue Hawaiian',
        price: 18,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 121,
        name: 'Bardados Surprise',
        price: 27,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 122,
        name: 'Orgasmo',
        price: 28,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 123,
        name: 'La Cucaracha',
        price: 27,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    },
    {
        id: 124,
        name: 'Sex on The Beach',
        price: 25,
        category: 'Limonadas y Licores',
        image: 'img/img_piqueos.png'
    }
];