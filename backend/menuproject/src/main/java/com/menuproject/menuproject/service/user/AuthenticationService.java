package com.menuproject.menuproject.service.user;

import com.menuproject.menuproject.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService implements UserDetailsService {


    private final UserRepository userRepository;

    public AuthenticationService(UserRepository userRepository){
        this. userRepository = userRepository;
    }

    //creamos un metodo para buscar usuario en bd y devuelve un Userdetails por el contexto de spring
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return userRepository.findByEmail(email).orElseThrow(()-> new UsernameNotFoundException("Usuario no encontrado"));
    }
}
