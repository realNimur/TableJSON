import React, { useEffect } from 'react';
import styles from './Paginator.module.scss';

export const Paginator = ({ currentPage, countOfPage, setCurrentPage }) => {
  const paginator = Array.from({ length: countOfPage }, (_, i) => i + 1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className={styles.paginator}>
      {paginator.map((page, index) => {
        return (
          <p
            className={`${styles.paginator__item} ${
              currentPage === page ? styles.active : ''
            }`}
            onClick={() => setCurrentPage(page)}
            key={index}
          >
            {page}
          </p>
        );
      })}
    </div>
  );
};
