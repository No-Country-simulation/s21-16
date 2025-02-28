import { Link } from "react-router-dom";
import "./Navbar.css"; // Importa el archivo CSS para los estilos

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Logo" />{" "}
        {/* Reemplaza '/logo.png' con la ruta a tu logo */}
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#inicio">Inicio</a>
        </li>
        <li>
          <a href="#Functionalities">Funcionalidades</a>
        </li>
        <li>
          <a href="#Beneffits">Beneficios</a>
        </li>
        <li>
          <a href="#menu-demo">Menú Demo</a>
        </li>
        <li>
          <a href="#contacto">Reseñas</a>
        </li>
        <li>
          <Link to={"/signin"}>
            {" "}
            <span id="loginButton">Iniciar Sesión</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
