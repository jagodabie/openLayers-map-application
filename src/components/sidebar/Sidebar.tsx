import { Nullable, DrawType } from '@/types';
import Form from '../form/Form';
import Menu from '../menu/Menu';

export const Sidebar = ({
  selectedType,
  setSelectedType,
  wktString,
  setWktString,
  handlePost,
}: {
  selectedType: Nullable<DrawType>;
  setSelectedType: (type: Nullable<DrawType>) => void;
  wktString: string | null;
  setWktString: (wktString: string | '') => void;
  handlePost: (data: Record<string, unknown>) => void;
}) => {
  return (
    <>
      {selectedType ? (
        <Form
          wktString={wktString}
          type={selectedType}
          setSelectedType={(type: Nullable<DrawType>) => setSelectedType(type)}
          setWktString={setWktString}
          onSubmit={handlePost}
        />
      ) : (
        <Menu onSelect={(type: Nullable<DrawType>) => setSelectedType(type)} />
      )}
    </>
  );
};
