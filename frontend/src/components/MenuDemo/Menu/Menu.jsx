import styles from "./Menu.module.css";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.menuSection}>
      {/* Logo que redirige a la página principal */}
      <div className={styles.logoContainer}>
        <img
          src="/logo.png"
          alt="Logo del Restaurante"
          className={styles.logo}
          onClick={() => navigate("/")}
        />
      </div>

      <h2 className={styles.title}>Menú - HealthyBites</h2>

      <div className={styles.category}>
        <h3 className={styles.categoryTitle}>Entradas</h3>
        <div className={styles.dish}>
          <img
            src="/Ensalada Vegana.JPG"
            alt="Ensalada Vegana"
            className={styles.dishImage}
          />
          <div className={styles.dishDetails}>
            <h4>Ensalada Vegana</h4>
            <p className={styles.dishDescription}>
              Una deliciosa mezcla de quinoa, aguacate, tomate y aderezo de limón.
            </p>
            <p className={styles.dishPrice}>$12</p>
            <div className={styles.symbols}>
              <span className={styles.vegSymbol}>🌱</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.category}>
      <h3 className={styles.categoryTitle}>Platos Principales</h3>
      <div className={styles.dish}>
        <img
          src="/Salmón a la Parrilla.JPG"
          alt="Salmón a la Parrilla"
          className={styles.dishImage}
        />
        <div className={styles.dishDetails}>
          <h4>Salmón a la Parrilla</h4>
          <p className={styles.dishDescription}>
            Salmón fresco a la parrilla con una guarnición de arroz integral y espárragos.
          </p>
          <p className={styles.dishPrice}>$18</p>
          <div className={styles.symbols}>
            <span className={styles.ecoSymbol}>🐟</span>
          </div>
        </div>
      </div>
      <div className={styles.dish}>
        <img
          src="/Pollo a la Plancha.JPG"
          alt="Pollo a la Plancha"
          className={styles.dishImage}
        />
        <div className={styles.dishDetails}>
          <h4>Pollo a la Plancha</h4>
          <p className={styles.dishDescription}>
            Pollo marinado a la plancha, acompañado de verduras al vapor y patatas asadas.
          </p>
          <p className={styles.dishPrice}>$15</p>
        </div>
      </div>
    </div>

    <div className={styles.category}>
      <h3 className={styles.categoryTitle}>Postres</h3>
      <div className={styles.dish}>
        <img
          src="/postre.JPG"
          alt="Postre de Zanahoria y Banano"
          className={styles.dishImage}
        />
        <div className={styles.dishDetails}>
          <h4>Postre de Zanahoria y Banano</h4>
          <p className={styles.dishDescription}>
            Un delicioso postre saludable con zanahoria, banano y nueces.
          </p>
          <p className={styles.dishPrice}>$8</p>
          <div className={styles.symbols}>
            <span className={styles.naturalSymbol}>🍌</span>
          </div>
        </div>
      </div>
    </div>

    <div className={styles.category}>
      <h3 className={styles.categoryTitle}>Bebidas</h3>
      <div className={styles.dish}>
        <img
          src="/jugo mango.JPG"
          alt="Jugo Natural de Mango"
          className={styles.dishImage}
        />
        <div className={styles.dishDetails}>
          <h4>Jugo Natural de Mango</h4>
          <p className={styles.dishDescription}>
            Jugo fresco de mango, natural y sin azúcares añadidos.
          </p>
          <p className={styles.dishPrice}>$5</p>
        </div>
      </div>
      <div className={styles.dish}>
        <img
          src="/vino.JPG"
          alt="Vino Blanco"
          className={styles.dishImage}
        />
        <div className={styles.dishDetails}>
          <h4>Vino Blanco</h4>
          <p className={styles.dishDescription}>
            Vino blanco de excelente calidad para acompañar tu comida.
          </p>
          <p className={styles.dishPrice}>$10</p>
          <div className={styles.symbols}>
            <span className={styles.alcoholSymbol}>🍷</span>
          </div>
        </div>
      </div>
    </div>

    <div className={styles.category}>
      <h3 className={styles.categoryTitle}>Comida Árabe</h3>
      <div className={styles.dish}>
        <img
          src="/hummus.JPG"
          alt="Hummus"
          className={styles.dishImage}
        />
        <div className={styles.dishDetails}>
          <h4>Hummus</h4>
          <p className={styles.dishDescription}>
            Un delicioso hummus acompañado de pan de pita recién horneado.
          </p>
          <p className={styles.dishPrice}>$9</p>
        </div>
      </div>
    </div>

    <div className={styles.category}>
      <h3 className={styles.categoryTitle}>Comida Griega</h3>
      <div className={styles.dish}>
        <img
          src="/moussaka.JPG"
          alt="Moussaka Griega"
          className={styles.dishImage}
        />
        <div className={styles.dishDetails}>
          <h4>Moussaka Griega</h4>
          <p className={styles.dishDescription}>
            Lasaña tradicional griega con berenjenas, carne y salsa bechamel.
          </p>
          <p className={styles.dishPrice}>$14</p>
        </div>
      </div>
    </div>

    </section>
  );
};

export default Menu;
