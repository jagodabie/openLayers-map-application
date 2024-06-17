import { DrawType, Nullable } from '@/types';

export type MenuProps = {
  onSelect: (type: Nullable<DrawType>) => void;
};
