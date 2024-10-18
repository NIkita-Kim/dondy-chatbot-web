import { QueryKeysEnum } from './enums/query-keys.enum';

export const ChatKey = {
  all: [QueryKeysEnum.CHATS] as const,
  list: () => [... ChatKey.all, 'list'] as const,
  create: () => [... ChatKey.all, 'create'] as const,
  details: (id: string) => [... ChatKey.all, id, 'details'] as const,
  update: (id: string) => [... ChatKey.all, id, 'update'] as const,
}