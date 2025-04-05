import icon from "../assets/point-name-icon.png";
import { useMarkerContext } from "../context/MarkerContext";
import { MarkerType } from "../lib/types";
import { getFormattedDate } from "../utils/getFormattedDate";
import { getFormattedTime } from "../utils/getFormattedTime";

function PointsList() {
  const { markers, setActivePoint, activeMarker } = useMarkerContext();

  const formatDescription = (point: MarkerType) => {
    const date = getFormattedDate(point.createdAt);
    const time = getFormattedTime(point.createdAt);
    return `Criado em: ${date} - ${time}`;
  };

  return (
    <div className="points-list">
      <div className="points-list__header">Listagem de pontos</div>
      <div className="points-list__body">
        {markers.length === 0 && (
          <div className="points-list__empty-msg">
            Sem pontos de monitoramento para exibir no momento.
          </div>
        )}
        {markers.length > 0 &&
          markers.map((point, index) => (
            <div
              onClick={() => setActivePoint(point)}
              key={index}
              className={`points-list__item ${
                activeMarker?.id === point.id ? "active" : ""
              }`}
            >
              <div className="points-list__item-title">
                <img src={icon} title={`${point}`} alt="icon" />
                {point.name}
              </div>
              <div className="points-list__item-details">
                {formatDescription(point)}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default PointsList;
