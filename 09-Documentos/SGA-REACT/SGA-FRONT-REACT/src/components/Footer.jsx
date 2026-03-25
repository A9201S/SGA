
import '../estilos/Footer.css'; // Importamos los estilos

const Footer = () => {
  return (
    <footer className="footer-custom text-white mt-5 pt-4">
      <div className="container">
        <div className="row">
          {/* Columna 1 - Información de la empresa */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Óptica Visual</h5>
            <p className="text-light opacity-75">
              Tu visión es nuestra prioridad. Encuentra las mejores gafas y lentes con la más alta calidad.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-white"><i className="bi bi-whatsapp"></i></a>
            </div>
          </div>

          {/* Columna 2 - Enlaces rápidos */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Enlaces Rápidos</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-decoration-none text-light opacity-75">Inicio</a>
              </li>
              <li className="mb-2">
                <a href="/productos" className="text-decoration-none text-light opacity-75">Productos</a>
              </li>
              <li className="mb-2">
                <a href="/nosotros" className="text-decoration-none text-light opacity-75">Nosotros</a>
              </li>
              <li className="mb-2">
                <a href="/contacto" className="text-decoration-none text-light opacity-75">Contacto</a>
              </li>
            </ul>
          </div>

          {/* Columna 3 - Contacto */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Contacto</h6>
            <ul className="list-unstyled text-light opacity-75">
              <li className="mb-2">
                <i className="bi bi-geo-alt me-2"></i>
                Calle Principal #123
              </li>
              <li className="mb-2">
                <i className="bi bi-phone me-2"></i>
                +57 300 123 4567
              </li>
              <li className="mb-2">
                <i className="bi bi-envelope me-2"></i>
                info@opticavisual.com
              </li>
              <li className="mb-2">
                <i className="bi bi-clock me-2"></i>
                Lun - Vie: 9:00 AM - 7:00 PM
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <hr className="my-4 bg-light opacity-25" />

        {/* Copyright */}
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="text-light opacity-75 mb-0">
              &copy; 2024 Óptica Visual. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;