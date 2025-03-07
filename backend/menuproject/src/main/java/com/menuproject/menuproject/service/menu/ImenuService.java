package com.menuproject.menuproject.service.menu;

import com.menuproject.menuproject.dto.request.menu.MenuRequestDto;
import com.menuproject.menuproject.models.Menu;

import java.util.List;

public interface ImenuService {

    void save(MenuRequestDto menuRequestDto);

    void upDateMenu(Long idMenu, MenuRequestDto menuRequestDto);

    void deleteMenu(Long idMenu);

    List<Menu> findAllByIdBusinnes(Long idBusinnes);
}
