import { useMemo } from "react";
import styles from "./PageSelector.module.css";

interface PageSelectorProps {
  curPage: number;
  totalPages: number | undefined;
  setCurPage: React.Dispatch<React.SetStateAction<number>>;
}

const PageSelector: React.FC<PageSelectorProps> = ({
  curPage,
  totalPages = 10,
  setCurPage,
}) => {
  const pageDisplay = useMemo(() => {
    const pages: number[] = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }, [totalPages]);

  return (
    <div className={styles.pages}>
      {pageDisplay.map((page: number) => {
        if (page !== curPage) {
          return (
            <span
              key={page}
              className={styles.pageItem}
              onClick={() => setCurPage(page)}
            >
              {page}
            </span>
          );
        } else {
          return (
            <span
              key={page}
              className={styles.activePage}
              onClick={() => setCurPage(page)}
            >
              {page}
            </span>
          );
        }
      })}
    </div>
  );
};

export default PageSelector;
