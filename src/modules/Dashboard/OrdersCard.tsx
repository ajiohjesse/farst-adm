import Image from 'next/image';
import sampleImage from '../../assets/test_images/orderSample.png';
interface goodsProps {
  goodsName: string;
  supermarket_or_price: string;
  imageUrl?: any;
}
export default function OrderCard({
  goodsName,
  supermarket_or_price,
}: goodsProps) {
  return (
    <div className='block'>
      <div className='flex items-center rounded-lg border border-[#E6E6EC] px-2 py-4'>
        <div className='rounded-lg bg-[#F5F6F7]'>
          <div className='relative h-[57px] w-[57px] '>
            <Image
              src={sampleImage}
              fill
              style={{ objectFit: 'cover' }}
              alt='Goods Image'
            />
          </div>
        </div>

        <div className='flex flex-col items-start px-4'>
          <p className='text-[18px] font-semibold'>#44,000</p>
          <p className='text-[.8rem] text-[#67688B] '>
            Pampers swaddles baby diaper size 2
          </p>
          <p className='text-[.8rem]  text-[#E58945]'>
            Amaka & Sons Group of stores
          </p>
        </div>
      </div>
    </div>
  );
}
