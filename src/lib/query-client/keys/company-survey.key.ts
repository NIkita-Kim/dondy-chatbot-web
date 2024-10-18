import { QueryKeysEnum } from './enums/query-keys.enum';

export const CompanySurveyKey = {
  all: [QueryKeysEnum.COMPANIES] as const,
  list: (id: string) => [... CompanySurveyKey.all, id, 'list'] as const,
  details: (id: string, surveyId: string) => [... CompanySurveyKey.all, id, surveyId, 'details'] as const,
  create: (id: string) => [... CompanySurveyKey.all, id, 'create'] as const,
  update: (id: string, surveyId: string) => [... CompanySurveyKey.all, id, surveyId, 'update'] as const,
  delete: (id: string, surveyId: string) => [... CompanySurveyKey.all, id, surveyId, 'delete'] as const,
}
