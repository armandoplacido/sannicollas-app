import { fetchApi } from '@/lib/http'
import { TabelaDominioResponse } from '@/types/tabela-dominio'

export async function getTabelaDominio() {
  const result = await fetchApi<TabelaDominioResponse>(`tabelas-dominio`, {
    method: 'GET',
    cache: 'no-cache',
  })

  return result
}
