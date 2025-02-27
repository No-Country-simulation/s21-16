package com.menuproject.menuproject.service.user;

import com.menuproject.menuproject.dto.request.user.UserDto;
import com.menuproject.menuproject.models.User;

import java.util.List;

public interface IUserservice {

    void save(UserDto userDto);

    List<User> findAll();

    User findById(User idUser);

    void upDateUser(User user);

    void deleteUser(User user);


}
