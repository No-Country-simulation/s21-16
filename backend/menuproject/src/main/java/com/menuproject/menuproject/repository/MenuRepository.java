package com.menuproject.menuproject.repository;

import com.menuproject.menuproject.models.Menu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MenuRepository extends JpaRepository<Menu, Long> {


    List<Menu> findAllByIdBusiness_IdBusiness(Long idBusines);
}
