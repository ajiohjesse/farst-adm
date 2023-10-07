import { logo } from '@/assets/images';
import Image from 'next/image';
import SidebarMenu from '../features/SidebarMenu';

interface MainLayoutProps {
  sideMenu?: React.ReactNode;
  header?: React.ReactNode;
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = props => {
  return (
    <div>
      <header className='fixed left-0 top-0 z-[888] h-20 w-full border-b bg-white'>
        <div className='ml-[224px]'>{props.header}</div>
      </header>

      <aside className=' fixed left-0 top-0 z-[999] w-[224px] border-r bg-background'>
        <Image
          src={logo}
          width={184}
          className='mx-auto py-6'
          alt='farstcart logo'
        />
        <div
          dir='rtl'
          className='mt-4 h-[calc(100vh-100px)] overflow-y-auto pb-4'
        >
          <div dir='ltr'>
            {props.sideMenu ? props.sideMenu : <SidebarMenu />}
          </div>
        </div>
      </aside>

      <main className='ml-[224px] mt-20 p-8'>{props.children}</main>
    </div>
  );
};

export default MainLayout;
