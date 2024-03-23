import { TurmaCard } from '@/features/turma/components/turma-card'
import { getTurmasQuery } from '@/features/turma/turma-api'
import { getTabelaDominio } from '@/features/turno/turno-api'

export default async function Turmas() {
  const turmasResponse = await getTurmasQuery()
  const tabelaDominioResponse = await getTabelaDominio()

  return (
    <div className=" flex size-full max-w-6xl items-start justify-center">
      <TurmaCard listTurmaResponse={turmasResponse} listTurnos={tabelaDominioResponse.turnoList} />
    </div>
  )
}
