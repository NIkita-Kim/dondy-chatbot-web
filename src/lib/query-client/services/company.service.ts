import { CompanyRO } from '../../types/company.type';
import { ApiRoutes } from '../routes';
import $api from '../client/axios';

export class CompanyService {
  static __instance: CompanyService;

  private constructor() {
    // Avoid creation of the new instance
  }

  static get instance(): CompanyService {
    if (!CompanyService.__instance) {
      CompanyService.__instance = new CompanyService();
    }
    return CompanyService.__instance;
  }

  async findAll(): Promise<CompanyRO[]> {
    const { data } = await $api.get<CompanyRO[]>(ApiRoutes.Companies.list);

    return data;
  }
}