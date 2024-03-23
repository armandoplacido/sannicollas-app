'use client'

import { Pagination, PaginationContent, PaginationNext, PaginationPrevious } from './ui/pagination'

type PaginationProps = {
  pagination: {
    page: number
    perPage: number
    totalElements: number
    totalPages: number
  }
  onChangePage: (page: number) => void
}

export const PaginationTable = ({ pagination, onChangePage }: PaginationProps) => {
  const { page, perPage, totalElements, totalPages } = pagination
  const currentMinimalSumElementsPage = perPage * page + 1
  const currentMaxSumElementsPage = perPage * (page + 1)
  const hasOverflowSumElementsPage = currentMaxSumElementsPage > totalElements

  const currentPage = page + 1
  const prevPage = Math.max(1, page - Math.floor(totalPages / 2))
  const nextPage = Math.min(totalPages, prevPage + totalPages - 1)

  return (
    <div className="flex w-full items-center justify-between">
      <div>
        {currentMinimalSumElementsPage} - {hasOverflowSumElementsPage ? totalElements : currentMaxSumElementsPage} de{' '}
        {totalElements}
      </div>
      <div className="flex items-center gap-3">
        <span className="w-full">
          Página {currentPage} de {totalPages}
        </span>
        <Pagination>
          <PaginationContent>
            <PaginationPrevious onClick={() => onChangePage(prevPage - 1)} />
            <PaginationNext onClick={() => onChangePage(nextPage - 1)} />
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
