
import { SingleFooterComponentRowType, } from "../types"
import { FacebookIcon,InstagramIcon,LinkedinIcon } from "@/public/Svg/Social"

export const FooterFeatures = [

    {
        title:'man',
        to:'man'
    },
    {
        title:'WOMEN',
        to:''
    },
    {
        title:'BOYS',
        to:''
    },
    {
        title:'GIRLS',
        to:''
    },
    {
        title:'NEW ARRIVALS',
        to:''
    },
    {
        title:'SHOES',
        to:''
    },
    {
        title:'CLOTHES',
        to:''
    },
    {
        title:'ACCESSORIES',
        to:''
    },
]

export const FooterMenu = [
    {
        title:'ABOUT US',
        to:''
    },
    {
        title:'CONTACT US',
        to:''
    },
    {
        title:'MY ACCAUNT',
        to:''
    },
    {
        title:'ORDERS HISTORY',
        to:''
    },
    {
        title:'MY WATCHLIST',
        to:''
    },
    {
        title:'BLOG',
        to:''
    },
    {
        title:'Login',
        to:''
    },
]

export const FooterContact = [
    {
        mainTitle:'Adress:',
        title:'123 STREET NAME, CITY, ENGLAND',
    },
    {
        mainTitle:'PHONE:',
        title:'+995 598438788',
    },
    {
        mainTitle:'EMAIL:',
        title:'khubasvhili.saba12@gmail.com',
        to:'mailto:khubasvhili.saba12@gmail.com'
    },
    {
        mainTitle:'WORKING DAYS/HOURS:',
        title:'MON - SUN / 9:00AM - 8:00PM',
    },
]

export const FooterSocial: SingleFooterComponentRowType[] = [
    {
      title: 'Facebook',
      to:'https://www.facebook.com/profile.php?id=100011187067102'
    },
    {
      title: 'Linkedin',
      to:'https://www.linkedin.com/in/sabakhubashvili/'
  },
    {
      title: 'Instagram',
      to:'https://www.instagram.com/xubashvili.saba12/'
    },
  ];

export const FilterConstant = {
    brand:[
        'State',
        'Cooper',
        'Bardot',
        'Alfani',
        'Cece',
        'Donna Ricco'
    ],
    size:[
        'osfa',
        'W26',
        'W27',
        'W28',
        'W29',
        'W30',
        'W31',
        'W32',
        'W33',
        'W34',
        'W35',
        'W36',
        'W37',
        'W38',
        'W39',
        'W40',
    ],
    length:[
        'Short',
        'knee length',
        'hight low',
        'long',
        'mid'
    ],
    color:[
      { name: 'green', class: 'bg-green-800' },
      { name: 'red', class: 'bg-red-800' },
      { name: 'black', class: 'bg-black' },
    ]
}

export interface productInterface{
    _id:number
    price:string,
    description:string,
    name:string,
    image:string
}
export const products: productInterface[] = [
  {
    _id: 1,
    price: '10,00',
    description: "This is a great product.",
    name: "Product 1",
    image: "Product"
  },
  {
    _id: 2,
    price: '25,00',
    description: "An amazing product for your needs.",
    name: "Product 2",
    image: "Product"
  },
  {
    _id: 3,
    price: '50,00',
    description: "A must-have item for every home.",
    name: "Product 3",
    image: "Product"
  },
  {
    _id: 4,
    price: '15,00',
    description: "High-quality and durable product.",
    name: "Product 4",
    image: "Product"
  },
  {
    _id: 5,
    price: '30,00',
    description: "Get the best value with this product.",
    name: "Product 5",
    image: "Product"
  },
  {
    _id: 6,
    price: '18,50',
    description: "An affordable and reliable option.",
    name: "Product 6",
    image: "Product"
  },
  {
    _id: 7,
    price: '40,00',
    description: "Elegant and stylish design for your home.",
    name: "Product 7",
    image: "Product"
  },
  {
    _id: 8,
    price: '12,99',
    description: "Experience the latest technology with this product.",
    name: "Product 8",
    image: "Product"
  },
  {
    _id: 9,
    price: '35,00',
    description: "Perfect for outdoor adventures and activities.",
    name: "Product 9",
    image: "Product"
  },
  {
    _id: 10,
    price: '22,75',
    description: "Enhance your productivity with this amazing product.",
    name: "Product 10",
    image: "Product"
  },
  // ... (remaining products)
  {
    _id: 11,
    price: '38,00',
    description: "The ultimate tool for DIY enthusiasts.",
    name: "Product 19",
    image: "Product"
  },
  {
    _id: 12,
    price: '80,00',
    description: "Experience luxury and comfort with this premium product.",
    name: "Product 20",
    image: "Product"
  },
  {
    _id: 13,
    price: '38,00',
    description: "The ultimate tool for DIY enthusiasts.",
    name: "Product 21",
    image: "Product"
  },
  {
    _id: 14,
    price: '80,00',
    description: "Experience luxury and comfort with this premium product.",
    name: "Product 24",
    image: "Product"
  },
  {
    _id: 15,
    price: '38,00',
    description: "The ultimate tool for DIY enthusiasts.",
    name: "Product 19",
    image: "Product"
  },
  {
    _id: 16,
    price: '80,00',
    description: "Experience luxury and comfort with this premium product.",
    name: "Product 22",
    image: "Product"
  },
  {
    _id: 17,
    price: '38,00',
    description: "The ultimate tool for DIY enthusiasts.",
    name: "Product 195",
    image: "Product"
  },
  {
    _id: 18,
    price: '80,00',
    description: "Experience luxury and comfort with this premium product.",
    name: "Product 20",
    image: "Product"
  },
  {
    _id: 19,
    price: '10,00',
    description: "This is a great product.",
    name: "Product 1",
    image: "Product"
  },
  {
    _id: 20,
    price: '25,00',
    description: "An amazing product for your needs.",
    name: "Product 2",
    image: "Product"
  },
  {
    _id: 28761,
    price: '50,00',
    description: "A must-have item for every home.",
    name: "Product 3",
    image: "Product"
  },
  {
    _id: 212212789,
    price: '15,00',
    description: "High-quality and durable product.",
    name: "Product 4",
    image: "Product"
  },
  {
    _id: 25521211,
    price: '30,00',
    description: "Get the best value with this product.",
    name: "Product 5",
    image: "Product"
  },
  {
    _id: 212122241,
    price: '18,50',
    description: "An affordable and reliable option.",
    name: "Product 6",
    image: "Product"
  },
  {
    _id: 512211,
    price: '40,00',
    description: "Elegant and stylish design for your home.",
    name: "Product 7",
    image: "Product"
  },
  {
    _id: 832121,
    price: '12,99',
    description: "Experience the latest technology with this product.",
    name: "Product 8",
    image: "Product"
  },
  {
    _id: 926111,
    price: '35,00',
    description: "Perfect for outdoor adventures and activities.",
    name: "Product 9",
    image: "Product"
  },
  {
    _id: 121051,
    price: '22,75',
    description: "Enhance your productivity with this amazing product.",
    name: "Product 16",
    image: "Product"
  },
  // ... (remaining products)
  {
    _id: 12112121,
    price: '38,00',
    description: "The ultimate tool for DIY enthusiasts.",
    name: "Product 17",
    image: "Product"
  },
  {
    _id: 1212,
    price: '80,00',
    description: "Experience luxury and comfort with this premium product.",
    name: "Product 18",
    image: "Product"
  },
  {
    _id: 12121213,
    price: '38,00',
    description: "The ultimate tool for DIY enthusiasts.",
    name: "Product 19",
    image: "Product"
  },
  {
    _id: 12141212,
    price: '80,00',
    description: "Experience luxury and comfort with this premium product.",
    name: "Product 21",
    image: "Product"
  },
  {
    _id: 122415,
    price: '38,00',
    description: "The ultimate tool for DIY enthusiasts.",
    name: "Product 22",
    image: "Product"
  },
  {
    _id: 165121,
    price: '80,00',
    description: "Experience luxury and comfort with this premium product.",
    name: "Product 23",
    image: "Product"
  },
  {
    _id: 211317,
    price: '38,00',
    description: "The ultimate tool for DIY enthusiasts.",
    name: "Product 24",
    image: "Product"
  },
  {
    _id: 1218,
    price: '80,00',
    description: "Experience luxury and comfort with this premium product.",
    name: "Product 25",
    image: "Product"
  },
];
