import { ApiResponse, ListApiResponse } from '../core/shared/infra/api-response'
import { Documentacao } from './documentacao'
import { Situacao } from './situacao'
import { Turma } from './turma'

export type Aluno = {
  id: string
  nome: string
  turma: Turma
  estado: string
  cidade: string
  nomeDoPai: string
  nomeDaMae: string
  situacao: Situacao
  documentacao: Documentacao
}

export type ListAlunoResponse = ListApiResponse<Aluno>

export type AlunoResponse = ApiResponse<Aluno>
