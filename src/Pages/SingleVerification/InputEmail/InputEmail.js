import React from 'react';
import { useState } from 'react';
import './InputEmail.css'
import { FaBeer, FaCheckCircle, FaCross, FaExclamation, FaXRay } from 'react-icons/fa';


const InputEmail = () => {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState(false)

    const emailValidation = (e) => {
        var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        var emailValue = e.target.value;
        setEmail(emailValue);
        if (email.match(pattern)) {
            setMessage(true);
        } else {
            console.log(false);
        }
    }
    return (
        <div>
            <form >
                <div className="section">
                    <div className="container">
                        <div className="row full-height justify-content-center">
                            <div className="col-12 text-center align-self-center py-5">
                                <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                    <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                    <div className="card-3d-wrap mx-auto">
                                        <div className="card-3d-wrapper">
                                            <div className="card-front">
                                                <div className="center-wrap">
                                                    <div className="section text-center">
                                                        <h4 className="mb-4 pb-3">Verify Your email here</h4>

                                                        <div className="form-group mt-2">
                                                            <input
                                                                type="email"
                                                                name="email"
                                                                className={
                                                                    email.length === 0
                                                                        ? "form-style fill-email"
                                                                        : message
                                                                            ? "form-style valid-email"
                                                                            : "form-style invalid-email"
                                                                }
                                                                placeholder="Enter Email"
                                                                id="logmail"
                                                                autocomplete="off"
                                                                onChange={emailValidation}
                                                                value={email}
                                                                required />
                                                            {/* <i className="input-icon uil uil-lock-alt mt-3">
                                                                {
                                                                    email.length == 0
                                                                        ? <FaExclamation />
                                                                        : message
                                                                            ? <FaCheckCircle />
                                                                            : <FaCross></FaCross>
                                                                }
                                                            </i> */}
                                                        </div>

                                                        <button className={
                                                            email.length === 0
                                                                ? "btn mt-4 btn-disabled fill-color  "
                                                                : message
                                                                    ? "btn mt-4"
                                                                    : "btn mt-4 btn-disabled fill-color "
                                                        }>Add to Table</button>
                                                       


                                                    </div>
                                                    <p className={
                                                        email.length == 0
                                                            ? "mt-5 section text-center fill-color"
                                                            : message
                                                                ? " mt-5 section text-center success-color"
                                                                : " mt-5 section text-center error-color"
                                                    }>
                                                        {
                                                            email.length == 0
                                                                ? "Please enter a valid email address"
                                                                : message
                                                                    ? "The email address you entered is Valid Hurray!!"
                                                                    : "Please enter a valid email address"}
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default InputEmail;