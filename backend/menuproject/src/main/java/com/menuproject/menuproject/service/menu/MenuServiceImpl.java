package com.menuproject.menuproject.service.menu;

import com.menuproject.menuproject.dto.request.menu.MenuRequestDto;
import com.menuproject.menuproject.models.Business;
import com.menuproject.menuproject.models.Menu;
import com.menuproject.menuproject.repository.MenuRepository;
import com.menuproject.menuproject.service.business.BusinessServiceImpl;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuServiceImpl implements ImenuService {

    private final MenuRepository menuRepository;
    private final BusinessServiceImpl businessServiceImpl;

    public MenuServiceImpl(MenuRepository menuRepository, BusinessServiceImpl businessServiceImpl) {
        this.menuRepository = menuRepository;
        this.businessServiceImpl = businessServiceImpl;
    }

    @Override
    public void save(MenuRequestDto menuRequestDto) {

        Menu menu = new Menu();

        // verificamos la existencia del negocio
        Business business = businessServiceImpl.findById(menuRequestDto.businessId());

        menu.setName(menuRequestDto.name());
        menu.setIdBusiness(business);

        menuRepository.save(menu);
    }

    @Override
    public List<Menu> findAllByIdBusinnes(Long idBusiness) {
        List<Menu> menus = menuRepository.findAllByIdBusiness_IdBusiness(idBusiness);
        if (menus.isEmpty()) {
            // No se encontraron menús para ese negocio
            throw new ArrayIndexOutOfBoundsException("No se encontraron menús para el negocio con id " + idBusiness);
        }
        return menus;
    }

    @Override
    public void upDateMenu(Long idMenu, MenuRequestDto menuRequestDto) {
        // validamos menu y business
        Menu menu;
        Business business;

        menu = menuRepository.findById(idMenu)
                .orElseThrow(() -> new RuntimeException("No se encontro el menu id:" + idMenu));

        business = businessServiceImpl.findById(menuRequestDto.businessId());

        if (menu != null && business != null) {
            // actualizamos datos
            menu.setName(menuRequestDto.name());
            menu.setIdBusiness(business);

            // guardamos datos
            menuRepository.save(menu);
        } else {
            throw new RuntimeException("No se encontro el menu id:" + idMenu);
        }
    }

    @Override
    public void deleteMenu(Long idMenu) {
        // validamos si el menu existe
        Menu menu = menuRepository.findById(idMenu)
                .orElseThrow(() -> new RuntimeException("No se encontro el Menu id:" + idMenu));
        // borramos
        menuRepository.delete(menu);
    }

}
