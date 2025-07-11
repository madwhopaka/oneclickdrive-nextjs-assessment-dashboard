'use client'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from '@/components/ui/pagination'

interface ListingPaginationProps {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function ListingPagination({
  page,
  totalPages,
  onPageChange,
}: ListingPaginationProps) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => onPageChange(Math.max(1, page - 1))}
            className={page === 1 ? 'pointer-events-none opacity-50' : ''}
          />
        </PaginationItem>

        <PaginationItem>
          <span className="px-4 text-sm text-muted-foreground">
            Page {page} of {totalPages}
          </span>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            onClick={() => onPageChange(Math.min(totalPages, page + 1))}
            className={
              page === totalPages ? 'pointer-events-none opacity-50' : ''
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
