package com.menuproject.menuproject.models;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Business implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_business")
    private Long idBusiness;

    private String name;

    @NotNull
    @Column(nullable = false, name = "phone_number")
    private String phoneNumber;

    @NotNull
    @Email
    @Column(unique = false, nullable = false, name = "email")
    private String emailBusiness;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "id_user")
    private User idUser;

    @Builder.Default
    @Column(name = "is_active")
    private boolean isActive = true;
}
