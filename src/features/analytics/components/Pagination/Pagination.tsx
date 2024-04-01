import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PaginationStyles from "./Pagination.module.scss"

type Page = {
  name: string;
  path: string;
};

interface PaginationProps {
  pages: Page[];
}

const Pagination = ({ pages }: PaginationProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const paginationRef = React.createRef<HTMLDivElement>(); // Use createRef for class components
  
  useEffect(() => {
    // Restore scroll position from sessionStorage after page load
    const savedScrollPosition = sessionStorage.getItem('paginationScrollPosition');
    if (savedScrollPosition && paginationRef.current) {
      paginationRef.current.scrollLeft = Number(savedScrollPosition);
    }

    // Save scroll position to sessionStorage before page unload
    const saveScrollPosition = () => {
      if (paginationRef.current) {
        sessionStorage.setItem('paginationScrollPosition', paginationRef.current.scrollLeft.toString());
      }
    };
    
    // Add the event listener when the component mounts
    window.addEventListener('beforeunload', saveScrollPosition);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('beforeunload', saveScrollPosition);
    };
  }, []); // The empty array ensures this effect only runs on mount and unmount

  const handleItemClick = (path: string) => {
    // Save current scroll position before navigating
    if (paginationRef.current) {
      sessionStorage.setItem('paginationScrollPosition', paginationRef.current.scrollLeft.toString());
    }
    navigate(path);
  };

  return (
    <div ref={paginationRef} className={PaginationStyles.paginationContainer}>
      {pages.map((page, index) => (
        <div
          key={index}
          className={`${PaginationStyles.paginationItem} ${location.pathname === page.path ? PaginationStyles.active : ''}`}
          onClick={() => handleItemClick(page.path)}
        >
          {page.name}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
