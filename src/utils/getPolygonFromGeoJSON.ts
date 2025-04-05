import geojson from "../assets/polygon.json";

export const getPolygonPath = () => {
  const coordinates = geojson.features[0].geometry.coordinates[0] as [
    number,
    number
  ][];
  return coordinates.map(([lng, lat]) => ({ lat, lng }));
};
