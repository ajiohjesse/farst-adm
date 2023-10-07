import {
  InsightIcon,
  NotificationIcon,
  OrderIcon,
  PromotionIcon,
  SettingsIcon,
} from '@/components/icons';
import { Separator } from '@/components/ui/Seperator';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface MenuLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const TOP_LINKS: MenuLink[] = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: <OrderIcon />,
  },
  {
    name: 'Orders',
    href: '/orders',
    icon: <OrderIcon />,
  },
  {
    name: 'Customers',
    href: '/customers',
    icon: <OrderIcon />,
  },
  {
    name: 'Shoppers',
    href: '/shoppers',
    icon: <OrderIcon />,
  },
  {
    name: 'Fulfilments',
    href: '/fulfilments',
    icon: <OrderIcon />,
  },
  {
    name: 'Retailers',
    href: '/retailers',
    icon: <OrderIcon />,
  },
  {
    name: 'Hot offers',
    href: '/hot_offers',
    icon: <InsightIcon />,
  },
  {
    name: 'Advertisements',
    href: '/advertisements',
    icon: <PromotionIcon />,
  },
  {
    name: 'Notification',
    href: '/notifications',
    icon: <NotificationIcon />,
  },
];

const BOTTOM_LINKS = [
  {
    name: 'Settings',
    href: '/settings',
    icon: <SettingsIcon />,
  },
];

const SidebarMenu = () => {
  const router = useRouter();

  return (
    <ul className='grid gap-1'>
      {TOP_LINKS.map(link => (
        <MenuLinkItem
          key={link.name}
          active={router.route.includes(link.href)}
          {...link}
        />
      ))}

      <li aria-hidden>
        <Separator className='my-4' />
      </li>

      {BOTTOM_LINKS.map(link => (
        <MenuLinkItem
          key={link.name}
          active={router.route.includes(link.href)}
          {...link}
        />
      ))}
    </ul>
  );
};

export default SidebarMenu;

const MenuLinkItem: React.FC<MenuLink & { active: boolean }> = ({
  name,
  href,
  icon,
  active,
}) => (
  <li>
    <Link
      href={href}
      data-active={active}
      className="flex items-center gap-4 border-r-4 border-background px-6 py-3 text-muted transition duration-100 hover:border-warning-400 hover:bg-primary hover:text-white data-[active='true']:border-x-warning-400 data-[active='true']:bg-primary data-[active='true']:text-white"
    >
      {icon}
      {name}
    </Link>
  </li>
);
