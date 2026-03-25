import { Link } from 'react-router-dom'; // ✅ AÑADIR ESTA IMPORTACIÓN
import "../estilos/Navbar.css"

function Navbar() {
  return (
    <>
      <div>
        {/* Título */}
        <h1 id="Nombre-central" className="text-center">
          SGA OPTICA
        </h1>

        {/* Navbar */}
        <nav id="navbar" className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">

            {/* Marca */}
            <Link to="/" className="navbar-brand"> {/* ✅ CAMBIADO a Link */}
              Panel Admin
            </Link>

            <div className="collapse navbar-collapse show">

              {/* Menú izquierdo */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item me-3">
                  <Link to="/" className="nav-link"> {/* ✅ CAMBIADO a Link */}
                    Inicio
                  </Link>
                </li>

                <li className="nav-item me-3">
                  <a className="nav-link" href="#gafas">Productos</a>
                </li>

                <li className="nav-item me-3">
                  <a className="nav-link" href="#contacto">Citas</a>
                </li>
              </ul>

              {/* Buscador */}
              <form className="d-flex me-4">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Buscar"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Buscar
                </button>
              </form>

              {/* Iconos derecha */}
              <div className="d-flex align-items-center">

                {/* Notificaciones */}
                <button className="btn btn-outline-light me-3">
                  <i className="bi bi-bell fs-5"></i>
                </button>

                {/* Carrito */}
                <button className="btn btn-outline-light me-3">
                  <i className="bi bi-cart fs-5"></i>
                </button>

                {/* Iniciar sesión - ✅ CORREGIDO */}
                <Link to="/login" className="btn btn-outline-light"> {/* ✅ USAR Link, NO button */}
                  <i className="bi bi-person fs-5"></i>
                </Link>

              </div>

            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;