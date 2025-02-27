import { useState } from "react";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../schemas/authSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField, IconButton, InputAdornment, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import styles from "./RegisterForm.module.css";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log("Datos del formulario:", data);
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
