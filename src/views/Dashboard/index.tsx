import GeneralStats from '@/modules/Dashboard/GeneralStats';
import SalesStats from '@/modules/Dashboard/SalesStats';
import TransactionsOverview from '@/modules/Dashboard/Transactions';
import VisitorsStats from '@/modules/Dashboard/Visitors';
import { useRef, useState } from 'react';

export default function Dashboard() {
  const [visitorStatsHeight, setHeight] = useState<number>(0);
  const visitorsStatRef = useRef<HTMLDivElement>(null);
  return (
    <div className='flex flex-col gap-8'>
      <GeneralStats />
      <div className='flex gap-3'>
        <SalesStats visitorStatsHeight={visitorStatsHeight} />
        <VisitorsStats
          visitorStatsHeight={visitorStatsHeight}
          setHeight={setHeight}
        />
      </div>
      <TransactionsOverview />
    </div>
  );
}
