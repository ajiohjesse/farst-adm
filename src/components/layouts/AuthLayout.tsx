import { logoIcon, logoText, verticalBanner } from '@/assets/images';
import Image from 'next/image';

const AuthLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <main className='grid h-full w-full grid-cols-2 md:grid-cols-1'>
      <div className='relative min-h-screen md:hidden'>
        <Image
          src={verticalBanner}
          alt='banner'
          fill
          sizes='50vw'
          priority
          className='object-cover'
          placeholder='blur'
        />
      </div>

      <div className='flex flex-col items-center justify-center p-10'>
        <div className='flex flex-col items-center'>
          <Image
            src={logoIcon}
            alt='farscart icon'
            width={120}
            priority
            placeholder='blur'
          />
          <Image
            src={logoText}
            alt='farscart icon'
            width={300}
            priority
            placeholder='blur'
          />
        </div>
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;
