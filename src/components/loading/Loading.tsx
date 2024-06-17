import { StyledLoading } from './Loading.styled';

export const Loading: React.FC<{
  isLoading: boolean;
}> = ({ isLoading }) => {
  if (!isLoading) return null;

  return <StyledLoading>Loading...</StyledLoading>;
};
