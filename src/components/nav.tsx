import navstyles from "../styles/nav.module.css";
import CarritoBoton from "../components/carritoBoton";
import Logo from "./logo";

function Nav() {
  return (
    <nav className={navstyles.nav}>
      <Logo />
      <ul>
        <li>
          <a aria-current="page" href="#" className={navstyles.active}>
            Frutas
          </a>
        </li>
        <li>
          <a href="#" className={navstyles.link}>
            Verduras
          </a>
        </li>
        <li>
          <a href="#" className={navstyles.link}>
            Carnicos
          </a>
        </li>
        <li>
          <a href="#" className={navstyles.link}>
            Carnicos
          </a>
        </li>
      </ul>
      <CarritoBoton count={3} />
    </nav>
  );
}

export default Nav;
