import { useMemo } from 'react';

type Pagination = {
  totalDataCount: number,
  pageSize: number,
  siblingCount: number,
  currentPage: number
}

const range = (start: number, end: number) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, i) => i + start);
}

export const DOTS = '...';

export const usePagination = ({
  totalDataCount,
  pageSize,
  siblingCount = 1,
  currentPage
}: Pagination) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalDataCount / pageSize);

    // Pages numbers is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    // Calculate left and right sibling index and make sure they are within range 1 and totalPageCount

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    // Show only left or right sibling with DOTS

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount]
    }
    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount)

      return [firstPageIndex, DOTS, ...rightRange]
    }

    // Show left and right sibling with DOTS

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);

      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
    }

  }, [totalDataCount, pageSize, siblingCount, currentPage]);

  return paginationRange
}

export default usePagination