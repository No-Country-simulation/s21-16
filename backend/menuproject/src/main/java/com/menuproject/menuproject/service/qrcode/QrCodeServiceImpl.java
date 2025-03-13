package com.menuproject.menuproject.service.qrcode;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.MultiFormatWriter;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.menuproject.menuproject.models.QrCode;
import com.menuproject.menuproject.repository.QrCodeRepository;
import org.springframework.stereotype.Service;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;

@Service
public class QrCodeServiceImpl implements IQrCodeService {

    private final QrCodeRepository qrCodeRepository;

    public QrCodeServiceImpl(QrCodeRepository qrCodeRepository){
        this.qrCodeRepository = qrCodeRepository;
    }

    @Override
    public void saveQr(String url) {
        QrCode qrCode = new QrCode();
        qrCode.setUrl(url);
        qrCodeRepository.save(qrCode);
    }

    @Override
    public byte[] findByUrlMenu(String url) throws Exception{
        QrCode qrCode = new QrCode();
        qrCode = qrCodeRepository.findByUrl(url);

        //extraemos el url del qr
        String urlData = qrCode.getUrl();
        //convetimos a byte matriz

            byte[] qrByte = generateQRImage(urlData);

        return qrByte;
    }


    //metodo para generar qr
    public static byte[] generateQRImage(String data) throws Exception {
        int width = 300;
        int height = 300;

        // Crear matriz de código QR
        BitMatrix matrix = new MultiFormatWriter().encode(data, BarcodeFormat.QR_CODE, width, height);

        // Convertir matriz a imagen en memoria
        BufferedImage image = MatrixToImageWriter.toBufferedImage(matrix);

        // Convertir la imagen en bytes
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ImageIO.write(image, "png", baos);

        return baos.toByteArray(); // Devolver los bytes de la imagen
    }
}
