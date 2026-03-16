import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

export const Layout = () => {
  return (
    <div className="flex h-screen bg-dark-900 text-slate-300">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-red-900/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-900/10 blur-[130px] rounded-full opacity-50"></div>
      </div>
      
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative z-10">
        <Header />
        <main className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
          <div className="animate-in fade-in zoom-in-95 duration-500 h-full">
             <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
