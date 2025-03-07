package com.menuproject.menuproject.dto.request.menu;

import jakarta.validation.constraints.NotNull;

public record MenuRequestDto(

        @NotNull(message = "Ingrese un nombre")
        String name,

        @NotNull(message = "Ingrese un negocio")
        Long businessId

) {
}
