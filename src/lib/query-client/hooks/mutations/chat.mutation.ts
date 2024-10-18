import { ChatKey } from '../../keys/chat.key';
import { useMutation, UseMutationOptions } from 'react-query';
import { ChatRO, CreateChatDTO, UpdateChatDTO } from '../../../types/chat.type';
import { ChatService } from '../../services/chat.service';

export function useCreateChat(
  options?: Omit<UseMutationOptions<ChatRO, unknown, CreateChatDTO, unknown>, "mutationKey" | "mutationFn">
) {
  return useMutation(
    ChatKey.create(),
    async (dto: CreateChatDTO) => await ChatService.instance.create(dto),
    options,
  );
}

export function useUpdateChat(id: string) {
  return useMutation({
    mutationKey: [ChatKey.update(id)],
    mutationFn: async (dto: UpdateChatDTO) => await ChatService.instance.update(id, dto),
  });
}
