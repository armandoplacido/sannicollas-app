import { EditAlunoCard } from '@/features/aluno/components/edit-aluno-card'

export type TurmaPageProps = {
  params: {
    id: string
  }
}

export default async function Turma({ params }: TurmaPageProps) {
  return (
    <div className="flex size-full max-w-6xl items-start justify-center">
      <EditAlunoCard turmaId={params.id} />
    </div>
  )
}
