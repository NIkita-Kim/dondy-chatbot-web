import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useChatDetails } from '../lib/query-client/hooks/queries/chat.query';
import ChatBotDialog from '../components/ChatBotDialog';
import { ChatRO } from '../lib/types/chat.type';

const Chat: FC = () => {
  const { id } = useParams();

  const { data: chat } = useChatDetails(id!);

  return !!chat && ((Object.keys(chat as ChatRO)).length > 0 && <ChatBotDialog chat={chat as ChatRO} id={id} />);
}

export default Chat;
