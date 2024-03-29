import React, { useState } from "react";
import { connect } from "react-redux";
import { registerRequest } from "../actions";
import { Link, useNavigate } from "react-router-dom";

import "../assets/styles/components/Register.scss";
import Header from "../components/Header";

const Register = (props) => {
    const navigate = useNavigate();

    const [form, setValues] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleInput = (event) => {
        setValues({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.registerRequest(form);
        navigate("/");
    };

    return (
        <>
            <Header isRegister />
            <section className="register">
                <section className="register__container">
                    <h2>Regístrate</h2>
                    <form
                        onSubmit={handleSubmit}
                        className="register__container--form"
                    >
                        <input
                            name="name"
                            className="input"
                            type="text"
                            placeholder="Nombre"
                            onChange={handleInput}
                        />
                        <input
                            name="email"
                            className="input"
                            type="email"
                            placeholder="Correo"
                            onChange={handleInput}
                        />
                        <input
                            name="password"
                            className="input"
                            type="password"
                            placeholder="Contraseña"
                            onChange={handleInput}
                        />
                        <button className="button">Registrarme</button>
                    </form>
                    <Link to="/login">Iniciar sesión</Link>
                </section>
            </section>
        </>
    );
};

const mapDispatchToProps = {
    registerRequest,
};

// export default Register;
export default connect(null, mapDispatchToProps)(Register);
