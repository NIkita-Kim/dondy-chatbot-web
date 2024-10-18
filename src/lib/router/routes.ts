import { RoutesEnum } from './routes.enum';

export const ROUTES = {
  [RoutesEnum.HOME]: '/',
  [RoutesEnum.SIGN_IN]: '/auth/sign-in',
  [RoutesEnum.SIGN_UP]: '/auth/sign-up',
  [RoutesEnum.COMPANY_SURVEYS]: '/companies/:id/surveys',
}
