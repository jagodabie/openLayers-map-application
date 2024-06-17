import { MapContainer } from './Map.styled';

const MapComponent: React.FC<{
  mapElement: React.RefObject<HTMLDivElement>;
}> = ({ mapElement }) => {
  return <MapContainer ref={mapElement} />;
};

export default MapComponent;
