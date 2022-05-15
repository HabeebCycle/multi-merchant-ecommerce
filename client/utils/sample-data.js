import { v4 as uuid } from "uuid";
import moment from "moment";

import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon,
  Aperture as ApertureIcon,
  PieChart as PieChartIcon,
  Mail as MailIcon,
} from "react-feather";

export const navItems = [
  {
    id: 1,
    href: "/admin/dashboard",
    icon: BarChartIcon,
    title: "Dashboard",
  },
  {
    id: 2,
    href: "/admin/merchants",
    icon: ApertureIcon,
    title: "Merchants",
  },
  {
    id: 3,
    href: "/admin/customers",
    icon: UserIcon,
    title: "Customers",
  },
  {
    id: 4,
    href: "/admin/commerce",
    icon: ShoppingBagIcon,
    title: "Commerce",
    items: [
      {
        href: "/admin/commerce",
        title: "Home",
      },
      {
        href: "/admin/commerce/products",
        title: "Products",
      },
      {
        href: "/admin/commerce/categories",
        title: "Categories",
      },
      {
        href: "/admin/commerce/coupons",
        title: "Coupons",
      },
      {
        href: "/admin/commerce/reports",
        title: "Reports",
      },
      {
        href: "/admin/commerce/settings",
        title: "Settings",
      },
    ],
  },
  {
    id: 5,
    href: "/admin/reports",
    icon: PieChartIcon,
    title: "Reports",
  },
  {
    id: 6,
    href: "/admin/accounts",
    icon: UsersIcon,
    title: "Accounts",
  },
  {
    id: 7,
    href: "/admin/messages",
    icon: MailIcon,
    title: "Messages",
  },
  {
    id: 8,
    href: "/admin/settings",
    icon: SettingsIcon,
    title: "Settings",
  },
  {
    id: 9,
    href: "/login",
    icon: LockIcon,
    title: "Login",
  },
  {
    id: 10,
    href: "/register",
    icon: UserPlusIcon,
    title: "Register",
  },
  {
    id: 11,
    href: "/404",
    icon: AlertCircleIcon,
    title: "Error",
  },
];

export const sampleProducts = [
  {
    id: uuid(),
    name: "Dropbox",
    imageUrl: "/assets/images/products/product_1.png",
    updatedAt: moment().subtract(2, "hours"),
  },
  {
    id: uuid(),
    name: "Medium Corporation",
    imageUrl: "/assets/images/products/product_2.png",
    updatedAt: moment().subtract(2, "hours"),
  },
  {
    id: uuid(),
    name: "Slack",
    imageUrl: "/assets/images/products/product_3.png",
    updatedAt: moment().subtract(3, "hours"),
  },
  {
    id: uuid(),
    name: "Lyft",
    imageUrl: "/assets/images/products/product_4.png",
    updatedAt: moment().subtract(5, "hours"),
  },
  {
    id: uuid(),
    name: "GitHub",
    imageUrl: "/assets/images/products/product_5.png",
    updatedAt: moment().subtract(9, "hours"),
  },
];

export const sampleOrders = [
  {
    id: uuid(),
    ref: "CDD1049",
    amount: 30.5,
    customer: {
      name: "Ekaterina Tankova",
    },
    createdAt: 1555016400000,
    status: "processing",
  },
  {
    id: uuid(),
    ref: "CDD1048",
    amount: 25.1,
    customer: {
      name: "Cao Yu",
    },
    createdAt: 1555016400000,
    status: "delivered",
  },
  {
    id: uuid(),
    ref: "CDD1047",
    amount: 10.99,
    customer: {
      name: "Alexa Richardson",
    },
    createdAt: 1554930000000,
    status: "refunded",
  },
  {
    id: uuid(),
    ref: "CDD1046",
    amount: 96.43,
    customer: {
      name: "Anje Keizer",
    },
    createdAt: 1554757200000,
    status: "pending",
  },
  {
    id: uuid(),
    ref: "CDD1045",
    amount: 32.54,
    customer: {
      name: "Clarke Gillebert",
    },
    createdAt: 1554670800000,
    status: "delivered",
  },
  {
    id: uuid(),
    ref: "CDD1044",
    amount: 16.76,
    customer: {
      name: "Adam Denisov",
    },
    createdAt: 1554670800000,
    status: "delivered",
  },
];

export const sampleStores = [
  {
    id: uuid(),
    name: "Dropbox",
    imageUrl: "/assets/images/avatars/avatar_6.png",
    updatedAt: moment().subtract(2, "hours"),
  },
  {
    id: uuid(),
    name: "Medium Corporation",
    imageUrl: "/assets/images/avatars/avatar_7.png",
    updatedAt: moment().subtract(2, "hours"),
  },
  {
    id: uuid(),
    name: "Slack",
    imageUrl: "/assets/images/avatars/avatar_8.png",
    updatedAt: moment().subtract(3, "hours"),
  },
  {
    id: uuid(),
    name: "Lyft",
    imageUrl: "/assets/images/avatars/avatar_9.png",
    updatedAt: moment().subtract(5, "hours"),
  },
  {
    id: uuid(),
    name: "GitHub",
    imageUrl: "/assets/images/avatars/avatar_10.png",
    updatedAt: moment().subtract(9, "hours"),
  },
];

export const sampleCustomers = [
  {
    id: uuid(),
    name: "Dropbox",
    imageUrl: "/assets/images/avatars/avatar_1.png",
    updatedAt: moment().subtract(2, "hours"),
  },
  {
    id: uuid(),
    name: "Medium Corporation",
    imageUrl: "/assets/images/avatars/avatar_2.png",
    updatedAt: moment().subtract(2, "hours"),
  },
  {
    id: uuid(),
    name: "Slack",
    imageUrl: "/assets/images/avatars/avatar_3.png",
    updatedAt: moment().subtract(3, "hours"),
  },
  {
    id: uuid(),
    name: "Lyft",
    imageUrl: "/assets/images/avatars/avatar_4.png",
    updatedAt: moment().subtract(5, "hours"),
  },
  {
    id: uuid(),
    name: "GitHub",
    imageUrl: "/assets/images/avatars/avatar_5.png",
    updatedAt: moment().subtract(9, "hours"),
  },
];

export const sampleTopRatedProducts = [
  {
    id: uuid(),
    name: "Dropbox",
    imageUrl: "/assets/images/products/product_1.png",
    ratings: 5,
  },
  {
    id: uuid(),
    name: "Medium Corporation",
    imageUrl: "/assets/images/products/product_2.png",
    ratings: 4.8,
  },
  {
    id: uuid(),
    name: "Slack",
    imageUrl: "/assets/images/products/product_3.png",
    ratings: 4.5,
  },
  {
    id: uuid(),
    name: "Lyft",
    imageUrl: "/assets/images/products/product_4.png",
    ratings: 4.3,
  },
  {
    id: uuid(),
    name: "GitHub",
    imageUrl: "/assets/images/products/product_5.png",
    ratings: 4,
  },
];

export const sampleTopRatedStores = [
  {
    id: uuid(),
    name: "Dropbox",
    imageUrl: "/assets/images/avatars/avatar_6.png",
    ratings: 5,
  },
  {
    id: uuid(),
    name: "Medium Corporation",
    imageUrl: "/assets/images/avatars/avatar_7.png",
    ratings: 5,
  },
  {
    id: uuid(),
    name: "Slack",
    imageUrl: "/assets/images/avatars/avatar_8.png",
    ratings: 5,
  },
  {
    id: uuid(),
    name: "Lyft",
    imageUrl: "/assets/images/avatars/avatar_9.png",
    ratings: 4.8,
  },
  {
    id: uuid(),
    name: "GitHub",
    imageUrl: "/assets/images/avatars/avatar_10.png",
    ratings: 4.5,
  },
];
