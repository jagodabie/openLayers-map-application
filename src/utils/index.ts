import WKT from 'ol/format/WKT';
import { DrawEvent } from 'ol/interaction/Draw';

export const createWKTString = (event: DrawEvent) => {
  return new WKT().writeFeature(event.feature);
};
