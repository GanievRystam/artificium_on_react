import React, {useState} from "react";
import { Formik } from 'formik';
import { Link } from "react-router-dom";
import socket from "../../socket";
import axios from "axios";
export default function Form () {
    return (
    <section className="section-auth">
        <div className="container">
            <div className="authorization">
                <div className="authorization-form">
                    <div className="form flex">
                        <div className="offer">
                            <h1 className="offer__header">Let's get <span className="offer__header_liner"> creative!</span></h1>
                            <p className="offer__text">Log in to Artificium to start creating magic.</p>
                        </div>
                        <Formik
                            initialValues={{ email: '', password: '' }}
                            validate={values => {
                                const errors = {};
                                if (!values.email) {
                                errors.email = 'Введите Email';
                                } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                errors.email = 'Неправильный email адресс';
                                }
                                if(!values.password) {
                                    errors.password = 'Введите пароль'
                                } else if( !/(?=.*\d.*)(?=.*[a-zA-Z].*).{8,}/i.test(values.password)) {
                                    errors.password = 'Пароль слишком простой'
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                                }, 400);
                            }}
                            >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                /* and other goodies */
                            }) => (
                                <form action="" className="auth-form" onSubmit={handleSubmit}>
                                    <div className="auth-form-wrap-input">
                                        <input type="email" name="email" 
                                        className={!errors.email ? "auth-form__input" : "auth-form__input auth-form__input-error"} placeholder="Email" 
                                        onChange={handleChange} onBlur={handleBlur} 
                                        value={values.email}/>
                                        <span className="auth-form-wrap-input__alert">{errors.email && touched.email && errors.email}</span>
                                    </div>
                                    <div className="auth-form-wrap-input">
                                        <input type="password" name="password" className={!errors.password ? "auth-form__input" : "auth-form__input auth-form__input-error"} placeholder="Password" onChange={handleChange} onBlur={handleBlur} value={values.password}/>
                                        <span className="auth-form-wrap-input__alert">{errors.password && touched.password && errors.password}</span>
                                    </div>
                                    <button className="btn" type="submit" disabled={isSubmitting}>Log in</button>
                                </form>
                            )}
                            </Formik>
                        
                        <Link className="form-link offer__text" to={'/register'}>Зарегестрироваться</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}