import { QRCodeCanvas } from "qrcode.react";
import styles from "./QRCodeView.module.css";

function QRCodeView() {
  // QR Hardcodeado
  const qrData =
    "https://upload.wikimedia.org/wikipedia/commons/d/d7/Commons_QR_code.png";

  const downloadQR = () => {
    const canvas = document.getElementById("qr-canvas");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "menu_qr.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const printQR = () => {
    const printWindow = window.open("", "", "width=600,height=600");
    printWindow.document.write(
      "<html><head><title>Imprimir QR</title></head><body>"
    );
    printWindow.document.write(
      `<img src="${document
        .getElementById("qr-canvas")
        .toDataURL()}" style="width: 300px; height: 300px;"/>`
    );
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.qrSection}>
          <div className={styles.qrBox}>
            <QRCodeCanvas id="qr-canvas" value={qrData} size={256} />
            <div className={styles.buttonGroup}>
              <button className={styles.button} onClick={downloadQR}>
                Descargar QR
              </button>
              <button className={styles.button} onClick={printQR}>
                Imprimir QR
              </button>
            </div>
          </div>
        </div>

        <div className={styles.textSection}>
          <h2>Código QR del Menú</h2>
          <p>
            Escanea este código QR para ver el menú digital de nuestro
            restaurante. También puedes compartirlo con tus clientes en redes
            sociales o imprimirlo para colocarlo en tu establecimiento.
          </p>

          <h3>Compartir dirección URL:</h3>
          <a href={qrData} target="_blank" rel="noopener noreferrer">
            {qrData}
          </a>
        </div>
      </div>
    </div>
  );
}

export default QRCodeView;
