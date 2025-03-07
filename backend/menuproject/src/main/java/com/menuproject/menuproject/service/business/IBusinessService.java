package com.menuproject.menuproject.service.business;

import com.menuproject.menuproject.dto.request.business.BusinessRequestDto;
import com.menuproject.menuproject.models.Business;

import java.util.List;

public interface IBusinessService {

    void save(BusinessRequestDto businessRequestDto);

    List<Business> findAll();

    Business findById(Long idBusiness);

    void upDateUser();

    void deleteUser();
}
