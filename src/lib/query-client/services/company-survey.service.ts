import $api from '../client/axios';
import { ApiRoutes } from '../routes';
import { CreateSurveyDTO, SurveyRO, UpdateSurveyDTO } from '../../types/survey.type';

export class CompanySurveyService {

  private static __instance: CompanySurveyService;

  private constructor() {
    // Avoid creation of the new instance
  }

  static get instance(): CompanySurveyService {
    if (!CompanySurveyService.__instance) {
      CompanySurveyService.__instance = new CompanySurveyService();
    }
    return CompanySurveyService.__instance;
  }

  async findAll(companyId: string): Promise<SurveyRO[]> {
    const { data } = await $api.get<SurveyRO[]>(ApiRoutes.CompanySurveys.list(companyId));

    return data;
  }

  async create(companyId: string, dto: CreateSurveyDTO): Promise<SurveyRO> {
    const { data } = await $api.post<SurveyRO>(ApiRoutes.CompanySurveys.create(companyId), dto);

    return data;
  }

  async findOne(companyId: string, surveyId: string): Promise<SurveyRO> {
    const { data } = await $api.get<SurveyRO>(ApiRoutes.CompanySurveys.details(companyId, surveyId));

    return data;
  }

  async update(companyId: string, surveyId: string, dto: UpdateSurveyDTO): Promise<SurveyRO> {
    const { data } = await $api.put<SurveyRO>(ApiRoutes.CompanySurveys.update(companyId, surveyId), dto);

    return data;
  }

  async delete(companyId: string, surveyId: string): Promise<void> {
    await $api.delete<SurveyRO>(ApiRoutes.CompanySurveys.delete(companyId, surveyId));
  }
}