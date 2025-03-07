import styles from "./Functionalities.module.css";

const functionalities = [
  {
    img: "/Registro y acceso.JPG",
    title: "Registro y acceso seguro",
    description: [
      "Crea tu cuenta y gestiona tu menú digital con facilidad.",
      "Tus datos estarán siempre protegidos con autenticación segura.",
    ],
  },
  {
    img: "/unico.JPG",
    title: "QR único y acceso instantáneo",
    description: [
      "Genera un código QR exclusivo para tu restaurante.",
      "Tus clientes podrán acceder al menú sin descargar apps.",
      "Descarga el QR en PDF o imagen para imprimirlo fácilmente.",
    ],
  },
  {
    img: "/Ahorro y sos.JPG",
    title: "Ahorro y sostenibilidad",
    description: [
      "Olvídate de los costos de impresión y cambios en papel.",
      "Mejora la higiene reduciendo el contacto con menús físicos.",
      "Gestiona tu carta desde cualquier dispositivo, en cualquier momento.",
    ],
  },
  {
    img: "/personalizado.JPG",
    title: "Menús digitales personalizables",
    description: [
      "Agrega categorías, platos, descripciones, imágenes y precios.",
      "Edita o desactiva platillos en tiempo real sin complicaciones.",
      "Visualiza una vista previa antes de publicar tu menú.",
    ],
  },
];

const Functionalities = () => {
  return (
    <section id="functionalities" className={styles.functionalities}>
      <h2 className={styles.title}>Funcionalidades de Foodiescan</h2>
      <div className={styles.grid}>
        {functionalities.map((item, index) => (
          <div key={index} className={styles.card}>
            <img src={item.img} alt={item.title} className={styles.image} />
            <div className={styles.text}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              {item.description.map((desc, i) => (
                <p key={i} className={styles.cardText}>{desc}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Functionalities;
