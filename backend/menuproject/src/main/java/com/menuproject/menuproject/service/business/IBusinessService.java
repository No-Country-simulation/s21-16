package com.menuproject.menuproject.service.business;

import com.menuproject.menuproject.dto.request.menu.MenuRequestDto;
import com.menuproject.menuproject.models.Business;

import java.util.List;

public interface IBusinessService {

    void save();

    List<Business> findAll();

    Business findById(Long idBusiness);

    void upDateUser();

    void deleteUser();
}
