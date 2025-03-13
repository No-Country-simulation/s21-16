package com.menuproject.menuproject.dto.response;

public record ErrorDto(
        int status,
        String error,
        String message) {
}
