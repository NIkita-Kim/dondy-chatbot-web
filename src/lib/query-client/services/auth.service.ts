import $api from '../client/axios';
import { ApiRoutes } from '../routes';
import { JWT, LoginDTO, RegisterDTO } from '../../types/auth.type';

export class AuthService {
  private static __instance: AuthService;

  private constructor() {
    // Avoid creation of the new instance
  }

  static get instance(): AuthService {
    if (!AuthService.__instance) {
      AuthService.__instance = new AuthService();
    }
    return AuthService.__instance;
  }

  async signIn(dto: LoginDTO): Promise<JWT> {
    const { data } = await $api.post<JWT>(ApiRoutes.Auth.signIn(), dto);

    return data;
  }

  async signUp(dto: RegisterDTO): Promise<JWT> {
    const { data } = await $api.post<JWT>(ApiRoutes.Auth.signUp(), dto);

    return data;
  }
}