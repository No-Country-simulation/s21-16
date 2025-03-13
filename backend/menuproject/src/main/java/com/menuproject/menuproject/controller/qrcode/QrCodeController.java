package com.menuproject.menuproject.controller.qrcode;

import com.menuproject.menuproject.service.qrcode.QrCodeServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/qrcode")
public class QrCodeController {

    private final QrCodeServiceImpl qrCodeService;

    public QrCodeController(QrCodeServiceImpl qrCodeService){
        this.qrCodeService = qrCodeService;
    }


    @PostMapping("/save")
    public ResponseEntity saveQrCode(@RequestParam (name = "url")String url){
        qrCodeService.saveQr(url);
        return new ResponseEntity<>("Se genero el QR", HttpStatus.ACCEPTED);
    }

    @GetMapping("/generate")
    public ResponseEntity<byte[]> generateQr(@RequestParam (name = "url")String url) throws Exception {
        byte[] qrBytes = qrCodeService.findByUrlMenu(url);
        return ResponseEntity.ok().contentType(MediaType.IMAGE_PNG).body(qrBytes);
    }

}
