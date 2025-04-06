import Button from "./ui/Button";
import TrashIcon from "./ui/icons/TrashIcon";

type ConfirmationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  action: string;
};

function ConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  action,
}: ConfirmationModalProps) {
  const title =
    action === "removeMarker" ? "Excluir ponto" : "Excluir todos os pontos";

  if (!isOpen) return null;

  return (
    <div className="confirmation-modal">
      <div className="confirmation-modal__overlay">
        <div className="confirmation-modal__wrapper">
          <div className="confirmation-modal__header">
            <div className="confirmation-modal__topbar">
              <button
                onClick={onClose}
                className="confirmation-modal__close-button"
              >
                &#10006;
              </button>
            </div>
            <h2 className="confirmation-modal__title">{title}</h2>
          </div>
          <div className="confirmation-modal__body">
            <div className="confirmation-modal__message">
              <strong>Atenção!</strong>
              <p>Esta ação não pode ser desfeita</p>
            </div>
            <div className="confirmation-modal__actions">
              <Button
                onButtonClick={onConfirm}
                iconPosition="left"
                type="outline"
                outlineColor="#d20200"
              >
                <TrashIcon size={12} color="#d20200" /> Excluir
              </Button>
              <Button onButtonClick={onClose} type="secondary">
                Cancelar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
