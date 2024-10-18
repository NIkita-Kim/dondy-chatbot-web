import { QueryKeysEnum } from './enums/query-keys.enum';

export const CompanyKey = {
  all: [QueryKeysEnum.COMPANIES] as const,
  list: () => [... CompanyKey.all, 'list'] as const,
}
