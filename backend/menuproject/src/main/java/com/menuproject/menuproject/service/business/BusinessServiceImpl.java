package com.menuproject.menuproject.service.business;

import com.menuproject.menuproject.dto.request.business.BusinessRequestDto;
import com.menuproject.menuproject.models.Business;
import com.menuproject.menuproject.models.User;
import com.menuproject.menuproject.repository.BusinessRepository;
import com.menuproject.menuproject.service.user.UserServiceImpl;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BusinessServiceImpl implements IBusinessService {

    private final BusinessRepository businessRepository;
    private final UserServiceImpl userService;

    public BusinessServiceImpl(BusinessRepository businessRepository, UserServiceImpl userService) {
        this.businessRepository = businessRepository;
        this.userService = userService;
    }

    @Override
    public void save(BusinessRequestDto businessRequestDto) {
        // verificamos si el usuario logueado existe
        User user = userService.getAuthenticatedUserId();

        // creamos busines
        Business business = new Business();
        business.setName(businessRequestDto.name());
        business.setIdUser(user);
        business.setEmailBusiness(businessRequestDto.email());
        business.setPhoneNumber((businessRequestDto.phoneNumber()));

        businessRepository.save(business);
    }

    @Override
    public Business findById(Long idBusiness) {
        Business business = businessRepository.findById(idBusiness)
                .orElseThrow(() -> new RuntimeException("No se encontro el negocio con id:" + idBusiness));
        if (!business.getIdUser().getIdUser().equals(userService.getAuthenticatedUserId().getIdUser())) {
            throw new SecurityException("No tienes permisos para el negocio ingresado");
        }
        return business;
    }

    @Override
    public void upDateUser() {

    }

    @Override
    public void deleteUser() {

    }

    public List<Business> findAllByUserId() {
        List<Business> businesses = businessRepository
                .findAllByIdUser_idUser(userService.getAuthenticatedUserId().getIdUser());
        if (!businesses.isEmpty()) {
            return businesses;
        }
        throw new ArrayIndexOutOfBoundsException("El usuario indicado no tiene negocios.");
    }

    public void updateBusinessById(Long idBusiness, BusinessRequestDto updatedBusiness) {
        userService.getAuthenticatedUserId();
        Business business = findById(idBusiness);
        business.setName(updatedBusiness.name());
        business.setEmailBusiness(updatedBusiness.email());
        business.setPhoneNumber(updatedBusiness.phoneNumber());
        businessRepository.save(business);
    }

    public void desactivateBusinessById(Long idBusiness) {
        Business business = findById(idBusiness);
        business.setActive(false);
        businessRepository.save(business);
    }
}
