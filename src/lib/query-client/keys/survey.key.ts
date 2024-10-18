import { QueryKeysEnum } from './enums/query-keys.enum';

export const SurveyKey = {
  all: [QueryKeysEnum.COMPANIES] as const,
  list: (companyId: string) => [...SurveyKey.all, companyId, 'list'] as const,
  details: (id: string) => [...SurveyKey.all, id, 'details'] as const
}