import { useMarkerContext } from "../context/MarkerContext";
import Button from "./ui/Button";
import MarkerIcon from "./ui/icons/MarkerIcon";
import TrashIcon from "./ui/icons/TrashIcon";

function Controls() {
  const { markers, activeMarker, removeMarker, clearMarkers } =
    useMarkerContext();

  return (
    <div className="controls">
      {activeMarker && (
        <Button
          onButtonClick={() => removeMarker(activeMarker.id)}
          type="danger"
        >
          Deletar PIN <TrashIcon size={11} color="#ffffff" />
        </Button>
      )}

      <Button type="primary">
        Adicionar novo <MarkerIcon size={11} color="#556476" />
      </Button>

      {markers.length > 0 && (
        <Button onButtonClick={clearMarkers} type="danger">
          Deletar todos <TrashIcon size={11} color="#ffffff" />
        </Button>
      )}
    </div>
  );
}

export default Controls;
