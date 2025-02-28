
import { useNavigate } from "react-router-dom";
import styles from "./MenuDemo.module.css";

const MenuDemo = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.menuDemo}>
      <h2 className={styles.title}>Conoce nuestro Menu - Demo</h2>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src="/MenuDemo.JPG" alt="Menú Demo" className={styles.image} />
        </div>
        <div className={styles.text}>
          <p className={styles.description}>
            Con FoodieScan, tu carta digital estará disponible en todo momento para que tus comensales exploren cada platillo de forma fácil y rápida. 
            Haz que la experiencia en tu restaurante sea más ágil, moderna y deliciosa.
          </p>
          <button className={styles.button} onClick={() => navigate("/menuDemo")}>
            Menú - Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuDemo;
