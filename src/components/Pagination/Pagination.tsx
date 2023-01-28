import React from 'react';
import { usePagination, DOTS } from '../../hooks/usePagination';
import './Pagination.scss';

interface PaginationProps {
  currentPage: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
  totalDataCount: number,
  pageSize: number,
  siblingCount: number,
}

const Pagination = (props: PaginationProps) => {
  const {
    setCurrentPage,
    totalDataCount,
    pageSize,
    siblingCount,
    currentPage
  } = props

  const paginationRange = usePagination({ totalDataCount, pageSize, siblingCount, currentPage })

  const nextPage = () => {
    if (currentPage < pageSize) {
      setCurrentPage(prev => prev + 1);
    }
    return
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
    return
  }

  const changePage = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const currentPage = Number(target.getAttribute('data-page'));
    setCurrentPage(currentPage);
  }

  return (
    <div className="pagination">
      <ul className="pagination__list">
        <li
          className="pagination__item"
          onClick={prevPage}
        >
          Prev
        </li>
        {
          paginationRange?.map((pageNumber, index) => {
            if (pageNumber === DOTS) {
              return (
                <li
                  className='pagination__item dots'
                  key={index}
                >
                  &#8230;
                </li>
              )
            }
            if (pageNumber === currentPage) {
              return (
                <li
                  className='pagination__item active-page'
                  key={index}
                >
                  {pageNumber}
                </li>
              )
            }
            return (
              <li
                className='pagination__item'
                onClick={changePage}
                data-page={pageNumber}
                key={index}
              >
                {pageNumber}
              </li>
            )
          })
        }
        <li
          className="pagination__item"
          onClick={nextPage}
        >
          Next
        </li>
      </ul>
    </div>
  )
}

export default Pagination
