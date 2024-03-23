'use client'

import { ColumnDef } from '@tanstack/react-table'

import { Checkbox } from '@/components/ui/checkbox'
import { Aluno } from '@/types/aluno'

export const alunoColumns: ColumnDef<Aluno>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Selecionar Tudo"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Selecionar Linha"
      />
    ),
  },
  {
    accessorKey: 'nome',
    header: 'Nome',
  },
  {
    accessorKey: 'nomeDaMae',
    header: 'Nome da Mãe',
  },
  {
    accessorKey: 'turma.descricao',
    header: 'Turma',
  },
  {
    accessorKey: 'turma.turno.descricao',
    header: 'Turno',
  },
  {
    accessorKey: 'situacao.descricao',
    header: 'Situação',
  },
  {
    accessorKey: 'documentacao.descricao',
    header: 'Documentação',
  },
]
