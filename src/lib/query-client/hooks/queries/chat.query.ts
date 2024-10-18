import { ChatService } from '../../services/chat.service';
import { useQuery } from 'react-query';
import { ChatKey } from '../../keys/chat.key';

export function useChats() {
  return useQuery({
    queryKey: [ChatKey.list()],
    queryFn: async () => await ChatService.instance.findAll(),
  });
}

export function useChatDetails(id: string) {
  return useQuery({
    queryKey: [ChatKey.details(id)],
    queryFn: async () => await ChatService.instance.findOne(id),
  });
}