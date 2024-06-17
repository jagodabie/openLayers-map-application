import { View } from 'ol';
import { Draw } from 'ol/interaction';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat } from 'ol/proj';
import { OSM } from 'ol/source';
import { Map } from 'ol';
import VectorSource from 'ol/source/Vector';
import { useRef, useState, useEffect } from 'react';
import { DrawType } from '@/types';
import { createWKTString } from '@/utils';

export const useMap = (drawType: DrawType | null) => {
  const mapInstance = useRef<Map | null>(null);
  const [drawInteraction, setDrawInteraction] = useState<Draw | null>(null);
  const [wktString, setWktString] = useState<string | null>(null);
  const mapElement = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mapElement.current && !mapInstance.current) {
      const map = new Map({
        target: mapElement.current,
        layers: [
          new TileLayer({
            source: new OSM(),
            preload: Infinity,
          }),
        ],
        view: new View({
          center: fromLonLat([19.1451, 51.9194]), // Center of Poland
          zoom: 6,
        }),
      });

      mapInstance.current = map;
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.setTarget(undefined);
        mapInstance.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (mapInstance.current && drawInteraction) {
      mapInstance.current.removeInteraction(drawInteraction);
    }

    if (drawType) {
      const interaction = new Draw({
        source: new VectorSource(),
        type: drawType,
      });

      interaction.on('drawend', (event) => {
        setWktString(createWKTString(event));
      });

      mapInstance.current?.addInteraction(interaction);
      setDrawInteraction(interaction);
    }
  }, [drawType]);

  return { mapElement, wktString, setWktString };
};
