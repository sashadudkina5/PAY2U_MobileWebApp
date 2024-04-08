import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PaginationStyles from "./Pagination.module.scss";

type Page = {
  name: string;
  path: string;
};

interface PaginationProps {
  pages: Page[];
}

function Pagination({ pages }: PaginationProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const paginationRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem(
      "paginationScrollPosition"
    );
    if (savedScrollPosition && paginationRef.current) {
      paginationRef.current.scrollLeft = Number(savedScrollPosition);
    }
    const saveScrollPosition = () => {
      if (paginationRef.current) {
        sessionStorage.setItem(
          "paginationScrollPosition",
          paginationRef.current.scrollLeft.toString()
        );
      }
    };

    window.addEventListener("beforeunload", saveScrollPosition);

    return () => {
      window.removeEventListener("beforeunload", saveScrollPosition);
    };
  }, []); 

  const handleItemClick = (path: string) => {
    if (paginationRef.current) {
      sessionStorage.setItem(
        "paginationScrollPosition",
        paginationRef.current.scrollLeft.toString()
      );
    }
    navigate(path);
  };

  return (
    <div ref={paginationRef} className={PaginationStyles.paginationContainer}>
      {pages.map((page, index) => (
        <div
          key={index}
          className={`${PaginationStyles.paginationItem} ${
            location.pathname === page.path ? PaginationStyles.active : ""
          }`}
          onClick={() => handleItemClick(page.path)}
        >
          {page.name}
        </div>
      ))}
    </div>
  );
}

export default Pagination;
