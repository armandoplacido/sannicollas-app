'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

import { Cell, ColumnDef, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table'

import { DataTable } from '@/components/data-table'
import { Pageable } from '@/core/shared/infra/api-response'
import { Turma } from '@/types/turma'

export type TurmaTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function TurmaTable<TData, TValue>({ columns, data }: TurmaTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = useState({})
  const route = useRouter()
  const seachParams = useSearchParams()

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection,
    },
    initialState: {
      pagination: {
        pageSize: data.length,
      },
    },
  })

  const handleSelectRow = (row: Cell<TData, TValue>[]) => {
    const turma: Turma = row[0].row.original as Turma
    route.push(`/turmas/${turma.id}?method=${seachParams.get('method')}`)
  }

  return <DataTable table={table} columns={columns} onClickRow={handleSelectRow} />
}
