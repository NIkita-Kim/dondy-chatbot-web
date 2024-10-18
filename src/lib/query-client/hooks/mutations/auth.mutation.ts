import { useMutation } from 'react-query';
import { AuthKey } from '../../keys/auth.key';
import { AuthService } from '../../services/auth.service';
import { JWT, LoginDTO, RegisterDTO } from '../../../types/auth.type';

export function useSignIn() {
  return useMutation({
    mutationKey: [AuthKey.signIn()],
    mutationFn: async (dto: LoginDTO) => await AuthService.instance.signIn(dto),
    onSuccess: (data: JWT) => {
      localStorage.setItem('token', data.access_token);
    },
  });
}

export function useSignUp() {
  return useMutation({
    mutationKey: [AuthKey.signUp()],
    mutationFn: async (dto: RegisterDTO) => await AuthService.instance.signUp(dto),
    onSuccess: () => {
      localStorage.removeItem('token');
    },
  });
}
