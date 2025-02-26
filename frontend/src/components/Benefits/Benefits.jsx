import styles from "./Benefits.module.css";

const Benefits = () => {
  return (
    <section className={styles.beneffits}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h2 className={styles.title}>Beneficios de utilizar</h2>
          <h2 className={styles.title}>Foodiescan en tu negocio</h2>
          <p className={styles.description}>
            Con FoodieScan, toda la información sobre tu menú está organizada en una única plataforma accesible, lo que reduce el desorden y mejora la eficiencia operativa. 
            ¡Conoce lo que podemos hacer por tu negocio!
          </p>
          <ul className={styles.list}>
            <li>✅ Menús sin costos de impresión – Ahorra en papel y actualiza tu oferta en segundos.</li>
            <li>✅ Mejor experiencia para el cliente – Accede a una carta digital sin descargas ni complicaciones.</li>
            <li>✅ Gestión ágil y desde cualquier lugar – Edita tu menú desde cualquier dispositivo.</li>
            <li>✅ Mayor higiene y sostenibilidad – Reduce el contacto físico y apuesta por lo digital.</li>
            <li>✅ Actualizaciones en tiempo real – Modifica tu menú al instante sin necesidad de contactar a diseñadores o imprimir nuevas versiones.</li>
            <li>✅ Mayor alcance y visibilidad – Comparte tu menú digital en redes sociales o en tu sitio web para atraer más clientes.</li>
          </ul>
        </div>
        <div className={styles.imageContainer}>
          <img src="/Beneficios.JPG" alt="Beneficios de Foodiescan" className={styles.image} />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
