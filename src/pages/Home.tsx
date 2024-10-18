import { FC } from 'react';
import CompanyList from '../components/CompanyList';

export const Home: FC = () => {
  return (
    <>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Companies</h2>
      <CompanyList />
    </>
  );
}

export default Home;
