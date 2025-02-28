import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import styles from "./createmenu.module.css";
import { useReactToPrint } from "react-to-print";

const MySwal = withReactContent(Swal);

const CreateMenu = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [categories, setCategories] = useState([]);
  const menuRef = useRef();

  useEffect(() => {
    const loggedUser = localStorage.getItem("user");
    if (!loggedUser) {
      MySwal.fire({
        title: "No estás autenticado",
        text: "Por favor inicia sesión o regístrate",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ir a Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signin");
        }
      });
    } else {
      setUser(JSON.parse(loggedUser));
    }
<<<<<<< HEAD
  }, [navigate]);
=======
  }, [user, navigate]);
>>>>>>> 63ef8677d3af80e1ed1f57f29ddf7ccaa1fe3ddc

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
        {categories.map((category, catIndex) => (
          <div key={catIndex} className={styles.category}>
            <input
              type="text"
              placeholder="Nombre de la Categoría"
              value={category.name}
              onChange={(e) => updateCategory(catIndex, e.target.value)}
              className={styles.input}
            />
<<<<<<< HEAD
            <button onClick={() => addDish(catIndex)} className={styles.addDishButton}>
=======
            <button
              onClick={() => addDish(catIndex)}
              className={styles.addDishButton}
            >
>>>>>>> 63ef8677d3af80e1ed1f57f29ddf7ccaa1fe3ddc
              Agregar Plato
            </button>
            {category.dishes.map((dish, dishIndex) => (
              <div key={dish.id} className={styles.dishCard}>
                <input
                  type="text"
                  placeholder="Nombre del Plato"
                  value={dish.name}
<<<<<<< HEAD
                  onChange={(e) => updateDish(catIndex, dishIndex, "name", e.target.value)}
=======
                  onChange={(e) =>
                    updateDish(catIndex, dishIndex, "name", e.target.value)
                  }
>>>>>>> 63ef8677d3af80e1ed1f57f29ddf7ccaa1fe3ddc
                  className={styles.input}
                />
                <input
                  type="file"
                  accept=".jpg,.png"
<<<<<<< HEAD
                  onChange={(e) => updateDish(catIndex, dishIndex, "image", e.target.files[0])}
=======
                  onChange={(e) =>
                    updateDish(catIndex, dishIndex, "image", e.target.files[0])
                  }
>>>>>>> 63ef8677d3af80e1ed1f57f29ddf7ccaa1fe3ddc
                  className={styles.fileInput}
                />
                <input
                  type="number"
                  placeholder="Precio en dólares"
                  value={dish.price}
<<<<<<< HEAD
                  onChange={(e) => updateDish(catIndex, dishIndex, "price", e.target.value)}
=======
                  onChange={(e) =>
                    updateDish(catIndex, dishIndex, "price", e.target.value)
                  }
>>>>>>> 63ef8677d3af80e1ed1f57f29ddf7ccaa1fe3ddc
                  className={styles.input}
                />
                <textarea
                  placeholder="Descripción e ingredientes"
                  value={dish.description}
<<<<<<< HEAD
                  onChange={(e) => updateDish(catIndex, dishIndex, "description", e.target.value)}
=======
                  onChange={(e) =>
                    updateDish(
                      catIndex,
                      dishIndex,
                      "description",
                      e.target.value
                    )
                  }
>>>>>>> 63ef8677d3af80e1ed1f57f29ddf7ccaa1fe3ddc
                  className={styles.textarea}
                />
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
