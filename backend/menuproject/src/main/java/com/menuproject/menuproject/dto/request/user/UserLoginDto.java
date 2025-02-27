package com.menuproject.menuproject.dto.request.user;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

public record UserLoginDto(
        @NotNull
        @Email
        String email,

        @NotNull
        @Pattern(regexp = "^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[A-Za-z\\d]{8,20}$",
                message = "La contraseña debe tener entre 8 y 20 caracteres, incluir al menos una letra mayúscula, una minúscula y un número.")
        String password
) {
}
