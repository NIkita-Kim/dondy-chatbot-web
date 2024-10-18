import { useQuery } from 'react-query';
import { CompanyKey } from '../../keys/company.key';
import { CompanyService } from '../../services/company.service';

export function useCompanies() {
  return useQuery({
    queryKey: [CompanyKey.list()],
    queryFn: async () => await CompanyService.instance.findAll(),
  });
}