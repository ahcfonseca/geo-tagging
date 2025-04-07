import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { MarkerType } from "../lib/types";

interface MarkerContextProps {
  activeMarker: MarkerType | null;
  markers: MarkerType[];
  addMarker: (position: MarkerType["position"]) => void;
  moveMarker: (id: string, position: MarkerType["position"]) => void;
  removeMarker: (id: string) => void;
  clearMarkers: () => void;
  setActivePoint: (marker: MarkerType | null) => void;
}

const MarkerContext = createContext<MarkerContextProps | null>(null);

export const MarkerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [markers, setMarkers] = useState<MarkerType[]>([]);
  const [activeMarker, setActiveMarker] = useState<MarkerType | null>(null);

  const addMarker = (position: MarkerType["position"]) => {
    const newMarker: MarkerType = {
      id: uuidv4(),
      position,
      createdAt: new Date(),
      name: `Ponto nº ${String(markers.length + 1).padStart(3, "0")}`,
    };
    setMarkers((prev) => [...prev, newMarker]);
    setActiveMarker(null);
  };

  const moveMarker = (id: string, position: MarkerType["position"]) => {
    setMarkers((prev) =>
      prev.map((m) => (m.id === id ? { ...m, position } : m))
    );
  };

  const removeMarker = (id: string) => {
    setMarkers((prev) => prev.filter((m) => m.id !== id));
    setActiveMarker(null);

    // here we rename the markers after removing one to keep the order consistent
    setMarkers((prev) =>
      prev.map((m, index) => ({
        ...m,
        name: `Ponto nº ${String(index + 1).padStart(3, "0")}`,
      }))
    );
  };

  const clearMarkers = () => {
    setMarkers([]);
    setActiveMarker(null);
  };

  const setActivePoint = (marker: MarkerType | null) => {
    if (marker?.id === activeMarker?.id) {
      return;
    }

    setActiveMarker((prev) => (prev?.id === marker?.id ? null : marker));
  };

  return (
    <MarkerContext.Provider
      value={{
        activeMarker,
        markers,
        addMarker,
        moveMarker,
        removeMarker,
        clearMarkers,
        setActivePoint,
      }}
    >
      {children}
    </MarkerContext.Provider>
  );
};

export const useMarkerContext = () => {
  const context = useContext(MarkerContext);
  if (!context)
    throw new Error("useMarkerContext must be used within MarkerProvider");
  return context;
};
