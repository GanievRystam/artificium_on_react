import React from "react";
import { Link } from "react-router-dom";
export default function Register() {
    return (
        <section class="section-auth">
        <div class="container">
            <div class="authorization flex">
                <div class="authorization-form registration-form">
                    <div class="logo logo-registration">
                        <img class="logo__img" src={`${process.env.PUBLIC_URL}/assets/img/Logo.svg`} alt="logo"/>
                        <Link to={'/'} class="logo__text text-forgot">Log in</Link>
                    </div>
                    <div class="form flex">
                        <div class="offer">
                            <h1 class="offer__header offer__header-reg">Connect with your team and bring your creative
                                ideas to life.</h1>
                        </div>
                        <form action="" class="auth-form register-form">
                            <div class="auth-form-wrap-input register-form-wrap-input">
                                <label for="firstname" class="register-form__label">ФИО</label>
                                <input id="firstname" type="text" name="firstname"
                                    class="auth-form__input register-form__input" placeholder="ФИО"/>
                            </div>
                            <div class="auth-form-wrap-input register-form-wrap-input">
                                <label for="Email" class="register-form__label">Email</label>
                                <input id="Email" type="text" name="Email"
                                    class="auth-form__input register-form__input" placeholder="Email"/>
                            </div>
                            <div class="auth-form-wrap-input register-form-wrap-input">
                                <label for="password" class="register-form__label">Пароль</label>
                                <input id="password" type="password" name="password"
                                    class="auth-form__input register-form__input" placeholder="Пароль"/>
                            </div>
                            <div class="auth-form-wrap-input register-form-wrap-input">
                                <label for="repassword" class="register-form__label">Повтори пароль</label>
                                <input id="repassword" type="password" name="password"
                                    class="auth-form__input register-form__input" placeholder="Пароль"/>
                            </div>
                            <div class="auth-form-check flex">
                                <div class="checkbox flex">
                                    <input type="checkbox" class="checkbox__check"/>
                                    <p class="checkbox__text">I agree with <a class="text-forgot">Terms and
                                            conditions</a></p>
                                </div>
                            </div>
                            <button class="btn" type="submit">Create free account</button>
                        </form>
                    </div>
                    <div class="dont dont-reg">
                        <div class="dont__text">Artificium.app © 2023</div>
                        <a class="dont__text_sign">Privacy Policy</a>
                    </div>
                </div>
                <div class="authorization-background">
                    <img class="authorization-background__img" src={`${process.env.PUBLIC_URL}/assets/img/Illustration3.png`} alt="bacground"/>
                </div>
            </div>
        </div>
    </section>
    )
}