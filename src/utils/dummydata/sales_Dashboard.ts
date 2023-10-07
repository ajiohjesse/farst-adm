interface goodsDetails {
  goods: string;
  supermarket: string;
}

interface vistorsStats {
  totalNumber: number;
  location: string;
}
export const visitors: vistorsStats[] = [
  {
    totalNumber: 200,
    location: 'Lagos',
  },
  {
    totalNumber: 200,
    location: 'Port Harcourt',
  },
  {
    totalNumber: 200,
    location: 'Abuja',
  },
];

export const goodsBySupermarket: goodsDetails[] = [
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
export const latestOrder: goodsDetails[] = [
  {
    goods: 'Pampers swaddles baby diaper size 2',
    supermarket: '50k',
  },
  {
    goods: 'Pampers swaddles baby diaper size 2',
    supermarket: '10k',
  },
  {
    goods: 'Pampers swaddles baby diaper size 2',
    supermarket: '20lk',
  },
  {
    goods: 'Pampers swaddles baby diaper size 2',
    supermarket: '54k',
  },
];
