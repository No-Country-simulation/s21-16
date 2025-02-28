package com.menuproject.menuproject.controller.user;

import com.menuproject.menuproject.dto.request.user.UserDto;
import com.menuproject.menuproject.dto.request.user.UserLoginDto;
import com.menuproject.menuproject.dto.response.JwtDto;
import com.menuproject.menuproject.service.user.UserServiceImpl;
import com.menuproject.menuproject.util.JwtUtils;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class UserController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserServiceImpl userServiceImpl;

    @Autowired
    JwtUtils jwtUtils;

    @PostMapping("/login")
    public ResponseEntity<?> authotenticacionUser(@RequestBody @Valid UserLoginDto userLoginDto){
            Authentication token = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userLoginDto.email(), userLoginDto.password()));
            var JWTtoken = jwtUtils.createToken(token);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(new JwtDto(JWTtoken));

    }

    @PostMapping("/register")
    public ResponseEntity<?> saveUser(@RequestBody @Valid UserDto userDto){
        System.out.println(userDto);
        userServiceImpl.save(userDto);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }


}
