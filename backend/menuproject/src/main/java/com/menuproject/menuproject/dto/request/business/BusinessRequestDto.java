package com.menuproject.menuproject.dto.request.business;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

public record BusinessRequestDto(
        @NotNull(message = "Ingrese un nombre")
        String name,

        @NotNull
        @Pattern(regexp = "^\\+?\\d{9,12}$", message = "El número de celular debe tener entre 9 y 12 dígitos y puede incluir un '+' al principio.")
        String phoneNumber,

        @NotNull(message = "Email no puede estar vacio")
        @Email(message = "Introduzca un correo electronico valido")
        String email
) {
}
