'use client'

import { Cell, ColumnDef, flexRender, Table as TanStackReactTable } from '@tanstack/react-table'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

import { Card } from './ui/card'

type DataTableProps<TData, TValue> = {
  table: TanStackReactTable<TData>
  columns: ColumnDef<TData, TValue>[]

  onClickRow?: (row: Cell<TData, TValue>[]) => void
}

export function DataTable<TData, TValue>({ table, columns, onClickRow }: DataTableProps<TData, TValue>) {
  return (
    <Card className="">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                className={`${onClickRow ? 'cursor-pointer' : ''}`}
                onClick={() => (onClickRow ? onClickRow(row.getAllCells()) : null)}
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                Não houve resultados
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Card>
  )
}
