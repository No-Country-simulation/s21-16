import styles from './Reviews.module.css';

const reviews = [
  {
    name: 'Mariela Herrera',
    restaurant: 'Java Coffee',
    image: '/Mariela Herrera.JPG',
    comment: 'FoodieScan ha revolucionado la forma en que presentamos nuestro menú. Ahora nuestros clientes pueden verlo al instante con solo escanear un QR, sin necesidad de imprimir nuevas cartas. ¡Es práctico y moderno!',
  },
  {
    name: 'Samuel Florez',
    restaurant: 'Tailwind Bristo',
    image: '/Samuel.JPG',
    comment: 'Desde que usamos FoodieScan, actualizar precios y platillos es cuestión de segundos. Nos ha ahorrado tiempo y ha mejorado la experiencia de nuestros clientes. ¡Totalmente recomendado!',
  },
  {
    name: 'Carlos Martínez',
    restaurant: 'Café de la Plaza',
    image: '/Carlos.JPG',
    comment: 'La integración de FoodieScan en nuestro restaurante ha simplificado todo. Ya no hay necesidad de cambiar los menús manualmente. Nuestros clientes están encantados con la comodidad.',
  },
  {
    name: 'Laura Gómez',
    restaurant: 'El Rincón del Sabor',
    image: '/Laura.JPG',
    comment: 'Es increíble lo fácil que es administrar el menú ahora. La actualización de platillos es tan simple que no tenemos que preocuparnos por nada. Recomendado 100%.',
  }
];



const Reviews = () => {
  return (
    <div className={styles.reviewsContainer}>
      <h2 className={styles.title}>¿Qué dicen nuestros clientes?</h2>
      <div className={styles.reviewsList}>
        {reviews.map((review, index) => (
          <div key={index} className={styles.reviewCard}>
            <div className={styles.leftSide}>
              <img src={review.image} alt={review.name} className={styles.profilePic} />
              <div className={styles.name}>{review.name}</div>
              <div className={styles.restaurant}>{review.restaurant}</div>
            </div>
            <div className={styles.comment}>{review.comment}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
