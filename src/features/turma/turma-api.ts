import { fetchApi } from '@/lib/http'
import { ListTurmaResponse } from '@/types/turma'

export const getTurmasQuery = async () => {
  const result = await fetchApi<ListTurmaResponse>(`turmas`, {
    method: 'GET',
    cache: 'no-cache',
  })

  const { content, pageable, totalElements, totalPages } = result

  return { content, pageable, totalElements, totalPages }
}
