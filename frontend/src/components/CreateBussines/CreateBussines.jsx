import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import styles from "./CreateBussines.module.css";

const restaurantSchema = z.object({
  name: z.string().min(3, "El nombre debe tener al menos 3 caracteres."),
  phoneNumber: z.string().min(7, "El teléfono debe tener al menos 7 dígitos."),
  email: z.string().email("Debe ser un correo válido."),
});

const CreateBussines = () => {
  const navigate = useNavigate();
  const [isSaving, setIsSaving] = useState(false);

  const userToken = localStorage.getItem("token");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(restaurantSchema),
  });

  const registerRestaurant = async (data) => {
    if (!userToken) {
      alert("No se encontró el token de autenticación.");
      return;
    }

    setIsSaving(true);

    try {
      const response = await fetch(
        "https://menuproject-backend-test.onrender.com/api/business/save",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${userToken}`,
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Error al registrar el restaurante.");
      }

      alert("Restaurante registrado exitosamente.");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un problema al registrar el restaurante.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer} onClick={() => navigate("/")}>
        <img
          src="/logo.png"
          alt="Logo del Restaurante"
          className={styles.logo}
        />
      </div>
      <h1>Registrar Restaurante</h1>

      <form onSubmit={handleSubmit(registerRestaurant)}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Nombre del restaurante"
            {...register("name")}
            className={styles.input}
          />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}
        </div>

        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Teléfono"
            {...register("phoneNumber")}
            className={styles.input}
          />
          {errors.phone_number && (
            <p className={styles.error}>{errors.phone_number.message}</p>
          )}
        </div>

        <div className={styles.inputGroup}>
          <input
            type="email"
            placeholder="Correo electrónico"
            {...register("email")}
            className={styles.input}
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </div>

        <button type="submit" className={styles.saveButton} disabled={isSaving}>
          {isSaving ? "Guardando..." : "Registrar Restaurante"}
        </button>
      </form>
    </div>
  );
};

export default CreateBussines;
