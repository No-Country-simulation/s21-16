package com.menuproject.menuproject.controller.user;

import com.menuproject.menuproject.dto.request.user.UserRequestDto;
import com.menuproject.menuproject.dto.request.user.UserLoginDto;
import com.menuproject.menuproject.dto.response.JwtDto;
import com.menuproject.menuproject.models.User;
import com.menuproject.menuproject.service.user.UserServiceImpl;
import com.menuproject.menuproject.util.JwtUtils;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class UserController {

    private final AuthenticationManager authenticationManager;
    private final UserServiceImpl userServiceImpl;
    private final JwtUtils jwtUtils;

    public UserController(AuthenticationManager authenticationManager, UserServiceImpl userServiceImpl, JwtUtils jwtUtils){
        this.authenticationManager = authenticationManager;
        this.userServiceImpl = userServiceImpl;
        this.jwtUtils = jwtUtils;
    }

    @PostMapping("/login")
    public ResponseEntity<JwtDto> authotenticacionUser(@RequestBody @Valid UserLoginDto userLoginDto){
//            Authentication token = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userLoginDto.email(), userLoginDto.password()));
//            var jwtToken = jwtUtils.createToken(token);
        JwtDto jwtDto = userServiceImpl.authotenticacionUser(userLoginDto);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(jwtDto);

    }

    @PostMapping("/register")
    public ResponseEntity<Object> saveUser(@RequestBody @Valid UserRequestDto userRequestDto){

            userServiceImpl.save(userRequestDto);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }


}
