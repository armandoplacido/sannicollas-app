import { fetchApi } from '@/lib/http'
import { ListAlunoResponse } from '@/types/aluno'

export type GetAlunosByTurmaParams = {
  id: string
  page: number
  name: string
}

export async function getAlunosByTurmaQuery({ id, page = 0, name = '' }: GetAlunosByTurmaParams) {
  const result = await fetchApi<ListAlunoResponse>(`alunos?nome=${name}&turmaId=${id}&size=10&page=${page}`, {
    method: 'GET',
    cache: 'no-cache',
  })

  const { content, pageable, totalElements, totalPages } = result

  return { content, pageable, totalElements, totalPages }
}
