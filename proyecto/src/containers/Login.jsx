import React from "react";
import { Link } from "react-router-dom";

import googleIcon from "../assets/static/google-icon.png";
import twitterIcon from "../assets/static/twitter-icon.png";

import "../assets/styles/components/Login.scss";

const Login = () => (
    <section className="login">
        <section className="login__container">
            <h2>Iniciar Sesión</h2>

            <form >
                <input className="input" type="email" name="email" id="" placeholder="Correo" />
                <input className="input" type="password" name="password" id="" placeholder="Contraseña" />

                <button className="button">Iniciar Sesión</button>

                <div className="login__container--remember-me">
                    <label htmlFor="">
                        <input type="checkbox" name="remember_me" value="first_checkbox" id="" />
                        Recuérdame 
                    </label> 
                </div>
            </form>

            <section className="login__container--social-media">
                <div>
                    <img src={googleIcon} alt="google"  />
                    Iniciar Sesión con Google
                </div>
                <div>
                    <img src={twitterIcon} alt="twitter" />
                    Iniciar sesión con Twitter
                </div>
            </section>
            <p className="login__container--register">¿No tienes cuenta? <Link to="/register" >Regístrate</Link></p>
        </section>
    </section>
)

export default Login;