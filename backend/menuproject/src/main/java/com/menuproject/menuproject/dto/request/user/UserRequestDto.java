package com.menuproject.menuproject.dto.request.user;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

import java.util.Date;

public record UserRequestDto(
        @NotNull(message = "Introduzca su nombre")
        String name,

        @NotNull(message = "Email no puede estar vacio")
        @Email(message = "Introduzca un correo electronico valido")
        String email,

        @NotNull
        @Pattern(regexp = "^\\+?\\d{9,12}$", message = "El número de celular debe tener entre 9 y 12 dígitos y puede incluir un '+' al principio.")
        String phoneNumber,

        @Pattern(regexp = "^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[A-Za-z\\d]{8,20}$",
                message = "La contraseña debe tener entre 8 y 20 caracteres, incluir al menos una letra mayúscula, una minúscula y un número.")
        String password,

        @NotNull
        Date dateOfBirth) {
}
