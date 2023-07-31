
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
        'midi'
    ],
    color:[
        'bg-green-800',
        'bg-red-800',
        'bg-black'
    ]
}

export interface productInterface{
    price:string,
    description:string,
    name:string,
    image:string
}
export const products: productInterface[] = [
    {
      price: '10,00',
      description: "This is a great product.",
      name: "Product 1",
      image: "Product"
    },
    {
      price: '25,00',
      description: "An amazing product for your needs.",
      name: "Product 2",
      image: "Product"
    },
    {
      price: '50,00',
      description: "A must-have item for every home.",
      name: "Product 3",
      image: "Product"
    },
    {
      price: '15,00',
      description: "High-quality and durable product.",
      name: "Product 4",
      image: "Product"
    },
    {
      price: '30,00',
      description: "Get the best value with this product.",
      name: "Product 5",
      image: "Product"
    },
    {
      price: '18,50',
      description: "An affordable and reliable option.",
      name: "Product 6",
      image: "Product"
    },
    {
      price: '40,00',
      description: "Elegant and stylish design for your home.",
      name: "Product 7",
      image: "Product"
    },
    {
      price: '12,99',
      description: "Experience the latest technology with this product.",
      name: "Product 8",
      image: "Product"
    },
    {
      price: '35,00',
      description: "Perfect for outdoor adventures and activities.",
      name: "Product 9",
      image: "Product"
    },
    {
      price: '22,75',
      description: "Enhance your productivity with this amazing product.",
      name: "Product 10",
      image: "Product"
    },
    {
      price: '60,00',
      description: "A premium product with superior features.",
      name: "Product 11",
      image: "Product"
    },
    {
      price: '14,00',
      description: "A compact and portable solution for your needs.",
      name: "Product 12",
      image: "Product"
    },
    {
      price: '28,50',
      description: "A versatile product suitable for various tasks.",
      name: "Product 13",
      image: "Product"
    },
    {
      price: '65,00',
      description: "Unleash your creativity with this innovative product.",
      name: "Product 14",
      image: "Product"
    },
    {
      price: '17,49',
      description: "Stay organized and efficient with this product.",
      name: "Product 15",
      image: "Product"
    },
    {
      price: '33,75',
      description: "A reliable companion for your daily routines.",
      name: "Product 16",
      image: "Product"
    },
    {
      price: '75,00',
      description: "Elevate your entertainment experience with this product.",
      name: "Product 17",
      image: "Product"
    },
    {
      price: '19,99',
      description: "Stay connected and informed with this smart product.",
      name: "Product 18",
      image: "Product"
    },
    {
      price: '38,00',
      description: "The ultimate tool for DIY enthusiasts.",
      name: "Product 19",
      image: "Product"
    },
    {
      price: '80,00',
      description: "Experience luxury and comfort with this premium product.",
      name: "Product 20",
      image: "Product"
    },
    {
      price: '38,00',
      description: "The ultimate tool for DIY enthusiasts.",
      name: "Product 19",
      image: "Product"
    },
    {
      price: '80,00',
      description: "Experience luxury and comfort with this premium product.",
      name: "Product 20",
      image: "Product"
    },
    {
      price: '38,00',
      description: "The ultimate tool for DIY enthusiasts.",
      name: "Product 19",
      image: "Product"
    },
    {
      price: '80,00',
      description: "Experience luxury and comfort with this premium product.",
      name: "Product 20",
      image: "Product"
    },
    {
      price: '38,00',
      description: "The ultimate tool for DIY enthusiasts.",
      name: "Product 19",
      image: "Product"
    },
    {
      price: '80,00',
      description: "Experience luxury and comfort with this premium product.",
      name: "Product 20",
      image: "Product"
    },
    {
      price: '38,00',
      description: "The ultimate tool for DIY enthusiasts.",
      name: "Product 19",
      image: "Product"
    },
    {
      price: '80,00',
      description: "Experience luxury and comfort with this premium product.",
      name: "Product 20",
      image: "Product"
    },
    {
      price: '38,00',
      description: "The ultimate tool for DIY enthusiasts.",
      name: "Product 19",
      image: "Product"
    },
    {
      price: '80,00',
      description: "Experience luxury and comfort with this premium product.",
      name: "Product 20",
      image: "Product"
    },
    {
      price: '38,00',
      description: "The ultimate tool for DIY enthusiasts.",
      name: "Product 19",
      image: "Product"
    },
    {
      price: '80,00',
      description: "Experience luxury and comfort with this premium product.",
      name: "Product 20",
      image: "Product"
    },
    {
      price: '38,00',
      description: "The ultimate tool for DIY enthusiasts.",
      name: "Product 19",
      image: "Product"
    },
    {
      price: '80,00',
      description: "Experience luxury and comfort with this premium product.",
      name: "Product 20",
      image: "Product"
    },
    {
      price: '38,00',
      description: "The ultimate tool for DIY enthusiasts.",
      name: "Product 19",
      image: "Product"
    },
    {
      price: '80,00',
      description: "Experience luxury and comfort with this premium product.",
      name: "Product 20",
      image: "Product"
    },
    {
      price: '38,00',
      description: "The ultimate tool for DIY enthusiasts.",
      name: "Product 19",
      image: "Product"
    },
    {
      price: '80,00',
      description: "Experience luxury and comfort with this premium product.",
      name: "Product 20",
      image: "Product"
    },
    {
      price: '38,00',
      description: "The ultimate tool for DIY enthusiasts.",
      name: "Product 19",
      image: "Product"
    },
    {
      price: '80,00',
      description: "Experience luxury and comfort with this premium product.",
      name: "Product 20",
      image: "Product"
    },
    {
      price: '38,00',
      description: "The ultimate tool for DIY enthusiasts.",
      name: "Product 19",
      image: "Product"
    },
    {
      price: '80,00',
      description: "Experience luxury and comfort with this premium product.",
      name: "Product 20",
      image: "Product"
    },
    {
      price: '38,00',
      description: "The ultimate tool for DIY enthusiasts.",
      name: "Product 19",
      image: "Product"
    },
    {
      price: '80,00',
      description: "Experience luxury and comfort with this premium product.",
      name: "Product 20",
      image: "Product"
    },
  ];
  