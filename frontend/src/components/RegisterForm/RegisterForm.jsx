import { useState } from "react";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../schemas/authSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField, IconButton, InputAdornment, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import styles from "./RegisterForm.module.css";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    console.log("Datos del formulario", data);

    try {
      const response = await fetch(`http://localhost:8080/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Usuario registrado correctamente. Ahora puedes iniciar sesión.");
        navigate("/signin");
      } else {
        alert(result.message || "Error al registrar el usuario.");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert("Ocurrió un error. Inténtalo de nuevo más tarde.");
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <TextField
          label="Nombre"
          variant="outlined"
          type="text"
          {...register("name")}
          error={Boolean(errors.name)}
          helperText={errors.name?.message}
        />

        <TextField
          label="Fecha de nacimiento"
          variant="outlined"
          type="date"
          {...register("dateOfBirth")}
          error={Boolean(errors.dateOfBirth)}
          helperText={errors.dateOfBirth?.message}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />

        <TextField
          label="Telefono"
          variant="outlined"
          type="text"
          {...register("phoneNumber")}
          error={Boolean(errors.phoneNumber)}
          helperText={errors.phoneNumber?.message}
        />

        <TextField
          label="E-mail"
          variant="outlined"
          type="email"
          {...register("email")}
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
        />

        <TextField
          label="Password"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          {...register("password")}
          error={Boolean(errors.password)}
          helperText={errors.password?.message}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword((prev) => !prev)}
                    edge="end"
                  >
                    {showPassword ? (
                      <EyeSlashIcon style={{ width: 20, height: 20 }} />
                    ) : (
                      <EyeIcon style={{ width: 20, height: 20 }} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />

        <Button type="submit" variant="contained" color="primary">
          Ingresar
        </Button>
      </form>

      <p className="mt-3 text-center">
        ¿Ya tienes cuenta?
        <Link to={"/signin"}>
          <span> Inicia sesión</span>{" "}
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
