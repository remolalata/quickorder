import { OrderKanbanBoard } from '@/components/dashboard/orders/OrderKanbanBoard';

export default function DashboardOrdersPage() {
  return (
    <main className='p-8'>
      <div className='flex flex-col gap-2 mb-8'>
        <h1 className='font-bold text-3xl'>Order Management</h1>
        <p className='text-slate-600'>Real-time update of all incoming requests</p>
      </div>
      <OrderKanbanBoard />
    </main>
  );
}
