package com.menuproject.menuproject.service.qrcode;

public interface IQrCodeService {

    void saveQr(String url);

    byte[] findByUrlMenu(String url) throws Exception;
}
