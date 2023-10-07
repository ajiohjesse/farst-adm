import { DataTable } from '@/components/ui/DataTable';
import {
  TRANSACTION_COLUMNS,
  TRANSACTIONS,
} from '@/utils/dummydata/transactions_Dashboard';

const TransactionsOverview = () => {
  return (
    <div className='border border-[#B3B4C5] bg-[#FFFFFF]'>
      <h1 className='py-2 pl-6 text-[18px] text-[#1D4ED8]'>Transactions</h1>
      <DataTable columns={TRANSACTION_COLUMNS} data={TRANSACTIONS} />
    </div>
  );
};

export default TransactionsOverview;
