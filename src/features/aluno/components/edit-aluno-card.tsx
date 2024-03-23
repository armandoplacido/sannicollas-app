'use client'
import { useCallback, useEffect, useState } from 'react'

import { PaginationTable } from '@/components/pagination-table'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ListAlunoResponse } from '@/types/aluno'

import { getAlunosByTurmaQuery } from '../aluno-api'
import { alunoColumns } from './aluno-columns'
import { EditAlunoTable } from './edit-aluno-table'

export type EditAlunoCardProps = {
  turmaId: string
}

export const EditAlunoCard = ({ turmaId }: EditAlunoCardProps) => {
  const [data, setData] = useState<ListAlunoResponse | null>(null)
  const [pagination, SetPagination] = useState({
    page: 0,
    perPage: 10,
    searchParams: '',
    totalElements: 0,
    totalPages: 1,
  })

  const handleFetch = useCallback(async () => {
    const result = await getAlunosByTurmaQuery({ id: turmaId, name: pagination.searchParams, page: pagination.page })
    setData(result)
    SetPagination((prev) => {
      return {
        ...prev,
        page: result.pageable.pageNumber,
        perPage: result.pageable.pageSize,
        totalElements: result.totalElements,
        totalPages: result.totalPages,
      }
    })
  }, [turmaId, pagination.page, pagination.searchParams])

  const handleChangePage = (page: number) => {
    SetPagination((prev) => {
      return {
        ...prev,
        page,
      }
    })
  }

  useEffect(() => {
    handleFetch()
  }, [handleFetch])

  if (!data) return <p>No profile data</p>

  return (
    <Card className="w-full">
      <CardHeader>
        <h1 className="text-4xl font-semibold">Alunos</h1>
      </CardHeader>
      <CardContent>
        <Input
          placeholder="Nome do aluno"
          value={pagination.searchParams}
          onChange={(event) =>
            SetPagination((prev) => {
              return {
                ...prev,
                searchParams: event.target.value,
              }
            })
          }
          className="mb-3 max-w-sm"
        />
        <EditAlunoTable data={data.content} columns={alunoColumns} />
      </CardContent>
      <CardFooter>
        <PaginationTable pagination={pagination} onChangePage={handleChangePage} />
      </CardFooter>
    </Card>
  )
}
