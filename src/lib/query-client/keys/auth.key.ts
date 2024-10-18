import { QueryKeysEnum } from './enums/query-keys.enum';

export const AuthKey = {
  all: [QueryKeysEnum.AUTH] as const,
  signIn: () => [... AuthKey.all, 'signIn'] as const,
  signUp: () => [... AuthKey.all, 'signUp'] as const
}
