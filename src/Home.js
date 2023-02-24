import { FaBars } from "react-icons/fa";
import { MyContext } from "./Context";
import { useContext } from "react";

function Home() {
  const { setShowModal, setShowSide } = useContext(MyContext);
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
