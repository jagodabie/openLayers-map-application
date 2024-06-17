export type Nullable<T> = T | null;

export type DrawType = 'Point' | 'LineString' | 'Polygon';

export const drawTypes = ['Point', 'LineString', 'Polygon'] as const;
