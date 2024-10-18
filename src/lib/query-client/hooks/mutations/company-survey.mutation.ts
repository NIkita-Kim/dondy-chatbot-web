import { useMutation } from 'react-query';
import { CreateSurveyDTO } from '../../../types/survey.type';
import { CompanySurveyService } from '../../services/company-survey.service';
import { CompanySurveyKey } from '../../keys/company-survey.key';

export function useCreateCompanySurvey(companyId: string) {
  return useMutation({
    mutationKey: [CompanySurveyKey.create(companyId)],
    mutationFn: async (data: CreateSurveyDTO) => await CompanySurveyService.instance.create(companyId, data),
  });
}

export function useUpdateCompanySurvey(companyId: string, surveyId: string) {
  return useMutation({
    mutationKey: [CompanySurveyKey.update(companyId, surveyId)],
    mutationFn: async (data: CreateSurveyDTO) => await CompanySurveyService.instance.update(companyId, surveyId, data),
  });
}

export function useDeleteCompanySurvey(companyId: string, surveyId: string) {
  return useMutation({
    mutationKey: [CompanySurveyKey.delete(companyId, surveyId)],
    mutationFn: async () => await CompanySurveyService.instance.delete(companyId, surveyId),
  });
}
