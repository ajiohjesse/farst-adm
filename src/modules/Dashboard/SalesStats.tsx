import { EmptyCartIcon } from '@/components/icons';
import OrderCard from './OrdersCard';
interface props {
  visitorStatsHeight: number;
}
export default function SalesStats({ visitorStatsHeight }: props) {
  return (
    <div
      className='col-span-4 flex h-full flex-[4_4_0%] items-center gap-3'
      style={{ height: `${visitorStatsHeight}px` }}
    >
      <div className='flex h-full flex-[2_2_0%] flex-col border border-[#B3B4C5] bg-white '>
        <h1 className='py-2 pl-6 text-[18px] text-[#1D4ED8]'>
          Top sales by supermarket
        </h1>
        <hr className='h-1 ' />
        <div className={`relative h-full overflow-y-auto px-2`}>
          {goodsBySupermarket.length == 0 ? (
            <div className='absolute top-[50%] mx-auto'>
              <EmptyCartIcon /> <p>No sales yet</p>
            </div>
          ) : (
            goodsBySupermarket.map((goods, i) => {
              return (
                <OrderCard
                  key={i}
                  goodsName={goods.goods}
                  supermarket_or_price={goods.supermarket}
                />
              );
            })
          )}
        </div>
      </div>
      <div className='flex h-full flex-[2_2_0%] flex-col border border-[#B3B4C5] bg-white '>
        <h1 className='py-2 pl-6 text-[18px] text-[#1D4ED8]'>Latest orders</h1>
        <hr className='h-1 ' />
        <div className={`relative h-full overflow-y-auto px-2`}>
          {latestOrder.length == 0 ? (
            <div className='absolute top-[50%] mx-auto'>
              <EmptyCartIcon /> <p>No sales yet</p>
            </div>
          ) : (
            latestOrder.map((goods, i) => {
              return (
                <OrderCard
                  key={i}
                  goodsName={goods.goods}
                  supermarket_or_price={goods.supermarket}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

interface goodsDetails {
  goods: string;
  supermarket: string;
}
const goodsBySupermarket: goodsDetails[] = [
  {
    goods: 'Pampers swaddles baby diaper size 2',
    supermarket: 'Amaka & Sons Group of stores',
  },
  {
    goods: 'Pampers swaddles baby diaper size 2',
    supermarket: 'Okiemute Supermarket',
  },
  {
    goods: 'Pampers swaddles baby diaper size 2',
    supermarket: 'Queens and Kings ',
  },
  {
    goods: 'Pampers swaddles baby diaper size 2',
    supermarket: 'Queens and Kings ',
  },
];
const latestOrder: goodsDetails[] = [
  // {
  // 	goods: "Pampers swaddles baby diaper size 2",
  // 	supermarket: "50k",
  // },
  // {
  // 	goods: "Pampers swaddles baby diaper size 2",
  // 	supermarket: "10k",
  // },
  // {
  // 	goods: "Pampers swaddles baby diaper size 2",
  // 	supermarket: "20lk",
  // },
  // {
  // 	goods: "Pampers swaddles baby diaper size 2",
  // 	supermarket: "54k",
  // },
];
