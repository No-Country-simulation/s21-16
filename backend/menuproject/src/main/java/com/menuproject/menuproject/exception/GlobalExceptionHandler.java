package com.menuproject.menuproject.exception;

import com.menuproject.menuproject.dto.response.ErrorDto;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<ErrorDto> runtimeException(RuntimeException runtimeException){
            ErrorDto errorDto = new ErrorDto(HttpStatus.BAD_REQUEST.value(), HttpStatus.BAD_REQUEST.getReasonPhrase(),runtimeException.getMessage());
            return new ResponseEntity<>(errorDto, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorDto> methodArgumentNotValidException(MethodArgumentNotValidException methodArgumentNotValidException){

        //extraemos el mensaje de validacion
        String mensaje = methodArgumentNotValidException.getBindingResult()
                .getFieldErrors()
                .stream()
                .findFirst()
                .map(fieldError -> fieldError.getDefaultMessage())
                .orElse("Error de validación");

        ErrorDto errorDto = new ErrorDto(HttpStatus.BAD_REQUEST.value(), HttpStatus.BAD_REQUEST.getReasonPhrase(),mensaje);
        return new ResponseEntity<>(errorDto, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<ErrorDto> handleDataIntegrityViolationException(DataIntegrityViolationException ex) {
        String mesajeUsuario = "Ya existe un registro con datos ingresados. Verifique los campos únicos.";

        if (ex.getMessage() != null && ex.getMessage().contains("email")) {
            mesajeUsuario = "Ya existe un usuario registrado con ese email.";
        }

        ErrorDto errorDto = new ErrorDto(
                HttpStatus.BAD_REQUEST.value(),
                HttpStatus.BAD_REQUEST.getReasonPhrase(),
                mesajeUsuario
        );
        return new ResponseEntity<>(errorDto, HttpStatus.BAD_REQUEST);
    }


}
