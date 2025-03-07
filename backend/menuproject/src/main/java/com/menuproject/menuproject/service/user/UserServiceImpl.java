package com.menuproject.menuproject.service.user;

import com.menuproject.menuproject.dto.request.user.UserRequestDto;
import com.menuproject.menuproject.models.User;
import com.menuproject.menuproject.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserServiceImpl implements IUserservice {

    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final UserRepository userRepository;

    public UserServiceImpl(BCryptPasswordEncoder bCryptPasswordEncoder, UserRepository userRepository){
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.userRepository = userRepository;
    }

    @Override
    @Transactional
    public void save(UserRequestDto userRequestDto) {
        //creamos usuario.
        User user = new User();

        //hasheamos la contracesa
        String password =bCryptPasswordEncoder.encode(userRequestDto.password());

        //casteamos datos.
        user.setName(userRequestDto.name());
        user.setEmail(userRequestDto.email());
        user.setDateOfBirth(userRequestDto.dateOfBirth());
        user.setPassword(password);
        user.setPhoneNumber(userRequestDto.phoneNumber());

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
        // metodo vacio - para implementaciones futuras
    }

    @Override
    public void deleteUser(User user) {
        // metodo vacio - para implementaciones futuras
    }


}
