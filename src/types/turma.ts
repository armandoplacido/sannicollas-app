import { ListApiResponse } from '../core/shared/infra/api-response'
import { Nivel } from './nivel'
import { Turno } from './turno'

export type Turma = {
  id: string
  descricao: string
  turno: Turno
  nivel: Nivel
  numeroDeAlunos: number
}

export type ListTurmaResponse = ListApiResponse<Turma>
