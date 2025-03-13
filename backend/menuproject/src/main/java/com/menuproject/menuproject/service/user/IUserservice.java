package com.menuproject.menuproject.service.user;

import com.menuproject.menuproject.dto.request.user.UserLoginDto;
import com.menuproject.menuproject.dto.request.user.UserRequestDto;
import com.menuproject.menuproject.dto.response.JwtDto;
import com.menuproject.menuproject.models.User;

import java.util.List;

public interface IUserservice {

    void save(UserRequestDto userRequestDto);

    List<User> findAll();

    User findById(User idUser);

    void upDateUser(User user);

    void deleteUser(User user);

    User getAuthenticatedUserId();

    JwtDto authotenticacionUser(UserLoginDto userLoginDto);
}
