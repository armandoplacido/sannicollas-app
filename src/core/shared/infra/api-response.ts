export type Pageable = {
  pageNumber: number
  pageSize: number
}

export type ListApiResponse<Type = unknown> = {
  content: Type[]
  pageable: Pageable
  totalPages: number
  totalElements: number
}

export type ApiResponse<Type = unknown> = Type
