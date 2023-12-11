
import { Customer, SingleFooterComponentRowType, ordersInterface, } from "../types"
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
export const orders:ordersInterface[] = [
  {
    _id:'1',
    created_at:"2022-12-02",
    customer:"Saba",
    total_price:250,
    profit:152,
    status:'Delivered'
  } 
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
       "XS",
       "SM",
       "MD",
       "LG",
       "XL",

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



export   const SessionsData = [
  {
    name: "5 days ago",
    sessionCount: 25,
  },
  {
    name: "4 days ago",
    sessionCount: 52,
  },
  {
    name: "3 days ago",
    sessionCount: 34,
  },
  {
    name: "2 days ago",
    sessionCount: 12,
  },
  {
    name: "yesterday",
    sessionCount: 25,
  },
  {
    name: "today",
    sessionCount: 125,
  },
];

export const coupon_codes: {
  code:string,
  discountPercentage:number
}[] = [
  { code: "CODE123", discountPercentage: 10 },
  { code: "SAVEBIG20", discountPercentage: 20 },
  { code: "HALFOFF50", discountPercentage: 50 },
  { code: "DEAL30", discountPercentage: 30 },
  { code: "SUMMER25", discountPercentage: 25 },
  { code: "FALL15", discountPercentage: 15 },
  { code: "WINTER50", discountPercentage: 50 },
  { code: "SPRING20", discountPercentage: 20 },
  { code: "BONUS10", discountPercentage: 10 },
  { code: "SPECIAL5", discountPercentage: 5 },
  { code: "HOLIDAY40", discountPercentage: 40 },
  { code: "SAVINGS7", discountPercentage: 7 },
  { code: "GIFT35", discountPercentage: 35 },
  { code: "EXTRA12", discountPercentage: 12 },
  { code: "EARLYBIRD15", discountPercentage: 15 },
  { code: "LATEST50", discountPercentage: 50 },
  { code: "FLASH60", discountPercentage: 60 },
  { code: "SUPER20", discountPercentage: 20 },
  { code: "BEST25", discountPercentage: 25 },
];

export const TransactionsData: Array<{ id: number, customer: string, date: string, total: string, method: string }> = [
  {
      id: 1,
      customer: "John Doe",
      date: "2023-10-15",
      total: "$100.00",
      method: "Credit Card"
  },
  {
      id: 2,
      customer: "Jane Smith",
      date: "2023-10-14",
      total: "$75.50",
      method: "PayPal"
  },
  {
      id: 3,
      customer: "Robert Johnson",
      date: "2023-10-13",
      total: "$50.25",
      method: "Cash"
  },
  {
      id: 4,
      customer: "Alice Johnson",
      date: "2023-10-12",
      total: "$45.00",
      method: "Credit Card"
  },
  {
      id: 5,
      customer: "David Brown",
      date: "2023-10-11",
      total: "$30.75",
      method: "PayPal"
  },
  {
      id: 6,
      customer: "Mary White",
      date: "2023-10-10",
      total: "$85.50",
      method: "Cash"
  },
  {
      id: 7,
      customer: "Sarah Wilson",
      date: "2023-10-09",
      total: "$110.00",
      method: "Credit Card"
  },
  {
      id: 8,
      customer: "Michael Davis",
      date: "2023-10-08",
      total: "$120.25",
      method: "PayPal"
  },
  {
      id: 9,
      customer: "Emily Turner",
      date: "2023-10-07",
      total: "$55.75",
      method: "Cash"
  },
  {
      id: 10,
      customer: "James Miller",
      date: "2023-10-06",
      total: "$95.00",
      method: "Credit Card"
  },
  {
      id: 11,
      customer: "Olivia Smith",
      date: "2023-10-05",
      total: "$70.00",
      method: "PayPal"
  },
  {
      id: 12,
      customer: "William Johnson",
      date: "2023-10-04",
      total: "$25.50",
      method: "Cash"
  },
  {
      id: 13,
      customer: "Sophia Davis",
      date: "2023-10-03",
      total: "$60.00",
      method: "Credit Card"
  },
  {
      id: 14,
      customer: "Daniel Brown",
      date: "2023-10-02",
      total: "$45.25",
      method: "PayPal"
  },
  {
      id: 15,
      customer: "Ava Johnson",
      date: "2023-10-01",
      total: "$70.50",
      method: "Cash"
  },
  {
      id: 16,
      customer: "Liam Wilson",
      date: "2023-09-30",
      total: "$85.00",
      method: "Credit Card"
  },
  {
      id: 17,
      customer: "Mia Davis",
      date: "2023-09-29",
      total: "$95.25",
      method: "PayPal"
  },
  {
      id: 18,
      customer: "Benjamin Turner",
      date: "2023-09-28",
      total: "$40.75",
      method: "Cash"
  },
  {
      id: 19,
      customer: "Evelyn Wilson",
      date: "2023-09-27",
      total: "$110.00",
      method: "Credit Card"
  },
  {
      id: 20,
      customer: "Logan Smith",
      date: "2023-09-26",
      total: "$75.50",
      method: "PayPal"
  },
];


export const categoryData: { id: number; category: string; products: number; sales: number; profit: string }[] = [
  { id: 1, category: "Electronics", products: 100, sales: 5000, profit: "$2000" },
  { id: 2, category: "Clothing", products: 200, sales: 8000, profit: "$3000" },
  { id: 3, category: "Home Decor", products: 50, sales: 2500, profit: "$1000" },
  { id: 4, category: "Toys", products: 75, sales: 3000, profit: "$1200" },
  { id: 5, category: "Books", products: 120, sales: 6000, profit: "$2400" },
  { id: 6, category: "Sports Equipment", products: 90, sales: 4500, profit: "$1800" },
  { id: 7, category: "Beauty Products", products: 150, sales: 7500, profit: "$3000" },
  { id: 8, category: "Furniture", products: 80, sales: 4000, profit: "$1600" },
  { id: 9, category: "Jewelry", products: 60, sales: 3000, profit: "$1200" },
  { id: 10, category: "Food and Beverages", products: 250, sales: 12500, profit: "$5000" },
  { id: 11, category: "Automotive", products: 70, sales: 3500, profit: "$1400" },
  { id: 12, category: "Garden Supplies", products: 40, sales: 2000, profit: "$800" },
  { id: 13, category: "Health and Wellness", products: 110, sales: 5500, profit: "$2200" },
  { id: 14, category: "Pet Supplies", products: 45, sales: 2250, profit: "$900" },
  { id: 15, category: "Music Instruments", products: 30, sales: 1500, profit: "$600" },
  { id: 16, category: "Art and Crafts", products: 65, sales: 3250, profit: "$1300" },
  { id: 17, category: "Office Supplies", products: 85, sales: 4250, profit: "$1700" },
  { id: 18, category: "Travel Accessories", products: 25, sales: 1250, profit: "$500" },
  { id: 19, category: "Fitness Equipment", products: 55, sales: 2750, profit: "$1100" },
  { id: 20, category: "Baby Products", products: 70, sales: 3500, profit: "$1400" },
];
