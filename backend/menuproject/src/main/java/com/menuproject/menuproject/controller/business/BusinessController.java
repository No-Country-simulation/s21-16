package com.menuproject.menuproject.controller.business;

import com.menuproject.menuproject.dto.request.business.BusinessRequestDto;
import com.menuproject.menuproject.dto.response.business.BusinessResponseDto;
import com.menuproject.menuproject.service.business.BusinessServiceImpl;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/business")
public class BusinessController {

    private final BusinessServiceImpl businessService;

    public BusinessController(BusinessServiceImpl businessService){
        this.businessService = businessService;
    }


    @PostMapping
    public ResponseEntity <BusinessResponseDto>saveBusiness(@RequestBody @Valid BusinessRequestDto businessRequestDto){
        businessService.save(businessRequestDto);
        return new ResponseEntity<>(new BusinessResponseDto(businessRequestDto.name(), businessRequestDto.phoneNumber(),businessRequestDto.email()), HttpStatus.ACCEPTED);
    }

}
