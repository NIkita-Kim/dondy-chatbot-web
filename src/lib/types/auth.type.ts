export type JWT = {
  access_token: string;
}

export type LoginDTO = {
  email: string;
  password: string;
}

export type RegisterDTO = {
  user: UserDTO;
  company: CompanyDTO;
}

type UserDTO = {
  name: string;
  email: string;
  password: string;
}

type CompanyDTO = {
  name: string;
  description?: string;
}
