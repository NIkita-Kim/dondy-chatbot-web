import { FC } from 'react';
import { ChevronRightIcon} from '@heroicons/react/16/solid';
import { Link } from 'react-router-dom';
import { CompanyRO } from '../lib/types/company.type';

type CompanyListItemProps = CompanyRO;

export const CompanyListItem: FC<CompanyListItemProps> = (
  { _id, name, description }: CompanyListItemProps
) => {
  return (
    <div key={_id} className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 text-right">
        <Link to={`/companies/${_id}/surveys`}>
          <ChevronRightIcon className="size-10 inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700 mr-2 mb-2"/>
        </Link>
      </div>
    </div>
  );
}

export default CompanyListItem;
