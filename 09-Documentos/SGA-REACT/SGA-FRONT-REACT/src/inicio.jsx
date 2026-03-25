import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import carrusel1 from "./assets/carrusel1.webp";
import carrusel2 from "./assets/carrusel2.jpeg";
import carrusel3 from "./assets/carrusel3.jpeg";
import gafas1 from "./assets/gafas1.png"
import gafas2 from "./assets/gafas2.jpeg"
import gafas3 from "./assets/gafas3.png"

function Inicio() {
  return (
    <>
      <Navbar />

      {/* CARRUSEL DE BOOTSTRAP */}
      <div id="carrusel" className="carousel slide ">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={carrusel1}
              className="d-block w-100"
              alt="slide 1"
              style={{ objectFit: "cover", height: "400px" }}
            />
          </div>

          <div className="carousel-item">
            <img
              src={carrusel2}
              className="d-block w-100"
              alt="slide 2"
              style={{ objectFit: "cover", height: "400px" }}
            />
          </div>

          <div className="carousel-item">
            <img
              src={carrusel3}
              className="d-block w-100"
              alt="slide 3"
              style={{ objectFit: "cover", height: "400px" }}
            />
          </div>
        </div>

        {/* BOTONES DE ATRAS Y ADELANTE */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carrusel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carrusel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      {/* PRODUCTOS DESTACADOS*/}

      <div className="container mt-5">
        <h1 className="text-center mb-4">Productos destacados</h1>  
        
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* Producto 1 */}
          <div className="col">
            <div className="card h-100 shadow-sm">
              <img
                src={gafas1}
                className="card-img-top"
                alt="Producto 1"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Gafas Negritas</h5>
                <p className="card-text">$89.900</p>
              </div>
            </div>
          </div>

          {/* Producto 2 */}
          <div className="col">
            <div className="card h-100 shadow-sm">
              <img
                src={gafas2}
                className="card-img-top"
                alt="Producto 2"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Montura Premium</h5>
                <p className="card-text">$129.900</p>
              </div>
            </div>
          </div>

          {/* Producto 3 */}
          <div className="col">
            <div className="card h-100 shadow-sm">
              <img
                src={gafas3}
                className="card-img-top"
                alt="Producto 3"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Lentes Antirreflejo</h5>
                <p className="card-text">$59.900</p>
              </div>
            </div>
          </div>

          {/* Producto 4 */}
          <div className="col">
            <div className="card h-100 shadow-sm">
              <img
                src="https://picsum.photos/id/104/400/300"
                className="card-img-top"
                alt="Producto 4"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Gafas Deportivas</h5>
                <p className="card-text">$99.900</p>
              </div>
            </div>
          </div>

          {/* Producto 5 */}
          <div className="col">
            <div className="card h-100 shadow-sm">
              <img
                src="https://picsum.photos/id/105/400/300"
                className="card-img-top"
                alt="Producto 5"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Lentes Fotocromáticos</h5>
                <p className="card-text">$149.900</p>
              </div>
            </div>
          </div>

          {/* Producto 6 */}
          <div className="col">
            <div className="card h-100 shadow-sm">
              <img
                src="https://picsum.photos/id/106/400/300"
                className="card-img-top"
                alt="Producto 6"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Montura Elegante</h5>
                <p className="card-text">$119.900</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      
    </>
  );
}

export default Inicio;
