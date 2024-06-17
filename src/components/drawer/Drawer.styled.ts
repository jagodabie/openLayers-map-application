import styled from '@emotion/styled';
import { Drawer } from '@mui/material';
type DrawerProps = {
  width: number;
};

export const ResizableDrawer = styled(Drawer)<DrawerProps>`
  .MuiDrawer-paper {
    width: ${({ width }) => width}px;
    overflow: visible;
  }
`;

export const Handle = styled.div`
  width: 10px;
  cursor: ew-resize;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
`;
