import { Handle, ResizableDrawer } from './Drawer.styled';
import useResizeDrawer from '@/hooks/useResizeDrawer';

export const CustomDrawer = ({ children }: { children: React.ReactNode }) => {
  const { drawerWidth, handleMouseDown, handleRef } = useResizeDrawer();

  return (
    <ResizableDrawer
      variant='persistent'
      anchor='left'
      open={true}
      width={drawerWidth}
    >
      <div ref={handleRef}>
        {children}
        <Handle onMouseDown={handleMouseDown} />
      </div>
    </ResizableDrawer>
  );
};
