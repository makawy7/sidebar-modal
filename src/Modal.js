import { FaTimes } from "react-icons/fa";
import { useAppContext } from "./Context";

function Modal() {
  const { showModal, setShowModal } = useAppContext();
  const handleModal = () => {
    setShowModal(false);
  };
  return (
    <div className={`modal-overlay ${showModal && "show-modal"}`}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button onClick={handleModal} className="close-modal-btn">
          <FaTimes />
        </button>
      </div>
    </div>
  );
}

export default Modal;
