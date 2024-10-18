import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Nav } from '../components/Nav';
import ChatList from '../components/ChatList';

const MainLayout: FC = () => {
  return (
    <>
      <div className="h-full flex flex-col">
        <Nav />
        <main className="flex-grow">
          <div className="h-full flex flex-row justify-between items-stretch">
            <div className="w-2/12 border-r-2 h-full scroll-auto">
              <ChatList />
            </div>
            <div className="w-10/12 h-full">
              <div className="bg-white h-full">
                <div className="mx-auto px-4 py-4 sm:px-6 sm:py-4 lg:px-8">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default MainLayout;
