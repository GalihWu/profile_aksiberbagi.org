import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // bisa diganti "auto" kalau tidak ingin smooth
    });
  }, [pathname]);

  return null;
}
