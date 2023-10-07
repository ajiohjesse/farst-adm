import { useState } from 'react';

export default function GeneralStats() {
  const [curLocation, setCurLocation] = useState<string>('All');
  return (
    <div className='w-full'>
      {/* first part */}
      <div className='flex items-end justify-between py-2'>
        <div>
          <p>Hi Emeka</p>
          <h1 className='font-bold text-[#E58945] '>Welcome back 👋</h1>
          <p className='text-[.9rem]'>
            Here’s a total breakdown of how your property owners and renters are
            doing
          </p>
        </div>
        <div className='flex cursor-pointer items-center'>
          {location.map((location, index) => {
            return (
              <div
                key={index}
                onClick={() => setCurLocation(location)}
                className={`${
                  curLocation == location && 'bg-[#065F46] text-white'
                } whitespace-nowrap  rounded-lg px-2 font-medium`}
              >
                <p>{location}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* generalstats */}
      <div className='flex flex-col items-start bg-[#E6E6EC] px-8 py-4'>
        <h1>General stats</h1>
        <div className='flex w-full items-center justify-between gap-6'>
          {genStats.map((stat, index) => {
            return (
              <div
                key={index}
                className='flex w-[190px] flex-col items-center gap-1 rounded-lg border
                    border-[#B3B4C5] bg-[#F5F6F7]  py-4
                '
              >
                <h1 className='text-[32px] font-semibold'>{stat.value}</h1>
                <p className='whitespace-nowrap text-[.8rem] font-medium'>
                  {stat.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const location = ['All', 'Lagos', 'Port Harcourt', 'Abuja'];
interface generalStat {
  title: string;
  value: number;
}
const genStats: generalStat[] = [
  {
    title: 'Orders',
    value: 50,
  },
  {
    title: 'Retailers',
    value: 50,
  },
  {
    title: 'Customers',
    value: 50,
  },
  {
    title: 'Delivery Agents',
    value: 50,
  },
  {
    title: 'Returned goods',
    value: 50,
  },
];
