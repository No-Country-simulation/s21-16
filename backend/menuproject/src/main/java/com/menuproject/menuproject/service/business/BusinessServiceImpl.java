package com.menuproject.menuproject.service.business;

import com.menuproject.menuproject.models.Business;
import com.menuproject.menuproject.repository.BusinessRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BusinessServiceImpl implements IBusinessService{

    private final BusinessRepository businessRepository;

    public BusinessServiceImpl(BusinessRepository businessRepository){
        this.businessRepository = businessRepository;
    }

    @Override
    public void save() {
    }

    @Override
    public List<Business> findAll() {
        return List.of();
    }

    @Override
    public Business findById(Long idBusiness) {
        return businessRepository.findById(idBusiness).orElseThrow(()-> new RuntimeException("No se encontro el negocio ID:"+ idBusiness ));
    }

    @Override
    public void upDateUser() {

    }

    @Override
    public void deleteUser() {

    }
}
