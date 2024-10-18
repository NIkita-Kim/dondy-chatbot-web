import { FC } from 'react';
import { useChats } from '../lib/query-client/hooks/queries/chat.query';
import ChatListItem from './ChatListItem';

export const ChatList: FC = () => {
  const { data: chats } = useChats();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">Chat list</h2>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      {
        chats?.map((chat) => (
          <ChatListItem
            key={chat._id}
            { ...chat }
          />
        ))
      }
    </div>
  );
}

export default ChatList;
