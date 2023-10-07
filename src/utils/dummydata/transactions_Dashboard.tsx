import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';
import images from '../../utils/dummydata/imgs';
import { cn } from '../cn';
export type Transaction = {
  customerImage: any;
  orderId: string;
  customerName: string;
  storeName: string;
  amount: string;
  status: 'Delivery failed' | 'Delivered' | 'Shopping complete' | 'Returned';
};
export const TRANSACTIONS: Transaction[] = [
  {
    customerImage: images.profile1,
    orderId: '728ed52f',
    customerName: 'Deborah Patricia, Emeni',
    storeName: 'Ojota Foundation Superstore',
    amount: '4000',
    status: 'Delivered',
  },
  {
    customerImage: images.profile4,
    orderId: '34eed52f',
    customerName: 'Vincent Temitope, Emeni',
    storeName: 'Dangote Foundation Superstore',
    amount: '3000',
    status: 'Shopping complete',
  },
  {
    customerImage: images.profile2,
    orderId: 'a8bcd12e',
    customerName: 'Jennifer Smith',
    storeName: 'Fashionista Boutique',
    amount: '2500',
    status: 'Returned',
  },
  {
    customerImage: images.profile3,
    orderId: '19efg45h',
    customerName: 'Robert Johnson',
    storeName: 'TechGadgets',
    amount: '5000',
    status: 'Delivered',
  },
  {
    customerImage: images.profile1,
    orderId: '1ab23cd4',
    customerName: 'Sarah Adams',
    storeName: 'HealthHub Pharmacy',
    amount: '1500',
    status: 'Delivered',
  },
  {
    customerImage: images.profile4,
    orderId: 'xy7z8w9u',
    customerName: 'David Brown',
    storeName: 'SportsZone',
    amount: '1800',
    status: 'Shopping complete',
  },
  {
    customerImage: images.profile2,
    orderId: 'jk9lmn12',
    customerName: 'Emily Davis',
    storeName: 'Home Essentials',
    amount: '3200',
    status: 'Returned',
  },
  {
    customerImage: images.profile3,
    orderId: 'pqr5stu6',
    customerName: 'Daniel Wilson',
    storeName: 'ElectroTech',
    amount: '4200',
    status: 'Delivered',
  },
  {
    customerImage: images.profile1,
    orderId: '3v7a8c2b',
    customerName: 'Jessica Thompson',
    storeName: 'BeautyBazaar',
    amount: '2800',
    status: 'Delivered',
  },
  {
    customerImage: images.profile4,
    orderId: 'lmn9opq2',
    customerName: 'Andrew Green',
    storeName: 'BooksRUs',
    amount: '2000',
    status: 'Shopping complete',
  },
];

export const TRANSACTION_COLUMNS: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'customerImage',
    header: ' ',
    cell: ({ row }) => {
      const customerImage = row.getValue('customerImage') as string;

      return (
        <div
          className={cn(
            'relative h-[37px] w-[37px] overflow-hidden rounded-[50%]',
          )}
        >
          <Image
            src={customerImage}
            fill
            style={{ objectFit: 'contain' }}
            alt='customer image'
          />
        </div>
      );
    },
  },
  {
    accessorKey: 'orderId',
    header: 'Order Id',
  },
  {
    accessorKey: 'customerName',
    header: 'Customer Name',
  },
  {
    accessorKey: 'storeName',
    header: 'Store Name',
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status') as string;

      return (
        <div
          className={cn(
            'flex justify-center rounded-lg p-1 text-white',
            status === 'Delivered' || 'Shopping complete'
              ? 'bg-success-500'
              : status === 'Returned'
              ? 'bg-blue-600'
              : 'bg-destructive',
          )}
        >
          {status}
        </div>
      );
    },
  },
];
