import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './estilos/Auth.css';

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    console.log('Datos de registro:', formData);
    alert('Registro exitoso');
  };

  return (
    <>
      
      
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h2>Crear Cuenta</h2>
            <p>Únete a Óptica Visual</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre Completo</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>

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

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 auth-btn">
              Crear Cuenta
            </button>

            <div className="auth-footer text-center mt-3">
              <p className="mb-0">
                ¿Ya tienes cuenta?{' '}
                <Link to="/login" className="text-decoration-none fw-bold">
                  Inicia sesión aquí
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      
    </>
  );
};

export default Register;