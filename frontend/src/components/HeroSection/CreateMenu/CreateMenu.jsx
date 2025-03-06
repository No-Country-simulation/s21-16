import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CreateMenu.module.css";

const CreateMenu = () => {
  const [restaurantName, setRestaurantName] = useState("HealthyBites");
  const [categories, setCategories] = useState([]);
  const menuRef = useRef();
  const navigate = useNavigate();

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
        image: null,
        imageUrl: "",
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

  const handleImageUpload = (categoryIndex, dishIndex, file) => {
    if (file) {
      const newCategories = [...categories];
      newCategories[categoryIndex].dishes[dishIndex].image = file;
      newCategories[categoryIndex].dishes[dishIndex].imageUrl = URL.createObjectURL(file);
      setCategories(newCategories);
    }
  };

  const generatePDF = () => {
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      const htmlContent = `
      <html>
        <head>
          <title>Menú - ${restaurantName}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            h2 { text-align: center; }
            .category { margin-bottom: 20px; }
            .dish { display: flex; align-items: center; border-bottom: 1px solid #ccc; padding: 10px 0; }
            .dish img { width: 80px; height: 80px; object-fit: cover; margin-right: 10px; }
            .dishDetails { flex-grow: 1; }
            .dishPrice { font-weight: bold; color: #2a9d8f; }
          </style>
        </head>
        <body>
          <h2>Menú - ${restaurantName}</h2>
          ${categories
            .map(
              (category) => `
            <div class="category">
              <h3>Categoría: ${category.name}</h3>
              ${category.dishes
                .map(
                  (dish) => `
                <div class="dish">
                  <img src="${dish.imageUrl}" alt="${dish.name}" />
                  <div class="dishDetails">
                    <h4>${dish.name}</h4>
                    <p>${dish.description}</p>
                    <p class="dishPrice">$${dish.price}</p>
                  </div>
                </div>
              `
                )
                .join("")}
            </div>
          `
            )
            .join("")}
          <script>
            window.onload = function() { window.print(); }
          </script>
        </body>
      </html>
    `;

      printWindow.document.write(htmlContent);
      printWindow.document.close();
    }
  };

  return (
    <div className={styles.container}>
      {/* Logo que redirige a la página principal */}
      <div className={styles.logoContainer} onClick={() => navigate("/")}>
        <img src="/logo.png" alt="Logo del Restaurante" className={styles.logo} />
      </div>

      <h1>Crear Menú</h1>
      <input
        type="text"
        placeholder="Nombre del restaurante"
        value={restaurantName}
        onChange={(e) => setRestaurantName(e.target.value)}
        className={styles.restaurantInput}
      />
      <button onClick={addCategory} className={styles.addButton}>
        Agregar Categoría
      </button>

      <div ref={menuRef} className={styles.menuContent}>
        <h2 className={styles.title}>Menú - {restaurantName}</h2>
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
            <button onClick={() => addDish(catIndex)} className={styles.addDishButton}>
              Agregar Plato
            </button>
            {category.dishes.map((dish, dishIndex) => (
              <div key={dish.id} className={styles.dish}>
                <input
                  type="text"
                  placeholder="Nombre del Plato"
                  value={dish.name}
                  onChange={(e) => updateDish(catIndex, dishIndex, "name", e.target.value)}
                  className={styles.input}
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(catIndex, dishIndex, e.target.files[0])}
                  className={styles.fileInput}
                />
                <input
                  type="number"
                  placeholder="Precio en dólares"
                  value={dish.price}
                  onChange={(e) => updateDish(catIndex, dishIndex, "price", e.target.value)}
                  className={styles.input}
                />
                <textarea
                  placeholder="Descripción e ingredientes"
                  value={dish.description}
                  onChange={(e) => updateDish(catIndex, dishIndex, "description", e.target.value)}
                  className={styles.textarea}
                />
                {dish.imageUrl && (
                  <img src={dish.imageUrl} alt={dish.name} className={styles.dishImage} />
                )}
                <p className={styles.dishPrice}>${dish.price}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      <button onClick={generatePDF} className={styles.pdfButton}>
        Ver / Descargar Menú en PDF
      </button>
    </div>
  );
};

export default CreateMenu;
