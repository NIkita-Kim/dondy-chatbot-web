import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/16/solid';
import { ChatRO } from '../lib/types/chat.type';

type ChatListItemProps = ChatRO;

export const ChatListItem: FC<ChatListItemProps> = ({ _id, survey }: ChatListItemProps) => {
  return (
    <Link to={`chats/${_id}`}>
      <div key={_id} className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{survey.name}</div>
          <p className="text-gray-700 text-base">
            {survey.description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 text-right">
            <ChevronRightIcon className="size-10 inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700 mr-2 mb-2"/>
        </div>
      </div>
    </Link>
  );
}

export default ChatListItem;
