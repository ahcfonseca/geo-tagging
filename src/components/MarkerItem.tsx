import { Marker } from "@react-google-maps/api";
import { MarkerType } from "../lib/types";
import { useMarkerContext } from "../context/MarkerContext";
import { getPolygonPath } from "../utils/getPolygonFromGeoJSON";
import { useState } from "react";
import { useIsInsidePolygon } from "../hooks/useIsInsidePolygon";
import moveOffIcon from "../assets/move-off.svg";
import moveOnIcon from "../assets/move-on.svg";

type MarkerItemProps = {
  marker: MarkerType;
};

export const MarkerItem = ({ marker }: MarkerItemProps) => {
  const { moveMarker, activeMarker, setActivePoint } = useMarkerContext();
  const [prevPosition, setPrevPosition] = useState(marker.position);

  const polygonPoints = getPolygonPath();
  const isInsidePolygon = useIsInsidePolygon(polygonPoints);

  const handleMarkerDragEnd = (e: google.maps.MapMouseEvent) => {
    const lat = e.latLng?.lat() || 0;
    const lng = e.latLng?.lng() || 0;
    if (isInsidePolygon(lat, lng)) {
      moveMarker(marker.id, { lat, lng });
      setPrevPosition({ lat, lng });
    } else {
      alert("Não é possível mover o marcador para fora da área demarcada.");
      moveMarker(marker.id, prevPosition);
      setPrevPosition(marker.position);
    }
  };

  const isActiveMarker = activeMarker?.id === marker.id;

  return (
    <Marker
      position={marker.position}
      draggable
      onDragStart={() => setActivePoint(marker)}
      onDragEnd={handleMarkerDragEnd}
      onClick={() => setActivePoint(marker)}
      icon={{
        url: isActiveMarker ? moveOnIcon : moveOffIcon,
        scaledSize: new window.google.maps.Size(48, 48),
      }}
    />
  );
};
