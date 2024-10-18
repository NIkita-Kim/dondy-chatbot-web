export const ApiRoutes = {
  Chats: {
    list: 'chats',
    create: () => ApiRoutes.Chats.list,
    details: (id: string) => `${ApiRoutes.Chats.list}/${id}`,
    update: (id: string) => `${ApiRoutes.Chats.list}/${id}`,
  },
  Companies: {
    list: 'companies',
  },
  Surveys: {
    list: 'surveys',
    details: (id: string) => `${ApiRoutes.Surveys.list}/${id}`,
  },
  Auth: {
    root: 'auth',
    signIn: () => `${ApiRoutes.Auth.root}/sign-in`,
    signUp: () => `${ApiRoutes.Auth.root}/sign-up`,
  },
  CompanySurveys: {
    list: (id: string) => `companies/${id}/surveys`,
    create: (id: string) => ApiRoutes.CompanySurveys.list(id),
    details: (id: string, surveyId: string) => `${ApiRoutes.CompanySurveys.list(id)}/${surveyId}`,
    update: (id: string, surveyId: string) => `${ApiRoutes.CompanySurveys.list(id)}/${surveyId}`,
    delete: (id: string, surveyId: string) => `${ApiRoutes.CompanySurveys.list(id)}/${surveyId}`,
  },
}
