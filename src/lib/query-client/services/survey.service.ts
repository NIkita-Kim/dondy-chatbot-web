import $api from '../client/axios';
import { ApiRoutes } from '../routes';
import { SurveyRO } from '../../types/survey.type';

export class SurveyService {
  private static __instance: SurveyService;

  private constructor() {
    // Avoid creation of the new instance
  }

  static get instance(): SurveyService {
    if (!SurveyService.__instance) {
      SurveyService.__instance = new SurveyService();
    }
    return SurveyService.__instance;
  }

  async findAll(companyId: string): Promise<SurveyRO[]> {
    const { data } = await $api.get<SurveyRO[]>(ApiRoutes.Surveys.list, { params: { companyId } });
    return data;
  }

  async findOne(id: string): Promise<SurveyRO> {
    const { data } = await $api.get<SurveyRO>(ApiRoutes.Surveys.details(id));

    return data;
  }
}