import Home from "./Home";
import Sidebar from "./Sidebar";
import Modal from "./Modal";
import Context from "./Context";

function App() {
  return (
    <Context>
      <Home />
      <Modal />
      <Sidebar />
    </Context>
  );
}

export default App;
