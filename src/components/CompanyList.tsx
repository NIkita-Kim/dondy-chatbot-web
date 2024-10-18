import { FC } from 'react';
import { useCompanies } from '../lib/query-client/hooks/queries/company.query';
import CompanyListItem from './CompanyListItem';

export const CompanyList: FC = () => {
  const { data: companies } = useCompanies();

  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {
        companies?.map((company) => (
          <CompanyListItem key={company._id} { ...company } />
        ))
      }
    </div>
  );
}

export default CompanyList;
