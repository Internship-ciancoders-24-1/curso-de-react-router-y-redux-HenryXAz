import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/components/Register.scss";

const Register = () => (
  <>
      <section className="register">
        <section className="register__container">
          <h2>Regístrate</h2>
          <form className="register__container--form">
            <input
              name="name"
              className="input"
              type="text"
              placeholder="Nombre"
            //   onChange={handleInput}
            />
            <input
              name="email"
              className="input"
              type="text"
              placeholder="Correo"
            //   onChange={handleInput}
            />
            <input
              name="password"
              className="input"
              type="password"
              placeholder="Contraseña" 
            //   onChange={handleInput}
            />
            <button className="button">Registrarme</button>
          </form>
          <Link to="/login">
            Iniciar sesión
          </Link>
        </section>
      </section>
    </>
)

export default Register;