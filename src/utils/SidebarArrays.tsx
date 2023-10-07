import {
  InsightIcon,
  NotificationIcon,
  OrderIcon,
  PromotionIcon,
  SettingsIcon,
} from '@/components/icons';

interface MenuLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const TOP_LINKS: MenuLink[] = [
  {
    name: 'Dashboard',
    href: '/dashboard/orders',
    icon: <OrderIcon />,
  },
  {
    name: 'Orders',
    href: '/dashboard/orders',
    icon: <OrderIcon />,
  },
  {
    name: 'Customers',
    href: '/dashboard/insights',
    icon: <InsightIcon />,
  },
  {
    name: 'Shoppers',
    href: '/dashboard/promotions',
    icon: <PromotionIcon />,
  },
  {
    name: 'Fulfilments',
    href: '/dashboard/notifications',
    icon: <NotificationIcon />,
  },
  {
    name: 'Retailers',
    href: '/dashboard/notifications',
    icon: <NotificationIcon />,
  },

  {
    name: 'Hot offers',
    href: '/dashboard/notifications',
    icon: <NotificationIcon />,
  },

  {
    name: 'Advertisements',
    href: '/dashboard/notifications',
    icon: <NotificationIcon />,
  },

  {
    name: 'Notification',
    href: '/dashboard/notifications',
    icon: <NotificationIcon />,
  },
];

export const BOTTOM_LINKS = [
  {
    name: 'Settings',
    href: '/dashboard/settings',
    icon: <SettingsIcon />,
  },
];
