package com.menuproject.menuproject.dto.response;

public record JwtDto(
        Long id,
        String name,
        String email,
        String phoneNumber,
        String jwtToken){
    
}
