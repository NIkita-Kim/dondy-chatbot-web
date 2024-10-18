import { ChatService } from '../../services/chat.service';
import { useQuery } from 'react-query';
import { ChatKey } from '../../keys/chat.key';
import { UseQueryOptions } from 'react-query/types/react/types';

export function useChats() {
  return useQuery({
    queryKey: [ChatKey.list()],
    queryFn: async () => await ChatService.instance.findAll(),
  });
}

export function useChatDetails(id: string, options?: UseQueryOptions) {
  return useQuery({
    queryKey: [ChatKey.details(id)],
    queryFn: async () => await ChatService.instance.findOne(id),
    ...options,
  });
}