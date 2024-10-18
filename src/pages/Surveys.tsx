import { FC } from 'react';
import CompanyList from '../components/CompanyList';
import { useParams } from 'react-router-dom';

const Surveys: FC = () => {
  const params = useParams();

  console.log(params);
  return (
    <>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Surveys</h2>
      <CompanyList />
    </>
  );
}

export default Surveys
