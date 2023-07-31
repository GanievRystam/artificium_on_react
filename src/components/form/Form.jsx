import React, {useState} from "react";
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
                        <form action="" className="auth-form">
                            <div className="auth-form-wrap-input">
                                <input type="text" name="roomId" className="auth-form__input" placeholder="Email"/>
                            </div>
                            <div className="auth-form-wrap-input">
                                <input type="text" name="userName" className="auth-form__input" placeholder="Password"/>
                            </div>
                            <button className="btn" type="button">Log in</button>
                        </form>
                        <a className="form-link offer__text">Зарегестрироваться</a>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}