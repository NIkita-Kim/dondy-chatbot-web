import { CompanySurveyKey } from '../../keys/company-survey.key';
import { useQuery } from 'react-query';
import { CompanySurveyService } from '../../services/company-survey.service';

export function useCompanySurveys(companyId: string) {
  return useQuery({
    queryKey: [CompanySurveyKey.list(companyId)],
    queryFn: async () => await CompanySurveyService.instance.findAll(companyId),
  });
}

export function useCompanySurveyDetails(companyId: string, surveyId: string) {
  return useQuery({
    queryKey: [CompanySurveyKey.details(companyId, surveyId)],
    queryFn: async () => await CompanySurveyService.instance.findOne(companyId, surveyId),
  });
}
