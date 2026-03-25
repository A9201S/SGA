import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './estilos/Auth.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos de login:', formData);
    alert('Inicio de sesión exitoso');
  };

  return (
    <>
     
      
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h2>Iniciar Sesión</h2>
            <p>Bienvenido de nuevo a Óptica Visual</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 auth-btn">
              Iniciar Sesión
            </button>

            <div className="auth-footer text-center mt-3">
              <p className="mb-0">
                ¿No tienes cuenta?{' '}
                <Link to="/register" className="text-decoration-none fw-bold">
                  Regístrate aquí
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

    
    </>
  );
};

export default Login;