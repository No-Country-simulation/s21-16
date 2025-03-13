package com.menuproject.menuproject.repository;

import com.menuproject.menuproject.models.Business;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface BusinessRepository extends JpaRepository<Business, Long> {
    public List<Business> findAllByIdUser_idUser(Long idUser);
}
