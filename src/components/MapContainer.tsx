import { GoogleMap, PolygonF, useLoadScript } from "@react-google-maps/api";
import { useCallback, useRef } from "react";
import { useMarkerContext } from "../context/MarkerContext";
import { GOOGLE_MAPS_API } from "../lib/constants";
import { getPolygonPath } from "../utils/getPolygonFromGeoJSON";
import { MarkerItem } from "./MarkerItem";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -15.17888355255127,
  lng: -53.58057403564453,
};

const mapOptions = {
  mapTypeId: "satellite",
  zoom: 15,
  disableDefaultUI: true,
};

const libraries = String(["geometry"]);

const MapContainer = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API,
    [libraries]: libraries,
  });

  const { markers, setActivePoint } = useMarkerContext();

  const mapRef = useRef<google.maps.Map | null>(null);

  const onMapLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const polygonPoints = getPolygonPath();

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      options={mapOptions}
      onClick={() => setActivePoint(null)}
      onLoad={onMapLoad}
      onDrag={() => setActivePoint(null)}
      onZoomChanged={() => setActivePoint(null)}
    >
      <PolygonF
        paths={polygonPoints}
        options={{
          fillColor: "#e5e5e5",
          fillOpacity: 0.4,
          strokeColor: "#ffffff",
          strokeWeight: 2,
          strokeOpacity: 1,
          clickable: false,
          editable: false,
          draggable: false,
          zIndex: 1,
        }}
      />
      {markers.map((marker) => (
        <MarkerItem key={marker.id} marker={marker} />
      ))}
    </GoogleMap>
  );
};

export default MapContainer;
