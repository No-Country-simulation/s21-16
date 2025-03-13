import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiHome, FiLogOut } from "react-icons/fi";
import { MdQrCode } from "react-icons/md";
import Swal from "sweetalert2";
import useAuthStore from "../../store/authStore";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const [active, setActive] = useState("inicio");
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Se cerrará tu sesión.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        navigate("/");

        Swal.fire({
          title: "Sesión cerrada",
          text: "Has cerrado sesión correctamente.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
      }
    });
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <img src="/logo.png" alt="Logo" className={styles.logo} />
      </div>

      <nav className={styles.nav}>
        <Link to="/dashboard">
          <button
            className={`${styles.navItem} ${
              active === "inicio" ? styles.active : ""
            }`}
            onClick={() => setActive("inicio")}
          >
            <FiHome className={styles.icon} /> Inicio
          </button>
        </Link>
        <Link to="/dashboard/qr">
          <button
            className={`${styles.navItem} ${
              active === "qr" ? styles.active : ""
            }`}
            onClick={() => setActive("qr")}
          >
            <MdQrCode className={styles.icon} /> QR
          </button>
        </Link>
      </nav>

      <button className={styles.logout} onClick={handleLogout}>
        <FiLogOut className={styles.icon} /> Cerrar sesión
      </button>
    </aside>
  );
};

export default Sidebar;
