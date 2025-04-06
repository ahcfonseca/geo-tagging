import { useState } from "react";
import { useMarkerContext } from "../context/MarkerContext";
import { DEFAULT_LOCATION_LAT, DEFAULT_LOCATION_LNG } from "../lib/constants";
import ConfirmationModal from "./ConfirmationModal";
import Button from "./ui/Button";
import MarkerIcon from "./ui/icons/MarkerIcon";
import TrashIcon from "./ui/icons/TrashIcon";

function Controls() {
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [action, setAction] = useState<"removeMarker" | "clearMarkers" | "">(
    ""
  );

  const { markers, activeMarker, removeMarker, clearMarkers, addMarker } =
    useMarkerContext();

  const handleAddMarker = () => {
    addMarker({
      lat: DEFAULT_LOCATION_LAT,
      lng: DEFAULT_LOCATION_LNG,
    });
  };

  const handleConfirmAction = () => {
    if (action === "removeMarker" && activeMarker) {
      removeMarker(activeMarker.id);
    } else if (action === "clearMarkers") {
      clearMarkers();
    }
    setIsConfirmationModalOpen(false);
    setAction("");
  };

  const openConfirmationModal = (
    actionType: "removeMarker" | "clearMarkers"
  ) => {
    setAction(actionType);
    setIsConfirmationModalOpen(true);
  };

  return (
    <>
      <div className="controls">
        {activeMarker && (
          <Button
            onButtonClick={() => openConfirmationModal("removeMarker")}
            type="danger"
            iconPosition="right"
          >
            Deletar PIN <TrashIcon size={11} color="#ffffff" />
          </Button>
        )}

        <Button
          iconPosition="right"
          onButtonClick={handleAddMarker}
          type="primary"
        >
          Adicionar novo <MarkerIcon size={11} color="#556476" />
        </Button>

        {markers.length > 0 && (
          <Button
            iconPosition="right"
            onButtonClick={() => openConfirmationModal("clearMarkers")}
            type="danger"
          >
            Deletar todos <TrashIcon size={11} color="#ffffff" />
          </Button>
        )}
      </div>

      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        onClose={() => setIsConfirmationModalOpen(false)}
        onConfirm={handleConfirmAction}
        action={action}
      />
    </>
  );
}

export default Controls;
