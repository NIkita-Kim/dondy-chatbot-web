import { ChatKey } from '../../keys/chat.key';
import { useMutation } from 'react-query';
import { CreateChatDTO, UpdateChatDTO } from '../../../types/chat.type';
import { ChatService } from '../../services/chat.service';

export function useCreateChat() {
  return useMutation({
    mutationKey: [ChatKey.create()],
    mutationFn: async (dto: CreateChatDTO) => await ChatService.instance.create(dto),
  });
}

export function useUpdateChat(id: string) {
  return useMutation({
    mutationKey: [ChatKey.update(id)],
    mutationFn: async (dto: UpdateChatDTO) => await ChatService.instance.update(id, dto),
  });
}
