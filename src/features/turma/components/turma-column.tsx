'use client'

import { ColumnDef } from '@tanstack/react-table'

import { Turma } from '@/types/turma'

export const turmasColumn: ColumnDef<Turma>[] = [
  {
    accessorKey: 'descricao',
    header: 'Turma',
  },
  {
    accessorKey: 'nivel.descricao',
    header: 'Nível de Ensino',
  },
  {
    accessorKey: 'turno.descricao',
    header: 'Turno',
  },
  {
    accessorKey: 'numeroDeAlunos',
    header: 'Número de Alunos',
  },
]
