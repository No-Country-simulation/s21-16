package com.menuproject.menuproject.configuration;

import com.auth0.jwt.interfaces.DecodedJWT;
import com.menuproject.menuproject.repository.UserRepository;
import com.menuproject.menuproject.util.JwtUtils;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class SecurityFilter extends OncePerRequestFilter {

    private final JwtUtils jwtUtils;
    private final UserRepository userRepository;

    public SecurityFilter(JwtUtils jwtUtils, UserRepository userRepository){
        this.jwtUtils = jwtUtils;
        this.userRepository = userRepository;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {
        //definimos la cabezera del token
        var jwtToken = request.getHeader(HttpHeaders.AUTHORIZATION);

        //verifiamos si el token no es null
        if(jwtToken != null){
            jwtToken = jwtToken.substring(7);
            //validamos token
            DecodedJWT decodedJWT = jwtUtils.validateToken(jwtToken);

            //extraemos usuario del token
            String username = jwtUtils.extractUsername(decodedJWT);
            userRepository.findByEmail(username).ifPresent(usuario -> {
                var authentication = new UsernamePasswordAuthenticationToken(usuario, null, usuario.getAuthorities());
                SecurityContextHolder.getContext().setAuthentication(authentication);
            });

        }
        filterChain.doFilter(request, response);
    }
}
