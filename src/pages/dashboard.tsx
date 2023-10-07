import MainLayout from '@/components/layouts/MainLayout';
import Dashboard from '@/views/Dashboard';

export default function DashboardMain() {
  return (
    <MainLayout header={<p>Header component</p>}>
      <Dashboard />
    </MainLayout>
  );
}
