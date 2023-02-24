import { FaBars } from "react-icons/fa";
import { useAppContext } from "./Context";

function Home() {
  const { setShowModal, setShowSide } = useAppContext();
  const handleModal = () => {
    setShowModal(true);
  };
  const handleSide = () => {
    setShowSide(true);
  };

  return (
    <main>
      <button onClick={handleSide} className="sidebar-toggle">
        <FaBars />
      </button>
      <button onClick={handleModal} className="btn">
        show modal
      </button>
    </main>
  );
}

export default Home;
