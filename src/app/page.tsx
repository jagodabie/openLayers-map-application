'use client';
import styled from '@emotion/styled';
import MapComponent from '@/components/map/Map';
import { useState } from 'react';
import { useMap } from '@/hooks/useMap';
import { DrawType, Nullable } from '@/types';
import { Loading } from '@/components/loading/Loading';
import { useFetch } from '@/hooks/useFetch';
import { CustomAlert } from '@/components/alert/Alert';
import { Sidebar } from '@/components/sidebar/Sidebar';
import { CustomDrawer } from '@/components/drawer/Drawer';

const Main = styled.main`
  display: flex;
  justify-content: space-between;
`;

export default function MapPage() {
  const [selectedType, setSelectedType] = useState<Nullable<DrawType>>(null);
  const { mapElement, wktString, setWktString } = useMap(selectedType);

  const { data, loading, error, handlePost } = useFetch({
    url: 'http://localhost:3001/wkt',
    method: 'POST',
  });

  return (
    <Main>
      <CustomDrawer
        children={
          <Sidebar
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            wktString={wktString}
            setWktString={setWktString}
            handlePost={handlePost}
          />
        }
      />
      <MapComponent mapElement={mapElement} />
      <Loading isLoading={loading} />
      {error && <CustomAlert message={error?.message} severity='error' />}
      {data && (
        <CustomAlert
          message={`Item ${data?.id} was created successfully!`}
          severity='success'
        />
      )}
    </Main>
  );
}
