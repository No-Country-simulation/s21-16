package com.menuproject.menuproject.models;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
    private String name;

    @Column(nullable = false, name = "phone_number")
    private String phoneNumber;

    @Column(unique = true, nullable = false)
    private String email;

//    @ManyToOne
//    @JoinColumn(name = "id_user")
//    private User idUser;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_business")
    private Long idBusiness;
}
