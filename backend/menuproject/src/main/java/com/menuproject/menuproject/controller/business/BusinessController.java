package com.menuproject.menuproject.controller.business;

import com.menuproject.menuproject.dto.request.business.BusinessRequestDto;
import com.menuproject.menuproject.dto.response.business.BusinessResponseDto;
import com.menuproject.menuproject.models.Business;
import com.menuproject.menuproject.service.business.BusinessServiceImpl;
import jakarta.validation.Valid;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/api/business")
public class BusinessController {

    private final BusinessServiceImpl businessService;

    public BusinessController(BusinessServiceImpl businessService) {
        this.businessService = businessService;
    }

    @PostMapping("/save")
    public ResponseEntity<BusinessResponseDto> saveBusiness(@RequestBody @Valid BusinessRequestDto businessRequestDto) {
        businessService.save(businessRequestDto);
        return new ResponseEntity<>(new BusinessResponseDto(businessRequestDto.name(), businessRequestDto.phoneNumber(),
                businessRequestDto.email()), HttpStatus.ACCEPTED);
    }

    @GetMapping("/user/{idUser}")
    public ResponseEntity<List<BusinessResponseDto>> getBusinessByUserId(@PathVariable long idUser) {
        List<BusinessResponseDto> businesses = businessService.findAllByUserId(idUser).stream().map(
                business -> new BusinessResponseDto(business.getName(), business.getPhoneNumber(), business.getEmail()))
                .toList();
        return new ResponseEntity<>(businesses, HttpStatus.ACCEPTED);
    }

    @GetMapping("/{idBusiness}")
    public ResponseEntity<BusinessResponseDto> getBusinessById(@PathVariable long idBusiness) {
        Business business = businessService.findById(idBusiness);
        BusinessResponseDto businessResponse = new BusinessResponseDto(business.getName(), business.getPhoneNumber(),
                business.getEmail());
        return new ResponseEntity<>(businessResponse, HttpStatus.ACCEPTED);
    }

    @GetMapping
    public ResponseEntity<List<BusinessResponseDto>> getAllBusiness() {
        List<BusinessResponseDto> businesses = businessService.findAll().stream().filter(Business::isActive).map(
                business -> new BusinessResponseDto(business.getName(), business.getPhoneNumber(), business.getEmail()))
                .toList();
        return new ResponseEntity<>(businesses, HttpStatus.ACCEPTED);
    }

}
