import React, { useState, useEffect } from 'react';
import { QRCodeCanvas } from "qrcode.react";
import logo from './assets/logo.png';
import './App.css';

function QRCodeView() {
    const [qrData, setQrData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/get-menu-qr') 
            .then(response => response.json())
            .then(data => {
                setQrData(data.qrCode);
                setLoading(false);
            })
            .catch(() => {
                setError('Error al cargar el código QR');
                setLoading(false);
            });
    }, []);

    const downloadQR = () => {
        const canvas = document.getElementById('qr-canvas');
        const pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
        let downloadLink = document.createElement('a');
        downloadLink.href = pngUrl;
        downloadLink.download = 'menu_qr.png';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    const printQR = () => {
        const printWindow = window.open('', '', 'width=600,height=600');
        printWindow.document.write('<html><head><title>Imprimir QR</title></head><body>');
        printWindow.document.write('<img src="' + qrData + '" style="width: 300px; height: 300px;"/>');
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    };

    if (loading) return <p>Cargando QR...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container">
            <div className="content">

                <div className="qr-section">
                    <div className="qr-box">
                        <img src={logo} alt="FoodieScan Logo" className="logo" />
                        <QRCodeCanvas id="qr-canvas" value={qrData} size={256} />
                        <div className="button-group">
                            <button onClick={downloadQR}>Descargar QR</button>
                            <button onClick={printQR}>Imprimir QR</button>
                        </div>
                    </div>
                </div>

                <div className="text-section">
                    <h2>Código QR del Menú</h2>
                    <p>Escanea este código QR para ver el menú digital de nuestro restaurante.  
                    También puedes compartirlo con tus clientes en redes sociales o imprimirlo para colocarlo en tu establecimiento.</p>

                    <h3>Compartir dirección URL:</h3>
                    <a href={qrData} target="_blank" rel="noopener noreferrer">{qrData}</a>
                </div>
            </div>
        </div>
    );
}

export default QRCodeView;