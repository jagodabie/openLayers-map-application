import { DrawType, Nullable } from '@/types';

export type FormProps = {
  type: Nullable<DrawType>;
  onSubmit: (data: Record<string, unknown>) => void;
  wktString: string | null;
  setWktString: (wktString: string | '') => void;
  setSelectedType: (type: Nullable<DrawType>) => void;
};
