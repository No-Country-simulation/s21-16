import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField, IconButton, InputAdornment, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import styles from "./LoginForm.module.css";
import { loginSchema } from "../../schemas/authSchemas";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const login = useAuthStore((state) => state.login);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    console.log("Datos del formulario:", data);

    try {
      const response = await fetch(`http://localhost:8080/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert(`Bienvenido, ${result.user.name || "usuario"}!`);

        login(result.token, result.user);

        navigate("/dashboard");
      } else {
        alert(result.message || "Credenciales incorrectas.");
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
        ¿No tienes una cuenta?
        <Link to={"/signup"}>
          <span> Registrate</span>{" "}
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
