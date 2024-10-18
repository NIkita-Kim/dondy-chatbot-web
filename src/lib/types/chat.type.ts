import { SurveyRO } from './survey.type';
import { CompanyRO } from './company.type';

export type ChatRO = {
  _id: string;
  company: CompanyRO | string;
  customerId: string;
  survey: SurveyRO;
  interactions: InteractionRO[];
}

export type CreateChatDTO = {
  company: string;
  survey: string;
}

export type UpdateChatDTO = {
  interactions: Omit<InteractionRO, 'timestamp'>[],
}

type InteractionRO = {
  question: string;
  answer: string;
  timestamp: Date;
}
