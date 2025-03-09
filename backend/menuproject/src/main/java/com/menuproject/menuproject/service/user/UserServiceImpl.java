package com.menuproject.menuproject.service.user;

import com.menuproject.menuproject.dto.request.user.UserLoginDto;
import com.menuproject.menuproject.dto.request.user.UserRequestDto;
import com.menuproject.menuproject.dto.response.JwtDto;
import com.menuproject.menuproject.models.User;
import com.menuproject.menuproject.repository.UserRepository;
import com.menuproject.menuproject.util.JwtUtils;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserServiceImpl implements IUserservice {

    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;

    public UserServiceImpl(BCryptPasswordEncoder bCryptPasswordEncoder, UserRepository userRepository, AuthenticationManager authenticationManager, JwtUtils jwtUtils){
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.userRepository = userRepository;
        this.jwtUtils = jwtUtils;
        this.authenticationManager = authenticationManager;
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


    //metodo para obtener el usuario desde la sesion activa.
    @Override
    public User getAuthenticatedUserId() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.getPrincipal() instanceof UserDetails) {
            String username = ((UserDetails) authentication.getPrincipal()).getUsername();
            return userRepository.findByEmail(username)
                    .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado"));
        }
        throw new UsernameNotFoundException("No hay usuario autenticado");
    }

    @Override
    public JwtDto authotenticacionUser(UserLoginDto userLoginDto) {
        //hace la verificacion
        Authentication token = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userLoginDto.email(), userLoginDto.password()));

        //crea el token
        var jwtToken = jwtUtils.createToken(token);

        //valida al usuario
        User user = userRepository.findByEmail(userLoginDto.email()).orElseThrow(()->new UsernameNotFoundException("usuario no encontrado"));

        return new JwtDto(user.getIdUser(), user.getName(), user.getEmail(), user.getPhoneNumber(), jwtToken);
    }


}
