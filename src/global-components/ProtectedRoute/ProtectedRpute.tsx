import React, { ReactElement, useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
import { getCookie } from '../../utils/api';


interface ProtectedRouteProps {
  element: ReactElement; 
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const navigate = useNavigate();
  const accessToken = getCookie('accessToken');

  useEffect(() => {
    if (!accessToken) {
      navigate('/auth', { replace: true });
    }
  }, [accessToken, navigate]);

  return accessToken ? element : null;
};

export default ProtectedRoute;
