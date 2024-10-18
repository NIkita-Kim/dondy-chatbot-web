import { FC } from 'react';
import { Button } from '@headlessui/react';
import { useCreateChat } from '../lib/query-client/hooks/mutations/chat.mutation';

type SurveyListItemProps = {
  _id: string;
  name: string;
  description?: string;
  companyId: string;
};

const SurveyListItem: FC<SurveyListItemProps> = ({ _id, name, description, companyId }: SurveyListItemProps) => {
  const { mutate: createChat } = useCreateChat();

  const handleStartChat = () => {
    createChat({ survey: _id, company: companyId });
  };

  return (
    <div key={_id} className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 text-right">
        <Button onClick={ handleStartChat } className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">Start chat</Button>
      </div>
    </div>
  );
};

export default SurveyListItem;