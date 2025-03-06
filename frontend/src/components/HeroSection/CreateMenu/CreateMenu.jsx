import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import styles from "./CreateMenu.module.css";

const CreateMenu = () => {
  const [categories, setCategories] = useState([]);
  const menuRef = useRef();

  const addCategory = () => {
    if (categories.length < 30) {
      setCategories([...categories, { name: "", dishes: [] }]);
    }
  };

  const updateCategory = (index, value) => {
    const newCategories = [...categories];
    newCategories[index].name = value;
    setCategories(newCategories);
  };

  const addDish = (categoryIndex) => {
    const newCategories = [...categories];
    if (newCategories[categoryIndex].dishes.length < 100) {
      newCategories[categoryIndex].dishes.push({
        id: Date.now(),
        name: "",
        image: "",
        price: "",
        description: "",
      });
      setCategories(newCategories);
    }
  };

  const updateDish = (categoryIndex, dishIndex, field, value) => {
    const newCategories = [...categories];
    newCategories[categoryIndex].dishes[dishIndex][field] = value;
    setCategories(newCategories);
  };

  const generatePDF = useReactToPrint({
    content: () => menuRef.current,
    documentTitle: "menu",
  });

  return (
    <div className={styles.container}>
      <h1>Crear Menú</h1>
      <button onClick={addCategory} className={styles.addButton}>
        Agregar Categoría
      </button>
      <div ref={menuRef} className={styles.menuContent}>
        <h2 className={styles.title}>Menú - HealthyBites</h2>
        {categories.map((category, catIndex) => (
          <div key={catIndex} className={styles.category}>
            <h3 className={styles.categoryTitle}>
              <input
                type="text"
                placeholder="Nombre de la Categoría"
                value={category.name}
                onChange={(e) => updateCategory(catIndex, e.target.value)}
                className={styles.input}
              />
            </h3>
            <button
              onClick={() => addDish(catIndex)}
              className={styles.addDishButton}
            >
              Agregar Plato
            </button>
            {category.dishes.map((dish, dishIndex) => (
              <div key={dish.id} className={styles.dish}>
                <input
                  type="text"
                  placeholder="Nombre del Plato"
                  value={dish.name}
                  onChange={(e) =>
                    updateDish(catIndex, dishIndex, "name", e.target.value)
                  }
                  className={styles.input}
                />
                <input
                  type="text"
                  placeholder="URL de la imagen"
                  value={dish.image}
                  onChange={(e) =>
                    updateDish(catIndex, dishIndex, "image", e.target.value)
                  }
                  className={styles.input}
                />
                <input
                  type="number"
                  placeholder="Precio en dólares"
                  value={dish.price}
                  onChange={(e) =>
                    updateDish(catIndex, dishIndex, "price", e.target.value)
                  }
                  className={styles.input}
                />
                <textarea
                  placeholder="Descripción e ingredientes"
                  value={dish.description}
                  onChange={(e) =>
                    updateDish(
                      catIndex,
                      dishIndex,
                      "description",
                      e.target.value
                    )
                  }
                  className={styles.textarea}
                />
                {dish.image && (
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className={styles.dishImage}
                  />
                )}
                <p className={styles.dishPrice}>${dish.price}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <button onClick={generatePDF} className={styles.pdfButton}>
        Descargar Menú en PDF
      </button>
    </div>
  );
};

export default CreateMenu;