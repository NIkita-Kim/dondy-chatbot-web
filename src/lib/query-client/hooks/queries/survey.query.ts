import { useQuery } from 'react-query';
import { SurveyKey } from '../../keys/survey.key';
import { SurveyService } from '../../services/survey.service';

export function useSurveys(companyId: string) {
  return useQuery({
    queryKey: [SurveyKey.list(companyId)],
    queryFn: async () => await SurveyService.instance.findAll(companyId),
  });
}

export function useSurveyDetails(id: string) {
  return useQuery({
    queryKey: [SurveyKey.details(id)],
    queryFn: async () => await SurveyService.instance.findOne(id),
  })
}
