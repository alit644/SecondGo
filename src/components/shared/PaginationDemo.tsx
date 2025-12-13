"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { PaginationMeta } from "@/utils/types";

const PaginationDemo = ({ meta }: { meta: PaginationMeta }) => {

  const { page, totalPages } = meta;

  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, page - Math.floor(maxPagesToShow / 2));
    let endPage = startPage + maxPagesToShow - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    // Always show first page
    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) {
        pages.push("...");
      }
    }

    // Add page numbers in range
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Always show last page if not in current range
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push("...");
      }
      pages.push(totalPages);
    }

    return pages;
  };
  const createPageURL = (pageNumber: number) => {
    return pageNumber === 1 ? "?page=" : `?page=${pageNumber}`;
  };
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            // href={page > 1 ? `?page=${page - 1}` : '#'}
            href={page > 1 ? createPageURL(page - 1) : "#"}
            className={
              page <= 1
                ? "pointer-events-none cursor-not-allowed opacity-50"
                : ""
            }
          />
        </PaginationItem>

        {getPageNumbers().map((p, index) => (
          <PaginationItem key={index}>
            {p === "..." ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                // href={`?page=${p}`}
                href={createPageURL(Number(p))}
                isActive={p === page}
              >
                {p}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            // href={page < totalPages ? `?page=${page + 1}` : '#'}
            href={page < totalPages ? createPageURL(page + 1) : "#"}
            className={
              page >= totalPages
                ? "pointer-events-none cursor-not-allowed opacity-50"
                : ""
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationDemo;
