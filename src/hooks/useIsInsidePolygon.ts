export const useIsInsidePolygon = (
  polygonPoints: google.maps.LatLngLiteral[]
) => {
  const isInsidePolygon = (lat: number, lng: number) => {
    const polygon = new window.google.maps.Polygon({ paths: polygonPoints });
    const point = new window.google.maps.LatLng(lat, lng);
    return window.google.maps.geometry.poly.containsLocation(point, polygon);
  };

  return isInsidePolygon;
};
