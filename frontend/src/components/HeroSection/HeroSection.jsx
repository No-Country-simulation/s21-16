import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section id="hero" className={styles.heroContainer}>
      <img src="/Menu.JPG" alt="Menú digital" className={styles.heroImage} />
      <div className={styles.heroText}>
        <h1 className={styles.title}>
          Menús digitales fáciles y atractivos para tu restaurante
        </h1>
        <p className={styles.description}>
          Crea, personaliza y comparte tu menú en segundos. Con FoodieScan, tus
          clientes podrán acceder a tu carta escaneando un simple código QR.
          ¡Olvídate de los menús impresos y actualiza tu oferta al instante!
        </p>
        <a href="/signin" className={styles.createMenuButton}>
          Crea tu menú
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
