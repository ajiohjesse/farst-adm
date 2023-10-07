// import { BsArrowDownLeftCircle } from "react-icons/bs";
import { useEffect, useRef } from 'react';

import { visitors } from '../../utils/dummydata/sales_Dashboard';
interface Props {
  setHeight: any;
  visitorStatsHeight: number;
}
export default function VisitorsStats({
  setHeight,
  visitorStatsHeight,
}: Props) {
  // const [visitorStatsHeight, setHeight] = useState<number>(0);
  const visitorsStatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(visitorsStatRef.current, visitorsStatRef.current?.clientHeight);
    const updateHeight = () => {
      if (visitorsStatRef.current) {
        const _height = visitorsStatRef.current.clientHeight;
        setHeight(_height);
        console.log(visitorStatsHeight);
      }
    };
    // Initial update
    updateHeight();
    // // Update on window resize
    // window.addEventListener("resize", updateHeight);
    // // Cleanup the event listener
    // return () => {
    // 	window.removeEventListener("resize", updateHeight);
    // };
  }, [visitorsStatRef]);

  return (
    <div
      ref={visitorsStatRef}
      className='col-span-1 h-full flex-1 border border-[#B3B4C5] bg-white'
    >
      <h1 className='py-2 pl-6 text-[18px] text-[#1D4ED8]'>Visitors</h1>
      <hr className='h-1 ' />
      <div className='my-3 flex flex-col items-center justify-around gap-2 px-4'>
        {visitors.map((visitors, i) => {
          return (
            <div
              key={i}
              className='flex w-full flex-col items-center gap-1 rounded-lg 
            border border-[#B3B4C5] bg-[#F5F6F7] py-4'
            >
              <p>{visitors.totalNumber}</p>
              <p>{visitors.location}</p>
              <div className='flex '>
                <div>{/* <BsArrowDownLeftCircle /> */}</div>
                <p>Clicks</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
