package com.menuproject.menuproject.repository;

import com.menuproject.menuproject.models.QrCode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QrCodeRepository extends JpaRepository<QrCode, Long> {

    QrCode findByUrl(String url);
}
