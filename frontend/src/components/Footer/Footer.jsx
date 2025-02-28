
const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} Mi Sitio Web. Todos los derechos reservados.</p>
      <nav>
        <a href="/privacidad" style={{ margin: '0 10px' }}>Política de Privacidad</a>
        <a href="/terminos" style={{ margin: '0 10px' }}>Términos de Servicio</a>
        <a href="/contacto" style={{ margin: '0 10px' }}>Contacto</a>
      </nav>
    </footer>
  );
};

export default Footer;
