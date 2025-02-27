import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("El email no es válido"),

  password: z
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .regex(/[A-Z]/, "Debe contener al menos una mayúscula")
    .regex(/[0-9]/, "Debe contener al menos un número"),
});

export const registerSchema = z.object({
  name: z.string(3, "El nombre debe tener al menos 3 caracteres"),

  email: z.string().email("El email no es válido"),

  password: z
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .regex(/[A-Z]/, "Debe contener al menos una mayúscula")
    .regex(/[0-9]/, "Debe contener al menos un número"),

  dateOfBirth: z.string().refine((date) => {
    const birthDate = new Date(date);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    return age >= 18;
  }, "Debes ser mayor de 18 años"),

  phoneNumber: z
    .string()
    .min(10, "El número debe tener al menos 10 dígitos")
    .max(15, "El número no puede tener más de 15 dígitos")
    .regex(/^\d+$/, "Debe ser un número válido"),
});
