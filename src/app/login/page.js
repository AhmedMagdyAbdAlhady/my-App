'use client'
import React, { useState } from 'react';
import style from './style.module.css';
import NavBar from '../componants/NavBar/Navbar';
import Footer from '../componants/Footer/Footer'
const LogIn = () => {
    const [rememberMe, setRememberMe] = useState(true); // Initialize the state for the checkbox

    const handleCheckboxChange = (e) => {
        setRememberMe(e.target.checked); // Update the state when the checkbox is toggled
    };
    const [Active, setActive] = useState(true);
    const toggleClass = (e) => {
        setActive(!Active);
    }
    const [IsAgree, setIsAgree] = useState(true); // Initialize the state for the checkbox

    const setIsAgreeChange = (e) => {
        setIsAgree(e.target.checked); // Update the state when the checkbox is toggled
    };
    return (
        <>
        <NavBar/>
            <section className={`mt-5 mb-5 w-100 p-4  d-flex justify-content-center pb-4 ${style.logInStyle}`}>
                <div style={{ width: '26rem' }} className="p-5 rounded-5">
                    {/* <!-- Pills navs --> */}
                    <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className={`nav-link ${Active ? 'active' : ''}`}
                                onClick={toggleClass}
                                id="tab-login"
                                data-mdb-pill-init=""
                                href={`${Active ? '#pills-login' : '#pills-register'}`}
                                role="tab"
                                aria-controls="pills-login"
                                aria-selected="true"
                                data-mdb-tab-initialized="true">
                                Login</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className={`nav-link ${Active ? '' : 'active'}`}
                                onClick={toggleClass}
                                id="tab-register"
                                data-mdb-pill-init=""
                                href={`${Active ? '#pills-login' : '#pills-register'}`}
                                role="tab"
                                aria-controls="pills-register"
                                aria-selected="false"
                                data-mdb-tab-initialized="true"
                                tabindex="-1">
                                Register
                            </a>
                        </li>
                    </ul>
                    {/* <!-- Pills navs --> */}

                    {/* <!-- Pills content --> */}
                    <div className="tab-content">
                        <div
                            className={`tab-pane fade ${Active ? 'active show' : ''}`}
                            id="pills-login"
                            role="tabpanel"
                            aria-labelledby="tab-login">
                            <form>
                                <div className="text-center mb-3">
                                    <p>Sign in with:</p>
                                    <button type="button" data-mdb-button-init="" data-mdb-ripple-init="" className="btn btn-link btn-floating mx-1" data-mdb-button-initialized="true">
                                        <i className="fab fa-facebook-f"></i>
                                    </button>

                                    <button type="button" data-mdb-button-init="" data-mdb-ripple-init="" className="btn btn-link btn-floating mx-1" data-mdb-button-initialized="true">
                                        <i className="fab fa-google"></i>
                                    </button>

                                    <button type="button" data-mdb-button-init="" data-mdb-ripple-init="" className="btn btn-link btn-floating mx-1" data-mdb-button-initialized="true">
                                        <i className="fab fa-twitter"></i>
                                    </button>

                                    <button type="button" data-mdb-button-init="" data-mdb-ripple-init="" className="btn btn-link btn-floating mx-1" data-mdb-button-initialized="true">
                                        <i className="fab fa-github"></i>
                                    </button>
                                </div>

                                <p className="text-center">or:</p>

                                {/* <!-- Email input --> */}
                                <div data-mdb-input-init="" className="form-outline mb-4" data-mdb-input-initialized="true">
                                    <input type="email" id="loginName" className="form-control" />
                                    <label className="form-label" htmlFor="loginName" style={{ marginLeft: '0px' }}>Email or username</label>
                                    <div className="form-notch"><div className="form-notch-leading" style={{ width: '9px' }}></div><div className="form-notch-middle" style={{ width: '114.4px' }}></div><div className="form-notch-trailing"></div></div></div>

                                {/* <!-- Password input --> */}
                                <div data-mdb-input-init="" className="form-outline mb-4" data-mdb-input-initialized="true">
                                    <input type="password" id="loginPassword" className="form-control" />
                                    <label className="form-label" htmlFor="loginPassword" style={{ marginLeft: '0px' }}>Password</label>
                                    <div className="form-notch"><div className="form-notch-leading" style={{ width: '9px' }}></div><div className="form-notch-middle" style={{ width: '64.8px' }}></div><div className="form-notch-trailing"></div></div></div>

                                {/* <!-- 2 column grid layout --> */}
                                <div className="row mb-4">
                                    <div className="col-md-6 d-flex justify-content-center">
                                        {/* <!-- Checkbox --> */}
                                        <div className="form-check mb-3 mb-md-0">
                                            <input className="form-check-input" type="checkbox" value="" id="loginCheck" checked={rememberMe} onChange={handleCheckboxChange} />
                                            <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                                        </div>
                                    </div>

                                    <div className="col-md-6 d-flex justify-content-center">
                                        {/* <!-- Simple link --> */}
                                        <a href="#!">Forgot password?</a>
                                    </div>
                                </div>

                                {/* <!-- Submit button --> */}
                                <button type="submit" data-mdb-button-init="" data-mdb-ripple-init="" className="btn btn-primary btn-block mb-4" data-mdb-button-initialized="true">Sign in</button>
                            </form>
                        </div>
                        <div  className={`tab-pane fade ${Active ? '' : 'active show'}`} id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                            <form data-gtm-form-interact-id="1">
                                <div className="text-center mb-3">
                                    <p>Sign up with:</p>
                                    <button type="button" data-mdb-button-init="" data-mdb-ripple-init="" className="btn btn-link btn-floating mx-1" data-mdb-button-initialized="true">
                                        <i className="fab fa-facebook-f"></i>
                                    </button>

                                    <button type="button" data-mdb-button-init="" data-mdb-ripple-init="" className="btn btn-link btn-floating mx-1" data-mdb-button-initialized="true">
                                        <i className="fab fa-google"></i>
                                    </button>

                                    <button type="button" data-mdb-button-init="" data-mdb-ripple-init="" className="btn btn-link btn-floating mx-1" data-mdb-button-initialized="true">
                                        <i className="fab fa-twitter"></i>
                                    </button>

                                    <button type="button" data-mdb-button-init="" data-mdb-ripple-init="" className="btn btn-link btn-floating mx-1" data-mdb-button-initialized="true">
                                        <i className="fab fa-github"></i>
                                    </button>
                                </div>

                                <p className="text-center">or:</p>

                                {/* <!-- Name input --> */}
                                <div data-mdb-input-init="" className="form-outline mb-4" data-mdb-input-initialized="true">
                                    <input type="text" id="registerName" className="form-control"/>
                                        <label className="form-label" for="registerName" style={{ marginLeft: '0px' }}>Name</label>
                                        <div className="form-notch"><div className="form-notch-leading" style={{ width: '9px' }}></div><div className="form-notch-middle" style={{width: '42.4px'}}></div><div className="form-notch-trailing"></div></div></div>

                                {/* <!-- Username input --> */}
                                <div data-mdb-input-init="" className="form-outline mb-4" data-mdb-input-initialized="true">
                                    <input type="text" id="registerUsername" className="form-control"/>
                                        <label className="form-label" for="registerUsername" style={{ marginLeft: '0px' }}>Username</label>
                                        <div className="form-notch"><div className="form-notch-leading" style={{ width: '9px' }}></div><div className="form-notch-middle" style={{width: '66.4px'}}></div><div className="form-notch-trailing"></div></div></div>

                                {/* <!-- Email input --> */}
                                <div data-mdb-input-init="" className="form-outline mb-4" data-mdb-input-initialized="true">
                                    <input type="email" id="registerEmail" className="form-control"/>
                                        <label className="form-label" for="registerEmail" style={{ marginLeft: '0px' }}>Email</label>
                                        <div className="form-notch"><div className="form-notch-leading" style={{ width: '9px' }}></div><div className="form-notch-middle" style={{width: '40px'}}></div><div className="form-notch-trailing"></div></div></div>

                                {/* <!-- Password input --> */}
                                <div data-mdb-input-init="" className="form-outline mb-4" data-mdb-input-initialized="true">
                                    <input type="password" id="registerPassword" className="form-control"/>
                                        <label className="form-label" for="registerPassword" style={{ marginLeft: '0px' }}>Password</label>
                                        <div className="form-notch"><div className="form-notch-leading" style={{ width: '9px' }}></div><div className="form-notch-middle" style={{width: '64.8px'}}></div><div className="form-notch-trailing"></div></div></div>

                                {/* <!-- Repeat Password input --> */}
                                <div data-mdb-input-init="" className="form-outline mb-4" data-mdb-input-initialized="true">
                                    <input type="password" id="registerRepeatPassword" className="form-control"/>
                                        <label className="form-label" for="registerRepeatPassword" style={{ marginLeft: '0px' }}>Repeat password</label>
                                        <div className="form-notch"><div className="form-notch-leading" style={{ width: '9px' }}></div><div className="form-notch-middle" style={{width: '106.4px'}}></div><div className="form-notch-trailing"></div></div></div>

                                {/* <!-- Checkbox --> */}
                                <div className="form-check d-flex justify-content-center mb-4">
                                    <input className="form-check-input me-2" type="checkbox" value=""   id="registerCheck"   checked={IsAgree}  onChange={setIsAgreeChange} aria-describedby="registerCheckHelpText" data-gtm-form-interact-field-id="1"/>
                                        <label className="form-check-label" for="registerCheck">
                                            I have read and agree to the terms
                                        </label>
                                </div>

                                {/* <!-- Submit button --> */}
                                <button type="submit" data-mdb-button-init="" data-mdb-ripple-init="" className="btn btn-primary btn-block mb-3" data-mdb-button-initialized="true">Sign in</button>
                            </form>
                        </div>
                    </div>
                    {/* <!-- Pills content --> */}
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default LogIn;
