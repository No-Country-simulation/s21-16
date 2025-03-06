import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";
import styles from "./MenuView.module.css";

const MySwal = withReactContent(Swal);

const MenuView = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState({ categories: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      MySwal.fire({
        title: "Acceso denegado",
        text: "Por favor inicia sesión o regístrate",
        icon: "warning",
        confirmButtonText: "Iniciar sesión",
      }).then(() => {
        navigate("/signin");
      });
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  useEffect(() => {
    if (isAuthenticated) {
      const fetchMenu = async () => {
        try {
          const response = await axios.get("/api/menu");
          setMenu(response.data || { categories: [] });
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      fetchMenu();
    }
  }, [isAuthenticated]);

  const handleCreateMenu = () => {
    navigate("/dashboard/menu/create");
  };

  const handleEditMenu = (id) => {
    navigate(`/dashboard/menu/edit/${id}`);
  };

  if (!isAuthenticated) return null;
  if (loading) return <p>Cargando menú...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Cartas</h1>
        {menu?.categories?.length > 0 ? (
          <div className={styles.menuContainer}>
            {menu.categories.map((category) => (
              <div key={category.id} className={styles.category}>
                <span>{category.name}</span>
                <button
                  className={styles.editButton}
                  onClick={() => handleEditMenu(category.id)}
                >
                  Editar
                </button>
              </div>
            ))}
          </div>
        ) : (
          <button onClick={handleCreateMenu} className={styles.createButton}>
            + Nueva carta
          </button>
        )}
      </div>
    </div>
  );
};

export default MenuView;
