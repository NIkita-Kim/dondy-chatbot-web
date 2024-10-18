import { DeepPartial } from './deep-partial.type';
import { CompanyRO } from './company.type';

export type SurveyRO = {
  _id: string;
  company: CompanyRO | string;
  name: string;
  description?: string;
  questions: SurveyQuestionType[];
}

type SurveyQuestionType = {
  text: string;
  options: string[];
  index: number;
  type: string;
  nextQuestionIdx: number | null;
}

export type CreateSurveyDTO = {
  name: string;
  description?: string;
  questions: SurveyQuestionType[];
}

export type UpdateSurveyDTO = DeepPartial<CreateSurveyDTO>;
