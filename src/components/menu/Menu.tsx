import Button from '@mui/material/Button';
import { MenuProps } from './index.types';
import { StyledMenu } from './index.styled';
import { drawTypes } from '@/types';

const Menu: React.FC<MenuProps> = ({ onSelect }) => {
  return (
    <StyledMenu>
      {drawTypes.map((type) => (
        <Button
          key={type}
          variant='contained'
          onClick={() => onSelect(type)}
          style={{ margin: '5px' }}
        >
          {type}
        </Button>
      ))}
    </StyledMenu>
  );
};

export default Menu;
