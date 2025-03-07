import { FaHome, FaQrcode, FaSignOutAlt, FaStore } from 'react-icons/fa'; // Asegúrate de instalar react-icons

const Sidebar = () => {
  return (
    <aside style={{ backgroundColor: 'blue', width: '250px', height: '100vh', padding: '20px', display: 'flex', flexDirection: 'column', color: 'white' }}>
      <div style={{ marginBottom: '30px', textAlign: 'center' }}>
        {/*logo */}
        <h2>Logo</h2>
      </div>
      <nav>
        <button style={{ backgroundColor: 'white', color: 'blue', padding: '10px', borderRadius: '5px', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <FaHome style={{ marginRight: '8px' }} /> Inicio
        </button>
        <a href="#" style={{ color: 'white', display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <FaStore style={{ marginRight: '8px' }} /> Menú
        </a>
        <a href="#" style={{ color: 'white', display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <FaQrcode style={{ marginRight: '8px' }} /> Código QR
        </a>
        <a href="#" style={{ color: 'white', display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <FaSignOutAlt style={{ marginRight: '8px' }} /> Cerrar Sesión
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;