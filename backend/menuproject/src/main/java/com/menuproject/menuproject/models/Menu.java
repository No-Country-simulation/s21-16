package com.menuproject.menuproject.models;

import java.io.Serializable;
import java.util.List;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Menu implements Serializable {

    @NotNull
    @Column(nullable = false)
    private String name;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_menu")
    private Long idMenu;

    @ManyToOne
    @JoinColumn(name = "id_business")
    private Business idBusiness;

    @OneToMany(mappedBy = "idMenu", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Category> categoryList;
}
