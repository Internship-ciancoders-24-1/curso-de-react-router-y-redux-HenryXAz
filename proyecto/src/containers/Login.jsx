import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import googleIcon from "../assets/static/google-icon.png";
import twitterIcon from "../assets/static/twitter-icon.png";

import { useNavigate } from "react-router-dom";

import "../assets/styles/components/Login.scss";
import { loginRequest } from "../actions";

import Header from "../components/Header";

const Login = (props) => {
    const navigate = useNavigate();

    const [form, setValues] = useState({
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
        props.loginRequest(form);
        navigate("/");
    };

    return (
        <>
            <Header isLogin />
            <section className="login">
                <section className="login__container">
                    <h2>Iniciar Sesión</h2>

                    <form onSubmit={handleSubmit}>
                        <input
                            className="input"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Correo"
                            onChange={handleInput}
                        />
                        <input
                            className="input"
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Contraseña"
                            onChange={handleInput}
                        />

                        <button className="button">Iniciar Sesión</button>

                        <div className="login__container--remember-me">
                            <label htmlFor="">
                                <input
                                    type="checkbox"
                                    name="remember_me"
                                    value="first_checkbox"
                                    id="remember_me"
                                />
                                Recuérdame
                            </label>
                        </div>
                    </form>

                    <section className="login__container--social-media">
                        <div>
                            <img src={googleIcon} alt="google" />
                            Iniciar Sesión con Google
                        </div>
                        <div>
                            <img src={twitterIcon} alt="twitter" />
                            Iniciar sesión con Twitter
                        </div>
                    </section>
                    <p className="login__container--register">
                        ¿No tienes cuenta?{" "}
                        <Link to="/register">Regístrate</Link>
                    </p>
                </section>
            </section>
        </>
    );
};

const mapDispatchToProps = {
    loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
