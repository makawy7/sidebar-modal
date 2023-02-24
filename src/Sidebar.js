import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { links, social } from "./data";
import { MyContext } from "./Context";
import { useContext } from "react";

function Sidebar() {
  const { showSide, setShowSide } = useContext(MyContext);
  const closeSide = () => {
    setShowSide(false);
  };

  return (
    <aside className={`sidebar ${showSide && "show-sidebar"}`}>
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="coding addict" />
        <button onClick={closeSide} className="close-btn">
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.url}>
              {link.icon}
              {link.text}
            </a>
          </li>
        ))}
      </ul>
      <ul className="social-icons">
        {social.map((link) => (
          <li key={link.id}>
            <a href={link.url}>{link.icon}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
