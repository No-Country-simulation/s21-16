package com.menuproject.menuproject.service.user;

import com.menuproject.menuproject.dto.request.user.UserDto;
import com.menuproject.menuproject.models.User;
import com.menuproject.menuproject.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserServiceImpl implements IUserservice {

    //importamos el BCrypt para hashdear la contraseña.
    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    UserRepository userRepository;

    @Override
    @Transactional
    public void save(UserDto userDto) {
        //creamos usuario.
        User user = new User();

        //hasheamos la contracesa
        String password =bCryptPasswordEncoder.encode(userDto.password());

        //casteamos datos.
        user.setName(userDto.name());
        user.setEmail(userDto.email());
        user.setDateOfBirth(userDto.dateOfBirth());
        user.setPassword(password);
        user.setPhoneNumber(userDto.phoneNumber());

        userRepository.save(user);
    }

    @Override
    public List<User> findAll() {
        return List.of();
    }

    @Override
    public User findById(User idUser) {
        return null;
    }

    @Override
    public void upDateUser(User user) {

    }

    @Override
    public void deleteUser(User user) {

    }


}
