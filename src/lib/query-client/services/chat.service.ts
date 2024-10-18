import { ApiRoutes } from '../routes';
import { ChatRO, CreateChatDTO, UpdateChatDTO } from '../../types/chat.type';
import $api from '../client/axios';

export class ChatService {
  private static __instance: ChatService;

  private constructor() {
    // Avoid creation of the new instance
  }

  static get instance(): ChatService {
    if (!ChatService.__instance) {
      ChatService.__instance = new ChatService();
    }
    return ChatService.__instance;
  }

  async findAll(): Promise<ChatRO[]> {
    const { data } = await $api.get<ChatRO[]>(ApiRoutes.Chats.list);

    return data;
  }

  async findOne(id: string): Promise<ChatRO> {
    const { data } = await $api.get<ChatRO>(ApiRoutes.Chats.details(id));

    return data;
  }

  async create(dto: CreateChatDTO): Promise<ChatRO> {
    const { data } = await $api.post<ChatRO>(ApiRoutes.Chats.create(), dto);

    return data;
  }

  async update(id: string, dto: UpdateChatDTO): Promise<ChatRO> {
    const { data } = await $api.put<ChatRO>(ApiRoutes.Chats.update(id), dto);

    return data;
  }
}