import { FaTimes } from "react-icons/fa";
import { MyContext } from "./Context";
import { useContext } from "react";

function Modal() {
  const { showModal, setShowModal } = useContext(MyContext);
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
