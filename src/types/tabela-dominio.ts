import { ApiResponse } from '@/core/shared/infra/api-response'

import { Documentacao } from './documentacao'
import { Nivel } from './nivel'
import { Situacao } from './situacao'
import { Turno } from './turno'

export type TabelaDominio = {
  nivelList: Nivel[]
  turnoList: Turno[]
  situacao: Situacao[]
  documentacao: Documentacao[]
}

export type TabelaDominioResponse = ApiResponse<TabelaDominio>
