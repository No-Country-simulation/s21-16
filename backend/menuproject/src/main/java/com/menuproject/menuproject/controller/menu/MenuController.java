package com.menuproject.menuproject.controller.menu;

import com.menuproject.menuproject.dto.request.menu.MenuRequestDto;
import com.menuproject.menuproject.dto.response.menu.MenuResponseDto;
import com.menuproject.menuproject.service.menu.MenuServiceImpl;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/menu")
public class MenuController {

    private final MenuServiceImpl menuService;

    public MenuController(MenuServiceImpl menuService){
        this.menuService = menuService;
    }

    @PostMapping
    public ResponseEntity<MenuResponseDto>saveMenu(@RequestBody @Valid MenuRequestDto menuRequestDto){
            menuService.save(menuRequestDto);
            return new ResponseEntity<>(new MenuResponseDto(menuRequestDto.name(), menuRequestDto.businessId()), HttpStatus.ACCEPTED);
    }

    @GetMapping("/{idBusiness}")
    public ResponseEntity<List<MenuResponseDto>>getAllMenu(@PathVariable Long idBusiness){
        List<MenuResponseDto> menuResponseDtoList = menuService.findAllByIdBusinnes(idBusiness).stream()
                .map(menu -> new MenuResponseDto(menu.getName(), menu.getIdBusiness().getIdBusiness())).toList();
        return new ResponseEntity<>(menuResponseDtoList, HttpStatus.ACCEPTED);
    }

    @PutMapping("/{idMenu}")
    public ResponseEntity putMenu( @PathVariable Long idMenu, @RequestBody @Valid MenuRequestDto menuRequestDto){
        menuService.upDateMenu(idMenu, menuRequestDto);
        return new ResponseEntity<>("Menu actualizado correctamente", HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{idMenu}")
    public ResponseEntity DeleteMenu( @PathVariable Long idMenu){
        menuService.deleteMenu(idMenu);
        return new ResponseEntity<>("Menu eliminado correctamente", HttpStatus.ACCEPTED);
    }

}
