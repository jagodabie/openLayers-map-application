import { useState, useRef, useCallback } from 'react';

export const useResizeDrawer = () => {
  const [drawerWidth, setDrawerWidth] = useState(300);
  const handleRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const handleMouseMove = (e: MouseEvent) => {
      if (handleRef.current) {
        const newWidth =
          e.clientX - handleRef.current.getBoundingClientRect().left;
        if (newWidth > 300 && newWidth < 800) {
          setDrawerWidth(newWidth);
        }
      }
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, []);

  return { drawerWidth, handleMouseDown, handleRef };
};

export default useResizeDrawer;
